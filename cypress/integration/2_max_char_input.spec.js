describe("Text box with max characters", () => {
  it("displays the appropriate remaining characteres count", () => {
    cy.visit("http://localhost:3000/example-2")

    // Check text upon loading
    cy.get("span").invoke("text").should("equal", "15")

    // Test input changes allow characters left
    cy.get("input").type("hello")
    cy.get("span").invoke("text").should("equal", "10")
    cy.get("input").type(" my friend")
    cy.get("span").invoke("text").should("equal", "0")
  })

  it("prevents the user from typing more characters once max has exceeded", () => {
    cy.visit("http://localhost:3000/example-2")
    cy.get("input").type("abcdefghiklmnopqrstuvwxyz")
    cy.get("input").should("have.attr", "value", "abcdefghiklmnop") // check element attribute
  })
})
