describe('TestSuite', () => {
    it('alert and cofirmation dialog', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get("#name").type("Mahesh")
      cy.get("#alertbtn").click()
      cy.get("#confirmbtn").click()
      //Assert the text present in Alert winwow
      cy.on('window:alert', (str1)=> {
        //chai assertion
        expect(str1).to.eq("Hello Mahesh, share this practice page and share your knowledge")
      })
      //Assert the text present in Alert winwow
      cy.on('window:confirm', (str2)=> {
        //Chai assertion
        expect(str2).to.eq("Hello , Are you sure you want to confirm?")
      })
  })
})