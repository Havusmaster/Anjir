import { Injectable, signal, effect } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<'light' | 'dark'>('light')

  constructor() {
    let saved: string | null = null
    try {
      saved = localStorage.getItem('anjir-theme')
    } catch {
      /* ignore */
    }
    if (saved === 'dark' || saved === 'light') this.theme.set(saved)
    effect(() => this.apply())
  }

  toggle() {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light')
  }

  private apply() {
    document.documentElement.classList.toggle('dark', this.theme() === 'dark')
    try {
      localStorage.setItem('anjir-theme', this.theme())
    } catch {
      /* ignore */
    }
  }
}