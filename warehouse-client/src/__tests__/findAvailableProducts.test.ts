import { findAvailableProducts } from '../utils';
import { Article, Product } from '../types';

describe('Find available products', () => {
  it('Should return 1 available product', () => {
    const products: Product[] = [
      { id: '1', articles: [{ id: '2', amountRequired: 1 }], name: 'Table' },
      { id: '3', articles: [{ id: '2', amountRequired: 3 }], name: 'Table2' },
    ];
    const articles: Article[] = [{ id: '2', name: 'Leg', amountInStock: 2 }];
    const data = findAvailableProducts({ products, articles });

    expect(data.length).toBe(1);
  });

  it('Should return 0 available product', () => {
    const products: Product[] = [
      { id: '1', articles: [{ id: '2', amountRequired: 3 }], name: 'Table' },
      { id: '3', articles: [{ id: '2', amountRequired: 3 }], name: 'Table2' },
    ];
    const articles: Article[] = [{ id: '2', name: 'Leg', amountInStock: 2 }];
    const data = findAvailableProducts({ products, articles });

    expect(data.length).toBe(0);
  });
});
