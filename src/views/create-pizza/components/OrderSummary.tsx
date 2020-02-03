import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Option from './Option';

const OrderSummary: React.FC = () => (
  <StyledOrderSummary>
    <Option option={{ id: 1, name: 'Size: Medium', price: 5.0 }} />
    <Option option={{ id: 1, name: 'Crust: Thick', price: 2.0 }} />
    <Option option={{ id: 1, name: 'Ingredient: Chicken', price: 0.5 }} />
    <Option option={{ id: 1, name: 'Ingredient: Beef', price: 0.5 }} />
    <Option option={{ id: 2, name: 'Ingredient: Back', price: 0.5 }} />

    <Button variant="success" size="lg" className="mt-4">
      Place Order
    </Button>
  </StyledOrderSummary>
);

const StyledOrderSummary = styled.div``;

export default OrderSummary;
