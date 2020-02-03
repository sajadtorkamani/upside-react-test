import { HOME_ROUTE } from '../../src/lib/constants';

describe('Home view', () => {
  beforeEach(() => {
    cy.visit(HOME_ROUTE);
  });

  it('renders okay', () => {
    cy.findByTestId('home-view').should('be.visible');
  });
});
