/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit EBAC Store products page', () => {
    cy.login(data.usuario, data.senha)
})

When('I add product to the cart and complete shopping', ()=> {
    cy.addIten()
    cy.checkout()
})

When('I fill checkout', () => {
    cy.checkout(data.nome, data.sobrenome, data.empresa, data.pais, data.endereco, data.complemento, data.cidade, data.estado, data.cep, data.telefone, data.email)
})

Then('a success screen must appear', ()=> {
    cy.checkoutConfirm()
})