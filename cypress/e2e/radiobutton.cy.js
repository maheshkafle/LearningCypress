describe('TestSuite ', () => {
    it('Test case', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('input[value="radio1"]').check().should('be.checked')
    })
  })