import React from 'react';
import Layout from '../../components/layout';
import Container from '../../components/layout/Container';
import { Heading } from '../../components/typography';
import Divider from '../../components/layout/Divider';
import SizeOptions from './components/SizeOptions';
import CrustOptions from './components/CrustOptions';
import IngredientOptions from './components/IngredientOptions';
import OrderSummary from './components/OrderSummary';

const CreatePizzaView: React.FC = () => {
  return (
    <Layout data-testid="create-pizza-view">
      <Container>
        <Heading>Create Pizza</Heading>
        <SizeOptions />
        <CrustOptions />
        <IngredientOptions />

        <Divider />

        <Heading>Review & Order</Heading>
        <OrderSummary />
      </Container>
    </Layout>
  );
};

export default CreatePizzaView;
