import type { SkillGroup } from '@/lib/types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'security',
    label: 'Security & Blue Team',
    color: 'green',
    skills: [
      'Wazuh SIEM', 'MITRE ATT&CK', 'Sigma Rules', 'Incident Response',
      'Threat Detection', 'IOC Extraction', 'Metasploit', 'Nmap', 'Hydra', 'Wireshark',
    ],
  },
  {
    id: 'it',
    label: 'IT & Infrastructure',
    color: 'blue',
    skills: [
      'Active Directory', 'Intune MDM', 'Microsoft 365', 'PowerShell',
      'VirtualBox', 'Linux / Unix', 'Windows Server', 'Help Desk',
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
