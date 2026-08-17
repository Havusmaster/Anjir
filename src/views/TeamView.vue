<script setup>
import MemberCard from '../components/MemberCard.vue'
import Timeline from '../components/Timeline.vue'
import { TEAM } from '../data/team'

const JOURNEY = [
  { year: '2024', title: 'Team formation', text: 'Anjir comes together around a shared idea: build products, own outcomes.', done: true },
  { year: '2025', title: 'First product & mobile app', text: 'First full-stack product ships, followed by a cross-platform mobile release.', done: true },
  { year: '2026', title: 'Production & new products', text: 'Repeatable releases and new tools in active development.', done: false }
]
</script>

<template>
  <div>
    <div class="relative py-16 pb-8 border-b border-line overflow-hidden">
      <div class="grid-bg" style="background-size: 52px 52px; --grid-mask: linear-gradient(180deg, #000, transparent)"></div>
      <div class="container relative">
        <span class="eyebrow"><span class="idx">03</span> Team</span>
        <h1 class="font-display font-medium text-[clamp(32px,5vw,58px)] leading-[1.05] tracking-[-0.03em] mt-4">The people behind Anjir</h1>
        <p class="text-ink2 text-[17px] mt-4 max-w-[60ch] leading-relaxed">A small, highly capable engineering team. Each card shows focus area, primary stack, and where to reach them.</p>
      </div>
    </div>

    <div class="section section-tight">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <MemberCard v-for="(m, i) in TEAM" :key="m.name" :member="m" :index="i" />
        </div>
      </div>
    </div>

    <div class="section section-tight">
      <div class="container">
        <div v-reveal class="max-w-[660px] mb-12">
          <span class="eyebrow"><span class="idx">↗</span> Our journey</span>
          <h2 class="font-display font-medium text-[clamp(27px,3.8vw,42px)] leading-[1.08] tracking-[-0.02em] mt-4">How we got here</h2>
        </div>
        <div v-reveal>
          <Timeline :items="JOURNEY" />
        </div>
      </div>
    </div>
  </div>
</template>
