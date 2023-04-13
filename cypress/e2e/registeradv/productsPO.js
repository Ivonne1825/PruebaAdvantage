class ProductsPO {
    elements = {
        butSpeakIm: () => cy.get("#speakersImg"),
        butTabletsIm: () => cy.get('#tabletsImg'),
        butLapIm: () => cy.get('#laptopsImg'),
        butmicIm: () => cy.get('#miceImg'),
        butHeadIm: () => cy.get('#headphonesImg'),
        
       
    }
    butSpeakIm() {
        return this.elements.butSpeakIm()
    }
    butTabletsIm() {
        return this.elements.butTabletsIm()
    }
    butLapIm() {
        return this.elements.butLapIm()
    }
    butmicIm() {
        return this.elements.butmicIm()
    }
    butHeadIm() {
        return this.elements.butHeadIm()
    }
    

}

export default ProductsPO