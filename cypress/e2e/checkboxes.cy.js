describe('TestSuite ', () => {
    it('Test case', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get("#checkBoxOption1").check().should('be.checked').and('have.value', 'option1')
      cy.get("#checkBoxOption1").uncheck().should('not.be.checked')
      //Check Multiple checkboxes at one shot. Hint: use common location like type here in this case and pass value inside check method
      cy.get('input[type="checkbox"]').check(['option1', 'option3'])
    })
  })