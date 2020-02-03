import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout';
import Container from '../../components/layout/Container';
import { PageIntro, PageTitle } from '../../components/typography';
import { CREATE_PIZZA_ROUTE, HOME_ROUTE } from '../../lib/constants';
import BlockButton from './components/BlockButton';

const HomeView: React.FC = () => {
  return (
    <Layout data-testid="home-view">
      <Container>
        <PageTitle>Welcome.</PageTitle>

        <PageIntro>What would you like to do?</PageIntro>

        <Link to={CREATE_PIZZA_ROUTE}>
          <BlockButton variant="outline-primary" size="lg">
            Create pizza
          </BlockButton>
        </Link>

        <Link to={HOME_ROUTE}>
          <BlockButton variant="outline-primary" size="lg">
            View previous orders
          </BlockButton>
        </Link>

        <Link to={HOME_ROUTE}>
          <BlockButton variant="outline-primary" size="lg">
            Track order status
          </BlockButton>
        </Link>
      </Container>
    </Layout>
  );
};

export default HomeView;
