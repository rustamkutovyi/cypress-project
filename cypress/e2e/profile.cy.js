import {ProfilePage, SignInPage} from '../pages'
describe('Profile', () => {
  beforeEach(() => {
    SignInPage.open()
    SignInPage.signIn(Cypress.env('email'), Cypress.env('password'))
  })
  it('Sign out', () => {
    ProfilePage.navbar.dropdownUserName.click()
    ProfilePage.navbar.buttonLogOut.click()
    cy.location('pathname').should('eq', '/')
  })
})
