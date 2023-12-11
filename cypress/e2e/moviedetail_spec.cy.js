describe("Movie Details", () => {
  const firstMovieId = "694919";
  const lastMovieId = "585244";

  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "/mock-data.json",
      }
    );
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

  //it block for back button
  //pick the first movie - click for first movie, get the button, confirm that it says back or arrow feature/, confirm url goes back to main

  it("should navigate to the correct detail page when the first movie card is clicked", () => {
    cy.get(".movies-container").children().first().click();
    cy.url().should("include", `/movies/${firstMovieId}`);
    //header contains RT
    //title contains ""
  });

  it("should navigate to the correct detail page when the last movie card is clicked", () => {
    cy.get(".movies-container").children().last().click();
    cy.url().should("include", `/movies/${lastMovieId}`);
  });

});
