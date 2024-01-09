/// <reference types='cypress' />

const data = require('../fixtures/data.json')

describe('Funcionalidade de Checkout', () => {    
    beforeEach('Login com AppActions', () => {
        cy.login(data.usuario, data.senha)
    });

    it('Checkout bem sucedido', () => {
        cy.get('[aria-haspopup="true"] > .display-name').should('contain', 'gerente')
    })
});