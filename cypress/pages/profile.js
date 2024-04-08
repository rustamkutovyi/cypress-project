import BasePage from './base'
import {Navbar} from '../elements'

export const ProfilePage = new class extends BasePage {
  navbar = Navbar
  get imageAvatar() {
    return cy.get('.ant-avatar-square')
  }

  open() {
    return cy.visit(`/profile/658de49f5e00ded482a1d2d6`)
  }

  openProgress() {
    return cy.visit(`/profile/658de49f5e00ded482a1d2d6/progress`)
  }
}

