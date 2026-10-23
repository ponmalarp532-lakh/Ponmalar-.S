export interface Skill {
  name: string;
  category: 'Security Tools' | 'Core Cyber Concepts' | 'Networking' | 'Development & Labs';
  level: number; // 0 to 100 for progress bar
  description: string;
}

export interface ProjectScreenshot {
  title: string;
  type: 'terminal' | 'log' | 'network' | 'dashboard';
  content: string[]; // Lines of text for simulated CLI or logs
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  technologies: string[];
  outcomes: string[];
  screenshots: ProjectScreenshot[];
  metric?: {
    label: string;
    value: string;
  };
}

export interface Milestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'academic' | 'cybersecurity' | 'hackathon' | 'project';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeType: 'medal' | 'shield' | 'cert' | 'trophy';
  skillsVerified: string[];
  description: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  iconName: string;
  description: string;
}
