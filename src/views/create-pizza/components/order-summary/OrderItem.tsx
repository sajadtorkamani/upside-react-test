import React from 'react';
import styled from 'styled-components';
import { formatMoney } from '../../../../lib/utils';
import palette from '../../../../theme/palette';

type Props = {
  label: string;
  price: number;
};

const OrderItem: React.FC<Props> = ({ label, price }) => (
  <StyledOrderItem>
    <span className="label">{label}</span>
    <span className="price">({formatMoney(price)})</span>
  </StyledOrderItem>
);

const StyledOrderItem = styled.div`
  background: ${palette.white};
  border-bottom: 1px solid ${palette.greyBorder};
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding: 15px;

  .price {
    color: ${palette.grey};
  }
`;

export default OrderItem;
