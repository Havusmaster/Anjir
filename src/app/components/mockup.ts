import { Component, Input } from '@angular/core'

const COLORS = ['#2F9557', '#4FB077', '#5DA9C9', '#B98514', '#7C8F55']

@Component({
  selector: 'app-mockup',
  standalone: true,
  template: `
    @if (kind === 'mobile') {
      <svg class="w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="225" fill="var(--color-surface2)" />
        <g transform="translate(150 26)">
          <rect width="100" height="180" rx="14" fill="var(--color-elev)" stroke="var(--color-line-strong)" />
          <rect width="100" height="42" rx="14" [attr.fill]="c" />
          <rect x="12" y="14" width="46" height="6" rx="3" fill="#fff" opacity="0.92" />
          <rect x="12" y="26" width="30" height="4" rx="2" fill="#fff" opacity="0.6" />
          <rect x="12" y="54" width="76" height="26" rx="6" fill="var(--color-surface2)" />
          <rect x="12" y="86" width="76" height="26" rx="6" fill="var(--color-surface2)" />
          <rect x="12" y="118" width="76" height="26" rx="6" [attr.fill]="c" opacity="0.16" />
          <circle cx="24" cy="131" r="6" [attr.fill]="c" />
          <rect x="36" y="128" width="40" height="5" rx="2.5" fill="var(--color-ink3)" />
          <rect x="30" y="160" width="40" height="6" rx="3" [attr.fill]="c" />
        </g>
        <circle cx="60" cy="60" r="30" [attr.fill]="c" opacity="0.10" />
        <circle cx="340" cy="170" r="40" [attr.fill]="c" opacity="0.08" />
      </svg>
    } @else if (kind === 'backend') {
      <svg class="w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="225" fill="var(--color-surface2)" />
        <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--color-ink3)">
          <rect x="24" y="24" width="352" height="177" rx="10" fill="var(--color-elev)" stroke="var(--color-line-strong)" />
          <circle cx="40" cy="40" r="3.5" fill="var(--color-line-strong)" />
          <circle cx="52" cy="40" r="3.5" fill="var(--color-line-strong)" />
          <circle cx="64" cy="40" r="3.5" fill="var(--color-line-strong)" />
          <text x="40" y="70">GET /api/v1/cards</text>
          <text x="40" y="86" [attr.fill]="c">200 OK · 42ms</text>
          <text x="40" y="108">&#123;</text>
          <text x="56" y="122">"id": <tspan [attr.fill]="c">"a3f…"</tspan>,</text>
          <text x="56" y="136">"deck": <tspan [attr.fill]="c">"vocab"</tspan>,</text>
          <text x="56" y="150">"status": <tspan fill="#2F9557">"ok"</tspan></text>
          <text x="40" y="164">&#125;</text>
          <rect x="230" y="60" width="126" height="120" rx="6" fill="var(--color-surface2)" />
          <rect x="244" y="76" width="70" height="6" rx="3" [attr.fill]="c" />
          <rect x="244" y="94" width="98" height="4" rx="2" fill="var(--color-line-strong)" />
          <rect x="244" y="106" width="80" height="4" rx="2" fill="var(--color-line-strong)" />
          <rect x="244" y="118" width="90" height="4" rx="2" fill="var(--color-line-strong)" />
          <rect x="244" y="140" width="50" height="18" rx="4" [attr.fill]="c" opacity="0.2" />
        </g>
      </svg>
    } @else {
      <svg class="w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="225" fill="var(--color-surface2)" />
        <rect width="400" height="34" fill="var(--color-elev)" />
        <circle cx="18" cy="17" r="3.5" fill="var(--color-line-strong)" />
        <circle cx="30" cy="17" r="3.5" fill="var(--color-line-strong)" />
        <circle cx="42" cy="17" r="3.5" fill="var(--color-line-strong)" />
        <rect x="70" y="11" width="240" height="12" rx="6" fill="var(--color-surface2)" />
        <rect x="24" y="54" width="150" height="18" rx="4" [attr.fill]="c" />
        <rect x="24" y="80" width="220" height="7" rx="3.5" fill="var(--color-line-strong)" />
        <rect x="24" y="94" width="180" height="7" rx="3.5" fill="var(--color-line-strong)" />
        <rect x="24" y="118" width="70" height="22" rx="5" [attr.fill]="c" />
        <rect x="104" y="118" width="70" height="22" rx="5" fill="var(--color-elev)" stroke="var(--color-line-strong)" />
        <rect x="260" y="54" width="116" height="130" rx="8" fill="var(--color-elev)" stroke="var(--color-line-strong)" />
        <rect x="274" y="68" width="60" height="8" rx="4" [attr.fill]="c" opacity="0.8" />
        <rect x="274" y="86" width="88" height="5" rx="2.5" fill="var(--color-line-strong)" />
        <rect x="274" y="98" width="70" height="5" rx="2.5" fill="var(--color-line-strong)" />
        <rect x="274" y="120" width="88" height="40" rx="6" [attr.fill]="c" opacity="0.12" />
        <circle cx="60" cy="185" r="14" [attr.fill]="c" opacity="0.14" />
      </svg>
    }
  `
})
export class Mockup {
  @Input({ required: true }) kind = 'web'
  @Input({ required: true }) seed = 0

  get c(): string {
    return COLORS[this.seed % COLORS.length]
  }
}