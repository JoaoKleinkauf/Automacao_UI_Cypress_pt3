/// <reference types="cypress" />

const data = require("../fixtures/data.json")
const pedido = require("../fixtures/pedido.json")

describe('Realiza o checkout de um produto', () => {

    context('Dado que eu acesse a EBAC Store', () => {
        beforeEach(() => {
            cy.visit("http://lojaebac.ebaconline.art.br")
        });

        context('Quando eu entrar na pagina de login do admin e efetuar o acesso, após realizar uma compra', () => {
            before(() => {
                cy.login(data.usuario, data.senha)
                cy.visit("http://lojaebac.ebaconline.art.br/wp-login.php")
                cy.get('[aria-haspopup="true"] > .display-name').should('contain', 'gerente')
            });

            it('Então devo ser encaminhado para a pagina de agradecimento da EBAC Store', () => {
                cy.addItem(pedido.url, pedido.tamanho, pedido.cor)
                cy.checkout(data.firstname, data.lastname, data.pais, data.endereço, data.cidade, data.estado, data.cep, data.telefone, data.email)
                cy.get('#terms').click()
                cy.checkoutConfirm()
                cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
            });
        });
    });
});