export interface Member {
  name: string
  role: string
  initials: string
  placeholder?: boolean
  focus: string
  primary: string
  desc: string
  tech: string[]
  social: { tg?: string; in?: string; gh?: string }
}

export const TEAM: Member[] = [
  {
    name: 'Azim Abdishukurov',
    role: 'Backend Developer / Software Engineer',
    initials: 'AA',
    focus: 'Backend & architecture',
    primary: '.NET · ASP.NET Core',
    desc: 'Builds the backbone of Anjir products — APIs, data models, authentication, and the services that hold everything together.',
    tech: ['.NET', 'ASP.NET Core', 'EF Core', 'SQL Server', 'PostgreSQL', 'Angular', '.NET MAUI', 'Azure DevOps'],
    social: { tg: '[TELEGRAM LINK]', in: '[LINKEDIN LINK]', gh: '[GITHUB LINK]' }
  },
  {
    name: '[TEAM MEMBER NAME]',
    role: '[ROLE]',
    initials: '—',
    placeholder: true,
    focus: '[FOCUS]',
    primary: '[STACK]',
    desc: '[Short description — what this person focuses on and brings to the team.]',
    tech: ['[TECH]', '[TECH]', '[TECH]'],
    social: { tg: '[TELEGRAM LINK]', in: '[LINKEDIN LINK]', gh: '[GITHUB LINK]' }
  },
  {
    name: '[TEAM MEMBER NAME]',
    role: '[ROLE]',
    initials: '—',
    placeholder: true,
    focus: '[FOCUS]',
    primary: '[STACK]',
    desc: '[Short description — what this person focuses on and brings to the team.]',
    tech: ['[TECH]', '[TECH]', '[TECH]'],
    social: { in: '[LINKEDIN LINK]', gh: '[GITHUB LINK]' }
  }
]