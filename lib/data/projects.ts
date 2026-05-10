import type { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: 'soc-lab',
    name: 'SOC Home Lab',
    description:
      '4-VM VirtualBox environment running Wazuh SIEM with 5 validated MITRE ATT&CK scenarios, custom Sigma detection rules, Python alert enrichment pipeline, and full incident response reports. End-to-end SOC analyst workflow — alert, triage, investigate, contain.',
    techTags: ['Wazuh', 'MITRE ATT&CK', 'Sigma', 'Python', 'Metasploit', 'VirtualBox'],
    roleBadge: 'SOC Analyst',
    roleBadgeColor: 'green',
    links: [
      { label: 'GitHub', url: 'https://github.com/Rblea97/SOC-Lab', variant: 'github' },
    ],
    featured: true,
  },
  {
    id: 'phishing-detector',
    name: 'AI Phishing Detector',
    description:
      'Blue team email triage tool: 98.82% accurate ML classifier + Claude LLM threat reasoning, IOC extraction, SPF/DKIM/DMARC header analysis, and structured SIEM output. Built for SOC Tier 1 analyst workflows. Live deployed.',
    techTags: ['Python', 'FastAPI', 'React 19', 'ML', 'MITRE ATT&CK', 'Docker'],
    roleBadge: 'Blue Team + Full-Stack',
    roleBadgeColor: 'purple',
    links: [
      { label: 'Live Demo', url: 'https://phishing-detector-ui-s3bf.onrender.com', variant: 'live' },
      { label: 'GitHub', url: 'https://github.com/Rblea97/ai-phishing-detector-portfolio', variant: 'github' },
      { label: 'Demo Video', url: 'https://youtu.be/wYcv8Ve5-Sw', variant: 'video' },
    ],
    featured: true,
  },
  {
    id: 'ridgeline-it',
    name: 'Ridgeline IT Lab',
    description:
      'IT support home lab simulating on-prem and cloud infrastructure: Active Directory domain, Intune MDM device management, M365 tenant, PowerShell automation, and real help desk scenarios.',
    techTags: ['Active Directory', 'Intune MDM', 'M365', 'PowerShell'],
    roleBadge: 'IT Support',
    roleBadgeColor: 'blue',
    links: [
      { label: 'GitHub', url: 'https://github.com/Rblea97/ridgeline-it', variant: 'github' },
    ],
    featured: false,
  },
  {
    id: 'password-analyzer',
    name: 'Password Strength Analyzer',
    description:
      'Real-time entropy-based password analyzer with a 5-segment visual strength meter and actionable security feedback. React 19 + TypeScript + Vite 8.',
    techTags: ['TypeScript', 'React 19', 'Vite'],
    roleBadge: 'Full-Stack',
    roleBadgeColor: 'purple',
    links: [
      { label: 'GitHub', url: 'https://github.com/Rblea97/password-strength-analyzer', variant: 'github' },
    ],
    featured: false,
  },
  {
    id: 'algorithm-visualizer',
    name: 'Algorithm Visualizer',
    description:
      'Interactive desktop application for visualizing sorting algorithms with smooth animations. Built with Python and tkinter for educational purposes.',
    techTags: ['Python', 'tkinter'],
    roleBadge: 'CS Fundamentals',
    roleBadgeColor: 'amber',
    links: [
      { label: 'GitHub', url: 'https://github.com/Rblea97/Algorithm-Visualizer', variant: 'github' },
    ],
    featured: false,
  },
]
