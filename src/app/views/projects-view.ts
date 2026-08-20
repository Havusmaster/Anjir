import { Component, signal, computed } from '@angular/core'
import { AppIcon } from '../components/app-icon'
import { ProjectCard } from '../components/project-card'
import { RevealDirective } from '../directives/reveal.directive'
import { PROJECTS } from '../data/projects'

interface Filter {
  key: string
  label: string
}

@Component({
  selector: 'app-projects-view',
  standalone: true,
  imports: [AppIcon, ProjectCard, RevealDirective],
  template: `
    <div>
      <div class="relative py-16 pb-8 border-b border-line overflow-hidden">
        <div class="grid-bg" style="background-size: 52px 52px; --grid-mask: linear-gradient(180deg, #000, transparent)"></div>
        <div class="container relative">
          <span class="eyebrow"><span class="idx">02</span> Projects</span>
          <h1 class="font-display font-medium text-[clamp(32px,5vw,58px)] leading-[1.05] tracking-[-0.03em] mt-4">What we've built</h1>
          <p class="text-ink2 text-[17px] mt-4 max-w-[60ch] leading-relaxed">Products, tools, and libraries shipped by the Anjir team. Filter by type or search by name and stack — each card shows platform, our role, timeline, and status.</p>
        </div>
      </div>

      <div class="section section-tight">
        <div class="container">
          <div appReveal class="flex items-center gap-4 flex-wrap mb-6 pb-5 border-b border-line">
            <div class="flex gap-1.5 flex-wrap">
              @for (f of FILTERS; track f.key) {
                <button
                  class="font-mono text-[13px] text-ink2 px-3.5 py-[7px] rounded-full border border-line transition-all hover:text-ink hover:border-line-strong"
                  [class]="filter() === f.key ? 'bg-accent text-accent-ink border-accent' : ''"
                  (click)="filter.set(f.key)"
                >
                  {{ f.label }}@if (f.key !== 'all') {<span class="opacity-60 ml-1">{{ countFor(f.key) }}</span>}
                </button>
              }
            </div>

            <div class="ml-auto relative flex items-center w-full md:w-auto">
              <app-icon name="search" class="absolute left-3 w-[15px] h-[15px] text-ink3 pointer-events-none" />
              <input
                [value]="query()"
                (input)="query.set(textValue($event))"
                type="text"
                placeholder="Search name or stack…"
                aria-label="Search projects"
                class="font-body text-sm bg-surface border border-line rounded-sm py-2.5 px-3 pl-[34px] text-ink w-full md:w-[220px] transition-colors focus:outline-none focus:border-accent placeholder:text-ink3"
              />
            </div>
          </div>

          <div class="font-mono text-xs text-ink3 mb-5">{{ countText() }}</div>

          @if (filtered().length) {
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              @for (p of filtered(); track p.name) {
                <app-project-card [project]="p" />
              }
            </div>
          } @else {
            <div class="text-center py-20 px-8 border border-dashed border-line-strong rounded-lg bg-surface">
              <div class="w-[52px] h-[52px] rounded-md bg-accent-fill grid place-items-center mx-auto mb-4 text-accent">
                <app-icon name="search" class="w-6 h-6" />
              </div>
              <h3 class="font-display text-xl mb-2">No projects match that</h3>
              <p class="text-ink2 text-sm max-w-[40ch] mx-auto mb-5">Try a different filter or clear your search to see everything the team has shipped.</p>
              <button class="btn btn-ghost" (click)="clear()">Clear filters</button>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class ProjectsView {
  readonly FILTERS: Filter[] = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'backend', label: 'Backend' },
    { key: 'opensource', label: 'Open Source' },
    { key: 'internal', label: 'Internal Tools' }
  ]

  readonly filter = signal('all')
  readonly query = signal('')

  readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase()
    return PROJECTS.filter((p) => {
      const okTag = this.filter() === 'all' || p.tags.includes(this.filter())
      const hay = (p.name + ' ' + p.stack.join(' ') + ' ' + p.cat).toLowerCase()
      const okSearch = !q || hay.includes(q)
      return okTag && okSearch
    })
  })

  readonly countText = computed(() => {
    const n = this.filtered().length
    return `${n} project${n === 1 ? '' : 's'}${this.filter() === 'all' ? '' : ' · ' + this.filter()}`
  })

  countFor(key: string) {
    return PROJECTS.filter((p) => p.tags.includes(key)).length
  }

  textValue(event: Event): string {
    return (event.target as HTMLInputElement).value
  }

  clear() {
    this.filter.set('all')
    this.query.set('')
  }
}