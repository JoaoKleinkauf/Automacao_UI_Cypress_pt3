/// <reference types='cypress' />

Cypress.Commands.add('login', (user, pass) =>{

    const fd = new FormData()
    fd.append('log', user)
    fd.append('pwd', pass)
    fd.append('wp-submit', "Acessar")
    fd.append('redirect_to', `http://lojaebac.ebaconline.art.br/wp-login`)
    fd.append('testcookie', 1)

    cy.request({
        url: `http://lojaebac.ebaconline.art.br/wp-login.php`,
        method: 'POST',
        body: fd
    }).then((resp) => {
        resp.headers['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const separador = firstPart.indexOf('=')
            const name = firstPart.substring(0, separador)
            const value = firstPart.substring(separador + 1)  
            cy.setCookie(name, value)
        })
    })
    
    cy.visit("http://lojaebac.ebaconline.art.br/wp-admin")
});