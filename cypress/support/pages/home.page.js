/// <reference types="cypress" />

class carrinho {

    addCarrinho() {
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
    }

    get #email() { return cy.get("#reg_email") }
    get #pass() { return cy.get("#reg_password") }
    get #reg() {return cy.get(":nth-child(4) > .button")}

    loginCar(emailFaker, passFaker) {
        this.#email.type(emailFaker)
        this.#pass.type(passFaker)
        this.#reg.click()
    }
}

export default new carrinho()
