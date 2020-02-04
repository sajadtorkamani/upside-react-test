import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../theme/palette';
import {
  CREATE_ORDER_ROUTE,
  HOME_ROUTE,
  PREVIOUS_ORDERS_ROUTE
} from '../../lib/constants';
import Container from './Container';

const Header: React.FC = () => (
  <StyledHeader bg="primary" variant="primary" fixed="top">
    <Container className="container">
      <Navbar.Brand className="brand">
        <Link to={HOME_ROUTE}>iPizza</Link>
      </Navbar.Brand>

      <Navbar.Collapse className="justify-content-end">
        <Link to={CREATE_ORDER_ROUTE} className="mr-4">
          <Navbar.Text>New Order</Navbar.Text>
        </Link>

        <Link to={PREVIOUS_ORDERS_ROUTE}>
          <Navbar.Text>Previous Orders</Navbar.Text>
        </Link>
      </Navbar.Collapse>
    </Container>
  </StyledHeader>
);

export const HEADER_HEIGHT = 60;

const StyledHeader = styled(Navbar)`
  color: ${palette.white};
  height: ${HEADER_HEIGHT}px;
  padding-left: 10px;
  padding-right: 10px;

  .container {
    padding-right: 15px;
    padding-left: 15px;
  }

  .brand {
    font-size: 24px;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: white;
      text-decoration: none;
    }
  }
`;

export default Header;
