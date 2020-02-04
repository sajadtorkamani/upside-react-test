import { Selector } from 'react-redux';
import _get from 'lodash/get';
import { OrderState } from '../reducers/orderReducer';
import { CrustOption, IngredientOption, PizzaOption } from '../types';
import { StoreState } from './index';

/**
 * Get the selected size.
 */
export const selectedSizeSelector: Selector<
  StoreState,
  PizzaOption | undefined
> = state => state.order.size;

/**
 * Get the selected crust.
 */
export const selectedCrustSelector: Selector<
  StoreState,
  CrustOption | undefined
> = state => state.order.crust;

/**
 * Get the selected ingredients.
 */
export const selectedIngredientsSelector: Selector<
  StoreState,
  IngredientOption[]
> = state => state.order.ingredients;

/**
 * Get the current order.
 */
export const orderSelector: Selector<StoreState, OrderState> = state =>
  state.order;

/**
 * Get the order total amount.
 */
export const orderTotalSelector: Selector<StoreState, number> = state => {
  const { order } = state;
  const { size, crust, ingredients } = order;

  const sizePrice = _get(size, 'price', 0);
  const crustPrice = _get(crust, 'price', 0);
  const ingredientsPrice = ingredients.reduce(
    (total, { price }) => total + price,
    0
  );

  return sizePrice + crustPrice + ingredientsPrice;
};

/**
 * Determine whether the pizza creation is finished and ready to be ordered.
 */
export const isReadyToOrderSelector: Selector<StoreState, boolean> = state => {
  const { order } = state;
  const { size, crust, ingredients } = order;

  return Boolean(size && crust && ingredients.length > 0);
};

/**
 * Determine whether a given ingredient is already selected.
 */
export const isIngredientSelected = (
  selectedIngredients: IngredientOption[],
  ingredient: IngredientOption
) => selectedIngredients.some(i => i.id === ingredient.id);
