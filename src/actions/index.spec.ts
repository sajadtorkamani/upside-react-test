import {
  ADD_INGREDIENT,
  CHOOSE_CRUST,
  CHOOSE_SIZE,
  PLACE_ORDER,
  REMOVE_INGREDIENT
} from '../action-types';
import { PIZZA_CRUSTS, PIZZA_INGREDIENTS, PIZZA_SIZES } from '../data';
import {
  addIngredient,
  chooseCrust,
  chooseSize,
  placeOrder,
  removeIngredient
} from './index';
import { Order } from '../types';

describe('chooseSize', () => {
  test('creates correct action payload', () => {
    expect(chooseSize(PIZZA_SIZES[0])).toEqual({
      type: CHOOSE_SIZE,
      payload: PIZZA_SIZES[0]
    });
  });
});

describe('chooseCrust', () => {
  test('creates correct action payload', () => {
    expect(chooseCrust(PIZZA_CRUSTS[1])).toEqual({
      type: CHOOSE_CRUST,
      payload: PIZZA_CRUSTS[1]
    });
  });
});

describe('addIngredient', () => {
  test('creates correct action payload', () => {
    expect(addIngredient(PIZZA_INGREDIENTS[1])).toEqual({
      type: ADD_INGREDIENT,
      payload: PIZZA_INGREDIENTS[1]
    });
  });
});

describe('removeIngredient', () => {
  test('creates correct action payload', () => {
    expect(removeIngredient(PIZZA_INGREDIENTS[1])).toEqual({
      type: REMOVE_INGREDIENT,
      payload: PIZZA_INGREDIENTS[1]
    });
  });
});

describe('placeOrder', () => {
  test('creates correct action payload', () => {
    const sampleOrder: Order = {
      size: PIZZA_SIZES[0],
      crust: PIZZA_CRUSTS[1],
      ingredients: [PIZZA_INGREDIENTS[0]]
    };

    expect(placeOrder(sampleOrder)).toEqual({
      type: PLACE_ORDER,
      payload: sampleOrder
    });
  });
});
