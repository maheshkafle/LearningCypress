describe('TestSuite ', () => {
    it('Test case', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get("#mousehover").invoke('show')
      cy.wait(700)
      cy.contains("Top").click({force: true});
      cy.url().should('include','top')
    })
  })