/// <reference types='cypress' />

Cypress.Commands.add('login', (user, pass) =>{

    const fd = new FormData()
    fd.append('username', user)
    fd.append('password', pass)
    fd.append('woocommerce-login-nonce', '362d0258e4')
    fd.append('_wp_http_referer', `http://lojaebac.ebaconline.art.br/minha-conta/`)
    fd.append('register', 'Register')

    cy.request({
        url: 'http://lojaebac.ebaconline.art.br/minha-conta/',
        method: "POST",
        body: fd
    }).then(resp => {
        resp.headers['Set-Cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const separator = firstPart.indexOf('=')
            const name = firstPart.substring(0, separator)
            const value = firstPart.substring(separator + 1)  
            cy.setCookie(name, value)
        })
    })
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
})