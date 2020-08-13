describe("Heading text", () => {
  it("contains the correct title", () => {
    // Test Code in Cypress
    cy.visit("http://localhost:3000/example-1")
    cy.get("h1").invoke("text").should("equal", "My Awesome Web Application")
  })
})
