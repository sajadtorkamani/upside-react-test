import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import OrderSummary from '../../../components/order-summary/OrderSummary';
import { orderSelector } from '../../../store/selectors';
import { Order } from '../../../types';
import appHistory from '../../../lib/appHistory';
import { placeOrder } from '../../../actions';
import { StoreState } from '../../../store';
import { PREVIOUS_ORDERS_ROUTE } from '../../../lib/constants';
import { ToastSuccess } from '../../../components/toasts';

type Props = {
  order: Order;
  onPlaceOrder: (order: Order) => void;
};

const ReviewOrderComponent: React.FC<Props> = ({ order, onPlaceOrder }) => {
  return (
    <StyledReviewOrderComponent>
      <OrderSummary order={order} />

      <div className="order-container">
        <Button variant="success" size="lg" onClick={() => onPlaceOrder(order)}>
          Place Order
        </Button>
      </div>
    </StyledReviewOrderComponent>
  );
};

const StyledReviewOrderComponent = styled.div`
  .order-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
`;

const mapStateToProps = (state: StoreState) => {
  const order = orderSelector(state) as Order;

  return { order };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const onPlaceOrder = (order: Order) => {
    dispatch(placeOrder(order));
    appHistory.push(PREVIOUS_ORDERS_ROUTE);
    ToastSuccess.fire('Order successfully placed!');
  };

  return { onPlaceOrder };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewOrderComponent);
