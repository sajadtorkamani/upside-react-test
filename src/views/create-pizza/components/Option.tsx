import React from 'react';
import styled from 'styled-components';
import palette from '../../../theme/palette';
import { formatMoney } from '../../../lib/utils';

type Props = {
  name: string;
  price: number;
};

const Option: React.FC<Props> = ({ name, price }) => (
  <StyledOption>
    <span className="name">{name}</span>
    <span className="price">({formatMoney(price)})</span>
  </StyledOption>
);

const StyledOption = styled.div`
  background: ${palette.white};
  border-bottom: 1px solid ${palette.greyBorder};
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding: 15px;

  &:hover {
    background: ${palette.greyLight};
    cursor: pointer;
  }

  .name {
    margin-right: 10px;
  }

  .price {
    color: ${palette.grey};
  }
`;

export default Option;
