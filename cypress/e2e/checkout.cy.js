/// <reference types='cypress' />

const data = require('../fixtures/data.json')

describe('Funcionalidade de Checkout', () => {    
    it('Login com AppActions', () => {
        cy.login(data.usuario, data.senha)
    });
});