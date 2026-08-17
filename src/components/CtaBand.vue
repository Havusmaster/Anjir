<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  eyebrow: { type: String, default: 'Let\u2019s talk' },
  arrow: { type: Boolean, default: true },
  title: { type: String, default: 'Let\u2019s build something meaningful.' },
  text: { type: String, default: '' },
  primaryLabel: { type: String, default: 'Contact Anjir' },
  primaryTo: { type: String, default: 'contact' },
  secondaryLabel: { type: String, default: 'View our GitHub' },
  secondaryTo: { type: String, default: '' },
  secondaryHref: { type: String, default: '' }
})

defineEmits(['navigate'])
</script>

<template>
  <div class="relative border border-accent/30 rounded-lg px-8 py-12 lg:px-12 lg:py-16 overflow-hidden bg-accent-fill text-center">
    <div class="grid-bg opacity-50" style="background-size: 40px 40px; --grid-mask: radial-gradient(ellipse 70% 80% at 50% 50%, #000, transparent 80%)"></div>
    <div class="relative z-[1]">
      <span class="eyebrow justify-center"><span v-if="arrow" class="idx">→</span>{{ eyebrow }}</span>
      <h2 class="font-display font-medium text-[clamp(28px,4.6vw,48px)] leading-[1.08] tracking-[-0.03em] mt-4 mb-4 mx-auto max-w-[18ch]">
        {{ title }}
      </h2>
      <p v-if="text" class="text-ink2 text-base max-w-[46ch] mx-auto mb-6 leading-relaxed">{{ text }}</p>
      <div class="flex gap-3 justify-center flex-wrap">
        <a class="btn btn-accent btn-lg" @click.prevent="$emit('navigate', primaryTo)">
          {{ primaryLabel }}
          <AppIcon name="arrowRight" />
        </a>
        <a v-if="secondaryHref" class="btn btn-ghost btn-lg" :href="secondaryHref">{{ secondaryLabel }}</a>
        <a v-else-if="secondaryTo" class="btn btn-ghost btn-lg" @click.prevent="$emit('navigate', secondaryTo)">{{ secondaryLabel }}</a>
      </div>
    </div>
  </div>
</template>
