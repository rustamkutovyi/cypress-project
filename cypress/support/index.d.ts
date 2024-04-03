declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Sign in using email and password
     * @example
     * cy.login('foo@bar.com', '123456')
     */
    loginByCredentials(email: string, password: string): Chainable<any>

    /**
     * Sign in using email and password
     * @example
     */
    loginByToken(): Chainable<any>
  }
}