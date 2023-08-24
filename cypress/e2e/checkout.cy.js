/// <reference types='cypress' />

describe('', () => {    
    it('Login com AppActions', () => {
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    });
});