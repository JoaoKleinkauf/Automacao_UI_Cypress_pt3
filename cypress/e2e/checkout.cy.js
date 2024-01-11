/// <reference types="cypress" />

const data = require("../fixtures/data.json")

context('Resliza o checkout de um produto', () => {
    
    beforeEach(() => {
        cy.login(data.usuario, data.senha)
        cy.visit("http://lojaebac.ebaconline.art.br/wp-login.php")
        cy.get('[aria-haspopup="true"] > .display-name').should('contain', 'gerente')
    });

    it('Login', () => {

        cy.addItem()
        cy.checkout(data.firstname, data.lastname, data.pais, data.endereço, data.cidade, data.estado, data.cep, data.telefone, data.email)
        cy.checkoutConfirm()
    });

});