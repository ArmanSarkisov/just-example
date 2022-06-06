import { createEvent, createStore } from 'effector';

export interface Error {
  isError: boolean;
  message: string;
}

const error = createStore<Error>({ isError: false, message: '' });

const updateErrorEvent = createEvent<Error>();

error.on(updateErrorEvent, (state, payload) => payload);

export const errorState = {
  error,
};

export const errorEvents = {
  updateErrorEvent,
};
