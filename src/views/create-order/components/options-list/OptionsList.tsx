import React from 'react';
import SizeOptions from './SizeOptions';
import CrustOptions from './CrustOptions';
import IngredientOptions from './IngredientOptions';

const OptionsList: React.FC = () => (
  <>
    <SizeOptions />
    <CrustOptions />
    <IngredientOptions />
  </>
);

export default OptionsList;
