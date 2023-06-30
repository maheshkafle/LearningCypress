describe('TestSuite ', () => {
    it('Test case', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      //CSS Selector combining parent to child, nth-child keyword
      cy.get('tr td:nth-child(2)').each( ($el, index, $list) => {
        const TextPrice = $el.text()
        if(TextPrice.includes('WebSecurity')){
            cy.get('tr td:nth-child(2)').eq(index).next().then((price)=> {
                const actualPrice = price.text()
                expect(actualPrice).to.eq("20")
            })
        }
      })
    })
  })