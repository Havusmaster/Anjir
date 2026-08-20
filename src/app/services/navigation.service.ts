import { Injectable, signal } from '@angular/core'

export type ViewKey = 'home' | 'projects' | 'team' | 'about' | 'contact'

@Injectable({ providedIn: 'root' })
export class NavigationService {
  readonly currentView = signal<ViewKey>('home')

  go(view: ViewKey) {
    if (this.currentView() !== view) {
      this.currentView.set(view)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }
}