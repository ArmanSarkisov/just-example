import { createEffect, createStore } from 'effector';

// types
import { Product } from '../types';

// api
import request from '../axios';

// store
import { errorEvents } from './error';

const products = createStore<Product[]>([]);

const getProductsEffect = createEffect(async (): Promise<Product[]> => {
  try {
    const { data } = await request.get('/products/');
    return data;
  } catch (err) {
    errorEvents.updateErrorEvent({
      isError: true,
      message: 'Something went wrong please try later',
    });
    return [];
  }
});

products.on(getProductsEffect.doneData, (_, data) => data);

export const productsState = {
  products,
};

export const productEffects = {
  getProductsEffect,
};
