import { Skill, Project, Milestone, Certification, Stat } from './types';

export const SKILLS_DATA: Skill[] = [
  // Security Tools
  {
    name: 'Velociraptor',
    category: 'Security Tools',
    level: 78,
    description: 'Endpoint monitoring, forensic artifact collections, custom VQL (Velociraptor Query Language) script execution.'
  },
  {
    name: 'Wazuh SIEM',
    category: 'Security Tools',
    level: 82,
    description: 'Log aggregation, threat monitoring, XML-based detection rules engineering, active response integration.'
  },
  {
    name: 'OpenEDR',
    category: 'Security Tools',
    level: 75,
    description: 'Continuous endpoint tracing, registry and process monitoring, threat event correlation.'
  },
  {
    name: 'Wireshark',
    category: 'Security Tools',
    level: 85,
    description: 'Packet capture, deep packet inspection (DPI), TCP stream reassembly, protocol-level traffic analysis.'
  },
  {
    name: 'Nmap',
    category: 'Security Tools',
    level: 80,
    description: 'Network mapping, active service enumeration, vulnerability scanning, and custom NSE script usage.'
  },
  
  // Core Cyber Concepts
  {
    name: 'Incident Response',
    category: 'Core Cyber Concepts',
    level: 78,
    description: 'Phased incident handling following NIST frameworks: Detection, Containment, Eradication, Recovery.'
  },
  {
    name: 'Threat Hunting',
    category: 'Core Cyber Concepts',
    level: 72,
    description: 'Hypothesis-driven searching for Indicators of Compromise (IOCs) and Indicators of Behavior (IOBs).'
  },
  {
    name: 'Windows Security',
    category: 'Core Cyber Concepts',
    level: 76,
    description: 'Sysmon logging, Windows Event Viewer analysis, local policies auditing, Active Directory fundamental security.'
  },
  {
    name: 'Linux Security',
    category: 'Core Cyber Concepts',
    level: 82,
    description: 'Linux administration, file permissions auditing, secure log monitoring (auth.log), system hardening.'
  },

  // Networking
  {
    name: 'TCP/IP & OSI Stack',
    category: 'Networking',
    level: 85,
    description: 'Deep understanding of layering, packet structures, headers, and transmission controls.'
  },
  {
    name: 'Network Protocols',
    category: 'Networking',
    level: 88,
    description: 'Advanced knowledge of DNS, HTTP/S, SSH, FTP, DHCP, and secure communication architectures.'
  },
  {
    name: 'IPv4 Addressing & Routing',
    category: 'Networking',
    level: 84,
    description: 'Subnetting, routing tables, and perimeter firewall rule configuration.'
  },

  // Development & Labs
  {
    name: 'Python Scripting',
    category: 'Development & Labs',
    level: 80,
    description: 'Scripting for security audits, log parsers, automate lookup tools, and API querying.'
  },
  {
    name: 'Docker Environments',
    category: 'Development & Labs',
    level: 70,
    description: 'Creating isolated virtual networks, containerizing security nodes, and hosting lab instances.'
  },
  {
    name: 'Full-Stack Integration',
    category: 'Development & Labs',
    level: 75,
    description: 'Integrating frontend UI with database systems (like Supabase) to log and track data securely.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'velociraptor-lab',
    title: 'Velociraptor Deployment Lab',
    shortDescription: 'Endpoint monitoring, digital forensics, and proactive threat hunting across multiple simulated nodes.',
    longDescription: 'This security lab focuses on establishing central endpoint orchestration. Deployed Velociraptor servers and agents inside a virtualized subnet to monitor process flow and file integrity in real-time. Conducted digital forensics investigations by writing Velociraptor Query Language (VQL) scripts to audit running memory, inspect registry modifications, and identify unauthorized credential dumping attempts.',
    category: 'Digital Forensics & Endpoint Monitoring',
    technologies: ['Velociraptor', 'VQL Scripting', 'Endpoint Forensics', 'Docker', 'Linux/Windows Security'],
    outcomes: [
      'Deployed an active central server capable of real-time client orchestration and querying.',
      'Designed 4+ custom VQL artifacts to hunt for privilege escalation indicators and unauthorized users.',
      'Significantly reduced host triage and artifact collection times under simulated attack constraints.'
    ],
    metric: {
      label: 'Host Query Time',
      value: '< 5 Seconds'
    },
    screenshots: [
      {
        title: 'Velociraptor Server Dashboard',
        type: 'dashboard',
        content: [
          '⚡ VELOCIRAPTOR DEPLOYMENT STATS',
          'STATUS: ACTIVE  |  CONNECTED AGENTS: 3  |  VQL SERVICES: ONLINE',
          '===================================================================',
          'ID         | OS      | HOSTNAME        | LAST CO_COMMUNICATION',
          '-----------+---------+-----------------+---------------------------',
          'V_AGENT001 | WINDOWS | WS-PROD-CLIENT  | 2026-06-24 21:38:00 UTC',
          'V_AGENT002 | LINUX   | SRV-APP-DOCKER  | 2026-06-24 21:37:45 UTC',
          'V_AGENT003 | WINDOWS | WS-HR-LAPTOP    | 2026-06-24 21:35:12 UTC',
          '===================================================================',
          'Running Client Artifact Collection: Windows.Detection.ProcessMemory...'
        ]
      },
      {
        title: 'Custom VQL Hunting Query',
        type: 'terminal',
        content: [
          'root@velociraptor-hunt-console:~# velociraptor query "SELECT Name, CommandLine, Exe, Username FROM pslist() WHERE Name =~ \'lsass|mimikatz\'"',
          'Executing custom VQL hunting routine across 3 endpoints...',
          '[!] WARNING: Suspicious process activity detected on WS-PROD-CLIENT',
          '    Process ID: 3824',
          '    Process Name: lsass_dump.exe',
          '    CommandLine: C:\\Users\\Public\\lsass_dump.exe -dumpfile C:\\temp\\lsass.dmp',
          '    Executed By: NT AUTHORITY\\SYSTEM',
          '    Action Taken: Flagged for digital forensic containment'
        ]
      }
    ]
  },
  {
    id: 'openedr-deployment',
    title: 'OpenEDR Security Deployment',
    shortDescription: 'Advanced endpoint detection, behavioral tracing, and real-time security events auditing.',
    longDescription: 'Deployed OpenEDR agents to monitor system performance and detect file-integrity modifications. Captured rich endpoint telemetry and aggregated audit logs to trace process parent-child relationships, detecting suspicious process execution paths (such as cmd.exe spawned by explorer.exe or MS Word documents spawning PowerShell scripts).',
    category: 'Endpoint Detection & Response (EDR)',
    technologies: ['OpenEDR', 'Event Telemetry', 'Process Tree Tracing', 'Registry Auditing', 'Windows Security'],
    outcomes: [
      'Implemented full telemetry coverage across testing virtual machines.',
      'Identified and mapped complex process parent-child execution paths to trace malware execution origins.',
      'Configured threat alerting rules for sensitive local registry modification alerts.'
    ],
    metric: {
      label: 'Detection Latency',
      value: 'Real-Time'
    },
    screenshots: [
      {
        title: 'OpenEDR Telemetry Ingestion View',
        type: 'log',
        content: [
          '[INFO] 2026-06-24T21:38:01.042Z - EventType: ProcessCreation',
          '       ParentProcess: C:\\Windows\\System32\\svchost.exe',
          '       TargetProcess: C:\\Windows\\System32\\cmd.exe (ID: 4104)',
          '       User: NT AUTHORITY\\SYSTEM',
          '       Signature Status: Verified (Microsoft)',
          '       Anomaly Score: LOW',
          '----------------------------------------------------------------------',
          '[ALERT] 2026-06-24T21:38:05.112Z - EventType: RegistryValueUpdate',
          '        Key: HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run',
          '        ValueName: UpdaterPayload',
          '        ValueData: C:\\Users\\Public\\Update.bat',
          '        User: TestUser',
          '        Anomaly Score: CRITICAL (Potential Persistence Mechanism Detected)'
        ]
      }
    ]
  },
  {
    id: 'wazuh-siem-lab',
    title: 'Wazuh SIEM Threat Hunting Lab',
    shortDescription: 'Enterprise log correlation, custom XML detection engineering, and active host response orchestration.',
    longDescription: 'Constructed an enterprise-grade SIEM environment using containerized Wazuh. Aggregated disparate security logs from server environments and configured rulesets to analyze telemetry. Developed custom XML detection rules to correlate repeating login failures and automate server actions—such as dropping brute-force connections at the firewall layer.',
    category: 'SIEM & Detection Engineering',
    technologies: ['Wazuh', 'Elasticsearch', 'Docker', 'Custom XML Rules', 'Active Response', 'Logstash'],
    outcomes: [
      'Ingested and correlated over 10,000 security logs daily within an isolated lab subnet.',
      'Developed custom XML security rules to identify SSH brute-forcing and prompt instant alerts.',
      'Configured active response scripts to dynamically blacklist offending IP addresses.'
    ],
    metric: {
      label: 'Rule Ingestion Count',
      value: '10k+ / day'
    },
    screenshots: [
      {
        title: 'Wazuh Active Alert Stream',
        type: 'log',
        content: [
          '** Alert 1719264800.22915: - syslog, brute_force, authentication_failed',
          '2026-06-24 21:38:02 Wazuh-Server->/var/log/auth.log',
          'Rule: 5712 (level 10) -> "SSH brute force attempt (multiple failed logins)"',
          'User: root',
          'Src IP: 198.51.100.42',
          'Payload: Jun 24 21:38:01 host-prod-srv sshd[14502]: Failed password for root from 198.51.100.42 port 54820 ssh2',
          '===================================================================',
          '⚡ TRIGGERING ACTIVE RESPONSE: Running firewall-drop.sh for IP 198.51.100.42',
          '[SUCCESS] IP 198.51.100.42 blacklisted in iptables rules.'
        ]
      },
      {
        title: 'Custom XML Rule Configuration',
        type: 'terminal',
        content: [
          'root@wazuh-manager:/var/ossec/ruleset/rules# cat local_rules.xml',
          '<group name="local,syslog,sshd,">',
          '  <rule id="100002" level="10" frequency="5" timeframe="60">',
          '    <if_matched_sid>5716</if_matched_sid>',
          '    <same_source_ip />',
          '    <description>SSH: Multiple authentication failures from same IP.</description>',
          '    <group>brute_force,active_response_trigger</group>',
          '  </rule>',
          '</group>',
          'root@wazuh-manager:/var/ossec/ruleset/rules# ossec-logtest -t'
        ]
      }
    ]
  },
  {
    id: 'wireshark-analysis',
    title: 'Wireshark Network Traffic Forensic Lab',
    shortDescription: 'Deep packet inspection, malicious TCP stream reconstruction, and protocol forensic analysis.',
    longDescription: 'Investigated structured PCAP captures representing simulated security breaches. Configured complex Wireshark display filters to isolate malicious communication paths, analyzed DNS queries to trace command-and-control beacons, and reassembled plaintext network streams to locate exfiltrated database files and exposed API keys.',
    category: 'Network Forensics',
    technologies: ['Wireshark', 'Packet Filtering', 'TCP Stream Reconstruction', 'PCAP Forensics', 'DNS Inspection'],
    outcomes: [
      'Successfully extracted and analyzed a simulated malicious binary from multi-packet fragments.',
      'Traced DNS tunneling behaviors transmitting exfiltrated local data structures.',
      'Compiled 12 structured packet analysis summaries documenting threat traffic patterns.'
    ],
    metric: {
      label: 'PCAPs Investigated',
      value: '12 Scenarios'
    },
    screenshots: [
      {
        title: 'Wireshark Packet Analysis Session',
        type: 'network',
        content: [
          'No.   Time         Source           Destination      Protocol  Length  Info',
          '-----+------------+----------------+----------------+---------+-------+-------------------------------------',
          '284   12.102390    10.0.0.15        192.0.2.112      TCP       74      51892 > 80 [SYN] Seq=0 Win=64240 Len=0',
          '285   12.105441    192.0.2.112      10.0.0.15        TCP       74      80 > 51892 [SYN, ACK] Seq=0 Ack=1 Win=29200',
          '286   12.105612    10.0.0.15        192.0.2.112      TCP       66      51892 > 80 [ACK] Seq=1 Ack=1 Win=64240',
          '287   12.110291    10.0.0.15        192.0.2.112      HTTP      422     POST /api/login HTTP/1.1',
          '===================================================================',
          'Decrypted HTTP Stream payload (Plaintext Leak):',
          '   username=admin&password=SuperSecureCyb3rPassword123!&auth_token=exposed...'
        ]
      }
    ]
  },
  {
    id: 'incident-response',
    title: 'Incident Response Case Studies',
    shortDescription: 'End-to-end incident handling, container threat eradication, and NIST-compliant post-incident reporting.',
    longDescription: 'Conducted interactive exercises following the NIST SP 800-61 incident response guide. Investigated simulated host compromises, tracked rogue administrator creations, applied rapid host isolation rules, eradicated threats, and drafted full-scale security incident reports describing root causes and preventive recommendations.',
    category: 'Incident Handling & DFIR',
    technologies: ['NIST SP 800-61', 'Host Containment', 'Sysmon Analysis', 'Incident Report Auditing'],
    outcomes: [
      'Authored 3 highly detailed, professional incident response summaries.',
      'Reduced standard containment duration through the formation of streamlined forensic guides.',
      'Developed actionable long-term security recommendations for active defensive posture improvements.'
    ],
    metric: {
      label: 'NIST Standards',
      value: '100% Compliant'
    },
    screenshots: [
      {
        title: 'NIST Incident Handling Lifecycle',
        type: 'dashboard',
        content: [
          '🚨 INCIDENT HANDLER WORKFLOW PROGRESSION',
          '-------------------------------------------------------------------',
          '[1] PREPARATION             -> COMPLETE (Lab configurations & Sysmon deployed)',
          '[2] DETECTION & ANALYSIS    -> COMPLETE (Flagged rogue admin account "backdoor_srv")',
          '[3] CONTAINMENT & ERADICATION-> ACTIVE (Host isolated from subnet, registry keys deleted)',
          '[4] RECOVERY                -> PENDING (Restoring clean database backups)',
          '[5] POST-INCIDENT ACTIVITY  -> PLANNED (Incident Report IR-2026-004)',
          '-------------------------------------------------------------------',
          'Incident Severity Level: HIGH  |  Response Group: Blue Team Alpha'
        ]
      }
    ]
  },
  // Real Apps from her resume
  {
    id: 'github-vulnerability-checker',
    title: 'GitHub Repo Vulnerability Checker',
    shortDescription: 'In-progress scanner to detect exposed API keys, credentials, and secrets in GitHub repositories.',
    longDescription: 'Designing a defensive scanner tailored to secure development lifecycle pipelines. Leverages custom scanning rulesets to inspect GitHub commit histories and repository files, identifying hardcoded credentials, active AWS keys, databases files, and public tokens before they can be exposed on the public web.',
    category: 'Cyber Web Applications',
    technologies: ['Python', 'Git API', 'Secrets Scanning', 'Regular Expressions', 'Vercel'],
    outcomes: [
      'Building automated scanning routines for public and private repositories.',
      'Implementing regex profiles targeting 50+ common API key formats (AWS, Google, Stripe).',
      'Provides developers with instant security scoring and cleanup guidelines.'
    ],
    metric: {
      label: 'Exposure Risk Scanned',
      value: 'Active Development'
    },
    screenshots: [
      {
        title: 'Vulnerability Scanner Simulation',
        type: 'terminal',
        content: [
          'ponmalar@cyber-scanner:~# python scan_repo.py --url https://github.com/test/repo',
          '[*] Connecting to GitHub API...',
          '[*] Fetching commit tree for main branch...',
          '===================================================================',
          '[!] SECRET EXPOSURE FOUND in file: config/database.js',
          '    Commit SHA: d9a4f215d6c8b93',
          '    Line 12: const DB_PASSWORD = "super_secret_production_pass_2026";',
          '    Exposure Type: High Risk (Plaintext Database Credential)',
          '===================================================================',
          '[-] Recommendation: Run "git-filter-repo" to purge file history immediately.'
        ]
      }
    ]
  },
  {
    id: 'cyber-whois',
    title: 'Cyber WHOIS Lookup Tool',
    shortDescription: 'Web-based security tool offering registration tracking, hosting details, and domain lookup insights.',
    longDescription: 'Developed a cyber security WHOIS Lookup Tool designed to simplify reconnaissance and security mapping. Allows Blue Team operators and students to instantly trace domain registrations, registrar details, expiration timestamps, and server locations to support active investigation workflows.',
    category: 'Cyber Web Applications',
    technologies: ['React', 'TypeScript', 'WHOIS API', 'Tailwind CSS', 'Vercel Deployment'],
    outcomes: [
      'Simplified registry data access in a highly responsive web interface.',
      'Successfully deployed WHOIS fetching integrations, handling thousands of queries.',
      'Aesthetic and compact data presentation supporting security operations research.'
    ],
    metric: {
      label: 'Service Link',
      value: 'cyber-whois.vercel.app'
    },
    screenshots: [
      {
        title: 'WHOIS Tool Visual Interface',
        type: 'dashboard',
        content: [
          '🌐 CYBER WHOIS REGISTER LOOKUP',
          'Query: cyber-whois.vercel.app',
          '-------------------------------------------------------------------',
          'Domain Name: vercel.app',
          'Registry Domain ID: 228943180_DOMAIN_APP-VRSN',
          'Registrar WHOIS Server: whois.gandi.net',
          'Registrar: GANDI SAS',
          'Creation Date: 2018-07-23T15:23:41Z',
          'Registry Expiry Date: 2028-07-23T15:23:41Z',
          'Name Server: ns1.vercel-dns.com',
          'Name Server: ns2.vercel-dns.com',
          '-------------------------------------------------------------------',
          'RECONNAISSANCE SUMMARY: Verified secure hosting nodes located in US-East.'
        ]
      }
    ]
  },
  {
    id: 'ats-resume-checker',
    title: 'ATS Resume Scoring Engine',
    shortDescription: 'AI-assisted resume optimizer grading formatting, layout keywords, and career focus pointers.',
    longDescription: 'Designed a highly structured scoring engine targeting resume alignment. Compiles scores based on industrial recruiting standards, grading spelling, formatting structural layout, and analyzing keywords corresponding to targeted careers like Blue Team, SOC Analyst, and Ethical Hacker.',
    category: 'Cyber Web Applications',
    technologies: ['React', 'Keyword Analysis', 'Tailwind CSS', 'ATS Standards', 'Vercel Deployment'],
    outcomes: [
      'Developed keyword analysis algorithms tailored for cybersecurity resumes.',
      'Provides interactive feedback scoring layout design elements.',
      'Helps students align their CVs with top-tier security standards.'
    ],
    metric: {
      label: 'Service Link',
      value: 'atspro-two.vercel.app'
    },
    screenshots: [
      {
        title: 'ATS Scoring Screen',
        type: 'dashboard',
        content: [
          '📄 ATS RESUME EVALUATION PANEL',
          'Analyst Target: SOC Analyst / Blue Team',
          '-------------------------------------------------------------------',
          'OVERALL RESUME SCORE: 85/100 (RECOMMENDED PROFILE MATCH)',
          '===================================================================',
          '[+] KEYWORDS DETECTED: Wireshark, Nmap, Linux, Docker, Python, Wazuh',
          '[-] MISSING KEYWORDS: SIEM (Recommended adding "SIEM Log Analysis")',
          '[+] FORMATTING CHECK: Clean single-column layout, verified machine-readable.',
          '[+] IMPACT CHECK: Strong technical verbs utilized in summary.',
          '-------------------------------------------------------------------',
          'RATING: High chance of passing recruiter screening filters!'
        ]
      }
    ]
  }
];

export const TIMELINE_DATA: Milestone[] = [
  {
    year: '2024 - Present',
    title: 'B.Tech Information Technology (Minors)',
    organization: 'CMS College of Engineering and Technology',
    description: 'Third Year - Sixth Semester. Actively exploring cybersecurity fundamental models, secure computer networks, and data security.',
    type: 'academic'
  },
  {
    year: '2024 - 2025',
    title: 'Multiple Hackathon Winner & Competitor',
    organization: 'Innovation Hackathons',
    description: 'Participated in multiple innovation hackathons. Crafted technical web architectures and prototype models as part of winning hacker teams.',
    type: 'hackathon'
  },
  {
    year: '2025',
    title: 'Cyber Security Tool Development',
    organization: 'Self-Directed Labs',
    description: 'Developed and launched multiple utility platforms including the Cyber WHOIS Tool, ATS Optimizer, and currently building a Repository Vulnerability Scanner.',
    type: 'project'
  },
  {
    year: '2025 - 2026',
    title: 'Threat Detection & Forensic Specialization',
    organization: 'Blue Team Labs & Sandboxes',
    description: 'Constructed isolated security labs for log analytics, deploy central EDR agents, and packet capture investigations using Wazuh SIEM, Velociraptor, and Wireshark.',
    type: 'cybersecurity'
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'hackathon-winner',
    title: 'Hackathon Winner Certificate',
    issuer: 'Technical Innovation Hackathon',
    date: '2025',
    badgeType: 'trophy',
    skillsVerified: ['Rapid Prototyping', 'Team Collaboration', 'Solution Architecture'],
    description: 'Awarded for developing a fully functional, high-impact web-based solution under a strict 36-hour developmental timeline.'
  },
  {
    id: 'hackathon-participation',
    title: 'Hackathon Participation Certificate',
    issuer: 'National level Hackathon Council',
    date: '2024',
    badgeType: 'medal',
    skillsVerified: ['System Development', 'Problem Solving', 'Pitching Presentation'],
    description: 'Successfully competed and pitched software models targeting environmental security challenges.'
  },
  {
    id: 'dept-rank-holder',
    title: 'Department Rank Holder Recognition',
    issuer: 'CMS College of Engineering and Technology',
    date: '2025',
    badgeType: 'shield',
    skillsVerified: ['Academic Excellence', 'Information Technology', 'Core Computing'],
    description: 'Recognized for excellent academic scores and technical contribution inside the Information Technology department.'
  },
  {
    id: 'cyber-fundamentals',
    title: 'Cybersecurity Fundamentals Specialized Training',
    issuer: 'Hands-on Labs (To Be Certified)',
    date: '2026',
    badgeType: 'cert',
    skillsVerified: ['Wireshark Network Analysis', 'Wazuh SIEM Ingestion', 'Velociraptor Hunting'],
    description: 'Rigorous self-guided training focused on setting up defense environments, logging telemetry, and threat tracing.'
  }
];

export const STATS_DATA: Stat[] = [
  {
    label: 'Lab Hours',
    value: 350,
    suffix: '+',
    iconName: 'Clock',
    description: 'Hours spent configuring and analyzing in sandbox security environments.'
  },
  {
    label: 'Alerts Analyzed',
    value: 5000,
    suffix: '+',
    iconName: 'ShieldAlert',
    description: 'Security logs and intrusion signals triaged.'
  },
  {
    label: 'Tools Mastered',
    value: 8,
    suffix: '',
    iconName: 'Wrench',
    description: 'Industrial security and analysis software deployed.'
  },
  {
    label: 'Apps Deployed',
    value: 6,
    suffix: '+',
    iconName: 'Cpu',
    description: 'Functional projects built, configured, and hosted.'
  }
];
