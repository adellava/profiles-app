import { getHeader } from '../support/app.po';

describe('profiles-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the Header', () => {
    getHeader().contains('Profiles App');
  });
});
