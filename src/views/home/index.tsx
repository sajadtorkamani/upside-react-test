import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout';
import Container from '../../components/layout/Container';
import { PageIntro, PageTitle } from '../../components/typography';
import { CREATE_ORDER_ROUTE, PREVIOUS_ORDERS_ROUTE } from '../../lib/constants';
import BlockButton from './components/BlockButton';

const HomeView: React.FC = () => (
  <Layout data-testid="home-view">
    <Container>
      <PageTitle>Welcome.</PageTitle>

      <PageIntro>What would you like to do?</PageIntro>

      <Link to={CREATE_ORDER_ROUTE}>
        <BlockButton variant="outline-primary" size="lg">
          Create Order
        </BlockButton>
      </Link>

      <Link to={PREVIOUS_ORDERS_ROUTE}>
        <BlockButton variant="outline-primary" size="lg">
          View Previous Orders
        </BlockButton>
      </Link>
    </Container>
  </Layout>
);

export default HomeView;
