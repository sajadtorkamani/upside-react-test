import React from 'react';
import styled from 'styled-components';
import { Order } from '../../types';
import { calculateOrderTotal } from '../../store/selectors';
import { formatMoney } from '../../lib/utils';
import OrderItem from './OrderItem';
import Total from './Total';

type Props = {
  order: Order;
};

const OrderSummary: React.FC<Props> = ({ order }) => {
  const { size, crust, ingredients } = order;
  const orderTotal = calculateOrderTotal(order);

  return (
    <StyledOrderSummary>
      <OrderItem label={`Size: ${size.name}`} price={size.price} />
      <OrderItem label={`Crust: ${crust.name}`} price={crust.price} />

      {ingredients.map(ingredient => (
        <OrderItem
          key={ingredient.id}
          label={`Ingredient: ${ingredient.name}`}
          price={ingredient.price}
        />
      ))}

      <Total>Order Total: {formatMoney(orderTotal)}</Total>
    </StyledOrderSummary>
  );
};

const StyledOrderSummary = styled.div``;

export default OrderSummary;
