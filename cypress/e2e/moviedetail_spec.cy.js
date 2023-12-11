describe("Movie Details", () => {
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
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919`,
      {
        statusCode: 200,
        fixture: "/mock-movie-0.json",
      }
    );

    cy.intercept(
      "GET",
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/585244`,
      {
        statusCode: 200,
        fixture: "/mock-movie-1.json",
      }
    );

    cy.visit("/");
  });

  //it block for back button
  //pick the first movie - click for first movie, get the button, confirm that it says back or arrow feature/, confirm url goes back to main

  it("should navigate to the correct detail page when the first movie card is clicked, and display details about the chosen movie", () => {
    cy.get(".movies-container").children().first().click();
    cy.url().should("include", "/movies/694919");
    cy.get("img").should("have.attr", "alt", "Tomatillo Logo");
    cy.get("h1").contains("Rancid Tomatillos");
    cy.get(".poster").should("have.attr", "alt", "Money Plane poster");
    cy.get(".right-side").contains("h3", "Money Plane (2020)");
    cy.get(".right-side").contains("h2", "The heist of the century.");
    cy.get(".right-side").contains("p", "Action, Crime, Thriller • 82 mins");
    cy.get(".right-side").find("img").should("have.attr", "alt", "Tomatillo");
    cy.get(".right-side").find("b").contains("1.8");
    cy.get(".synopsis-container").find("p").contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.");
  });

  // it("should navigate to the correct detail page when the last movie card is clicked", () => {
  //   cy.get(".movies-container").children().last().click();
  //   cy.url().should("include", `/movies/${lastMovieId}`);
  // });

});

