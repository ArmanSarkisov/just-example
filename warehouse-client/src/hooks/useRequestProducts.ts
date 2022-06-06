import { useCallback, useEffect } from 'react';

// store
import {
  articlesEffects,
  errorEvents,
  loadingEvents,
  productEffects,
} from '../store';

export const useRequestProducts = () => {
  const getProductsAndArticles = useCallback(async () => {
    try {
      loadingEvents.toggleLoadingEvent(true);
      const productsPromise = productEffects.getProductsEffect();
      const articlesPromise = articlesEffects.getArticlesEffect();
      await Promise.all([productsPromise, articlesPromise]);
    } catch (err) {
      errorEvents.updateErrorEvent({
        isError: true,
        message: 'Something went wrong, try later',
      });
    } finally {
      loadingEvents.toggleLoadingEvent(false);
    }
  }, []);

  useEffect(() => {
    getProductsAndArticles();
  }, [getProductsAndArticles]);

  return {};
};
