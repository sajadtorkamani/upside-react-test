import { combineReducers, Reducer } from 'redux';
import { StoreAction, StoreState } from '../store';
import orderReducer from './orderReducer';
import orderHistoryReducer from './orderHistoryReducer';

const storeReducer: Reducer<StoreState, StoreAction> = combineReducers({
  order: orderReducer,
  orderHistory: orderHistoryReducer
});

export default storeReducer;
