import React from 'react';
import Layout from '../../components/layout';
import Container from '../../components/layout/Container';
import { Heading, PageIntro, PageTitle } from '../../components/typography';
import SizeOptions from './components/SizeOptions';
import CrustOptions from './components/CrustOptions';
import IngredientOptions from './components/IngredientOptions';
import Divider from '../../components/layout/Divider';
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
