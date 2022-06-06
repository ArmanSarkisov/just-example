/**
 * @jest-environment jsdom
 */
import { act, renderHook } from '@testing-library/react-hooks';
import { StrictMode } from 'react';
import { useRequestProducts } from '../hooks';

jest.setTimeout(30000);

describe('Use sale', function () {
  it('should be return handle click instance of function', async () => {
    const { result } = renderHook(useRequestProducts, { wrapper: StrictMode });

    expect(result.current).toEqual({});
  });
});
