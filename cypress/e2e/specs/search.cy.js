import { header } from '../po/components/header';
import { search } from '../po/components/search';

describe('Search functionality', () => {
  it('Should perform a search with a given search term', () => {
    cy.fixture('searchTerm.json').then((searchTermData) => {
      const searchTerm = searchTermData.searchTerm;
      cy.visit('/');
      cy.get(header.searchIcon).click();
      cy.get(search.acceptCookiesButton).should('be.visible');
      cy.get(search.searchBar).type(searchTerm);
      cy.get(search.submitButton).click();
      cy.url().should('contain', '/search?q=' + searchTerm);
      cy.get(search.resultCounter).should('contain', 'results for "' + searchTerm + '"');
      cy.get(search.searchResultsItem)
        .should('be.visible')
        .should('have.length', 10);
      cy.scrollTo('bottom');
      cy.get(search.searchResultsItem)
        .should('be.visible')
        .should('have.length', 20);
      cy.get(search.viewMoreButton).should('be.visible')
    });
  });
});