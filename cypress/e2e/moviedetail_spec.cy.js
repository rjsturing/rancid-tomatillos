describe("Movie Details", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "mock-data.json",
      }
    );
    cy.visit("/");
  });

  it("should navigate to the correct detail page when a movie card is clicked", () => {
    cy.get(".movies-container")
    .children()
    .first()
    .click();

    cy.url()
    .should("include", "/movies/694919");
  });
});
