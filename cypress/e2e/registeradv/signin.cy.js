import SignPO from "./signinPO";

const Log = new SignPO()
let info

describe(" verificar el inisio de sesión", () => {

    beforeEach( () => {
        cy.visit(Cypress.env("baseUrlAdvantage"));
        cy.url().should("include", Cypress.env("baseUrlAdvantage"));
       
        cy.fixture('example.json').then((data) => {
            info = data
        })

    });
    it("Register Success", () => {

     Log.buttonUser().click({force: true}),
     Log.username().type(info.username),
     Log.contraseña().type(info.password),
     Log.buttonSignin().click({force: true})
    })



})