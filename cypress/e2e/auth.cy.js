import {SignInPage, ProfilePage} from '../pages'

describe('Auth', () => {
  beforeEach(() => {
    SignInPage.open()
  })
  it('Sign in with valid credentials', () => {
    SignInPage.signIn(Cypress.env('email'), Cypress.env('password'))
    ProfilePage.imageAvatar.should('be.visible')
  })
  it('Sign in with invalid email credential', () => {
    SignInPage.signIn('test1111@example.com', 'Qwerty123411')
    SignInPage.toast
      .should('be.visible')
      .and('have.text', 'User login. Fail')
  })
  it('Check if button Войти is enabled if both email and password fields are not empty', () => {
    SignInPage.inputEmail.type(Cypress.env('email'))
    SignInPage.inputPassword.type(Cypress.env('password'))
    SignInPage.buttonSubmit.should('be.enabled')
  })
  it('Check if Required is visible', () => {
    SignInPage.inputEmail.type('test1@example.com').clear()
    // cy.get('.ant-form-item-explain-error').should('be.visible').and('have.text', 'Required')
    cy.contains('.ant-form-item-explain-error', 'Required')
    cy.get('.ant-form-item-explain-error').should('be.visible').and('have.text', 'Required')
    cy.get('.ant-form-item-explain-error').should('have.css', 'color', 'rgb(255, 77, 79)')
  })
  it('Sign in for validation', () => {
    SignInPage.inputEmail.should('have.value', '')
    SignInPage.inputPassword.should('have.value', '')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputPassword.type('test')
    SignInPage.labelValidationPassword.should('not.exist')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputEmail.type('test@')
    SignInPage.labelValidationEmail
      .should('have.text', `'email' is not a valid email`)
      .should('be.visible')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputEmail.type('example')
    SignInPage.labelValidationEmail
      .should('have.text', `'email' is not a valid email`)
      .should('be.visible')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputEmail.type('.')
    SignInPage.labelValidationEmail
      .should('have.text', `'email' is not a valid email`)
      .should('be.visible')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputEmail.type('com')
    SignInPage.labelValidationEmail.should('not.exist')
    SignInPage.buttonSubmit.should('be.enabled')

    SignInPage.inputEmail.clear()
    SignInPage.labelValidationEmail.should('have.text', 'Required').should('be.visible')

    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputPassword.clear()
    SignInPage.labelValidationPassword.should('have.text', 'Required').should('be.visible')

    SignInPage.buttonSubmit.should('be.disabled')
  })
})
