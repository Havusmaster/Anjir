<script setup>
import { computed, ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import MobileMenu from './components/MobileMenu.vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import TeamView from './views/TeamView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import { useNavigation } from './composables/useNavigation'
import { useTheme } from './composables/useTheme'

const { currentView, go } = useNavigation()
const { theme, toggle } = useTheme()

const menuOpen = ref(false)

const VIEWS = {
  home: HomeView,
  projects: ProjectsView,
  team: TeamView,
  about: AboutView,
  contact: ContactView
}
const activeView = computed(() => VIEWS[currentView.value])

function navigate(view) {
  go(view)
  menuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader
      :current-view="currentView"
      :theme="theme"
      @navigate="navigate"
      @toggle-theme="toggle"
      @toggle-menu="menuOpen = !menuOpen"
    />

    <MobileMenu :open="menuOpen" :current-view="currentView" @navigate="navigate" @close="menuOpen = false" />

    <main class="flex-1">
      <Transition name="fade" mode="out-in">
        <component :is="activeView" :key="currentView" @navigate="navigate" />
      </Transition>
    </main>

    <AppFooter :current-view="currentView" @navigate="navigate" />
  </div>
</template>
