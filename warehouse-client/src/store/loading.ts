import { createEvent, createStore } from 'effector';

const isLoading = createStore<boolean>(false);

const toggleLoadingEvent = createEvent<boolean>();

isLoading.on(toggleLoadingEvent, (_, payload) => payload);

export const loadingState = {
  isLoading,
};

export const loadingEvents = {
  toggleLoadingEvent,
};
