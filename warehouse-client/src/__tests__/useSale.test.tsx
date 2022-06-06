/**
 * @jest-environment jsdom
 */
import { act, renderHook } from '@testing-library/react-hooks';
import { StrictMode } from 'react';
import { useSale } from '../hooks';

jest.setTimeout(30000);

describe('Use sale', function () {
  it('should be return handle click instance of function', async () => {
    const { result } = renderHook(useSale, { wrapper: StrictMode });

    await act(async () => {
      await result.current.handleClick({ id: '1', articles: [] });
    });

    expect(result.current.handleClick).toBeInstanceOf(Function);
  });
});
