/// <reference types='cypress' />

class fazCadastro {
   get #user() { return cy.get("#user_login")}
   get #pass() { return cy.get("#user_pass")}
   get #register() { return cy.get("#wp-submit")}

   register(user, pass){
      this.#user.wait(200).type(user, {force: true})
      this.#pass.type(pass)
      this.#register.click()
   }
}

module.exports = new fazCadastro
