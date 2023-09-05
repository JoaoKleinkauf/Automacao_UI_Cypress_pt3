/// <reference types="cypress" />
var faker = require('faker');

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { confirmPage } from "../../support/pages/confirm.page.js";
const cadastro = require('../../support/pages/cadastro.page.js')

Given("I visit EBAC Store register page", () => {
    cy.visit('/minha-conta')
});

When('I register with email and password', () => {
    const emailFaker = faker.internet.email()
    const senhaFaker = faker.internet.password()
    cadastro.register(emailFaker, senhaFaker)
});

Then('My account page must be visible', () => {
    confirmPage.pageTitle.should("be.visible")
});