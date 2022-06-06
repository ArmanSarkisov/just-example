import { useCallback, useState } from 'react';

// types
import { Article, ProductArticle } from '../types';

// utils
import { generateArticlesForUpdate } from '../utils';

// store
import { articlesEffects, saleEffects } from '../store';

export const useSale = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleClick = useCallback(
    async ({
      id,
      articles: productArticles,
    }: {
      id: string;
      articles: ProductArticle[];
    }) => {
      setIsLoading(true);
      const putArticles = generateArticlesForUpdate(productArticles);
      const articlesRes = await articlesEffects.putArticlesEffect({
        data: putArticles,
      });
      const res = await saleEffects.createSaleEffect({
        productId: id,
        amountSold: 1,
      });

      // After patch, we need to get updated articles
      await articlesEffects.getArticlesEffect();

      // If update article is okay, but sale was failed we need to re update our articles to prev state
      if (res?.status !== 201 && articlesRes?.status === 200) {
        const updateArticlesToPreviousState = articlesRes.data.map(
          (article: Article) => {
            const foundProductArticle = productArticles.find(
              (prodArticle) => prodArticle.id === article.id,
            );

            if (foundProductArticle) {
              return {
                id: article.id,
                amountInStock:
                  article.amountInStock + foundProductArticle.amountRequired,
              };
            }

            return {
              id: article.id,
              amountInStock: article.amountInStock,
            };
          },
        );
        await articlesEffects.putArticlesEffect({
          data: updateArticlesToPreviousState,
        });
      }
      setIsLoading(false);
    },
    [],
  );

  return {
    handleClick,
    isLoading,
  };
};
