/// <reference types="cypress" />

import carrinho from "../support/pages/home.page";

describe('Deve adicionar, remover e atualizar itens do carrinho', () => {
    
    context('Dado que eu visite a pagina do produto na loja EBAC', () => {
        before(() => {
            cy.visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/')
        }); 
        
        it('Quando eu adicionar um item no carrinho', () => {
            cy.intercept({
                method: 'POST',
                url: '/wp-admin/admin-ajax*'
            }), req=>{
                req.reply(
                    {
                        statusCode: 200,
                        body: ``
                    }
                )
            }

            carrinho.addCarrinho()
        });

    });

});