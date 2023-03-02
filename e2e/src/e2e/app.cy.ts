import { getHeader } from '../support/app.po';

describe('profiles-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the Header', () => {
    getHeader().contains('Profiles App');
  });

  it('should display the Profiles List', () => {
    cy.get('article').should('have.length', 20);
  });

  it('should load more profiles when the button is clicked', () => {
    cy.get('article').should('have.length', 20);
    cy.get('button:contains("Next Page")').click();
    cy.get('article').should('have.length', 40);
  });

  it('should display the Profile Details when a profile is clicked', () => {
    cy.get('article').first().click();
    cy.get('dialog').should('be.visible');
    cy.get('dialog').find('img').should('be.visible');
  });
});
