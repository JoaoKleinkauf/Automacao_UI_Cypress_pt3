/// <reference types='cypress' />

class fazCadastro {
   get #user() { return cy.get("#reg_email")}
   get #pass() { return cy.get("#reg_password")}
   get #register() { return cy.get("wp-submit")}

   register(email, pass){
      this.#user.wait(200).type(email, {force: true})
      this.#pass.type(pass)
      this.#register.click()
   }
}

module.exports = new fazCadastro
