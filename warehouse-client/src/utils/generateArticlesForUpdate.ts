import { ProductArticle, PutArticle } from '../types';

export const generateArticlesForUpdate = (
  articles: ProductArticle[],
): PutArticle[] => {
  return articles.map(({ id: artId, amountRequired }) => ({
    id: artId,
    amountToSubtract: amountRequired,
  }));
};
