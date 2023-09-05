/// <reference types='cypress' />

Cypress.Commands.add('login', (user, pass) =>{

    const fd = new FormData()
    fd.append('username', user)
    fd.append('password', pass)
    fd.append('woocommerce-login-nonce', '362d0258e4')
    fd.append('_wp_http_referer', `/minha-conta/`)
    fd.append('login', 'Login')

    cy.request({
        url: 'http://lojaebac.ebaconline.art.br/minha-conta/',
        method: "POST",
        body: fd
    }).then(resp => {
        resp.headers['Set-Cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const divisor = firstPart.indexOf('=')
            const key = firstPart.substring(0, divisor)
            const value = firstPart.substring(divisor + 1)
            cy.setCookie(key, value)
        })
    })

    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
})