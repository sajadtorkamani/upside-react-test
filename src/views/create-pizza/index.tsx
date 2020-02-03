import React from 'react';
import Layout from '../../components/layout';
import Container from '../../components/layout/Container';
import { PageIntro, PageTitle } from '../../components/typography';
import SizeOptions from './components/SizeOptions';
import CrustOptions from './components/CrustOptions';
import IngredientOptions from './components/IngredientOptions';

const CreatePizzaView: React.FC = () => {
  return (
    <Layout data-testid="create-pizza-view">
      <Container>
        <PageTitle>Create Pizza.</PageTitle>

        <PageIntro>Construct your pizza.</PageIntro>

        <SizeOptions />
        <CrustOptions />
        <IngredientOptions />
      </Container>
    </Layout>
  );
};

export default CreatePizzaView;
