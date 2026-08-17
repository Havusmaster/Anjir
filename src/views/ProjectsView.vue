<script setup>
import { ref, computed } from 'vue'
import AppIcon from '../components/AppIcon.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { PROJECTS } from '../data/projects'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'backend', label: 'Backend' },
  { key: 'opensource', label: 'Open Source' },
  { key: 'internal', label: 'Internal Tools' }
]

const filter = ref('all')
const query = ref('')

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return PROJECTS.filter((p) => {
    const okTag = filter.value === 'all' || p.tags.includes(filter.value)
    const hay = (p.name + ' ' + p.stack.join(' ') + ' ' + p.cat).toLowerCase()
    const okSearch = !q || hay.includes(q)
    return okTag && okSearch
  })
})

const countText = computed(() => {
  const n = filtered.value.length
  return `${n} project${n === 1 ? '' : 's'}${filter.value === 'all' ? '' : ' · ' + filter.value}`
})

function clear() {
  filter.value = 'all'
  query.value = ''
}
</script>

<template>
  <div>
    <div class="relative py-16 pb-8 border-b border-line overflow-hidden">
      <div class="grid-bg" style="background-size: 52px 52px; --grid-mask: linear-gradient(180deg, #000, transparent)"></div>
      <div class="container relative">
        <span class="eyebrow"><span class="idx">02</span> Projects</span>
        <h1 class="font-display font-medium text-[clamp(32px,5vw,58px)] leading-[1.05] tracking-[-0.03em] mt-4">What we've built</h1>
        <p class="text-ink2 text-[17px] mt-4 max-w-[60ch] leading-relaxed">Products, tools, and libraries shipped by the Anjir team. Filter by type or search by name and stack — each card shows platform, our role, timeline, and status.</p>
      </div>
    </div>

    <div class="section section-tight">
      <div class="container">
        <div v-reveal class="flex items-center gap-4 flex-wrap mb-6 pb-5 border-b border-line">
          <div class="flex gap-1.5 flex-wrap">
            <button
              v-for="f in FILTERS"
              :key="f.key"
              class="font-mono text-[13px] text-ink2 px-3.5 py-[7px] rounded-full border border-line transition-all hover:text-ink hover:border-line-strong"
              :class="filter === f.key ? 'bg-accent text-accent-ink border-accent' : ''"
              @click="filter = f.key"
            >
              {{ f.label }}<span v-if="f.key !== 'all'" class="opacity-60 ml-1">{{ PROJECTS.filter((p) => p.tags.includes(f.key)).length }}</span>
            </button>
          </div>

          <div class="ml-auto relative flex items-center w-full md:w-auto">
            <AppIcon name="search" class="absolute left-3 w-[15px] h-[15px] text-ink3 pointer-events-none" />
            <input
              v-model="query"
              type="text"
              placeholder="Search name or stack…"
              aria-label="Search projects"
              class="font-body text-sm bg-surface border border-line rounded-sm py-2.5 px-3 pl-[34px] text-ink w-full md:w-[220px] transition-colors focus:outline-none focus:border-accent placeholder:text-ink3"
            />
          </div>
        </div>

        <div class="font-mono text-xs text-ink3 mb-5">{{ countText }}</div>

        <div v-if="filtered.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard v-for="p in filtered" :key="p.name" :project="p" />
        </div>

        <div v-else class="text-center py-20 px-8 border border-dashed border-line-strong rounded-lg bg-surface">
          <div class="w-[52px] h-[52px] rounded-md bg-accent-fill grid place-items-center mx-auto mb-4 text-accent">
            <AppIcon name="search" class="w-6 h-6" />
          </div>
          <h3 class="font-display text-xl mb-2">No projects match that</h3>
          <p class="text-ink2 text-sm max-w-[40ch] mx-auto mb-5">Try a different filter or clear your search to see everything the team has shipped.</p>
          <button class="btn btn-ghost" @click="clear">Clear filters</button>
        </div>
      </div>
    </div>
  </div>
</template>
