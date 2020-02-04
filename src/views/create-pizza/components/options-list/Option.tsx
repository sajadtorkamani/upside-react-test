import React from 'react';
import styled from 'styled-components';
import palette from '../../../../theme/palette';
import { formatMoney } from '../../../../lib/utils';
import { PizzaOption } from '../../../../types';

type Props = {
  option: PizzaOption;
  isSelected?: boolean;
  onSelect?: (option: PizzaOption) => any;
};

const Option: React.FC<Props> = ({ option, onSelect, isSelected = false }) => {
  const handleClick = () => {
    onSelect && onSelect(option);
  };

  return (
    <StyledOption onClick={handleClick} isSelected={isSelected}>
      <span className="name">{option.name}</span>
      <span className="price">({formatMoney(option.price)})</span>
    </StyledOption>
  );
};

const StyledOption = styled.div<{ isSelected: boolean }>`
  background: ${({ isSelected }) =>
    isSelected ? palette.greyLight : palette.white};
  border-bottom: 1px solid ${palette.greyBorder};
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding: 15px;

  &:hover {
    cursor: pointer;
  }

  .price {
    color: ${palette.grey};
  }
`;

export default Option;
