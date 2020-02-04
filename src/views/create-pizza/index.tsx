import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';
import Container from '../../components/layout/Container';
import Divider from '../../components/layout/Divider';
import { StoreState } from '../../store';
import { isReadyToOrderSelector } from '../../store/selectors';
import { Heading } from '../../components/typography';
import OrderSummary from './components/order-summary/OrderSummary';
import OptionsList from './components/options-list/OptionsList';

type Props = {
  isReadyToOrder: boolean;
};

const CreatePizzaView: React.FC<Props> = ({ isReadyToOrder }) => (
  <Layout data-testid="create-pizza-view">
    <Container>
      <Heading>Create Pizza</Heading>
      <OptionsList />

      {isReadyToOrder && (
        <>
          <Divider />
          <Heading>Review & Order</Heading>
          <OrderSummary />
        </>
      )}
    </Container>
  </Layout>
);

const mapStateToProps = (state: StoreState) => {
  const isReadyToOrder = isReadyToOrderSelector(state);

  return { isReadyToOrder };
};

export default connect(mapStateToProps)(CreatePizzaView);
