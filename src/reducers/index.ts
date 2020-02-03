import { combineReducers, Reducer } from 'redux';
import { StoreAction, StoreState } from '../store';
import orderReducer from './orderReducer';

const storeReducer: Reducer<StoreState, StoreAction> = combineReducers({
  order: orderReducer
});

export default storeReducer;
