describe('Auth', () => {
    beforeEach(() => {
        cy.visit('https://coding.pasv.us/user/login')
    })
    it('Sign in with valid credentials', () => {

        cy.get('#normal_login_email').type('test1@example.com')
        cy.get('#normal_login_password').type('Qwerty1234')
        cy.get('button[type="submit"]').click()
        cy.get('.ant-avatar-square').should('be.visible')
    })
    it('Sign in with invalid email credential', () => {

        cy.get('#normal_login_email').type('test1111@example.com')
        cy.get('#normal_login_password').type('Qwerty1234')
        cy.get('button[type="submit"]').click()
        cy.get('.ant-notification-notice-message').should('be.visible').and('have.text', 'User login. Fail')
    });
    it('Check if button Войти is enabled if both email and password fields are not empty', () => {

        cy.get('#normal_login_email').type('test1@example.com')
        cy.get('#normal_login_password').type('Qwerty1234')
        cy.get('button[type="submit"]').should('be.enabled')
    })
    it('Check if Required is visible', () => {

        cy.get('#normal_login_email').type('test1@example.com').clear()
        // cy.get('.ant-form-item-explain-error').should('be.visible').and('have.text', 'Required')
        cy.contains('.ant-form-item-explain-error','Required')
        cy.get('.ant-form-item-explain-error').should('be.visible').and('have.text', 'Required')
        cy.get('.ant-form-item-explain-error').should('have.css', 'color', 'rgb(255, 77, 79)')
    });
    it('Sign in for validation', () => {

        cy.get('#normal_login_email').should('have.value', '')
        cy.get('#normal_login_password').should('have.value', '')
        cy.get('button[type="submit"]').should('be.disabled')

        cy.get('#normal_login_password').type('test')
        cy.get('#normal_login_password_help').should('not.exist')
        cy.get('button[type="submit"]').should('be.disabled')

        cy.get('#normal_login_email').type('test@')
        cy.get('#normal_login_email_help')
            .should('have.text', `'email' is not a valid email`)
            .should('be.visible')
        cy.get('button[type="submit"]').should('be.disabled')

        cy.get('#normal_login_email').type('example')
        cy.get('#normal_login_email_help')
            .should('have.text', `'email' is not a valid email`)
            .should('be.visible')
        cy.get('button[type="submit"]').should('be.disabled')

        cy.get('#normal_login_email').type('.')
        cy.get('#normal_login_email_help')
            .should('have.text', `'email' is not a valid email`)
            .should('be.visible')
        cy.get('button[type="submit"]').should('be.disabled')

        cy.get('#normal_login_email').type('com')
        cy.get('#normal_login_email_help').should('not.exist')
        cy.get('button[type="submit"]').should('be.enabled')

        cy.get('#normal_login_email').clear()
        cy.get('#normal_login_email_help')
            .should('have.text', 'Required')
            .should('be.visible')

        cy.get('button[type="submit"]').should('be.disabled')

        cy.get('#normal_login_password').clear()
        cy.get('#normal_login_password_help')
            .should('have.text', 'Required')
            .should('be.visible')

        cy.get('button[type="submit"]').should('be.disabled')
    })
})