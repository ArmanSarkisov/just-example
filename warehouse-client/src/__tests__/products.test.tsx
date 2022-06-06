/**
 * @jest-environment jsdom
 */
import { act, fireEvent, render } from '@testing-library/react';
import { Products } from '../components/Products';
import {
  loadingState,
  errorState,
  articlesState,
  productsState,
} from '../store';
import { renderHook } from '@testing-library/react-hooks';
import { useAvailableProducts, useSale } from '../hooks';
import { StrictMode } from 'react';

describe('Products', () => {
  it('should render Products loading', function () {
    jest
      .spyOn(loadingState.isLoading, 'getState')
      .mockImplementation(() => true);
    const { getByText } = render(<Products />);

    expect(getByText('Loading....')).toBeInTheDocument();
  });

  it('should render Products error message', function () {
    jest
      .spyOn(errorState.error, 'getState')
      .mockImplementation(() => ({ isError: true, message: 'error' }));
    const { getByText } = render(<Products />);

    expect(getByText('error')).toBeInTheDocument();
  });

  it('should render Products, available', async () => {
    jest
      .spyOn(articlesState.articles, 'getState')
      .mockImplementation(() => [{ id: '1', name: 'Leg', amountInStock: 10 }]);
    jest
      .spyOn(productsState.products, 'getState')
      .mockImplementation(() => [
        { id: '1', name: 'Table', articles: [{ id: '1', amountRequired: 2 }] },
      ]);
    jest
      .spyOn(loadingState.isLoading, 'getState')
      .mockImplementation(() => false);
    jest
      .spyOn(errorState.error, 'getState')
      .mockImplementation(() => ({ isError: false, message: '' }));

    const { result } = renderHook(
      () =>
        useAvailableProducts({
          articles: [{ id: '1', name: 'Leg', amountInStock: 10 }],
          products: [
            {
              id: '1',
              name: 'Table',
              articles: [{ id: '1', amountRequired: 2 }],
            },
          ],
        }),
      {
        wrapper: StrictMode,
      },
    );

    const { getByText } = render(<Products />);

    expect(getByText('Buy')).toBeInTheDocument();
    expect(result.current.length).toBe(1);
  });
});
