import { Component } from '@angular/core'

@Component({
  selector: 'app-brand-glyph',
  standalone: true,
  template: `
    <svg class="glyph" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 3c-.6 2.2-1.9 3.4-3.6 4" stroke="var(--color-accent-soft)" stroke-width="1.6" stroke-linecap="round" />
      <path d="M16 5.5c5.2 0 9.5 4.6 9.5 10.4 0 6.6-4.6 12.6-9.5 12.6S6.5 22.5 6.5 15.9C6.5 10.1 10.8 5.5 16 5.5Z" fill="var(--color-accent)" opacity="0.16" stroke="var(--color-accent)" stroke-width="1.4" />
      <circle cx="16" cy="17" r="1.1" fill="var(--color-accent)" />
      <circle cx="12.5" cy="15" r="1" fill="var(--color-accent)" />
      <circle cx="19.5" cy="15" r="1" fill="var(--color-accent)" />
      <circle cx="13.5" cy="20" r="1" fill="var(--color-accent)" />
      <circle cx="18.5" cy="20" r="1" fill="var(--color-accent)" />
      <circle cx="16" cy="12.5" r="1" fill="var(--color-accent)" />
    </svg>
  `
})
export class BrandGlyph {}