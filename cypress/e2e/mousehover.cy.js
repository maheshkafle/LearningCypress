describe('Test', () => {
    it('mouse hover', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //   cy.get(".mouse-hover-content").invoke('show')  //exact parent element
      cy.contains("Top").click({force: true}); //beauty of cypress without clicking any parent element , child element can be forced opened i.e handle invisible element using force:true
    //   cy.contains("Top").click();
      cy.url().should('include','top')
    })
  })