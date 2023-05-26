import { header } from '../components/header';
import { search } from '../components/search';

export const runBasicSearch = () => {
    describe('Basic Search from home page', () => {
      beforeEach(() => {
        cy.visit('/');
      });
  
      it('should perform a search with the given search term', () => {
        cy.fixture('searchTerm.json').then((searchTermData) => {
          const searchTerm = searchTermData.searchTerm;
          cy.get(header.searchIcon).click();
          cy.get(search.acceptCookiesButton).should('be.visible');
          cy.get(search.searchBar).type(searchTerm);
          cy.get(search.submitButton).click();
        });
      });
    });
  };