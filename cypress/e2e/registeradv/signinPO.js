class SignPO {

    elements = {
         buttonUser: () => cy.get("#hrefUserIcon").should("be.visible"),
         username: () => cy.get("input[name='username']"),
         contraseña: () => cy.get("input[name='password']"),
         buttonSignin: () => cy.get("#sign_in_btnundefined"),
    }
    buttonUser() {
        return this.elements.buttonUser()
    }
    username() {
        return this.elements.username()
    }
    contraseña() {
        return this.elements.contraseña()
    }
    buttonSignin() {
        return this.elements.buttonSignin()
    }
}

export default SignPO