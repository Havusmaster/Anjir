export interface ProjectStatus {
  label: string
  dot: string
}

export const STATUS: Record<string, ProjectStatus> = {
  live: { label: 'Live', dot: 'bg-success' },
  dev: { label: 'In development', dot: 'bg-warning' },
  beta: { label: 'Beta', dot: 'bg-accent' }
}

export interface Project {
  name: string
  cat: string
  tags: string[]
  status: string
  wide?: boolean
  mock: string
  desc: string
  platform: string
  role: string
  year: string
  stack: string[]
  links: [string, string, string][]
}

export const PROJECTS: Project[] = [
  {
    name: 'SimpleFlashcard',
    cat: 'Web · Mobile',
    tags: ['mobile', 'web', 'backend'],
    status: 'live',
    wide: true,
    mock: 'mobile',
    desc: 'A modern flashcard and vocabulary learning application. Users build decks, study with spaced repetition, and sync progress across web and mobile.',
    platform: 'Web + iOS + Android',
    role: 'Full build',
    year: '2025',
    stack: ['.NET MAUI', 'ASP.NET Core', 'SQLite', 'PostgreSQL', 'Angular'],
    links: [
      ['Website', '[PROJECT URL]', 'link'],
      ['GitHub', '[GITHUB LINK]', 'gh'],
      ['Google Play', '[PLAY LINK]', 'play'],
      ['App Store', '[APPSTORE LINK]', 'apple']
    ]
  },
  {
    name: '[PROJECT NAME]',
    cat: 'Web App',
    tags: ['web', 'backend'],
    status: 'dev',
    mock: 'web',
    desc: '[PROJECT DESCRIPTION] — one or two sentences on what the product does, who it is for, and the problem it solves.',
    platform: 'Web',
    role: 'Full build',
    year: '2026',
    stack: ['Angular', 'ASP.NET Core', 'PostgreSQL'],
    links: [
      ['Website', '[PROJECT URL]', 'link'],
      ['GitHub', '[GITHUB LINK]', 'gh']
    ]
  },
  {
    name: '[PROJECT NAME]',
    cat: 'Backend Service',
    tags: ['backend', 'opensource'],
    status: 'beta',
    mock: 'backend',
    desc: "[PROJECT DESCRIPTION] — an API or service that powers one of the team's products, with auth and a clean data layer.",
    platform: 'API',
    role: 'Architecture + API',
    year: '2026',
    stack: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Docker'],
    links: [['GitHub', '[GITHUB LINK]', 'gh']]
  },
  {
    name: '[PROJECT NAME]',
    cat: 'Mobile App',
    tags: ['mobile'],
    status: 'dev',
    mock: 'mobile',
    desc: '[PROJECT DESCRIPTION] — a cross-platform mobile application in active development, sharing logic with the backend.',
    platform: 'iOS + Android',
    role: 'Mobile build',
    year: '2026',
    stack: ['.NET MAUI', 'Android', 'iOS'],
    links: [
      ['Google Play', '[PLAY LINK]', 'play'],
      ['App Store', '[APPSTORE LINK]', 'apple']
    ]
  },
  {
    name: '[PROJECT NAME]',
    cat: 'Internal Tool',
    tags: ['internal', 'web'],
    status: 'live',
    mock: 'web',
    desc: "[PROJECT DESCRIPTION] — an internal tool built to speed up the team's own workflow and reduce manual steps.",
    platform: 'Web',
    role: 'Full build',
    year: '2025',
    stack: ['Angular', 'TypeScript', 'Azure DevOps'],
    links: [['GitHub', '[GITHUB LINK]', 'gh']]
  },
  {
    name: '[PROJECT NAME]',
    cat: 'Open Source',
    tags: ['opensource', 'backend'],
    status: 'beta',
    mock: 'backend',
    desc: '[PROJECT DESCRIPTION] — a library or utility the team open-sourced for other .NET developers to use.',
    platform: 'NuGet package',
    role: 'Maintainer',
    year: '2026',
    stack: ['.NET', 'C#', 'NuGet'],
    links: [['GitHub', '[GITHUB LINK]', 'gh']]
  }
]