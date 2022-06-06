import { createEffect } from 'effector';

// api
import request from '../axios';

// store
import { errorEvents } from './error';

export const createSaleEffect = createEffect(
  async (data: { productId: string; amountSold: number }) => {
    try {
      return await request.post('/sales/', data);
    } catch (e) {
      errorEvents.updateErrorEvent({
        isError: true,
        message: 'Something went wrong please try later',
      });
    }
  },
);

export const saleEffects = {
  createSaleEffect,
};
