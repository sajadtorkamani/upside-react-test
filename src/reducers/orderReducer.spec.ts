import {
  ADD_INGREDIENT,
  CHOOSE_CRUST,
  CHOOSE_SIZE,
  REMOVE_INGREDIENT
} from '../action-types';
import {
  addIngredient,
  chooseCrust,
  chooseSize,
  removeIngredient
} from '../actions';
import { PIZZA_CRUSTS, PIZZA_INGREDIENTS, PIZZA_SIZES } from '../data';
import orderReducer, { initialOrderState, OrderState } from './orderReducer';

describe('orderReducer', () => {
  test('is initialised with the correct default state', () => {
    expect(orderReducer(undefined, { type: 'foo' })).toEqual(initialOrderState);
  });

  describe(`handles the ${CHOOSE_SIZE} action`, () => {
    test('sets the size if previously not set', () => {
      const prevState: OrderState = {
        ...initialOrderState,
        size: undefined
      };
      const action = chooseSize(PIZZA_SIZES[0]);
      const expectedNextState: OrderState = {
        ...initialOrderState,
        size: PIZZA_SIZES[0]
      };

      expect(orderReducer(prevState, action)).toEqual(expectedNextState);
    });

    test("sets the size if it's a different size", () => {
      const prevState: OrderState = {
        ...initialOrderState,
        size: PIZZA_SIZES[0]
      };
      const action = chooseSize(PIZZA_SIZES[1]);
      const expectedNextState: OrderState = {
        ...initialOrderState,
        size: PIZZA_SIZES[1]
      };

      expect(orderReducer(prevState, action)).toEqual(expectedNextState);
    });

    test('unsets / toggles the size if the same one is chosen', () => {
      const prevState: OrderState = {
        ...initialOrderState,
        size: PIZZA_SIZES[0]
      };
      const action = chooseSize(PIZZA_SIZES[0]); // Same size is chosen
      const expectedNextState: OrderState = {
        ...initialOrderState,
        size: undefined
      };

      expect(orderReducer(prevState, action)).toEqual(expectedNextState);
    });
  });

  describe(`handles the ${CHOOSE_CRUST} action`, () => {
    test('sets the crust if previously not set', () => {
      const prevState: OrderState = {
        ...initialOrderState,
        crust: undefined
      };
      const action = chooseCrust(PIZZA_CRUSTS[0]);
      const expectedNextState: OrderState = {
        ...initialOrderState,
        crust: PIZZA_CRUSTS[0]
      };

      expect(orderReducer(prevState, action)).toEqual(expectedNextState);
    });

    test("sets the crust if it's a different crust", () => {
      const prevState: OrderState = {
        ...initialOrderState,
        crust: PIZZA_CRUSTS[0]
      };
      const action = chooseCrust(PIZZA_CRUSTS[1]);
      const expectedNextState: OrderState = {
        ...initialOrderState,
        crust: PIZZA_CRUSTS[1]
      };

      expect(orderReducer(prevState, action)).toEqual(expectedNextState);
    });

    test('unsets / toggles the crust if the same one is chosen', () => {
      const prevState: OrderState = {
        ...initialOrderState,
        crust: PIZZA_CRUSTS[0]
      };
      const action = chooseCrust(PIZZA_CRUSTS[0]); // Same crust is chosen
      const expectedNextState: OrderState = {
        ...initialOrderState,
        crust: undefined
      };

      expect(orderReducer(prevState, action)).toEqual(expectedNextState);
    });
  });

  test(`handles the ${ADD_INGREDIENT} action`, () => {
    const prevState: OrderState = {
      ...initialOrderState,
      ingredients: []
    };
    const action = addIngredient(PIZZA_INGREDIENTS[1]);
    const expectedNextState: OrderState = {
      ...initialOrderState,
      ingredients: [PIZZA_INGREDIENTS[1]]
    };

    expect(orderReducer(prevState, action)).toEqual(expectedNextState);
  });

  test(`handles the ${REMOVE_INGREDIENT} action`, () => {
    const prevState: OrderState = {
      ...initialOrderState,
      ingredients: [PIZZA_INGREDIENTS[0], PIZZA_INGREDIENTS[1]]
    };
    const action = removeIngredient(PIZZA_INGREDIENTS[1]);
    const expectedNextState: OrderState = {
      ...initialOrderState,
      ingredients: [PIZZA_INGREDIENTS[0]]
    };

    expect(orderReducer(prevState, action)).toEqual(expectedNextState);
  });
});
