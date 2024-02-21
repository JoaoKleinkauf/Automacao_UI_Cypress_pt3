/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { Login } = require('../../support/pages')
const data = require("../fixtures/data.json")

Given("Dado que eu acesse a EBAC Store", () => {
    cy.visit('http://lojaebac.ebaconline.art.br')
});

When('Quando eu entrar na pagina de login do admin e efetuar o acesso, após realizar uma compra', () => {
    cy.login(data.usuario, data.senha)
    cy.visit("http://lojaebac.ebaconline.art.br/wp-login.php")
    cy.get('[aria-haspopup="true"] > .display-name').should('contain', 'gerente')
});

Then('Então devo ser encaminhado para a pagina de agradecimento da EBAC Store', () => {
    cy.addItem()
    cy.checkout(data.firstname, data.lastname, data.pais, data.endereço, data.cidade, data.estado, data.cep, data.telefone, data.email)
    cy.checkoutConfirm()
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
});  