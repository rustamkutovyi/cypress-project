import {ProfilePage} from '../pages'
import * as color from '../fixtures/color.json'

describe('Profile', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      `${Cypress.env('apiBaseUrl')}/course/coursesProgress/*`,
      {
        statusCode: 200,
        body: {
          'message': 'Get courses progress',
          'success': true,
          'fail': false,
          'payload': [
            {
              '_id': '66131d0004b21e2734cafeca',
              'completedLessons': 0,
              'totalLessons': 142,
              'course': {
                '_id': '635c05ba659f6d77abf1f4e7',
                'name': 'JavaScript Syntax',
              },
            },
          ],
        },
      },
    )
    cy.loginByCredentials(Cypress.env('email'), Cypress.env('password'))
    ProfilePage.openProgress()

  })
  it('Sign out', () => {
    ProfilePage.navbar.dropdownUserName.click()
    ProfilePage.navbar.buttonLogOut.click()

    cy.location('pathname').should('eq', '/')
  })
  it.only('Course progress', () => {
    cy.get('[title="0%"]').should('have.text', '0%')
    cy.get('.ant-progress-bg')
      .should('not.be.visible')

    cy.intercept(
      'GET',
      `${Cypress.env('apiBaseUrl')}/course/coursesProgress/*`,
      {
        statusCode: 200,
        body: {
          'message': 'Get courses progress',
          'success': true,
          'fail': false,
          'payload': [
            {
              '_id': '66131d0004b21e2734cafeca',
              'completedLessons': 72,
              'totalLessons': 142,
              'course': {
                '_id': '635c05ba659f6d77abf1f4e7',
                'name': 'JavaScript Syntax',
              },
            },
          ],
        },
      },
    )
    cy.reload()
    cy.get('[title="51%"]').should('have.text', '51%')
    cy.get('.ant-progress-bg')
      .should('be.visible')
      .should('have.css', 'background-color', color.blue)

    cy.intercept(
      'GET',
      `${Cypress.env('apiBaseUrl')}/course/coursesProgress/*`,
      {
        statusCode: 200,
        body: {
          'message': 'Get courses progress',
          'success': true,
          'fail': false,
          'payload': [
            {
              '_id': '66131d0004b21e2734cafeca',
              'completedLessons': 142,
              'totalLessons': 142,
              'course': {
                '_id': '635c05ba659f6d77abf1f4e7',
                'name': 'JavaScript Syntax',
              },
            },
          ],
        },
      },
    )
    cy.reload()
    cy.get('.anticon-check-circle').should('be.visible')
    cy.get('.ant-progress-bg').should('have.css', 'background-color', color.green)
  })

})
