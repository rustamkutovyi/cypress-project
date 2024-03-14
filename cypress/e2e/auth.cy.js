describe('Auth', () => {
    it('Sign in with valid credentials', () => {
        cy.visit('https://coding.pasv.us/user/login')
        cy.get('#normal_login_email').type('test1@example.com')
        cy.get('#normal_login_password').type('Qwerty1234')
        cy.get('button[type="submit"]').click()
        cy.get('.ant-avatar-square').should('be.visible')
    })
})