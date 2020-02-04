import React from 'react';
import { Heading } from '../../../../components/typography';
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
