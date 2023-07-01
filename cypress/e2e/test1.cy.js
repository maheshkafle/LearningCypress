describe('Test', () => {
  it('search and click the product in ecommerce application', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get(".search-keyword").type('ca')
    cy.wait(2000)
    //selenium get hits url in browser where cypress get acts as findelement of selenium
    //:visible helps us to handle invisible elements present in page
    cy.get(".product:visible").should('have.length',4)
    //Parent Child chaining
    //Click based on position of the product
    //Alias concept: since we cannot create variable as we need to take care of resolving promise so there is concept of alias in cypress which acts like variable
    cy.get(".products").as("productLocator")
    cy.get("@productLocator").find('.product').should('have.length', 4).eq(2).contains('ADD TO CART').click()

    //Click based on text of the product
    cy.get("@productLocator").find('.product').each(($el, index, $list) => {
      const textVeg = $el.find("h4.product-name").text()
      if(textVeg.includes("Cashews")){
        cy.wrap($el).find("button").click()
      }
    })

    //Using Promise to print text (Promise has 3 states rejection, pending and resolved)
    //Note: text(){its a jquery method i.e cypress supports jquery method also} is not cypress command so we manually need to resolve the promise
    //Non cypress commands cannot resolve promise by themselves

    cy.get(".brand").then((x)=> {
      cy.log(x.text());
    })

   // const text = cy.get(".brand") //we cannot write like this. Promise isn't resolved so it will throw error.
  })
})