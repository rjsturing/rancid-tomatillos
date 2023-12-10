describe("Movie Details", () => {
  const firstMovieId = "436270";
  const lastMovieId = "585244";

  beforeEach(() => {
    cy.intercept(
      "GET",
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${firstMovieId}`,
      {
        statusCode: 200,
        fixture: "/mock-movie-0.json",
      }
    );

    cy.intercept(
      "GET",
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${lastMovieId}`,
      {
        statusCode: 200,
        fixture: "/mock-movie-1.json",
      }
    );

    cy.visit("/");
  });

  it("should navigate to the correct detail page when the first movie card is clicked", () => {
    cy.get(".movies-container").children().first().click();
    cy.url().should("include", `/movies/${firstMovieId}`);
  });

  it("should be able to see the details of the first movie", () => {
    cy.get(".movies-container").children().first().click();
    cy.url().should("include", `/movies/${firstMovieId}`);
  });

  // it("should navigate to the correct detail page when the last movie card is clicked", () => {
  //   cy.get(".movies-container").children().last().click();
  //   cy.url().should("include", `/movies/${lastMovieId}`);
  // });

});
