import { Component, Input } from '@angular/core'
import { AppIcon } from './app-icon'
import { Mockup } from './mockup'
import { STATUS } from '../data/projects'

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [AppIcon, Mockup],
  template: `
    <article
      class="group flex flex-col border border-line rounded-lg bg-elev overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-card-lg"
      [class]="project.wide ? 'md:col-span-2' : ''"
    >
      <div class="relative aspect-video overflow-hidden border-b border-line bg-surface2" [class]="project.wide ? 'md:aspect-[21/8]' : ''">
        <span class="absolute top-3 left-3 z-[3] inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-full bg-elev/80 backdrop-blur border border-line">
          <span class="w-1.5 h-1.5 rounded-full" [class]="status.dot"></span>
          {{ status.label }}
        </span>
        <div class="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]">
          <app-mockup [kind]="project.mock" [seed]="seed" />
        </div>
      </div>

      <div class="p-6 flex flex-col gap-3 flex-1">
        <div class="flex items-start justify-between gap-4">
          <h3 class="font-display text-[21px] font-semibold tracking-tight">{{ project.name }}</h3>
          <span class="font-mono text-[11px] text-accent uppercase tracking-wide whitespace-nowrap">{{ project.cat }}</span>
        </div>
        <p class="text-sm text-ink2 leading-relaxed">{{ project.desc }}</p>

        <div class="grid grid-cols-1 min-[420px]:grid-cols-3 gap-px bg-line border border-line rounded-md overflow-hidden mt-1">
          <div class="bg-bg p-2.5">
            <div class="font-mono text-[9.5px] text-ink3 uppercase tracking-wider mb-0.5">Platform</div>
            <div class="text-[12.5px] text-ink font-medium">{{ project.platform }}</div>
          </div>
          <div class="bg-bg p-2.5">
            <div class="font-mono text-[9.5px] text-ink3 uppercase tracking-wider mb-0.5">Our role</div>
            <div class="text-[12.5px] text-ink font-medium">{{ project.role }}</div>
          </div>
          <div class="bg-bg p-2.5">
            <div class="font-mono text-[9.5px] text-ink3 uppercase tracking-wider mb-0.5">Timeline</div>
            <div class="text-[12.5px] text-ink font-medium">{{ project.year }}</div>
          </div>
        </div>

        <div class="flex flex-wrap gap-1.5 mt-auto pt-2">
          @for (t of project.stack; track t) {
            <span class="chip">{{ t }}</span>
          }
        </div>

        <div class="flex gap-1 mt-2 pt-4 border-t border-line flex-wrap items-center">
          @for (l of project.links; track l[0]) {
            <a
              [href]="l[1]"
              (click)="$event.stopPropagation()"
              class="inline-flex items-center gap-1.5 font-mono text-xs text-ink2 px-2.5 py-1.5 rounded-sm border border-transparent transition-colors hover:text-accent hover:bg-accent-fill hover:border-accent/30"
            >
              <app-icon [name]="l[2]" class="w-3.5 h-3.5" />
              {{ l[0] }}
            </a>
          }
          <span class="inline-flex items-center gap-2 font-mono text-xs text-accent ml-auto px-1.5 py-1.5 transition-transform duration-300 group-hover:translate-x-[3px]">
            Case study
            <app-icon name="arrowUpRight" class="w-[15px] h-[15px]" />
          </span>
        </div>
      </div>
    </article>
  `
})
export class ProjectCard {
  @Input({ required: true }) project!: {
    name: string
    cat: string
    tags: string[]
    status: string
    wide?: boolean
    mock: string
    desc: string
    platform: string
    role: string
    year: string
    stack: string[]
    links: [string, string, string][]
  }

  get status() {
    return STATUS[this.project.status] || { label: '', dot: 'bg-accent' }
  }

  get seed() {
    return (this.project.name + this.project.cat).length
  }
}