import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout';
import Container from '../../components/layout/Container';
import { Heading, Subheading } from '../../components/typography';
import { StoreState } from '../../store';
import { orderHistorySelector } from '../../store/selectors';
import { OrderHistoryState } from '../../reducers/orderHistoryReducer';
import Divider from '../../components/layout/Divider';
import OrderSummary from '../../components/order-summary/OrderSummary';
import { CREATE_ORDER_ROUTE } from '../../lib/constants';

type Props = {
  orderHistory: OrderHistoryState;
};

const PreviousOrdersView: React.FC<Props> = ({ orderHistory }) => {
  const numOrders = orderHistory.length;

  return (
    <Layout data-testid="previous-orders-view">
      <Container>
        <Heading>Previous Orders {numOrders > 0 && `(${numOrders})`}</Heading>

        {numOrders > 0 ? (
          orderHistory.map(({ order, createdDate }) => (
            <div key={createdDate}>
              <Subheading className="mb-4">
                Order date: {new Date(createdDate).toDateString()}
              </Subheading>

              <OrderSummary order={order} />

              <Divider />
            </div>
          ))
        ) : (
          <>
            <p>You have no previous orders.</p>
            <Link to={CREATE_ORDER_ROUTE}>Create your first order.</Link>
          </>
        )}
      </Container>
    </Layout>
  );
};

const mapStateToProps = (state: StoreState) => {
  const orderHistory = orderHistorySelector(state);

  return { orderHistory };
};

export default connect(mapStateToProps)(PreviousOrdersView);
