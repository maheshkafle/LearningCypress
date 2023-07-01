describe('Test', () => {
    it('static and dynamic dropdowns', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      //Static dropdowns
      cy.get('select').select("option1").should('have.value', 'option1')

      //Dynamic dropdowns
      cy.get("#autocomplete").type("united")
      cy.get(".ui-menu-item div").each( ($el, index, $list) =>{
        cy.log($el.text())
        if($el.text()==="United States (USA)"){
          $el.click()
        }
      })
      //Dynamic Dropdown assertion
      cy.get("#autocomplete").should('have.value', 'United States (USA)')
    })
  })