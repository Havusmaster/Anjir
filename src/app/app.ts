import { Component, inject, signal } from '@angular/core'
import { AppHeader } from './components/app-header'
import { AppFooter } from './components/app-footer'
import { MobileMenu } from './components/mobile-menu'
import { HomeView } from './views/home-view'
import { ProjectsView } from './views/projects-view'
import { TeamView } from './views/team-view'
import { AboutView } from './views/about-view'
import { ContactView } from './views/contact-view'
import { NavigationService, ViewKey } from './services/navigation.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeader, AppFooter, MobileMenu, HomeView, ProjectsView, TeamView, AboutView, ContactView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private nav = inject(NavigationService)
  readonly menuOpen = signal(false)

  readonly currentView = this.nav.currentView

  go(view: ViewKey) {
    this.nav.go(view)
    this.menuOpen.set(false)
  }

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen())
  }
}