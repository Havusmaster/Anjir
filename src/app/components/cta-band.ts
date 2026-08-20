import { Component, Input, Output, EventEmitter } from '@angular/core'
import { AppIcon } from './app-icon'
import { ViewKey } from '../services/navigation.service'

@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [AppIcon],
  template: `
    <div class="relative border border-accent/30 rounded-lg px-8 py-12 lg:px-12 lg:py-16 overflow-hidden bg-accent-fill text-center">
      <div class="grid-bg opacity-50" style="background-size: 40px 40px; --grid-mask: radial-gradient(ellipse 70% 80% at 50% 50%, #000, transparent 80%)"></div>
      <div class="relative z-[1]">
        <span class="eyebrow justify-center"><span class="idx">→</span>{{ eyebrow }}</span>
        <h2 class="font-display font-medium text-[clamp(28px,4.6vw,48px)] leading-[1.08] tracking-[-0.03em] mt-4 mb-4 mx-auto max-w-[18ch]">
          {{ title }}
        </h2>
        @if (text) {
          <p class="text-ink2 text-base max-w-[46ch] mx-auto mb-6 leading-relaxed">{{ text }}</p>
        }
        <div class="flex gap-3 justify-center flex-wrap">
          <a class="btn btn-accent btn-lg" (click)="navigate.emit(primaryTo)">
            {{ primaryLabel }}
            <app-icon name="arrowRight" />
          </a>
          @if (secondaryHref) {
            <a class="btn btn-ghost btn-lg" [href]="secondaryHref">{{ secondaryLabel }}</a>
          } @else if (secondaryTo) {
            <a class="btn btn-ghost btn-lg" (click)="navigate.emit(secondaryTo)">{{ secondaryLabel }}</a>
          }
        </div>
      </div>
    </div>
  `
})
export class CtaBand {
  @Input() eyebrow = 'Let\u2019s talk'
  @Input() arrow = true
  @Input() title = 'Let\u2019s build something meaningful.'
  @Input() text = ''
  @Input() primaryLabel = 'Contact Anjir'
  @Input() primaryTo: ViewKey = 'contact'
  @Input() secondaryLabel = 'View our GitHub'
  @Input() secondaryTo: ViewKey = 'contact'
  @Input() secondaryHref = ''
  @Output() navigate = new EventEmitter<ViewKey>()
}