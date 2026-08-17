<script setup>
import AppIcon from './AppIcon.vue'
import BrandGlyph from './BrandGlyph.vue'
import { SOCIAL } from '../data/site'

defineProps({
  currentView: { type: String, default: 'home' }
})

const emit = defineEmits(['navigate'])

const PAGES = [
  { key: 'home', label: 'Home' },
  { key: 'projects', label: 'Projects' },
  { key: 'team', label: 'Team' },
  { key: 'about', label: 'About' },
  { key: 'contact', label: 'Contact' }
]

const BUILD = [
  { label: 'Web' },
  { label: 'Mobile' },
  { label: 'Backend' },
  { label: 'Open Source' }
]

const CONNECT = [
  { label: 'GitHub ↗', href: SOCIAL.github },
  { label: 'LinkedIn ↗', href: SOCIAL.linkedin },
  { label: 'Telegram ↗', href: SOCIAL.telegram },
  { label: 'Email ↗', href: `mailto:${SOCIAL.email}` }
]

const SOCIALS = [
  { name: 'github', href: SOCIAL.github, label: 'GitHub' },
  { name: 'linkedin', href: SOCIAL.linkedin, label: 'LinkedIn' },
  { name: 'telegram', href: SOCIAL.telegram, label: 'Telegram' }
]
</script>

<template>
  <footer class="border-t border-line py-16 pb-8 mt-8 bg-surface">
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 pb-12 border-b border-line">
        <div>
          <a href="#" class="brand mb-4" @click.prevent="emit('navigate', 'home')">
            <BrandGlyph />
            Anjir
          </a>
          <p class="text-ink2 text-sm max-w-[34ch] leading-relaxed">A team of engineers building modern digital products.</p>
          <div class="font-mono text-[11px] text-ink3 mt-6 inline-flex items-center gap-2">
            <span class="w-[7px] h-[7px] rounded-full bg-success"></span>
            Available for new projects
          </div>
        </div>

        <div>
          <h5 class="font-mono text-[11px] text-ink3 uppercase tracking-wider mb-4">Pages</h5>
          <a
            v-for="p in PAGES"
            :key="p.key"
            href="#"
            class="block text-sm text-ink2 py-1.5 transition-colors hover:text-accent"
            @click.prevent="emit('navigate', p.key)"
          >
            {{ p.label }}
          </a>
        </div>

        <div>
          <h5 class="font-mono text-[11px] text-ink3 uppercase tracking-wider mb-4">Build</h5>
          <a
            v-for="b in BUILD"
            :key="b.label"
            href="#"
            class="block text-sm text-ink2 py-1.5 transition-colors hover:text-accent"
            @click.prevent="emit('navigate', 'projects')"
          >
            {{ b.label }}
          </a>
        </div>

        <div>
          <h5 class="font-mono text-[11px] text-ink3 uppercase tracking-wider mb-4">Connect</h5>
          <a v-for="c in CONNECT" :key="c.label" :href="c.href" class="block text-sm text-ink2 py-1.5 transition-colors hover:text-accent">
            {{ c.label }}
          </a>
        </div>
      </div>

      <div class="flex justify-between items-center pt-6 flex-wrap gap-4">
        <span class="font-mono text-xs text-ink3">© 2026 Anjir. All rights reserved.</span>
        <div class="flex gap-1.5">
          <a v-for="s in SOCIALS" :key="s.name" class="icon-btn" :href="s.href" :aria-label="s.label">
            <AppIcon :name="s.name" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
