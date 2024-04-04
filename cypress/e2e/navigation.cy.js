import {SignInPage} from '../pages'
import {Navbar} from '../elements'

describe('Navigation', () => {
  beforeEach(() => {
   cy.loginByCredentials(Cypress.env('email'), Cypress.env('password'))
    // cy.get('div > .ms-4').click()
    // cy.get('').click()
  })
  it('Links', () => {
    Navbar.linkCourses.click()
    cy.contains('Interactive Courses').should('be.visible')
    cy.location('pathname').should('eq', '/course')

    Navbar.linkChallenges.click()
    cy.contains('Coding challenges').should('be.visible')
    cy.location('pathname').should('eq', '/challenge')

    Navbar.linkInterview.click()
    cy.contains('Interview practice cards').should('be.visible')
    cy.location('pathname').should('eq', '/flash')

    Navbar.linkDiary.click()
    cy.contains('Diary of progress helps to achieve big goals').should('be.visible')
    cy.location('pathname').should('eq', '/diary')
  })
})
