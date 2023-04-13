import CartPO from "./addToCartPO"; 

const Carrito = new CartPO

describe('Verificar carrito de compras', () => {

    beforeEach(() => {
        cy.visit('https://www.advantageonlineshopping.com/#/');
        cy.url().should("include", Cypress.env("baseUrlAdvantage"));

    })
    it("Cart Success", () => {
        Carrito.butSpeakIm().click({force: true}),
        Carrito.butSpeakRed().click({force: true}),
        Carrito.butSave().click({force: true}).should("be.visible", "Add to Cart"),
        Carrito.butCart().click({force: true})
    })
  });