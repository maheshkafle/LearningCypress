describe('Test', () => {
    it('open child tab', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get("#opentab").invoke('removeAttr', 'target').click()
      cy.origin('https://www.qaclickacademy.com/', () => {     
         cy.url().should('include', 'qaclickacademy') 
         cy.go('back')     
        })
    })
  })