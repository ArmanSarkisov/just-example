import { createEffect, createStore } from 'effector';

// types
import { Article, PutArticle } from '../types';

// api
import request from '../axios';

// store
import { errorEvents } from './error';

const articles = createStore<Article[]>([]);

const getArticlesEffect = createEffect(async (): Promise<Article[]> => {
  try {
    const { data } = await request.get('/articles/');
    return data;
  } catch (e) {
    errorEvents.updateErrorEvent({
      isError: true,
      message: 'Something went wrong please try later',
    });
    return [];
  }
});

const putArticlesEffect = createEffect(
  async ({ data }: { data: PutArticle[] }) => {
    try {
      return await request.patch('/articles/', data);
    } catch (e) {
      errorEvents.updateErrorEvent({
        isError: true,
        message: 'Something went wrong please try later',
      });
    }
  },
);

articles.on(getArticlesEffect.doneData, (_, data) => data);

export const articlesState = {
  articles,
};

export const articlesEffects = {
  getArticlesEffect,
  putArticlesEffect,
};
