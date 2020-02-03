import React from 'react';
import { PIZZA_SIZES } from '../../../data';
import { Subheading } from '../../../components/typography';
import Options from './Options';
import Option from './Option';

const SizeOptions: React.FC = () => (
  <Options>
    <Subheading>Size</Subheading>

    {PIZZA_SIZES.map(size => (
      <Option key={size.name} name={size.name} price={size.price} />
    ))}
  </Options>
);

export default SizeOptions;
