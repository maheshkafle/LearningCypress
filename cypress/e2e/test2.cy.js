describe('TestSuite ', () => {
    it('Test case', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get(".search-keyword").type('ca')
      cy.wait(2000)
      //selenium get hits url in browser where cypress get acts as findelement of selenium
      //Parent Child chaining
      //Click based on text of the product
      cy.get(".products").as("productLocator")
      cy.get("@productLocator").find('.product').each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text()
        if(textVeg.includes("Cashews")){
          cy.wrap($el).find("button").click()
        }
      })
      cy.get(".cart-icon").click()
      cy.contains("PROCEED TO CHECKOUT").click()
      cy.contains("Place Order").click()
    })
  })