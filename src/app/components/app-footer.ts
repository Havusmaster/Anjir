import { Component, Input, Output, EventEmitter } from '@angular/core'
import { AppIcon } from './app-icon'
import { BrandGlyph } from './brand-glyph'
import { ViewKey } from '../services/navigation.service'
import { SOCIAL } from '../data/site'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AppIcon, BrandGlyph],
  template: `
    <footer class="border-t border-line py-16 pb-8 mt-8 bg-surface">
      <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 pb-12 border-b border-line">
          <div>
            <a href="#" class="brand mb-4" (click)="go('home')">
              <app-brand-glyph />
              Anjir
            </a>
            <p class="text-ink2 text-sm max-w-[34ch] leading-relaxed">A team of engineers building modern digital products.</p>
            <div class="font-mono text-[11px] text-ink3 mt-6 inline-flex items-center gap-2">
              <span class="w-[7px] h-[7px] rounded-full bg-success"></span>
              Available for new projects
            </div>
          </div>

          <div>
            <h5 class="font-mono text-[11px] text-ink3 uppercase tracking-wider mb-4">Pages</h5>
            @for (p of PAGES; track p.key) {
              <a
                href="#"
                class="block text-sm text-ink2 py-1.5 transition-colors hover:text-accent"
                (click)="go(p.key)"
              >
                {{ p.label }}
              </a>
            }
          </div>

          <div>
            <h5 class="font-mono text-[11px] text-ink3 uppercase tracking-wider mb-4">Build</h5>
            @for (b of BUILD; track b.label) {
              <a
                href="#"
                class="block text-sm text-ink2 py-1.5 transition-colors hover:text-accent"
                (click)="go('projects')"
              >
                {{ b.label }}
              </a>
            }
          </div>

          <div>
            <h5 class="font-mono text-[11px] text-ink3 uppercase tracking-wider mb-4">Connect</h5>
            @for (c of CONNECT; track c.label) {
              <a [href]="c.href" class="block text-sm text-ink2 py-1.5 transition-colors hover:text-accent">
                {{ c.label }}
              </a>
            }
          </div>
        </div>

        <div class="flex justify-between items-center pt-6 flex-wrap gap-4">
          <span class="font-mono text-xs text-ink3">© 2026 Anjir. All rights reserved.</span>
          <div class="flex gap-1.5">
            @for (s of SOCIALS; track s.name) {
              <a class="icon-btn" [href]="s.href" [attr.aria-label]="s.label">
                <app-icon [name]="s.name" />
              </a>
            }
          </div>
        </div>
      </div>
    </footer>
  `
})
export class AppFooter {
  @Input({ required: true }) currentView!: ViewKey
  @Output() navigate = new EventEmitter<ViewKey>()

  readonly PAGES: { key: ViewKey; label: string }[] = [
    { key: 'home', label: 'Home' },
    { key: 'projects', label: 'Projects' },
    { key: 'team', label: 'Team' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
  ]

  readonly BUILD = [
    { label: 'Web' },
    { label: 'Mobile' },
    { label: 'Backend' },
    { label: 'Open Source' }
  ]

  readonly CONNECT = [
    { label: 'GitHub ↗', href: SOCIAL.github },
    { label: 'LinkedIn ↗', href: SOCIAL.linkedin },
    { label: 'Telegram ↗', href: SOCIAL.telegram },
    { label: 'Email ↗', href: `mailto:${SOCIAL.email}` }
  ]

  readonly SOCIALS = [
    { name: 'github', href: SOCIAL.github, label: 'GitHub' },
    { name: 'linkedin', href: SOCIAL.linkedin, label: 'LinkedIn' },
    { name: 'telegram', href: SOCIAL.telegram, label: 'Telegram' }
  ]

  go(view: ViewKey) {
    this.navigate.emit(view)
  }
}