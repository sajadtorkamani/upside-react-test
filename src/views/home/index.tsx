import React from 'react';
import Layout from '../../components/layout';
import Container from '../../components/layout/Container';
import { PageTitle } from '../../components/typography';

const HomeView: React.FC = () => {
  return (
    <Layout data-testid="home-view">
      <Container>
        <PageTitle>Home.</PageTitle>

        <p>What would you like to do?</p>
      </Container>
    </Layout>
  );
};

export default HomeView;
