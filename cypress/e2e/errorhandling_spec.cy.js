describe("Error handling", () => {

  it('should show an appropriate error if a server error occurs', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      fixture: '/mock-data.json'
    });
    cy.visit('/');
    cy.get('.error-message').contains('Oopsie! Something went wrong, please try again later.');
  });

  it('should show an appropriate error if a client error occurs', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404,
      fixture: '/mock-data.json'
    });
    cy.visit('/');
    cy.get('.error-message').contains('Oopsie! This is not the page you were looking for.');
  });
});
