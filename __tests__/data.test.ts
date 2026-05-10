import { describe, it, expect } from 'vitest'
import { projects } from '@/lib/data/projects'
import { skillGroups } from '@/lib/data/skills'
import { certs } from '@/lib/data/certs'

describe('projects data', () => {
  it('has 5 projects', () => expect(projects).toHaveLength(5))
  it('every project has required fields', () => {
    for (const p of projects) {
      expect(p.id, `${p.id} missing id`).toBeTruthy()
      expect(p.name, `${p.id} missing name`).toBeTruthy()
      expect(p.description, `${p.id} missing description`).toBeTruthy()
      expect(p.techTags.length, `${p.id} missing techTags`).toBeGreaterThan(0)
      expect(p.links.length, `${p.id} missing links`).toBeGreaterThan(0)
    }
  })
  it('featured projects come first', () => {
    const featuredCount = projects.filter(p => p.featured).length
    expect(featuredCount).toBe(2)
    expect(projects[0]?.featured).toBe(true)
    expect(projects[1]?.featured).toBe(true)
  })
})

describe('skillGroups data', () => {
  it('has 4 groups', () => expect(skillGroups).toHaveLength(4))
  it('every group has items', () => {
    for (const g of skillGroups) {
      expect(g.skills.length).toBeGreaterThan(0)
    }
  })
})

describe('certs data', () => {
  it('has 2 certs', () => expect(certs).toHaveLength(2))
})
