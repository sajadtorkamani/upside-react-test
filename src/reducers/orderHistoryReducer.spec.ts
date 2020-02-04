import { PLACE_ORDER } from '../action-types';
import { placeOrder } from '../actions';
import { PIZZA_CRUSTS, PIZZA_INGREDIENTS, PIZZA_SIZES } from '../data';
import { Order } from '../types';
import orderHistoryReducer, { OrderHistoryState } from './orderHistoryReducer';

describe('orderHistoryReducer', () => {
  test(`handles the ${PLACE_ORDER} action`, () => {
    const sampleOrder: Order = {
      size: PIZZA_SIZES[0],
      crust: PIZZA_CRUSTS[1],
      ingredients: [PIZZA_INGREDIENTS[0]]
    };
    const prevState: OrderHistoryState = [];
    const action = placeOrder(sampleOrder);
    const expectedNextState: OrderHistoryState = [
      { order: sampleOrder, createdDate: expect.any(Number) }
    ];

    expect(orderHistoryReducer(prevState, action)).toEqual(expectedNextState);
  });
});
