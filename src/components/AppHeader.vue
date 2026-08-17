<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppIcon from './AppIcon.vue'
import BrandGlyph from './BrandGlyph.vue'
import { SOCIAL } from '../data/site'

defineProps({
  currentView: { type: String, default: 'home' },
  theme: { type: String, default: 'light' }
})

const emit = defineEmits(['navigate', 'toggle-theme', 'toggle-menu'])

const NAV = [
  { key: 'home', label: 'Home' },
  { key: 'projects', label: 'Projects' },
  { key: 'team', label: 'Team' },
  { key: 'about', label: 'About' },
  { key: 'contact', label: 'Contact' }
]

const scrolled = ref(false)
function onScroll() {
  scrolled.value = window.scrollY > 10
}
onMounted(() => addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="sticky top-0 z-[100] border-b transition-all duration-300"
    :class="scrolled ? 'bg-bg/80 backdrop-blur-md border-line' : 'border-transparent'"
  >
    <div class="container">
      <nav class="flex items-center gap-8 h-16">
        <a href="#" class="brand" @click.prevent="emit('navigate', 'home')" aria-label="Anjir home">
          <BrandGlyph />
          Anjir
        </a>

        <div class="hidden lg:flex gap-0.5 mx-auto">
          <a
            v-for="item in NAV"
            :key="item.key"
            href="#"
            class="nav-link"
            :class="{ active: currentView === item.key }"
            @click.prevent="emit('navigate', item.key)"
          >
            {{ item.label }}
          </a>
        </div>

        <div class="flex items-center gap-3 ml-auto">
          <div class="hidden lg:flex gap-0.5">
            <a class="icon-btn" :href="SOCIAL.github" aria-label="GitHub"><AppIcon name="github" /></a>
            <a class="icon-btn" :href="SOCIAL.linkedin" aria-label="LinkedIn"><AppIcon name="linkedin" /></a>
            <a class="icon-btn" :href="SOCIAL.telegram" aria-label="Telegram"><AppIcon name="telegram" /></a>
          </div>
          <div class="hidden lg:block w-px h-[22px] bg-line"></div>

          <button class="icon-btn" :aria-label="`Toggle ${theme === 'light' ? 'dark' : 'light'} theme`" @click="emit('toggle-theme')">
            <AppIcon v-if="theme === 'dark'" name="sun" />
            <AppIcon v-else name="moon" />
          </button>

          <a href="#" class="btn btn-primary ml-1 hidden md:inline-flex" @click.prevent="emit('navigate', 'projects')">
            Explore Our Work
            <AppIcon name="arrowRight" />
          </a>

          <button class="icon-btn lg:hidden" aria-label="Menu" @click="emit('toggle-menu')">
            <AppIcon name="menu" />
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
