import ProductsPO from "./productsPO";

const Product = new ProductsPO()

describe('Verificar que el usuario pueda ver los productos', () => {
    it('debería mostrar productos al hacer clic en una categoría', () => {
      cy.visit('https://www.advantageonlineshopping.com/#/')
    
  
      
    })
  
    
    beforeEach( () => {
        cy.visit("https://www.advantageonlineshopping.com/#/");
        cy.url().should("include", Cypress.env("baseUrlAdvantage"));
        
 
    })
    it("Product success", () => {
        Product.butSpeakIm().click({force: true}),
        Product.butTabletsIm().click({force: true}),
        Product.butLapIm().click({force: true}),
        Product.butmicIm().click({force: true}),
        Product.butHeadIm().click({force: true})
       
    })
})