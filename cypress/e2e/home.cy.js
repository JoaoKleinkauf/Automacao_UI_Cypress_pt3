/// <reference types="cypress" />

import carrinho from "../support/pages/home.page";

const faker = require('faker-br');

describe('Deve adicionar, remover e atualizar itens do carrinho', () => {

    context('Dado que eu visite a pagina do produto na loja EBAC', () => {
        beforeEach(() => {
            cy.visit('http://lojaebac.ebaconline.art.br')
        });

        it.only('Quando eu adicionar um item no carrinho', () => {
            var emailFaker = faker.internet.email()
            var passFaker = faker.internet.password()

            cy.get('.icon-user-unfollow').click()
            carrinho.loginCar(emailFaker, passFaker)
            cy.visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/')

            cy.intercept({
                method: 'POST',
                url: '/wp-admin/admin-ajax*'
            }), req => {
                req.reply(
                    {
                        statusCode: 200,
                        body: ``
                    }
                )
            }

            carrinho.addCarrinho()
            cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
        });

        it('E atualizo um item do carrinho', () => {
            var emailFaker = faker.internet.email()
            var passFaker = faker.internet.password()

            cy.get('.icon-user-unfollow').click()
            carrinho.loginCar(emailFaker, passFaker)
            cy.visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/')

            cy.intercept({
                method: 'POST',
                url: '/wp-admin/admin-ajax*'
            }), req => {
                req.reply(
                    {
                        statusCode: 200,
                        body: ``
                    }
                )
            }

            carrinho.addCarrinho()
            cy.get('.woocommerce-message > .button').click()
            cy.get('.plus').click()
            cy.get('.woocommerce-message').should('contain', 'Carrinho atualizado.')
        });

        it('E removo um item do carrinho', () => {
            var emailFaker = faker.internet.email()
            var passFaker = faker.internet.password()

            cy.get('.icon-user-unfollow').click()
            carrinho.loginCar(emailFaker, passFaker)
            cy.visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/')

            cy.intercept({
                method: 'POST',
                url: '/wp-admin/admin-ajax*'
            }), req => {
                req.reply(
                    {
                        statusCode: 200,
                        body: ``
                    }
                )
            }

            carrinho.addCarrinho()
            cy.get('.woocommerce-message > .button').click()
            cy.get('.remove > .fa').click()
            cy.get('.cart-empty').should('contain', 'Seu carrinho está vazio.')
        });

    });
});