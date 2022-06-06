import { findArticleName } from '../utils';
import { Article } from '../types';

describe('Find available products', () => {
  it('Should return 1 available product', () => {
    const articles: Article[] = [{ id: '2', name: 'Leg', amountInStock: 2 }];
    const data = findArticleName(articles, '2');

    expect(data).toBe('Leg');
  });
});
