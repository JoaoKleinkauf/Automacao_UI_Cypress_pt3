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
    // fazCadastro(email, pass){
    //     cy.get('.icon-user-unfollow').click()
    //     cy.get('#reg_email').type(email).click()
    //     cy.get('#reg_password').type(pass).click()
    //     cy.get(':nth-child(4) > .button').click()

    //     cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    // }
}

export default new cadastro()