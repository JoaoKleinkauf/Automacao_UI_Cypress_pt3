/// <reference types='cypress' />

const { dashboardPage, fazCadastro } = require('../support/pages')
const data = require('../fixtures/data.json')

describe('Funcionalideda de Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/wp-login.php')
    });

    it('Cadastro com sucesso', () => {

        fazCadastro.register(data.usuario, data.senha)
        dashboardPage.siteName.should("be.visible")
    })
});