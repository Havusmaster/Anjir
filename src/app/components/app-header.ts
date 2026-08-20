import { Component, Input, Output, EventEmitter, HostListener, signal, inject } from '@angular/core'
import { AppIcon } from './app-icon'
import { BrandGlyph } from './brand-glyph'
import { ThemeService } from '../services/theme.service'
import { ViewKey } from '../services/navigation.service'
import { SOCIAL } from '../data/site'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppIcon, BrandGlyph],
  template: `
    <header
      class="sticky top-0 z-[100] border-b transition-all duration-300"
      [class]="scrolled() ? 'bg-bg/80 backdrop-blur-md border-line' : 'border-transparent'"
    >
      <div class="container">
        <nav class="flex items-center gap-8 h-16">
          <a href="#" class="brand" (click)="go('home')" aria-label="Anjir home">
            <app-brand-glyph />
            Anjir
          </a>

          <div class="hidden lg:flex gap-0.5 mx-auto">
            @for (item of NAV; track item.key) {
              <a
                href="#"
                class="nav-link"
                [class.active]="currentView === item.key"
                (click)="go(item.key)"
              >
                {{ item.label }}
              </a>
            }
          </div>

          <div class="flex items-center gap-3 ml-auto">
            <div class="hidden lg:flex gap-0.5">
              <a class="icon-btn" [href]="SOCIAL.github" aria-label="GitHub"><app-icon name="github" /></a>
              <a class="icon-btn" [href]="SOCIAL.linkedin" aria-label="LinkedIn"><app-icon name="linkedin" /></a>
              <a class="icon-btn" [href]="SOCIAL.telegram" aria-label="Telegram"><app-icon name="telegram" /></a>
            </div>
            <div class="hidden lg:block w-px h-[22px] bg-line"></div>

            <button class="icon-btn" [attr.aria-label]="'Toggle ' + (themeService.theme() === 'light' ? 'dark' : 'light') + ' theme'" (click)="themeService.toggle()">
              @if (themeService.theme() === 'dark') {
                <app-icon name="sun" />
              } @else {
                <app-icon name="moon" />
              }
            </button>

            <a href="#" class="btn btn-primary ml-1 hidden md:inline-flex" (click)="go('projects')">
              Explore Our Work
              <app-icon name="arrowRight" />
            </a>

            <button class="icon-btn lg:hidden" aria-label="Menu" (click)="toggleMenu.emit()">
              <app-icon name="menu" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  `
})
export class AppHeader {
  @Input({ required: true }) currentView!: ViewKey
  @Output() navigate = new EventEmitter<ViewKey>()
  @Output() toggleMenu = new EventEmitter<void>()
  readonly themeService = inject(ThemeService)

  readonly NAV = [
    { key: 'home' as ViewKey, label: 'Home' },
    { key: 'projects' as ViewKey, label: 'Projects' },
    { key: 'team' as ViewKey, label: 'Team' },
    { key: 'about' as ViewKey, label: 'About' },
    { key: 'contact' as ViewKey, label: 'Contact' }
  ]

  readonly SOCIAL = SOCIAL
  readonly scrolled = signal(false)

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 10)
  }

  go(view: ViewKey) {
    this.navigate.emit(view)
  }
}