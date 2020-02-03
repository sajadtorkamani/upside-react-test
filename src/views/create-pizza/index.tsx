import React from 'react';
import Layout from '../../components/layout';
import Container from '../../components/layout/Container';
import { PageTitle } from '../../components/typography';

const CreatePizzaView: React.FC = () => {
  return (
    <Layout data-testid="create-pizza-view">
      <Container>
        <PageTitle>Create Pizza.</PageTitle>

        <p>Construct your pizza.</p>
      </Container>
    </Layout>
  );
};

export default CreatePizzaView;
