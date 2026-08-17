<script setup>
const FILL = new Set(['github', 'linkedin', 'telegram', 'play', 'apple'])

const MARKUP = {
  github: '<path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5.1 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9 9 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 4-2.4 4.8-4.6 5.1.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2Z"/>',
  linkedin: '<path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9Zm-1.5-10.3a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V19h-3v-9h2.9v1.2h.04a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7V19Z"/>',
  telegram: '<path d="M21.9 4.3 18.6 20c-.2 1.1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.2-8.3c.4-.4-.1-.6-.6-.2L6.1 13.5l-4.9-1.5c-1-.3-1.1-1 .2-1.5l19.1-7.4c.9-.3 1.7.2 1.4 1.7Z"/>',
  play: '<path d="M3.6 2.3 14 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1ZM15.4 13l2.7 2.5-3.6 2.1-1.8-1.7 2.7-2.9Zm0-2-2.7-2.9 1.8-1.7 3.6 2.1L15.4 11Zm4.2-2.4 1.8 1c.7.4.7 1.4 0 1.8l-1.8 1-2.3-2 2.3-1.8Z"/>',
  apple: '<path d="M16 3c.1 1-.3 2-1 2.8-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 1-2.7C14 3.5 15 3 16 3Zm3.2 14.4c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-4-1-2 0-2.5 1-4 1-1.7 0-3-1.7-4-3.1-2.7-4-3-8.6-1.3-11.1 1.2-1.7 3-2.7 4.8-2.7 1.8 0 2.9 1 4.3 1 1.4 0 2.2-1 4.3-1 1.5 0 3.2.9 4.3 2.3-3.8 2-3.2 7.3.9 8.5Z"/>',
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6" stroke-linecap="round" stroke-linejoin="round"/>',
  link: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" stroke-linecap="round"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" stroke-linecap="round"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" stroke-linejoin="round"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5" stroke-linecap="round"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>',
  arrowUpRight: '<path d="M7 17 17 7M8 7h9v9" stroke-linecap="round" stroke-linejoin="round"/>',
  database: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  monitor: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M7 12h5" stroke-linecap="round"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M10 18h4" stroke-linecap="round"/>',
  devops: '<path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke-linecap="round"/><circle cx="12" cy="12" r="4"/><path d="M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8" stroke-linecap="round"/>',
  package: '<path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" stroke-linejoin="round"/><path d="M3 7l9 5 9-5M12 12v10" stroke-linejoin="round"/>',
  check: '<path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>'
}

const STROKE_WIDTH = {
  email: 1.7,
  link: 1.8,
  sun: 1.8,
  moon: 1.8,
  menu: 1.8,
  database: 1.7,
  monitor: 1.7,
  phone: 1.7,
  devops: 1.7,
  package: 1.7,
  check: 1.7,
  user: 1.4
}

defineProps({
  name: { type: String, required: true }
})
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    :fill="FILL.has(name) ? 'currentColor' : 'none'"
    :stroke="FILL.has(name) ? 'none' : 'currentColor'"
    :stroke-width="STROKE_WIDTH[name] || 2"
    v-html="MARKUP[name]"
  ></svg>
</template>
