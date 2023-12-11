describe("Rotten Tomatillos", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "/mock-data.json",
      }
    );
    cy.visit("/");
  });

  it("should be able to see the title of the page in the header", () => {
    cy.get('img').should('have.attr', 'alt', 'Tomatillo Logo');
    cy.get('h1').contains('Rancid Tomatillos');
  });

  it('should be able to see the movies populate on the page', () => {
    cy.get('.movies-container')
      .children()
      .first()
      .find('.movie-poster')
      .should('have.attr', 'alt', 'Movie Poster for Money Plane');
    cy.get('.movies-container')
      .children()
      .last()
      .find('.movie-poster')
      .should('have.attr', 'alt', 'Movie Poster for I Still Believe');
  });
});
