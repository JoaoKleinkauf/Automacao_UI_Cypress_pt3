/// <reference types="cypress" />

Cypress.Commands.add('login', (usuario, senha) => {
    const fd = new FormData()
    fd.append('log', usuario)
    fd.append('pwd', senha)
    fd.append('wp-submit', 'Acessar')
    fd.append('redirect_to', `http://lojaebac.ebaconline.art.br/wp-login.php`)
    fd.append('testcookie', 1)

    cy.request({
        url: `http://lojaebac.ebaconline.art.br/wp-login.php`,
        method: "POST",
        body: fd
    }).then((resp) => {
        resp.headers['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const separator = firstPart.indexOf('=')
            const name = firstPart.substring(0, separator)
            const value = firstPart.substring(separator + 1)
            cy.setCookie(name, value)
        })
    })
    
})

Cypress.Commands.add('addItem', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/product/augusta-pullover-jacket/')
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(1)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
})

Cypress.Commands.add('checkout', (firstName, lastName, pais, endereço, cidade, estado, cep, telefone, email) => {
    const fd = new FormData()
    fd.append('wc-ajax', 'checkout')
    fd.append('billing_first_name', firstName)
    fd.append('billing_last_name', lastName)
    fd.append('billing_country', pais)
    fd.append('billing_address_1', endereço)
    fd.append('billing_city', cidade)
    fd.append('billing_state', estado)
    fd.append('billing_postcode', cep)
    fd.append('billing_phone', telefone)
    fd.append('billing_email', email)
    fd.append('payment_method', 'cod')
    fd.append('terms', 'on')
    fd.append('terms-field', 1)
    fd.append('woocommerce-process-checkout-nonce', '4a4f1248ac')
    fd.append('_wp_http_referer', `http://lojaebac.ebaconline.art.br/?wc-ajax=update_order_review`)
    cy.request({
        url: `http://lojaebac.ebaconline.art.br/?wc-ajax=checkout`,
        method: "POST",
        body: fd
    }).then((resp) => {
        expect(resp.status).to.eq(200)
    })
    cy.visit(`http://lojaebac.ebaconline.art.br/checkout`)
})

Cypress.Commands.add('checkoutConfirm', () => {
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.wait(3000)
})
