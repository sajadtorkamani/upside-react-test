import React from 'react';
import { Subheading } from '../../../components/typography';
import { PIZZA_CRUSTS } from '../../../data';
import Options from './Options';
import Option from './Option';

const CrustOptions: React.FC = () => (
  <Options>
    <Subheading>Crust</Subheading>

    {PIZZA_CRUSTS.map(crust => (
      <Option key={crust.name} name={crust.name} price={crust.price} />
    ))}
  </Options>
);

export default CrustOptions;
