/// <reference types="cypress" />

class cadastro{

    get #email() {return cy.get("#reg_email")}
    get #pass() {return cy.get("#reg_password")}
    get #reg() {return cy.get(":nth-child(4) > .button")}
    get #edit() {return cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a")}
    get #firstName() {return cy.get("#account_first_name")}
    get #lastName() {return cy.get("#account_last_name")}
    get #save() {return cy.get(".woocommerce-Button")}

fazCadastro(emailFaker, passFaker, nameFaker, lastFaker){
    this.#email.type(emailFaker)
    this.#pass.type(passFaker)
    this.#reg.click()
    this.#edit.click()
    this.#firstName.type(nameFaker)
    this.#lastName.type(lastFaker)
    this.#save.click()

}
}

export default new cadastro()