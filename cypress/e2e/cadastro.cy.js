/// <reference types='cypress' />

const fazCadastro = require('../support/pages/cadastro.page.js')
const { dashboardPage } = require('../support/pages/dashboard.page.js')
const data = require('../fixtures/data.json')

describe('Funcionalideda de Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/wp-login.php')
    });

    it('Cadastro com sucesso', () => {

        fazCadastro.login(data.usuario, data.senha)
        dashboardPage.siteName.should("be.visible")
    })
});