<script setup>
import AppIcon from '../components/AppIcon.vue'
import SystemDiagram from '../components/SystemDiagram.vue'
import ProjectCard from '../components/ProjectCard.vue'
import MemberCard from '../components/MemberCard.vue'
import CtaBand from '../components/CtaBand.vue'
import Timeline from '../components/Timeline.vue'
import { PROJECTS } from '../data/projects'
import { TEAM } from '../data/team'
import { SOCIAL } from '../data/site'

const emit = defineEmits(['navigate'])

const FACTS = [
  { b: 'Full-stack', s: 'Web · Mobile · API' },
  { b: '.NET + Angular', s: 'Core stack' },
  { b: 'XX+', s: 'Releases shipped' },
  { b: '2024', s: 'Team formed' }
]

const STACK = [
  '.NET', 'ASP.NET Core', 'Angular', 'TypeScript', 'PostgreSQL',
  'SQL Server', '.NET MAUI', 'Entity Framework', 'Azure DevOps', 'Docker'
]

const DEFS = [
  { k: 'What we do', v: '<b>Full-stack product engineering</b> — backend, web, mobile, and DevOps under one team.' },
  { k: 'How we work', v: 'Clean architecture, small reviewable changes, and automated, repeatable releases.' },
  { k: 'Core stack', v: '<b>.NET · ASP.NET Core · Angular · PostgreSQL · .NET MAUI</b>' },
  { k: 'Engagement', v: 'Building our own products and partnering with teams on new ones. <b>[LOCATION]</b>.' }
]

const CAPS = [
  {
    no: '01',
    icon: 'database',
    title: 'Backend Engineering',
    desc: 'Versioned REST APIs with request validation, JWT authentication, layered service design, and EF Core data access over relational databases.',
    deliver: 'API design · auth · migrations · structured logging',
    stack: ['ASP.NET Core', 'REST', 'EF Core', 'PostgreSQL']
  },
  {
    no: '02',
    icon: 'monitor',
    title: 'Frontend',
    desc: 'Component-driven Angular apps with typed state, reusable UI, and accessible, responsive layouts that stay fast as the product grows.',
    deliver: 'SPA architecture · design system · a11y · responsive UI',
    stack: ['Angular', 'TypeScript', 'HTML', 'CSS']
  },
  {
    no: '03',
    icon: 'phone',
    title: 'Mobile',
    desc: 'One codebase, two platforms. Cross-platform apps in .NET MAUI that share business logic with the backend and ship to Android and iOS.',
    deliver: 'shared code · offline sync · store releases',
    stack: ['.NET MAUI', 'Android', 'iOS', 'SQLite']
  },
  {
    no: '04',
    icon: 'devops',
    title: 'DevOps',
    desc: 'Build and release pipelines in Azure DevOps, containerized with Docker, so every deployment is automated, repeatable, and boring — the way it should be.',
    deliver: 'CI/CD · containers · environments · rollbacks',
    stack: ['Azure DevOps', 'CI/CD', 'Docker']
  },
  {
    no: '05',
    icon: 'package',
    title: 'Product Engineering',
    desc: 'The whole system, considered: architecture decisions, authentication, database design, and cloud infrastructure planned before the first line of code.',
    deliver: 'architecture · auth · data model · cloud setup',
    stack: ['Architecture', 'Auth', 'Cloud', 'APIs']
  }
]

const TECH = [
  { h: 'Backend', d: 'APIs, services & business logic.', items: ['.NET', 'ASP.NET Core', 'Entity Framework', 'C#'] },
  { h: 'Database', d: 'Storage, schema & migrations.', items: ['PostgreSQL', 'SQL Server', 'SQLite'] },
  { h: 'Frontend', d: 'Web clients & interfaces.', items: ['Angular', 'TypeScript', 'HTML', 'CSS'] },
  { h: 'Mobile', d: 'Cross-platform apps.', items: ['.NET MAUI', 'Android', 'iOS'] },
  { h: 'DevOps', d: 'Build, ship & run.', items: ['Azure DevOps', 'Docker', 'CI/CD'] }
]

const JOURNEY = [
  { year: '2024', title: 'Team formation', text: 'Anjir comes together — engineers who wanted to build and own products, not just take tickets.', note: '// [ACHIEVEMENT — editable]', done: true },
  { year: '2025', title: 'First product shipped', text: 'The first full-stack product moves from idea to a working, shippable application with a real backend and web client.', note: '// [ACHIEVEMENT — editable]', done: true },
  { year: '2025', title: 'Mobile application', text: 'A cross-platform app built in .NET MAUI extends the product to Android and iOS, sharing logic with the backend.', note: '// [ACHIEVEMENT — editable]', done: true },
  { year: '2026', title: 'Production releases', text: 'Hardened Azure DevOps pipelines and repeatable deployments — shipping to production with confidence.', note: '// [ACHIEVEMENT — editable]', done: false },
  { year: '2026', title: 'New products', text: 'Expanding the portfolio with new tools and applications currently in active development.', note: '// [ACHIEVEMENT — editable]', done: false }
]

const featured = PROJECTS.slice(0, 3)
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative overflow-hidden pt-16 pb-12 lg:pt-20 lg:pb-16">
      <div class="grid-bg"></div>
      <div class="container relative z-[2] grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-16 items-center">
        <div>
          <span class="inline-flex items-center gap-2 font-mono text-xs text-ink2 border border-line px-3 py-1.5 rounded-full mb-5 bg-surface">
            <span class="pulse-dot"></span>
            Product engineering · shipping since 2024
          </span>
          <h1 class="font-display font-medium text-[clamp(36px,5.6vw,66px)] leading-[1.04] tracking-[-0.033em]">
            We design, build, and ship <em class="not-italic text-accent">full-stack products.</em>
          </h1>
          <p class="text-ink2 text-[clamp(15px,1.6vw,18px)] max-w-[50ch] mt-5 leading-relaxed">
            Anjir is a small engineering team that takes products from a database schema to the screen in your hand — REST APIs, web and mobile clients, and the pipelines that release them. One team, whole system, real ownership.
          </p>
          <div class="flex gap-3 mt-6 flex-wrap">
            <a href="#" class="btn btn-accent btn-lg" @click.prevent="emit('navigate', 'projects')">
              Explore Projects
              <AppIcon name="arrowRight" />
            </a>
            <a href="#" class="btn btn-ghost btn-lg" @click.prevent="emit('navigate', 'team')">Meet the Team</a>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-5 mt-8 pt-6 border-t border-line">
            <div v-for="f in FACTS" :key="f.b">
              <b class="font-display text-[23px] font-semibold tracking-tight block">{{ f.b }}</b>
              <span class="font-mono text-[11px] text-ink3 uppercase tracking-wider mt-1 block">{{ f.s }}</span>
            </div>
          </div>
        </div>

        <SystemDiagram />
      </div>
    </section>

    <!-- TRUST MARQUEE -->
    <div class="border-y border-line py-5 bg-surface overflow-hidden">
      <div class="text-center font-mono text-[11px] text-ink3 uppercase tracking-[0.06em] mb-4">Everyday stack</div>
      <div class="marquee-wrap">
        <div class="marquee">
          <template v-for="n in 2" :key="n">
            <span v-for="t in STACK" :key="t + n" class="font-mono text-sm text-ink2 whitespace-nowrap">{{ t }}</span>
          </template>
        </div>
      </div>
    </div>

    <!-- INTRO -->
    <div class="section section-tight">
      <div class="container">
        <div v-reveal class="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-8 lg:gap-16 items-start">
          <div>
            <span class="eyebrow"><span class="idx">00</span> Who we are</span>
            <p class="mt-4 font-display font-normal text-[clamp(22px,3vw,34px)] leading-[1.3] tracking-[-0.015em]">
              <span class="text-ink">Anjir is a product-engineering team.</span>
              <span class="text-ink3"> We don't just write features — we own the architecture, the data model, the clients, and the release process behind every product we ship.</span>
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line rounded-lg overflow-hidden">
            <div v-for="d in DEFS" :key="d.k" class="bg-elev p-5">
              <div class="font-mono text-[11px] text-accent uppercase tracking-wider mb-2">{{ d.k }}</div>
              <div class="text-[13.5px] text-ink2 leading-relaxed [&_b]:text-ink [&_b]:font-semibold" v-html="d.v"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CAPABILITIES -->
    <div class="section">
      <div class="container">
        <div v-reveal class="max-w-[660px] mb-12">
          <span class="eyebrow"><span class="idx">01</span> Capabilities</span>
          <h2 class="font-display font-medium text-[clamp(27px,3.8vw,42px)] leading-[1.08] tracking-[-0.02em] mt-4">What we build</h2>
          <p class="text-ink2 text-base mt-3 max-w-[58ch] leading-relaxed">Coverage across the full product lifecycle. Each area below lists what we actually deliver and the tools we use to do it.</p>
        </div>

        <div v-reveal class="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line rounded-lg overflow-hidden">
          <div v-for="cap in CAPS" :key="cap.no" class="group bg-elev p-6 grid grid-cols-[auto_1fr] gap-5 relative transition-colors duration-300 hover:bg-surface2">
            <span class="absolute top-5 right-6 font-mono text-[11px] text-ink3">{{ cap.no }}</span>
            <div class="w-[42px] h-[42px] rounded-md bg-accent-fill grid place-items-center text-accent transition-all duration-300 group-hover:bg-accent-fill2 group-hover:-translate-y-0.5">
              <AppIcon :name="cap.icon" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="font-display text-[18px] font-medium mb-1.5">{{ cap.title }}</h3>
              <p class="text-[13.5px] text-ink2 leading-relaxed mb-3">{{ cap.desc }}</p>
              <div class="font-mono text-[11px] text-ink3 leading-relaxed mb-3"><b class="text-accent">Deliver:</b> {{ cap.deliver }}</div>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="s in cap.stack" :key="s" class="chip">{{ s }}</span>
              </div>
            </div>
          </div>

          <div class="bg-accent-fill p-6 grid grid-cols-[auto_1fr] gap-5 relative items-center">
            <span class="absolute top-5 right-6 font-mono text-[11px] text-ink3">↗</span>
            <div class="w-[42px] h-[42px] rounded-md bg-elev grid place-items-center text-accent">
              <AppIcon name="check" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="font-display text-[18px] font-medium mb-1.5">One team, end to end</h3>
              <p class="text-[13.5px] text-ink2 leading-relaxed mb-3">No hand-offs between design, backend, and mobile. The people who plan the system are the ones who build and ship it.</p>
              <a href="#" class="inline-flex items-center gap-2 font-mono text-xs text-accent transition-transform duration-300 hover:translate-x-[3px]" @click.prevent="emit('navigate', 'about')">
                See how we work
                <AppIcon name="arrowUpRight" class="w-[15px] h-[15px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FEATURED PROJECTS -->
    <div class="section">
      <div class="container">
        <div v-reveal class="flex justify-between items-end gap-8 mb-12 flex-wrap">
          <div class="max-w-[660px]">
            <span class="eyebrow"><span class="idx">02</span> Selected work</span>
            <h2 class="font-display font-medium text-[clamp(27px,3.8vw,42px)] leading-[1.08] tracking-[-0.02em] mt-4">What we've built</h2>
            <p class="text-ink2 text-base mt-3 max-w-[58ch] leading-relaxed">Products the team has shipped — with platform, our role, and the stack behind each one.</p>
          </div>
          <a href="#" class="btn btn-ghost" @click.prevent="emit('navigate', 'projects')">
            All projects
            <AppIcon name="arrowRight" />
          </a>
        </div>

        <div v-reveal class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard v-for="p in featured" :key="p.name" :project="p" />
        </div>
      </div>
    </div>

    <!-- TECH WALL -->
    <div class="section">
      <div class="container">
        <div v-reveal class="max-w-[660px] mb-12">
          <span class="eyebrow"><span class="idx">03</span> Technology</span>
          <h2 class="font-display font-medium text-[clamp(27px,3.8vw,42px)] leading-[1.08] tracking-[-0.02em] mt-4">Our stack, by role</h2>
          <p class="text-ink2 text-base mt-3 max-w-[58ch] leading-relaxed">Grouped by where each tool sits in the system — not a logo wall, but what we reach for and why.</p>
        </div>

        <div v-reveal class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-line border border-line rounded-lg overflow-hidden">
          <div v-for="col in TECH" :key="col.h" class="bg-elev p-5">
            <h4 class="font-mono text-[11px] text-accent uppercase tracking-wider mb-1.5">{{ col.h }}</h4>
            <div class="text-[11.5px] text-ink3 leading-relaxed pb-4 mb-4 border-b border-line">{{ col.d }}</div>
            <ul class="list-none flex flex-col gap-0.5">
              <li
                v-for="item in col.items"
                :key="item"
                class="group text-[13.5px] text-ink2 px-2 py-1.5 rounded-sm transition-colors flex items-center gap-2.5 hover:bg-accent-fill hover:text-ink"
              >
                <span class="w-1.5 h-1.5 rounded bg-line-strong flex-none transition-colors group-hover:bg-accent"></span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- TEAM PREVIEW -->
    <div class="section">
      <div class="container">
        <div v-reveal class="flex justify-between items-end gap-8 mb-12 flex-wrap">
          <div class="max-w-[660px]">
            <span class="eyebrow"><span class="idx">04</span> Team</span>
            <h2 class="font-display font-medium text-[clamp(27px,3.8vw,42px)] leading-[1.08] tracking-[-0.02em] mt-4">The people behind Anjir</h2>
            <p class="text-ink2 text-base mt-3 max-w-[58ch] leading-relaxed">Small team, deep ownership — every product has real engineers accountable for it.</p>
          </div>
          <a href="#" class="btn btn-ghost" @click.prevent="emit('navigate', 'team')">
            Full team
            <AppIcon name="arrowRight" />
          </a>
        </div>

        <div v-reveal class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <MemberCard v-for="(m, i) in TEAM" :key="m.name" :member="m" :index="i" />
        </div>
      </div>
    </div>

    <!-- JOURNEY -->
    <div class="section">
      <div class="container">
        <div v-reveal class="max-w-[660px] mb-12">
          <span class="eyebrow"><span class="idx">05</span> Our journey</span>
          <h2 class="font-display font-medium text-[clamp(27px,3.8vw,42px)] leading-[1.08] tracking-[-0.02em] mt-4">How Anjir has grown</h2>
          <p class="text-ink2 text-base mt-3 max-w-[58ch] leading-relaxed">Milestones so far. Placeholder dates — ready for the real timeline.</p>
        </div>
        <div v-reveal>
          <Timeline :items="JOURNEY" />
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="section section-tight">
      <div class="container">
        <div v-reveal>
          <CtaBand
            eyebrow="Let's talk"
            :arrow="true"
            text="Have an idea, a project, or an opportunity? Tell us what you're working on."
            primary-to="contact"
            secondary-label="View our GitHub"
            :secondary-href="SOCIAL.github"
            @navigate="emit('navigate', $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
