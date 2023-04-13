class RegisterPO {
    elements = {
        
        //Registro
        buttonCreateAcc: () => cy.get(".create-new-account.ng-scope"),
        registerUsername: () => cy.get("input[name='usernameRegisterPage']"),
        registerEmail: () => cy.get("input[name='passwordRegisterPage']"),
        registerPassword: () => cy.get("input[name='passwordRegisterPage']"),
        confirmPassword: () => cy.get("input[name='confirm_passwordRegisterPage']"),
        buttonAgree: () => cy.get("input[name='i_agree']"),
        buttonRegister: () => cy.get("#register_btnundefined"),
       

    }
    buttonCreateAccount() {
        return this.elements.buttonCreateAcc()
    }
    registerUsername() {
        return this.elements.registerUsername()
    }
    registerEmail() {
        return this.elements.registerEmail()
    }
    registerPassword() {
        return this.elements.registerPassword()
    }
    confirmPassword() {
        return this.elements.confirmPassword()
    }
    buttonAgree() {
        return this.elements.buttonAgree()
    }
    buttonRegister() {
        return this.elements.buttonRegister()
    }


}


export default RegisterPO