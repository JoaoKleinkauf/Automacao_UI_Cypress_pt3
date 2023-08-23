/// <reference types='cypress' />

const fazCadastro = require('../support/pages/cadastro.page.js')
var { faker } = require('@faker-js/faker');

describe('Funcionalideda de Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
    });

    it('Cadastro com sucesso', () => {
        cy.get('.icon-user-unfollow').click()

        fazCadastro.login(faker.internet.email(), 'teste')

        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta, você')
    })
});