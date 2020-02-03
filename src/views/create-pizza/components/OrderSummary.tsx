import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Option from './Option';

const OrderSummary: React.FC = () => (
  <StyledOrderSummary>
    <Option name="Size: Medium" price={5.0} />
    <Option name="Crust: Thick" price={2.0} />
    <Option name="Ingredient: Chicken" price={0.5} />
    <Option name="Ingredient: Beef" price={0.5} />
    <Option name="Ingredient: Back" price={0.5} />

    <Button variant="primary" size="lg" className="mt-4">
      Place Order
    </Button>
  </StyledOrderSummary>
);

const StyledOrderSummary = styled.div``;

export default OrderSummary;
