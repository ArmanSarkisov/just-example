import { useMemo } from 'react';

// types
import { Article, Product } from '../types';

// utils
import { findAvailableProducts } from '../utils';

interface Args {
  products: Product[];
  articles: Article[];
}

export const useAvailableProducts = ({ products, articles }: Args) => {
  return useMemo(() => {
    return findAvailableProducts({ products, articles });
  }, [products, articles]);
};
