export interface ProjectLink {
  label: string
  url: string
  variant: 'live' | 'github' | 'video' | 'docs'
}

export interface Project {
  id: string
  name: string
  description: string
  techTags: string[]
  roleBadge: string
  roleBadgeColor: 'green' | 'purple' | 'blue' | 'amber'
  links: ProjectLink[]
  featured: boolean
  previewLines?: string[]
}

export interface SkillGroup {
  id: string
  label: string
  color: 'green' | 'blue' | 'purple' | 'amber'
  skills: string[]
}

export interface Cert {
  id: string
  shortName: string
  fullName: string
  description: string
  status: 'in-progress' | 'earned'
  credentialUrl?: string
}
