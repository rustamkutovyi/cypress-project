before(() => {
  cy.request('POST', 'https://server-prod.pasv.us/user/login', {
    email: Cypress.env('email'),
    password: Cypress.env('password'),
  }).then(response => {
    Cypress.env('token', response.body.payload.token)
    Cypress.env('userId', response.body.payload.userId)
  })
})
