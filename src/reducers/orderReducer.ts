import { Reducer } from 'redux';
import { CrustOption, IngredientOption, SizeOption } from '../types';
import { StoreAction } from '../store';
import {
  ADD_INGREDIENT,
  CHOOSE_CRUST,
  CHOOSE_SIZE,
  REMOVE_INGREDIENT
} from '../action-types';

export type OrderState = {
  size?: SizeOption;
  crust?: CrustOption;
  ingredients: IngredientOption[];
};

export const initialOrderState: OrderState = {
  size: undefined,
  crust: undefined,
  ingredients: []
};

/**
 * Order reducer.
 *
 * Handles all actions related to current order.
 */
const orderReducer: Reducer<OrderState, StoreAction> = (
  state = initialOrderState,
  action
) => {
  switch (action.type) {
    case CHOOSE_SIZE: {
      const chosenSize = action.payload;
      const isSameSize = !!state.size && state.size.id === chosenSize.id;
      const size = isSameSize ? undefined : chosenSize; // unset if same

      return { ...state, size };
    }

    case CHOOSE_CRUST: {
      const chosenCrust = action.payload;
      const isSameCrust = !!state.crust && state.crust.id === chosenCrust.id;
      const crust = isSameCrust ? undefined : chosenCrust; // unset if same

      return { ...state, crust };
    }

    case ADD_INGREDIENT: {
      const ingredient = action.payload;

      return { ...state, ingredients: [...state.ingredients, ingredient] };
    }

    case REMOVE_INGREDIENT: {
      const ingredient = action.payload;

      return {
        ...state,
        ingredients: state.ingredients.filter(i => i.id !== ingredient.id)
      };
    }

    default:
      return state;
  }
};

export default orderReducer;
