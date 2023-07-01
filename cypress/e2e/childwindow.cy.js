describe('Test', () => {
    it('Open child window', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      //Here cypress assumes opening new child window it equivalent to child window in same tab. This is why get locator is different. i.e #opentab not #openwindow
      cy.get("#opentab").then( (el)=>{
        const url = el.prop('href')
        cy.log(url)
        cy.visit(url)
        cy.origin(url, ()=>{
            cy.get(".sub-menu-bar a[href='about.html']").click()
            cy.url().should('equal', 'https://www.qaclickacademy.com/about.html')
        })
      })
    })
  })