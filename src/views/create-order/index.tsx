import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';
import Container from '../../components/layout/Container';
import Divider from '../../components/layout/Divider';
import { StoreState } from '../../store';
import { isReadyToOrderSelector } from '../../store/selectors';
import { Heading } from '../../components/typography';
import OptionsList from './components/options-list/OptionsList';
import ReviewOrder from './components/ReviewOrder';

type Props = {
  isReadyToOrder: boolean;
};

const CreateOrderView: React.FC<Props> = ({ isReadyToOrder }) => (
  <Layout data-testid="create-order-view">
    <Container>
      <Heading>Create Order</Heading>
      <OptionsList />

      {isReadyToOrder && (
        <>
          <Divider />
          <Heading>Review Order</Heading>
          <ReviewOrder />
        </>
      )}
    </Container>
  </Layout>
);

const mapStateToProps = (state: StoreState) => {
  const isReadyToOrder = isReadyToOrderSelector(state);

  return { isReadyToOrder };
};

export default connect(mapStateToProps)(CreateOrderView);
