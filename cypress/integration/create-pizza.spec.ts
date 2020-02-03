import { CREATE_PIZZA_ROUTE } from '../../src/lib/constants';

describe('Create Pizza view', () => {
  beforeEach(() => {
    cy.visit(CREATE_PIZZA_ROUTE);
  });

  it('renders okay', () => {
    cy.findByTestId('create-pizza-view').should('be.visible');
  });
});
