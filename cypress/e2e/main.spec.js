describe("IndexPage", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("renders", () => {
    cy.findByTestId("animated-heading").should("exist")
  })

  it("is animated", () => {
    cy.wait(2000) // wait for animation
    cy.findByTestId("animated-heading").should("have.css", "opacity", "1")
  })
})
