import { Selector } from 'react-redux';
import { OrderState } from '../reducers/orderReducer';
import { CrustOption, IngredientOption, Order, PizzaOption } from '../types';
import { OrderHistoryState } from '../reducers/orderHistoryReducer';
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
 * Determine whether the pizza creation is finished and ready to be ordered.
 */
export const isReadyToOrderSelector: Selector<StoreState, boolean> = state => {
  const { order } = state;
  const { size, crust, ingredients } = order;

  return Boolean(size && crust && ingredients.length > 0);
};

/**
 * Get the order appHistory.
 */
export const orderHistorySelector: Selector<
  StoreState,
  OrderHistoryState
> = state => state.orderHistory;

/**
 * Determine whether a given ingredient is already selected.
 */
export const isIngredientSelected = (
  selectedIngredients: IngredientOption[],
  ingredient: IngredientOption
) => selectedIngredients.some(i => i.id === ingredient.id);

/**
 * Get the order total amount.
 */
export const calculateOrderTotal = (order: Order): number => {
  const { size, crust, ingredients } = order;
  const ingredientsPrice = ingredients.reduce(
    (total, { price }) => total + price,
    0
  );

  return size.price + crust.price + ingredientsPrice;
};
