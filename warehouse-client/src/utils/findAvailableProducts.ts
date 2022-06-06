import { Article, Product } from '../types';

export const findAvailableProducts = ({
  products,
  articles,
}: {
  products: Product[];
  articles: Article[];
}): Product[] => {
  return products.filter(({ articles: productArticles, id, name }) => {
    return productArticles.every((article) => {
      const foundArticle = articles.find((a) => a.id === article.id);
      if (foundArticle) {
        return article.amountRequired <= foundArticle.amountInStock;
      }

      return false;
    });
  });
};
