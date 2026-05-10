import type { Cert } from '@/lib/types'

export const certs: Cert[] = [
  {
    id: 'a-plus',
    shortName: 'A+',
    fullName: 'CompTIA A+',
    description:
      'Covers hardware, networking, operating systems, security fundamentals, and IT support troubleshooting. Industry standard entry point for IT support roles.',
    status: 'in-progress',
  },
  {
    id: 'security-plus',
    shortName: 'Sec+',
    fullName: 'CompTIA Security+',
    description:
      'Validates cybersecurity fundamentals: threats, vulnerabilities, access control, cryptography, and risk management. DoD 8570 / 8140 compliant.',
    status: 'in-progress',
  },
]
