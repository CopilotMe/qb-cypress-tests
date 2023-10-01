class WebdriverIOApiPage {
  static clickSearchWidget() {
    return cy.get('.DocSearch').click();
  }
  static getSearchInput() {
    return cy.get('#docsearch-input');
  }
  static clickSearchReset() {
    return cy.get('.DocSearch-Reset').click();
  }
  static clickLastSearchResult() {
    return cy.get('.DocSearch-Hit').eq(0).click();
  }

  // Method to click on the Protocols section in the left navigation bar
  static getProtocolsSection() {
    return cy.get('.menu__link').contains('Protocols');
  }

  // Method to get the list of items under the Protocols section
  static getProtocolsList() {
    return cy.get('.menu__link').contains('Protocols').parent().next('ul').find('li');
  }
}

describe('WebdriverIO Website Test', () => {
  beforeEach(() => {
    // Visit the WebdriverIO website
    cy.visit('http://webdriver.io/docs/api');
    // Ensure that the URL changes to the API documentation page
    cy.url().should('include', 'webdriver.io/docs/api');
  });
  it('should search for "Click"', () => {

    WebdriverIOApiPage.clickSearchWidget();
    cy.get('.DocSearch-Form').should('exist');

    // Use the search functionality to search for 'Click'
    WebdriverIOApiPage.getSearchInput().type('click{enter}').wait(500).click().type('{enter}');

    // Validate that the correct information/page is returned
    cy.url().should('include', 'webdriver.io/docs/api/element/click');

    cy.get('h1').should('contain.text', 'click');
    cy.get('#usage').should('contain.text', 'Usage');
    cy.get('#examples').should('contain.text', 'Examples');
    cy.get('#parameters').should('contain.text', 'Parameters');

  });
  it('should expand the Protocols section and verify the list', () => {
    // Use the Page Object Model to click on the Protocols section
    WebdriverIOApiPage.getProtocolsSection().click();

    // Verify that the Protocols section is expanded
    WebdriverIOApiPage.getProtocolsSection().should('have.attr', 'aria-expanded', 'true');

    // Verify the list under the Protocols section
    WebdriverIOApiPage.getProtocolsList().should('have.length.above', 0);
  });

  it('should test the shortcuts of the search widget', () => {
    // Use shortcuts to test the functionality of the search widget
    
    // Esc to Close
    WebdriverIOApiPage.clickSearchWidget();
    WebdriverIOApiPage.getSearchInput().type('{esc}');

    // Clear the search and verify that the results are empty
    WebdriverIOApiPage.clickSearchWidget();
    WebdriverIOApiPage.getSearchInput().type('click').clear();
    cy.contains('No recent searches');
    WebdriverIOApiPage.getSearchInput().type('{esc}');

    // Navigate through results
    WebdriverIOApiPage.clickSearchWidget();
    WebdriverIOApiPage.getSearchInput().type('click{downArrow}{downArrow}{downArrow}{upArrow}{esc}');
  });
  it('should test the search reset', () => {

    // Reset the search
    WebdriverIOApiPage.clickSearchWidget();
    WebdriverIOApiPage.getSearchInput().type('click');
    WebdriverIOApiPage.clickSearchReset();
    WebdriverIOApiPage.getSearchInput().type('{esc}');
    
  });
  it('should test the last search result', () => {
    WebdriverIOApiPage.clickSearchWidget();
    cy.get('.DocSearch-Form').should('exist')
    WebdriverIOApiPage.getSearchInput().type('click{enter}').wait(500).click().type('{enter}');
    cy.url().should('include', 'webdriver.io/docs/api/element/click');
    cy.visit('http://webdriver.io/docs/api');
     cy.url().should('include', 'webdriver.io/docs/api');
    // Navigate to last search item
    WebdriverIOApiPage.clickSearchWidget();
    WebdriverIOApiPage.clickLastSearchResult();
    cy.url().should('include', 'webdriver.io/docs/api/element/click');
  });
});