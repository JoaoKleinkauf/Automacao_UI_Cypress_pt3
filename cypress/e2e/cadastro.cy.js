/// <reference types="cypress" />

import cadastroPage from "../support/pages/cadastro.page";

const faker = require('faker-br');

context('Deve realizar o cadastro de um novo usuario na loja ebac', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it('Completa o cadastro do usuario', () => {
        var emailFaker = faker.internet.email()
        var passFaker = faker.internet.password()

        cadastroPage.fazCadastro(emailFaker, passFaker)
    });
});