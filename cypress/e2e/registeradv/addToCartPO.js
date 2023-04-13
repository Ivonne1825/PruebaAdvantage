class CartPO {
    elements = {
        butSpeakIm: () => cy.get("#speakersImg"),
        butSpeakRed: () => cy.get("#24"),
        butSave: () => cy.get("button[name='save_to_cart']"),
        butCart: () => cy.get("#menuCart"),

    }
    butSpeakIm() {
        return this.elements.butSpeakIm()
    }
    butSpeakRed() {
        return this.elements.butSpeakRed()
    }
    butSave() {
        return this.elements.butSave()
    }
    butCart() {
        return this.elements.butCart()
    }
}


export default CartPO