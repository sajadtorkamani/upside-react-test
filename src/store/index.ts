import configureStore from '../lib/configureStore';
import storeReducer from '../reducers';
import { OrderState } from '../reducers/orderReducer';
import { OrderHistoryState } from '../reducers/orderHistoryReducer';
import { STORAGE_STATE_KEY } from '../lib/constants';

export type StoreState = {
  order: OrderState;
  orderHistory: OrderHistoryState;
};

export type StoreAction = {
  type: string;
  payload?: any;
};

// Load store state from localStorage.
const loadState = (): StoreState => {
  const persistedState = localStorage.getItem(STORAGE_STATE_KEY);

  return persistedState ? JSON.parse(persistedState) : undefined;
};

// Save the store state to localStorage.
const saveState = () => {
  const state = store.getState();

  localStorage.setItem(STORAGE_STATE_KEY, JSON.stringify(state));
};

// Create the store
const store = configureStore<StoreState>(storeReducer, loadState());

// Add store listeners
store.subscribe(saveState);

export default store;
