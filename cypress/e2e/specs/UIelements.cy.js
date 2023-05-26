import { header } from '../po/components/header';

describe('Validate page title', () => {
  it('Should have the correct page title', () => {
    cy.visit('/');
    cy.title().should('eq', 'EPAM | Software Engineering & Product Development Services');
  });
});

describe('Validate the existence of the header logo', () => {
  it('Should display the header logo on the page', () => {
    cy.visit('/');
    cy.get(header.logo).should('exist');
  });
});