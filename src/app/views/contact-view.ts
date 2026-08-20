import { Component, signal } from '@angular/core'
import { AppIcon } from '../components/app-icon'
import { RevealDirective } from '../directives/reveal.directive'
import { SOCIAL } from '../data/site'

interface Channel {
  k: string
  v: string
  href: string
  icon: string
}

@Component({
  selector: 'app-contact-view',
  standalone: true,
  imports: [AppIcon, RevealDirective],
  template: `
    <div class="section pt-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div appReveal>
            <span class="eyebrow"><span class="idx">05</span> Contact</span>
            <h1 class="mt-4 font-display font-medium text-[clamp(30px,4.6vw,54px)] leading-[1.06] tracking-[-0.03em]">
              Let's build something <em class="not-italic text-accent">meaningful.</em>
            </h1>
            <p class="text-ink2 text-base mt-5 max-w-[44ch] leading-relaxed">
              Have an idea, project, or opportunity? Tell us a little about it and we'll get back to you. The fastest way to reach us is Telegram.
            </p>

            <div class="mt-8 flex flex-col gap-2">
              @for (ch of CHANNELS; track ch.k) {
                <a
                  [href]="ch.href"
                  class="group flex items-center gap-4 p-4 border border-line rounded-md transition-all bg-elev hover:border-accent/30 hover:bg-accent-fill hover:translate-x-1"
                >
                  <div class="w-10 h-10 rounded-sm bg-accent-fill grid place-items-center text-accent flex-none transition-colors group-hover:bg-elev">
                    <app-icon [name]="ch.icon" class="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <div class="text-[14.5px] font-medium">{{ ch.k }}</div>
                    <div class="font-mono text-xs text-ink3 mt-0.5">{{ ch.v }}</div>
                  </div>
                  <span class="ml-auto text-ink3 transition-all group-hover:text-accent group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                    <app-icon name="arrowUpRight" class="w-4 h-4" />
                  </span>
                </a>
              }
            </div>
          </div>

          <div appReveal class="border border-line rounded-lg p-8 bg-elev">
            <div class="mb-5">
              <label for="cf-name" class="font-mono text-[11px] text-ink2 uppercase tracking-wider block mb-2">Your name</label>
              <input
                id="cf-name"
                [value]="form.name"
                (input)="form.name = nameValue($event)"
                type="text"
                placeholder="Jane Doe"
                class="w-full font-body text-[15px] bg-surface border border-line rounded-sm px-3.5 py-3 text-ink transition-colors focus:outline-none focus:border-accent placeholder:text-ink3"
              />
            </div>
            <div class="mb-5">
              <label for="cf-email" class="font-mono text-[11px] text-ink2 uppercase tracking-wider block mb-2">Email</label>
              <input
                id="cf-email"
                [value]="form.email"
                (input)="form.email = nameValue($event)"
                type="email"
                placeholder="jane@company.com"
                class="w-full font-body text-[15px] bg-surface border border-line rounded-sm px-3.5 py-3 text-ink transition-colors focus:outline-none focus:border-accent placeholder:text-ink3"
              />
            </div>
            <div class="mb-5">
              <label for="cf-type" class="font-mono text-[11px] text-ink2 uppercase tracking-wider block mb-2">What's this about?</label>
              <select
                id="cf-type"
                [value]="form.type"
                (change)="form.type = selectValue($event)"
                class="w-full font-body text-[15px] bg-surface border border-line rounded-sm px-3.5 py-3 text-ink transition-colors focus:outline-none focus:border-accent"
              >
                <option>A new project</option>
                <option>A job / collaboration</option>
                <option>Just saying hi</option>
                <option>Something else</option>
              </select>
            </div>
            <div class="mb-5">
              <label for="cf-msg" class="font-mono text-[11px] text-ink2 uppercase tracking-wider block mb-2">Message</label>
              <textarea
                id="cf-msg"
                [value]="form.message"
                (input)="form.message = textValue($event)"
                rows="5"
                placeholder="Tell us a bit about what you have in mind…"
                class="w-full font-body text-[15px] bg-surface border border-line rounded-sm px-3.5 py-3 text-ink transition-colors resize-y focus:outline-none focus:border-accent placeholder:text-ink3"
              ></textarea>
            </div>
            <button
              class="btn btn-accent btn-lg w-full justify-center"
              [class]="sent() ? 'bg-success! text-white!' : ''"
              (click)="send()"
            >
              {{ sendLabel() }}
              @if (!sent()) {
                <app-icon name="arrowRight" />
              }
            </button>
            <div class="font-mono text-[11px] text-ink3 mt-4">// Design prototype — connect to your backend or a service like Formspree.</div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactView {
  readonly CHANNELS: Channel[] = [
    { k: 'Telegram', v: SOCIAL.telegram, href: SOCIAL.telegram, icon: 'telegram' },
    { k: 'LinkedIn', v: SOCIAL.linkedin, href: SOCIAL.linkedin, icon: 'linkedin' },
    { k: 'GitHub', v: SOCIAL.github, href: SOCIAL.github, icon: 'github' },
    { k: 'Email', v: SOCIAL.email, href: `mailto:${SOCIAL.email}`, icon: 'email' }
  ]

  readonly form = { name: '', email: '', type: 'A new project', message: '' }
  readonly sendLabel = signal('Send message')
  readonly sent = signal(false)

  nameValue(event: Event): string {
    return (event.target as HTMLInputElement).value
  }

  selectValue(event: Event): string {
    return (event.target as HTMLSelectElement).value
  }

  textValue(event: Event): string {
    return (event.target as HTMLTextAreaElement).value
  }

  send() {
    const name = this.form.name.trim()
    if (name) {
      this.sendLabel.set(`Thanks, ${name.split(' ')[0]} — message noted`)
      this.sent.set(true)
    } else {
      this.sendLabel.set('Fill in the form to send')
      this.sent.set(false)
    }
    setTimeout(() => {
      this.sendLabel.set('Send message')
      this.sent.set(false)
    }, 2400)
  }
}