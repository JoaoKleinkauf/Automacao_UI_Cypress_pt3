class cadastro{
    fazCadastro(email, pass){
        cy.get('.icon-user-unfollow').click()
        cy.get('#reg_email').type(email).click()
        cy.get('#reg_password').type(pass).click()
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    }
}

export default new cadastro()