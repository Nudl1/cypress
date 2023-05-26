import { header } from '../po/components/header';
import { search } from '../po/components/search';
const searchTerm = searchTermData.searchTerm;

class HomePage {
  performSearch(searchTerm) {
    cy.get(header.searchIcon).click();
    cy.get(search.acceptCookiesButton).should('be.visible');
    cy.get(search.searchBar).type(searchTerm);
    cy.get(search.submitButton).click();
  }
}

export default new HomePage();