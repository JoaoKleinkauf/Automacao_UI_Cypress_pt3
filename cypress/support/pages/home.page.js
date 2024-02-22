/// <reference types="cypress" />

class carrinho {

    addCarrinho(){
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
    }
}

export default new carrinho()