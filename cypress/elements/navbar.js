export const Navbar = new class {
  get dropdownUserName() {
    return cy.get('a > .ms-2')
  }
  get buttonLogOut() {
    return cy.get('[data-qa="logout"]')
  }
  get linkCourses() {
    return cy.get('[data-qa="topmenu-Courses"]')
  }

  get linkChallenges() {
    return cy.get('[data-qa="topmenu-Challenges"]')
  }

  get linkInterview() {
    return cy.get('[data-qa="topmenu-Interview Questions"]')
  }
  get linkDiary() {
    return cy.get('[data-qa="topmenu-Diary"]')
  }

}