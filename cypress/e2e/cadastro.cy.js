/// <reference types="cypress" />

const faker = require('faker-br');

import cadastroPage from "../support/pages/cadastro.page";

describe('Deve realizar o cadastro de um novo usuario na loja ebac', () => {

    context('Dado que eu visite a EBAC Store', () => {
        before(() => {
            cy.visit('http://lojaebac.ebaconline.art.br/')
        });
        
        context('Quando eu efetuar o cadastro de um usuario, uma senha e completar as informaçôes', () => {
            beforeEach(() => {
                var emailFaker = faker.internet.email()
                var passFaker = faker.internet.password()
                var nameFaker = faker.name.firstName()
                var lastFaker = faker.name.lastName()

                cy.get('.icon-user-unfollow').click()
                cadastroPage.fazCadastro(emailFaker, passFaker, nameFaker, lastFaker)
            });

            it('Então deve aparecer uma mensagem garantido a modificação dos dado', () => {
                cy.wait(3000)
                cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
            });
        });
    });
});