import { Selector } from 'react-redux';
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
 * Determine whether a given ingredient is already selected.
 */
export const isIngredientSelected = (
  selectedIngredients: IngredientOption[],
  ingredient: IngredientOption
) => selectedIngredients.some(i => i.id === ingredient.id);
