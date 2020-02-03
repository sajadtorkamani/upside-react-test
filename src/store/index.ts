import configureStore from '../lib/configureStore';
import storeReducer from '../reducers';
import { OrderState } from '../reducers/orderReducer';

export type StoreState = {
  order: OrderState;
};

// previousOrders: Order[];

export type StoreAction = {
  type: string;
  payload?: any;
};

// Create the store
const store = configureStore<StoreState>(storeReducer);

export default store;
