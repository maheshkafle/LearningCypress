describe('Test', () => {
    it('radio button', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('input[value="radio1"]').check().should('be.checked')
    })
  })