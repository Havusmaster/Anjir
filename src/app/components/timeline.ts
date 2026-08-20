import { Component, Input } from '@angular/core'

export interface TimelineItem {
  year: string
  title: string
  text: string
  note?: string
  done?: boolean
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  template: `
    <div class="relative mt-6">
      <div class="absolute left-[7px] top-2 bottom-2 w-px bg-line"></div>
      @for (item of items; track $index) {
        <div class="relative pl-12 pb-12 last:pb-0">
          <span
            class="absolute left-0 top-[5px] w-[15px] h-[15px] rounded-full border-2 border-line-strong bg-bg transition-colors"
            [class]="item.done ? 'border-accent bg-accent shadow-[0_0_0_4px_var(--color-accent-fill)]' : ''"
          ></span>
          <div class="font-mono text-xs text-accent tracking-wider">{{ item.year }}</div>
          <h4 class="font-display text-[19px] font-medium mt-1.5 mb-1.5">{{ item.title }}</h4>
          <p class="text-sm text-ink2 max-w-[56ch] leading-relaxed">{{ item.text }}</p>
          @if (item.note) {
            <div class="font-mono text-[11px] text-ink3 mt-2">{{ item.note }}</div>
          }
        </div>
      }
    </div>
  `
})
export class Timeline {
  @Input({ required: true }) items: TimelineItem[] = []
}