describe("Text box with max characters", () => {
  beforeEach(() => {
    // Using baseUrl inside cypress.json
    cy.visit("/example-3")

    cy.get('[data-cy="last-name-chars-left-count"]').as("charsLeftSpan")
    cy.get('[data-cy="input-last-name"]').as("charInput")
  })

  it("displays the appropriate remaining characters count", () => {
    // Use the result of this cy.get command here, and we want to have a reference to that element
    // $charsLeftSpan is the DOM element that is returned by cy.get
    cy.get("@charsLeftSpan").then(($charsLeftSpan) => {
      expect($charsLeftSpan.text()).to.equal("15")
    })

    cy.get("@charInput").type("hello")

    cy.get("@charsLeftSpan").invoke("text").should("equal", "10")

    cy.get("@charInput").type(" my friend")

    cy.get("@charsLeftSpan").invoke("text").should("equal", "0")
  })

  it("prevents the user from typing more characters once max is exceeded", () => {
    cy.get("@charInput").type("abcdefghijklmnopqrstuvwxyz")

    cy.get("@charInput").should("have.attr", "value", "abcdefghijklmno")
  })
})
