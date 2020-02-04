import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Subheading } from '../../../../components/typography';
import { PIZZA_INGREDIENTS } from '../../../../data';
import { StoreState } from '../../../../store';
import { IngredientOption } from '../../../../types';
import {
  isIngredientSelected,
  selectedIngredientsSelector
} from '../../../../store/selectors';
import { addIngredient, removeIngredient } from '../../../../actions';
import Option from './Option';
import Options from './Options';

type Props = {
  selectedIngredients: IngredientOption[];
  onAdd: (ingredient: IngredientOption) => void;
  onRemove: (ingredient: IngredientOption) => void;
};

class IngredientOptions extends Component<Props> {
  onSelect = (ingredient: IngredientOption) => {
    const { selectedIngredients, onAdd, onRemove } = this.props;
    const isSelected = isIngredientSelected(selectedIngredients, ingredient);
    const handlerFn = isSelected ? onRemove : onAdd;

    handlerFn(ingredient);
  };

  render = () => {
    const { selectedIngredients } = this.props;

    return (
      <Options>
        <Subheading>Ingredients</Subheading>

        <p>Please select at least one.</p>

        {PIZZA_INGREDIENTS.map(ingredient => (
          <Option
            key={ingredient.id}
            option={ingredient}
            onSelect={() => this.onSelect(ingredient)}
            isSelected={isIngredientSelected(selectedIngredients, ingredient)}
          />
        ))}
      </Options>
    );
  };
}

const mapStateToProps = (state: StoreState) => {
  const selectedIngredients = selectedIngredientsSelector(state);

  return { selectedIngredients };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAdd: (ingredient: IngredientOption) => dispatch(addIngredient(ingredient)),
  onRemove: (ingredient: IngredientOption) =>
    dispatch(removeIngredient(ingredient))
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientOptions);
