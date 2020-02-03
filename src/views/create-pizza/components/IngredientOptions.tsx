import React from 'react';
import { Subheading } from '../../../components/typography';
import { PIZZA_INGREDIENTS } from '../../../data';
import Options from './Options';
import Option from './Option';

const IngredientOptions: React.FC = () => (
  <Options>
    <Subheading>Ingredients</Subheading>

    {PIZZA_INGREDIENTS.map(ingredient => (
      <Option
        key={ingredient.name}
        name={ingredient.name}
        price={ingredient.price}
      />
    ))}
  </Options>
);

export default IngredientOptions;
