import { Component, Output, EventEmitter } from '@angular/core'
import { CtaBand } from '../components/cta-band'
import { RevealDirective } from '../directives/reveal.directive'
import { ViewKey } from '../services/navigation.service'

interface Principle {
  pn: string
  title: string
  text: string
}

interface Step {
  n: string
  title: string
  text: string
}

@Component({
  selector: 'app-about-view',
  standalone: true,
  imports: [CtaBand, RevealDirective],
  template: `
    <div>
      <div class="relative py-16 pb-8 border-b border-line overflow-hidden">
        <div class="grid-bg" style="background-size: 52px 52px; --grid-mask: linear-gradient(180deg, #000, transparent)"></div>
        <div class="container relative">
          <span class="eyebrow"><span class="idx">04</span> About</span>
          <h1 class="font-display font-medium text-[clamp(32px,5vw,58px)] leading-[1.05] tracking-[-0.03em] mt-4">Engineers who ship.</h1>
          <p class="text-ink2 text-[17px] mt-4 max-w-[60ch] leading-relaxed">Anjir is a small team building modern digital products end to end — and caring about how they're built, not just that they work.</p>
        </div>
      </div>

      <div class="section section-tight">
        <div class="container">
          <div appReveal class="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-8 lg:gap-16 items-center">
            <div class="font-display font-normal text-[clamp(23px,3.2vw,38px)] leading-[1.26] tracking-[-0.02em]">
              We believe the best way to understand a problem is to <em class="not-italic text-accent">build the thing that solves it</em> — then measure, learn, and improve it in production.
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line rounded-lg overflow-hidden">
              @for (s of STATS; track s.s) {
                <div class="bg-elev p-6">
                  <b class="font-display text-[32px] font-semibold tracking-tight block">{{ s.b }}</b>
                  <span class="font-mono text-[11px] text-ink3 mt-1.5 block uppercase tracking-wider">{{ s.s }}</span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      <div class="section section-tight">
        <div class="container">
          <div appReveal class="max-w-[660px] mb-12">
            <span class="eyebrow"><span class="idx">01</span> Philosophy</span>
            <h2 class="font-display font-medium text-[clamp(27px,3.8vw,42px)] leading-[1.08] tracking-[-0.02em] mt-4">Build. Learn. Improve. Ship.</h2>
            <p class="text-ink2 text-base mt-3 max-w-[58ch] leading-relaxed">Six principles that describe how we work more honestly than any mission statement — each is a decision we make in code every day.</p>
          </div>

          <div appReveal class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            @for (p of PRINCIPLES; track p.pn) {
              <div class="border-t border-line pt-4">
                <div class="font-mono text-[11px] text-ink3">{{ p.pn }}</div>
                <h4 class="font-display text-[17px] font-medium mt-2.5 mb-2 flex items-center gap-2.5">
                  <span class="w-[7px] h-[7px] rounded bg-accent"></span>
                  {{ p.title }}
                </h4>
                <p class="text-[13.5px] text-ink2 leading-relaxed">{{ p.text }}</p>
              </div>
            }
          </div>
        </div>
      </div>

      <div class="section section-tight">
        <div class="container">
          <div appReveal class="max-w-[660px] mb-12">
            <span class="eyebrow"><span class="idx">02</span> How we work</span>
            <h2 class="font-display font-medium text-[clamp(27px,3.8vw,42px)] leading-[1.08] tracking-[-0.02em] mt-4">From idea to improvement</h2>
            <p class="text-ink2 text-base mt-3 max-w-[58ch] leading-relaxed">A loop, not a line — every deployment produces feedback that feeds the next idea.</p>
          </div>

          <div appReveal class="flex flex-wrap gap-2 mt-6">
            @for (step of PROCESS; track step.n) {
              <div class="flex-1 min-w-[132px] border border-line rounded-md p-5 px-4 transition-all bg-elev hover:border-accent/30 hover:bg-accent-fill">
                <div class="font-mono text-[11px] text-accent">{{ step.n }}</div>
                <h4 class="font-display text-[15px] font-medium mt-2.5">{{ step.title }}</h4>
                <p class="text-xs text-ink3 mt-1.5 leading-relaxed">{{ step.text }}</p>
              </div>
            }
          </div>
        </div>
      </div>

      <div class="section section-tight">
        <div class="container">
          <div appReveal>
            <app-cta-band
              eyebrow="Work with us"
              text="Have an idea, project, or opportunity? Let's talk."
              primaryTo="contact"
              secondaryLabel="See our work"
              secondaryTo="projects"
              (navigate)="go($event)"
            />
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutView {
  @Output() navigate = new EventEmitter<ViewKey>()

  readonly STATS = [
    { b: 'XX+', s: 'Projects shipped' },
    { b: 'XX+', s: 'Releases' },
    { b: '5', s: 'Core stacks' },
    { b: '100%', s: 'End-to-end ownership' }
  ]

  readonly PRINCIPLES: Principle[] = [
    { pn: 'P.01', title: 'Clean architecture', text: 'Layered, testable systems that are easy to reason about and cheap to change — structure over shortcuts.' },
    { pn: 'P.02', title: 'Maintainability', text: 'We write code the next engineer — often us, six months later — will thank us for reading.' },
    { pn: 'P.03', title: 'Security', text: 'Authentication, data access, and secrets are first-class concerns designed in, not bolted on.' },
    { pn: 'P.04', title: 'Automation', text: 'If we do it twice, we script it. Pipelines and tooling keep every release boring and predictable.' },
    { pn: 'P.05', title: 'Continuous learning', text: 'New tools, new patterns — the stack evolves because the team keeps learning.' },
    { pn: 'P.06', title: 'Product thinking', text: 'We ask why before how. Good engineering exists to serve a real user need.' }
  ]

  readonly PROCESS: Step[] = [
    { n: '01', title: 'Idea', text: 'Frame the real problem worth solving.' },
    { n: '02', title: 'Design', text: 'Shape the experience and interface.' },
    { n: '03', title: 'Architecture', text: 'Decide the system before the code.' },
    { n: '04', title: 'Development', text: 'Build in small, reviewable steps.' },
    { n: '05', title: 'Testing', text: 'Verify behaviour, not just coverage.' },
    { n: '06', title: 'Deployment', text: 'Ship through automated pipelines.' },
    { n: '07', title: 'Improve', text: 'Measure, learn, feed it back in.' }
  ]

  go(view: ViewKey) {
    this.navigate.emit(view)
  }
}