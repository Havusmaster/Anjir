import { Component, Input, Output, EventEmitter } from '@angular/core'
import { ViewKey } from '../services/navigation.service'
import { SOCIAL } from '../data/site'

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  template: `
    <div
      class="fixed inset-x-0 top-16 bottom-0 z-[99] bg-bg px-8 py-8 overflow-y-auto border-t border-line transition-all duration-300"
      [class]="open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'"
    >
      @for (item of NAV; track item.key) {
        <a
          href="#"
          class="flex justify-between items-center font-display text-[28px] font-medium py-4 border-b border-line"
          [class]="currentView === item.key ? 'text-accent' : 'text-ink'"
          (click)="go(item.key)"
        >
          {{ item.label }}
          <span class="font-mono text-[13px] text-ink3">{{ item.num }}</span>
        </a>
      }

      <div class="flex gap-2 mt-8">
        <a [href]="SOCIAL.github" class="flex-1 justify-center items-center border border-line rounded-sm px-3 py-3 font-mono text-[12.5px] text-ink2 flex">GitHub ↗</a>
        <a [href]="SOCIAL.linkedin" class="flex-1 justify-center items-center border border-line rounded-sm px-3 py-3 font-mono text-[12.5px] text-ink2 flex">LinkedIn ↗</a>
        <a [href]="SOCIAL.telegram" class="flex-1 justify-center items-center border border-line rounded-sm px-3 py-3 font-mono text-[12.5px] text-ink2 flex">Telegram ↗</a>
      </div>
    </div>
  `
})
export class MobileMenu {
  @Input({ required: true }) open = false
  @Input({ required: true }) currentView!: ViewKey
  @Output() navigate = new EventEmitter<ViewKey>()
  @Output() close = new EventEmitter<void>()

  readonly NAV: { key: ViewKey; label: string; num: string }[] = [
    { key: 'home', label: 'Home', num: '01' },
    { key: 'projects', label: 'Projects', num: '02' },
    { key: 'team', label: 'Team', num: '03' },
    { key: 'about', label: 'About', num: '04' },
    { key: 'contact', label: 'Contact', num: '05' }
  ]

  readonly SOCIAL = SOCIAL

  go(view: ViewKey) {
    this.navigate.emit(view)
  }
}