/// <reference types='cypress' />

Cypress.Commands.add('login', (user, pass) =>{

    const rh = new RequestHeaders()
    rh.append('Accept', "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7")
    rh.append('Accept-Encoding', "gzip, deflate")
    rh.append('Cache-Control', "no-cache")
    rh.append('Connection', "keep-alive")
    //rh.append('Cookie', "wordpress_test_cookie=WP%20Cookie%20check; wordpress_logged_in_cf6aa4b3d6c71965ba4f1e159b6a07f6=aluno_ebac%7C1693006105%7Cmr0G0luAO0Atiw7Yz5b1pXjXqhECvsXyT68lhRCUZQX%7C87d4d7eef9dcbe299af40152b56076d5fecc404bed3cead8aa67b0d4afa67cc8")
    rh.append('Host', "lojaebac.ebaconline.art.br")
    rh.append('Pragma', "no-cache")
    rh.append('Referer', "http://lojaebac.ebaconline.art.br/minha-conta/")
    rh.append('Upgrade-Insecure-Requests', 1)
    rh.append('User-Agent', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 OPR/100.0.0.0")

    cy.request({
        url: 'http://lojaebac.ebaconline.art.br/minha-conta/',
        method: 'GET',
        body: rh
    }).then(resp => {
        resp.headers['Cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const divisor = firstPart.indexOf('=')
            const key = firstPart.substring(0, divisor)
            const value = firstPart.substring(divisor+1)
            cy.setCookie(key, value)
        })
    })

    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
})