/// <reference types='cypress' />

describe('Funcionalidade de Checkout', () => {    
    it('Login com AppActions', () => {
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    });
});