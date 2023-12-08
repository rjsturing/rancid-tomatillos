describe("Error handling", () => {
  it('should load the page correctly, with no errors', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      fixture: '/mock-data.json'
    });
    cy.visit('/');
    cy.get('.error-message').contains('Oopsie! Something went wrong, please try again later.');
  });
});
