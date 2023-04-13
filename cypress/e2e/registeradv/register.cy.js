import RegisterPO from "./registerPO";

const User = new RegisterPO()
let info

describe("Verificar que los usuarios puedan registrarse correctamente en la aplicación web , donde la  información requerida sea llenada., al finalizar pueda dar acceso a ll inicio de sesión", () => {

    beforeEach( () => {
        cy.visit(Cypress.env("baseUrlAdvantage"));
        cy.url().should("include", Cypress.env("baseUrlAdvantage"));
        
        cy.fixture('example.json').then((data) => {
            info = data
        })

    });
    it("Register Success", () => {
        
        
        User.buttonCreateAccount().click({force: true}),
        User.registerUsername().type(info.username),
        User.registerEmail().type(info.email),
        User.registerPassword().type(info.password)
        User.confirmPassword().type(info.passc, {force: true}),
        User.buttonAgree().click({force: true}),
        User.buttonRegister().click({force: true}) 

        // Verificar que se ha registrado exitosamente

        
    });
})
