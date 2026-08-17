<script setup>
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'
import Mockup from './Mockup.vue'
import { STATUS } from '../data/projects'

const props = defineProps({
  project: { type: Object, required: true }
})

const status = computed(() => STATUS[props.project.status] || { label: '', dot: 'bg-accent' })
const seed = computed(() => (props.project.name + props.project.cat).length)
</script>

<template>
  <article
    class="group flex flex-col border border-line rounded-lg bg-elev overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-card-lg"
    :class="project.wide ? 'md:col-span-2' : ''"
  >
    <div class="relative aspect-video overflow-hidden border-b border-line bg-surface2" :class="project.wide ? 'md:aspect-[21/8]' : ''">
      <span class="absolute top-3 left-3 z-[3] inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-full bg-elev/80 backdrop-blur border border-line">
        <span class="w-1.5 h-1.5 rounded-full" :class="status.dot"></span>
        {{ status.label }}
      </span>
      <div class="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]">
        <Mockup :kind="project.mock" :seed="seed" />
      </div>
    </div>

    <div class="p-6 flex flex-col gap-3 flex-1">
      <div class="flex items-start justify-between gap-4">
        <h3 class="font-display text-[21px] font-semibold tracking-tight">{{ project.name }}</h3>
        <span class="font-mono text-[11px] text-accent uppercase tracking-wide whitespace-nowrap">{{ project.cat }}</span>
      </div>
      <p class="text-sm text-ink2 leading-relaxed">{{ project.desc }}</p>

      <div class="grid grid-cols-3 gap-px bg-line border border-line rounded-md overflow-hidden mt-1">
        <div class="bg-bg p-2.5">
          <div class="font-mono text-[9.5px] text-ink3 uppercase tracking-wider mb-0.5">Platform</div>
          <div class="text-[12.5px] text-ink font-medium">{{ project.platform }}</div>
        </div>
        <div class="bg-bg p-2.5">
          <div class="font-mono text-[9.5px] text-ink3 uppercase tracking-wider mb-0.5">Our role</div>
          <div class="text-[12.5px] text-ink font-medium">{{ project.role }}</div>
        </div>
        <div class="bg-bg p-2.5">
          <div class="font-mono text-[9.5px] text-ink3 uppercase tracking-wider mb-0.5">Timeline</div>
          <div class="text-[12.5px] text-ink font-medium">{{ project.year }}</div>
        </div>
      </div>

      <div class="flex flex-wrap gap-1.5 mt-auto pt-2">
        <span v-for="t in project.stack" :key="t" class="chip">{{ t }}</span>
      </div>

      <div class="flex gap-1 mt-2 pt-4 border-t border-line flex-wrap items-center">
        <a
          v-for="l in project.links"
          :key="l[0]"
          :href="l[1]"
          @click.stop
          class="inline-flex items-center gap-1.5 font-mono text-xs text-ink2 px-2.5 py-1.5 rounded-sm border border-transparent transition-colors hover:text-accent hover:bg-accent-fill hover:border-accent/30"
        >
          <AppIcon :name="l[2]" class="w-3.5 h-3.5" />
          {{ l[0] }}
        </a>
        <span class="inline-flex items-center gap-2 font-mono text-xs text-accent ml-auto px-1.5 py-1.5 transition-transform duration-300 group-hover:translate-x-[3px]">
          Case study
          <AppIcon name="arrowUpRight" class="w-[15px] h-[15px]" />
        </span>
      </div>
    </div>
  </article>
</template>
