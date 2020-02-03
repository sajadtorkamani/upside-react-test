import { StoreAction } from '../store';
import {
  ADD_INGREDIENT,
  CHOOSE_CRUST,
  CHOOSE_SIZE,
  REMOVE_INGREDIENT
} from '../action-types';
import { CrustOption, IngredientOption, SizeOption } from '../types';

export const chooseSize = (size: SizeOption): StoreAction => ({
  type: CHOOSE_SIZE,
  payload: size
});

export const chooseCrust = (crust: CrustOption): StoreAction => ({
  type: CHOOSE_CRUST,
  payload: crust
});

export const addIngredient = (ingredient: IngredientOption): StoreAction => ({
  type: ADD_INGREDIENT,
  payload: ingredient
});

export const removeIngredient = (
  ingredient: IngredientOption
): StoreAction => ({
  type: REMOVE_INGREDIENT,
  payload: ingredient
});
