import type { SkillGroup } from '@/lib/types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'it',
    label: 'Systems & Infrastructure',
    color: 'blue',
    skills: [
      'Active Directory', 'Windows Server', 'Intune MDM', 'Microsoft 365',
      'Endpoint Hardening', 'Group Policy', 'VirtualBox', 'Linux / Unix',
    ],
  },
  {
    id: 'security',
    label: 'Identity, Access & Security Ops',
    color: 'green',
    skills: [
      'Least-Privilege Provisioning', 'MFA Enforcement', 'Patch Management',
      'Wazuh SIEM', 'Wireshark', 'Nmap', 'Incident Triage', 'MITRE ATT&CK',
    ],
  },
  {
    id: 'dev',
    label: 'Languages & Frameworks',
    color: 'purple',
    skills: [
      'Python', 'TypeScript', 'React 19', 'FastAPI',
      'JavaScript', 'HTML / CSS', 'Shell / Bash', 'C / C++',
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Practices',
    color: 'amber',
    skills: [
      'GitHub Actions CI', 'Docker', 'Git', 'pytest',
      'Ruff', 'REST APIs', 'VS Code', 'Agile',
    ],
  },
]
