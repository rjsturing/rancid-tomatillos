describe("Rotten Tomatillos", () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: '/mock-data.json'
    });
    cy.visit('/');
  });

  it("should be able to see the title of the page in the header", () => {
    cy.get('h1').contains('Rancid Tomatillos');
  });

});
