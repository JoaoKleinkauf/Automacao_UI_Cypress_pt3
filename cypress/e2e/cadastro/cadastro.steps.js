/// <reference types="cypress" />

const faker = require('faker-br');

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import cadastroPage from "../support/pages/cadastro.page";

Given("Dado que eu visite a EBAC Store", () => {
    cy.visit('http://lojaebac.ebaconline.art.br')
});

When('Quando eu efetuar o cadastro de um usuario, uma senha e completar as informaçôes', () => {
    var emailFaker = faker.internet.email()
    var passFaker = faker.internet.password()
    var nameFaker = faker.name.firstName()
    var lastFaker = faker.name.lastName()

    cy.get('.icon-user-unfollow').click()
    cadastroPage.fazCadastro(emailFaker, passFaker, nameFaker, lastFaker)
});

Then('Então deve aparecer uma mensagem garantido a modificação dos dado', () => {
    cy.wait(3000)
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.').pageTitle.should("be.visible")
});