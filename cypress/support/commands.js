import {SignInPage} from '../pages'

Cypress.Commands.add('loginByCredentials', (email, password) => {
  SignInPage.open()
  SignInPage.signIn(email, password)
  window.localStorage.setItem('lang', 'en')
})

Cypress.Commands.add('loginByToken', () => {
  cy.visit('/')
  window.localStorage.setItem('token', Cypress.env('token'))
  window.localStorage.setItem('userId', Cypress.env('userId'))
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
