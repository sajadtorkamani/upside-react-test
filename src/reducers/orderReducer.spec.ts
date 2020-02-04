import {
  ADD_INGREDIENT,
  CHOOSE_CRUST,
  CHOOSE_SIZE,
  PLACE_ORDER,
  REMOVE_INGREDIENT
} from '../action-types';
import {
  addIngredient,
  chooseCrust,
  chooseSize,
  placeOrder,
  removeIngredient
} from '../actions';
import { PIZZA_CRUSTS, PIZZA_INGREDIENTS, PIZZA_SIZES } from '../data';
import { Order } from '../types';
import orderReducer, { INITIAL_ORDER_STATE, OrderState } from './orderReducer';

describe('orderReducer', () => {
  test('is initialised with the correct default state', () => {
    expect(orderReducer(undefined, { type: 'foo' })).toEqual(
      INITIAL_ORDER_STATE
    );
  });

  describe(`handles the ${CHOOSE_SIZE} action`, () => {
    test('sets the size if previously not set', () => {
      const prevState: OrderState = {
        ...INITIAL_ORDER_STATE,
        size: undefined
      };
      const action = chooseSize(PIZZA_SIZES[0]);
      const expectedNextState: OrderState = {
        ...INITIAL_ORDER_STATE,
        size: PIZZA_SIZES[0]
      };

      expect(orderReducer(prevState, action)).toEqual(expectedNextState);
    });

    test("sets the size if it's a different size", () => {
      const prevState: OrderState = {
        ...INITIAL_ORDER_STATE,
        size: PIZZA_SIZES[0]
      };
      const action = chooseSize(PIZZA_SIZES[1]);
      const expectedNextState: OrderState = {
        ...INITIAL_ORDER_STATE,
        size: PIZZA_SIZES[1]
      };

      expect(orderReducer(prevState, action)).toEqual(expectedNextState);
    });

    test('unsets / toggles the size if the same one is chosen', () => {
      const prevState: OrderState = {
        ...INITIAL_ORDER_STATE,
        size: PIZZA_SIZES[0]
      };
      const action = chooseSize(PIZZA_SIZES[0]); // Same size is chosen
      const expectedNextState: OrderState = {
        ...INITIAL_ORDER_STATE,
        size: undefined
      };

      expect(orderReducer(prevState, action)).toEqual(expectedNextState);
    });
  });

  describe(`handles the ${CHOOSE_CRUST} action`, () => {
    test('sets the crust if previously not set', () => {
      const prevState: OrderState = {
        ...INITIAL_ORDER_STATE,
        crust: undefined
      };
      const action = chooseCrust(PIZZA_CRUSTS[0]);
      const expectedNextState: OrderState = {
        ...INITIAL_ORDER_STATE,
        crust: PIZZA_CRUSTS[0]
      };

      expect(orderReducer(prevState, action)).toEqual(expectedNextState);
    });

    test("sets the crust if it's a different crust", () => {
      const prevState: OrderState = {
        ...INITIAL_ORDER_STATE,
        crust: PIZZA_CRUSTS[0]
      };
      const action = chooseCrust(PIZZA_CRUSTS[1]);
      const expectedNextState: OrderState = {
        ...INITIAL_ORDER_STATE,
        crust: PIZZA_CRUSTS[1]
      };

      expect(orderReducer(prevState, action)).toEqual(expectedNextState);
    });

    test('unsets / toggles the crust if the same one is chosen', () => {
      const prevState: OrderState = {
        ...INITIAL_ORDER_STATE,
        crust: PIZZA_CRUSTS[0]
      };
      const action = chooseCrust(PIZZA_CRUSTS[0]); // Same crust is chosen
      const expectedNextState: OrderState = {
        ...INITIAL_ORDER_STATE,
        crust: undefined
      };

      expect(orderReducer(prevState, action)).toEqual(expectedNextState);
    });
  });

  test(`handles the ${ADD_INGREDIENT} action`, () => {
    const prevState: OrderState = {
      ...INITIAL_ORDER_STATE,
      ingredients: []
    };
    const action = addIngredient(PIZZA_INGREDIENTS[1]);
    const expectedNextState: OrderState = {
      ...INITIAL_ORDER_STATE,
      ingredients: [PIZZA_INGREDIENTS[1]]
    };

    expect(orderReducer(prevState, action)).toEqual(expectedNextState);
  });

  test(`handles the ${REMOVE_INGREDIENT} action`, () => {
    const prevState: OrderState = {
      ...INITIAL_ORDER_STATE,
      ingredients: [PIZZA_INGREDIENTS[0], PIZZA_INGREDIENTS[1]]
    };
    const action = removeIngredient(PIZZA_INGREDIENTS[1]);
    const expectedNextState: OrderState = {
      ...INITIAL_ORDER_STATE,
      ingredients: [PIZZA_INGREDIENTS[0]]
    };

    expect(orderReducer(prevState, action)).toEqual(expectedNextState);
  });

  test(`handles the ${PLACE_ORDER} action by resetting order`, () => {
    const sampleOrder: Order = {
      size: PIZZA_SIZES[0],
      crust: PIZZA_CRUSTS[1],
      ingredients: [PIZZA_INGREDIENTS[0]]
    };
    const prevState: OrderState = sampleOrder;
    const action = placeOrder(sampleOrder);

    expect(orderReducer(prevState, action)).toEqual(INITIAL_ORDER_STATE);
  });
});
