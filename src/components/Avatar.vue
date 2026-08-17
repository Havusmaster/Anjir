<script setup>
import { useId } from 'vue'

const COLORS = ['#2F9557', '#4FB077', '#5DA9C9', '#B98514', '#7C8F55']

const props = defineProps({
  seed: { type: Number, default: 0 },
  initials: { type: String, default: 'AA' }
})

const c = COLORS[props.seed % COLORS.length]
const gid = useId()
</script>

<template>
  <svg class="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient :id="gid" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" :stop-color="c" stop-opacity="0.30" />
        <stop offset="1" :stop-color="c" stop-opacity="0.06" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="var(--color-surface2)" />
    <rect width="200" height="200" :fill="`url(#${gid})`" />
    <circle cx="100" cy="82" r="34" :fill="c" />
    <path d="M40 200c0-33 27-56 60-56s60 23 60 56" :fill="c" />
    <text x="100" y="118" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="42" font-weight="600" fill="#fff">{{ initials }}</text>
  </svg>
</template>
