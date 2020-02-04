import { Reducer } from 'redux';
import { Order } from '../types';
import { StoreAction } from '../store';
import { PLACE_ORDER } from '../action-types';

export type PreviousOrder = { order: Order; createdDate: number };

export type OrderHistoryState = PreviousOrder[];

export const INITIAL_ORDER_HISTORY_STATE: OrderHistoryState = [];

/**
 * Order appHistory reducer.
 *
 * Handles all actions related to order appHistory.
 */
const orderHistoryReducer: Reducer<OrderHistoryState, StoreAction> = (
  state = INITIAL_ORDER_HISTORY_STATE,
  action
) => {
  switch (action.type) {
    case PLACE_ORDER: {
      const order = action.payload;

      return [...state, { order, createdDate: Date.now() }];
    }
    default:
      return state;
  }
};

export default orderHistoryReducer;
