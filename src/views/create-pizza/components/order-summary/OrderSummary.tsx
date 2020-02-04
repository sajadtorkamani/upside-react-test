import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { StoreState } from '../../../../store';
import { orderSelector, orderTotalSelector } from '../../../../store/selectors';
import { OrderState } from '../../../../reducers/orderReducer';
import { formatMoney } from '../../../../lib/utils';
import OrderItem from './OrderItem';
import Total from './Total';

type Props = {
  order: OrderState;
  orderTotal: number;
};

const OrderSummary: React.FC<Props> = ({
  order: { size, crust, ingredients },
  orderTotal
}) => (
  <StyledOrderSummary>
    <OrderItem label={`Size: ${size!.name}`} price={size!.price} />
    <OrderItem label={`Crust: ${crust!.name}`} price={crust!.price} />

    {ingredients.map(ingredient => (
      <OrderItem
        key={ingredient.id}
        label={`Ingredient: ${ingredient.name}`}
        price={ingredient.price}
      />
    ))}

    <Total>Order Total: {formatMoney(orderTotal)}</Total>

    <div className="order-container">
      <Button variant="success" size="lg">
        Place Order
      </Button>
    </div>
  </StyledOrderSummary>
);

const StyledOrderSummary = styled.div`
  .order-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
`;

const mapStateToProps = (state: StoreState) => {
  const order = orderSelector(state);
  const orderTotal = orderTotalSelector(state);

  return { order, orderTotal };
};

export default connect(mapStateToProps)(OrderSummary);
