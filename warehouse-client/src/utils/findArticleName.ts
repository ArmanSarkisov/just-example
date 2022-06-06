import { Article } from '../types';

export const findArticleName = (articles: Article[], articleId: string) => {
  return articles.find((a: any) => a.id === articleId)?.name;
};
