/// <reference types='cypress' />

class fazCadastro {
   get #user() { return cy.get("#reg_email")}
   get #pass() { return cy.get("#reg_password")}
   get #login() { return cy.get(":nth-child(4) > .button")}

   login(user, pass){
    this.#user.type(user)
    this.#pass.type(pass)
    this.#login.click()
   }
}

module.exports = new fazCadastro
