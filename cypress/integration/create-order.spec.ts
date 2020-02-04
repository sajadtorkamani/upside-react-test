import { CREATE_ORDER_ROUTE } from '../../src/lib/constants';

describe('Create order view', () => {
  beforeEach(() => {
    cy.visit(CREATE_ORDER_ROUTE);
  });

  it('renders okay', () => {
    cy.findByTestId('create-order-view').should('be.visible');
  });
});
