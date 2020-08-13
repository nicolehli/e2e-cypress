describe("Basic page interactions", () => {
  beforeEach(() => {
    cy.visit("/example-4")
  })

  // Double click action
  it("sets the header text to the item's name when double clicked", () => {
    // The > is the css selector
    cy.get("[data-cy=box-1-items-list] > :nth-child(2)").dblclick()
    cy.get("[data-cy=box-1-selected-name")
      .invoke("text")
      .should("equal", "Option Two")
  })

  // Check and uncheck boxes commands
  it("displays the correct count for the number of selected checkboxes", () => {
    // .check will check the checkbox
    cy.get("[data-cy=box-2-checkboxes] > :nth-child(1) input").check()

    // check count of checkboxes checked is one
    cy.get("[data-cy=box-2-selected-count]").invoke("text").should("equal", "1")
  })

  it("displays the name of the currently selected item", () => {
    // .select is a shortcut to select from dropdown
    cy.get("[data-cy=box-3-dropdown]").select('Option Three');

    // check count of checkboxes checked is one
    cy.get("[data-cy=box-3-selected-name]").invoke("text").should("equal", "Option Three")

  })
})
