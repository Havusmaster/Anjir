import { Component, Input } from '@angular/core'
import { AppIcon } from './app-icon'
import { Avatar } from './avatar'

const ICON_NAMES: Record<string, string> = { tg: 'telegram', in: 'linkedin', gh: 'github' }

export interface MemberInput {
  name: string
  role: string
  initials: string
  photo?: string
  placeholder?: boolean
  focus: string
  primary: string
  desc: string
  tech: string[]
  social?: { tg?: string; in?: string; gh?: string }
}

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [AppIcon, Avatar],
  template: `
    @if (member.placeholder) {
      <article class="group border border-dashed border-line rounded-lg bg-elev overflow-hidden transition-colors duration-300">
        <div class="aspect-square bg-surface2 grid place-items-center text-ink3">
          <app-icon name="user" class="w-10 h-10" />
        </div>
        <div class="p-5 px-6 pb-6">
          <h3 class="font-display text-[18px] font-semibold">{{ member.name }}</h3>
          <div class="font-mono text-xs text-accent mt-1 mb-2.5">{{ member.role }}</div>
          <p class="text-[13px] text-ink2 leading-relaxed mb-3">{{ member.desc }}</p>
          <div class="flex gap-4 mb-3 pb-3 border-b border-line">
            <div class="flex-1">
              <div class="font-mono text-[9.5px] text-ink3 uppercase tracking-wider mb-0.5">Focus</div>
              <div class="text-[12.5px] text-ink font-medium">{{ member.focus }}</div>
            </div>
            <div class="flex-1">
              <div class="font-mono text-[9.5px] text-ink3 uppercase tracking-wider mb-0.5">Stack</div>
              <div class="text-[12.5px] text-ink font-medium">{{ member.primary }}</div>
            </div>
          </div>
          <div class="flex flex-wrap gap-1.5">
            @for (t of member.tech; track t) {
              <span class="chip">{{ t }}</span>
            }
          </div>
        </div>
      </article>
    } @else {
      <article class="group border border-line rounded-lg bg-elev overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-card">
        <div class="relative aspect-square overflow-hidden bg-surface2">
          <app-avatar [seed]="index" [initials]="member.initials" [photo]="member.photo || ''" />
          <div class="absolute inset-0 bg-gradient-to-t from-elev/90 to-transparent"></div>
          <div class="absolute bottom-3 left-3 flex gap-1.5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            @for (s of socials; track s.name) {
              <a
                [href]="s.href"
                [attr.aria-label]="s.name"
                class="w-8 h-8 grid place-items-center rounded-sm bg-elev/80 backdrop-blur border border-line text-ink2 transition-colors hover:text-accent hover:border-accent/30 hover:bg-accent-fill"
              >
                <app-icon [name]="s.name" class="w-[15px] h-[15px]" />
              </a>
            }
          </div>
        </div>
        <div class="p-5 px-6 pb-6">
          <h3 class="font-display text-[18px] font-semibold">{{ member.name }}</h3>
          <div class="font-mono text-xs text-accent mt-1 mb-2.5">{{ member.role }}</div>
          <p class="text-[13px] text-ink2 leading-relaxed mb-3">{{ member.desc }}</p>
          <div class="flex gap-4 mb-3 pb-3 border-b border-line">
            <div class="flex-1">
              <div class="font-mono text-[9.5px] text-ink3 uppercase tracking-wider mb-0.5">Focus</div>
              <div class="text-[12.5px] text-ink font-medium">{{ member.focus }}</div>
            </div>
            <div class="flex-1">
              <div class="font-mono text-[9.5px] text-ink3 uppercase tracking-wider mb-0.5">Stack</div>
              <div class="text-[12.5px] text-ink font-medium">{{ member.primary }}</div>
            </div>
          </div>
          <div class="flex flex-wrap gap-1.5">
            @for (t of member.tech.slice(0, 5); track t) {
              <span class="chip">{{ t }}</span>
            }
          </div>
        </div>
      </article>
    }
  `
})
export class MemberCard {
  @Input({ required: true }) member!: MemberInput
  @Input({ required: true }) index = 0

  get socials() {
    return Object.entries(this.member.social || {})
      .filter(([, v]) => v && v !== '[TELEGRAM LINK]')
      .map(([k, v]) => ({ name: ICON_NAMES[k] || k, href: v }))
  }
}