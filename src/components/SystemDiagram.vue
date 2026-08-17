<template>
  <div class="relative bg-surface border border-line rounded-lg p-6 shadow-card-lg overflow-hidden">
    <div class="flex items-center gap-[7px] mb-5">
      <span class="w-[9px] h-[9px] rounded-full bg-line-strong"></span>
      <span class="w-[9px] h-[9px] rounded-full bg-line-strong"></span>
      <span class="w-[9px] h-[9px] rounded-full bg-line-strong"></span>
      <span class="ml-auto font-mono text-[11px] text-ink3">anjir/system.arch</span>
    </div>

    <svg class="w-full h-auto" viewBox="0 0 360 200" fill="none">
      <g stroke="var(--color-line-strong)" stroke-width="1.4" fill="none">
        <path d="M74 46 H150" />
        <path d="M224 46 H300" />
        <path d="M45 57 V120 H150" />
        <path d="M187 57 V120 H239" />
        <path d="M262 46 V120" />
      </g>
      <path class="sd-flow" d="M74 46 H150" />
      <path class="sd-flow" d="M224 46 H300" style="animation-delay: -1s" />
      <path class="sd-flow" d="M187 57 V120 H150" style="animation-delay: -1.8s" />
      <path class="sd-flow" d="M45 57 V120 H239" style="animation-delay: -2.5s" />
      <path class="sd-flow" d="M262 46 V120" style="animation-delay: -3.2s" />
      <g font-family="JetBrains Mono, monospace" font-size="11" fill="var(--color-ink)">
        <rect x="12" y="30" width="62" height="32" rx="6" fill="var(--color-surface2)" stroke="var(--color-line-strong)" />
        <text x="24" y="46">Client</text>
        <text x="24" y="55" font-size="8.5" fill="var(--color-ink3)">Angular</text>
        <rect x="150" y="30" width="74" height="32" rx="6" fill="var(--color-surface2)" stroke="var(--color-line-strong)" />
        <text x="162" y="46">API</text>
        <text x="162" y="55" font-size="8.5" fill="var(--color-ink3)">ASP.NET Core</text>
        <rect x="300" y="30" width="52" height="32" rx="6" fill="var(--color-surface2)" stroke="var(--color-line-strong)" />
        <text x="311" y="46">Auth</text>
        <text x="311" y="55" font-size="8.5" fill="var(--color-ink3)">JWT</text>
        <rect x="16" y="104" width="62" height="32" rx="6" fill="var(--color-surface2)" stroke="var(--color-line-strong)" />
        <text x="27" y="120">Mobile</text>
        <text x="27" y="129" font-size="8.5" fill="var(--color-ink3)">.NET MAUI</text>
        <rect x="150" y="104" width="74" height="32" rx="6" fill="var(--color-surface2)" stroke="var(--color-line-strong)" />
        <text x="162" y="120">Services</text>
        <text x="162" y="129" font-size="8.5" fill="var(--color-ink3)">Domain</text>
        <rect x="238" y="104" width="70" height="32" rx="6" fill="var(--color-surface2)" stroke="var(--color-line-strong)" />
        <text x="250" y="120">Database</text>
        <text x="250" y="129" font-size="8.5" fill="var(--color-ink3)">PostgreSQL</text>
      </g>
    </svg>

    <div class="mt-5 border-t border-line pt-4 font-mono text-[11px] text-ink3 leading-[1.9]">
      <div><span class="text-accent">→</span> deploy: <b class="text-success">succeeded</b> · build #<span class="text-accent">1XX</span></div>
      <div><span class="text-accent">→</span> tests: <b class="text-success">passing</b> · coverage XX%</div>
    </div>
  </div>
</template>
