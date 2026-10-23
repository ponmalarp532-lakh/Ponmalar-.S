import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Printer, Copy, Check, Download, ShieldAlert, Award, Calendar, BookOpen, Wrench, User } from 'lucide-react';

export const ResumeViewer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const plainTextResume = `
PONMALAR S
Cybersecurity — Vulnerability Assessment — Web Security
Email: ponmalars25@gmail.com
Location: CMS College of Engineering and Technology, India

PROFESSIONAL SUMMARY:
Technology enthusiast with a proven track record of transforming ideas into deployed applications. Built and maintained multiple web-based solutions, participated in winning hackathon teams, and actively explores cybersecurity through hands-on security projects and research. Combining software engineering, problem-solving, and security-focused thinking to create reliable and secure digital solutions.

EDUCATION:
CMS College of Engineering and Technology
B.Tech Information Technology (minors)
Expected Graduation: 2027
Current Status: Third Year — Sixth Semester

TECHNICAL SKILLS:
* Cybersecurity: Fundamentals, CIA Triad, Threat & Vulnerability Concepts, Malware & Phishing Awareness, Web Security.
* Networking: OSI Model, TCP/IP Fundamentals, DNS, HTTP, HTTPS, FTP, SSH, IPv4 Addressing.
* Development: Python, HTML, CSS, JavaScript, Git, GitHub, Supabase, Vercel.
* Security Tools: Wireshark, Nmap, Velociraptor, OpenEDR, Wazuh SIEM.

PROJECTS DETAILED IN PORTFOLIO:
* Velociraptor Deployment Lab (Endpoint monitoring, forensics, VQL scripts)
* OpenEDR Deployment (Endpoint detection, registry audit, process tracing)
* Wazuh SIEM Lab (Log collection, alert correlation, active response rules)
* Wireshark Network Analysis (Packet captures, plain-text credential leaks, TCP reassembly)
* GitHub Repository Vulnerability Checker (In-progress regex-based secret exposure scanner)
* Cyber WHOIS Tool (cyber-whois.vercel.app)
* ATS Resume Checker (atspro-two.vercel.app)

ACHIEVEMENTS & CERTIFICATIONS:
* Winner of multiple Hackathon competitions.
* Deployed 6+ real-world web applications.
* Department Rank Holder Recognition.
  `;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(plainTextResume.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([plainTextResume.trim()], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "PONMALAR_Cyber_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* File Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 glass-panel">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-cyan-500/10 text-cyan-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-sm">
              SECURE_DOSSIER_v1.0.txt
            </h4>
            <p className="font-mono text-[10px] text-gray-400">
              SIZE: 3.2 KB | LEVEL 1 CLEARANCE ACTIVE
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded bg-cyan-950/65 border border-cyan-500/30 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/50 transition-all flex items-center gap-1.5 cursor-pointer"
            title="Copy Plaintext CV"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Raw</span>
              </>
            )}
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="px-3 py-1.5 rounded bg-cyan-950/65 border border-cyan-500/30 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/50 transition-all flex items-center gap-1.5 cursor-pointer"
            title="Download TXT CV"
          >
            {downloaded ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Downloaded</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Download TXT</span>
              </>
            )}
          </button>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="px-3 py-1.5 rounded bg-cyan-500 text-black font-semibold hover:bg-cyan-400 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
            title="Print CV File"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Dossier</span>
          </button>
        </div>
      </div>

      {/* Cyber Dossier Sheet Frame */}
      <div className="w-full rounded-2xl border border-cyan-500/20 bg-[#070b13] p-6 sm:p-10 relative overflow-hidden shadow-2xl print:bg-white print:text-black print:border-none print:p-0">
        
        {/* Aesthetic Background Grid for Dossier Feel */}
        <div className="absolute inset-0 cyber-grid-fine opacity-20 pointer-events-none print:hidden" />
        
        {/* Decorative Watermark Label */}
        <div className="absolute bottom-6 right-6 font-mono text-[10px] text-cyan-500/10 font-bold tracking-widest pointer-events-none uppercase select-none print:hidden">
          PONMALAR // CL-SYS-LEVEL-1
        </div>

        {/* Top Header of Resume Dossier */}
        <div className="border-b border-cyan-500/20 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start gap-4 print:border-black print:pb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-[9px] font-mono text-cyan-400 uppercase print:hidden">
                Dossier Status: Active
              </span>
            </div>
            <h3 className="text-3xl font-display font-extrabold text-white tracking-tight print:text-black">
              PONMALAR S
            </h3>
            <p className="font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase mt-1 print:text-cyan-800">
              Blue Team | SOC Analyst | Cybersecurity Researcher
            </p>
          </div>

          <div className="font-mono text-xs text-gray-400 space-y-1 text-left sm:text-right print:text-black">
            <p className="flex items-center sm:justify-end gap-1.5">
              <span className="text-cyan-500 font-bold print:hidden">&gt;</span> ponmalars25@gmail.com
            </p>
            <p className="flex items-center sm:justify-end gap-1.5">
              <span className="text-cyan-500 font-bold print:hidden">&gt;</span> CMS College, India
            </p>
            <p className="flex items-center sm:justify-end gap-1.5 text-cyan-400/80 print:text-black">
              <span className="text-cyan-500 font-bold print:hidden">&gt;</span> Expected Grad: 2027
            </p>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-300 print:text-black print:grid-cols-1">
          {/* Left Column (Skills & Certifications references) */}
          <div className="space-y-6 md:col-span-1 border-r border-cyan-950/40 pr-0 md:pr-6 print:border-none print:pr-0">
            {/* Professional Info */}
            <div>
              <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider mb-3 pb-1.5 border-b border-cyan-950/40 flex items-center gap-2 print:text-black print:border-black">
                <User className="w-4 h-4 text-cyan-400 print:hidden" />
                Clearance Profile
              </h4>
              <ul className="space-y-2 font-mono text-xs">
                <li className="flex justify-between border-b border-cyan-950/20 pb-1.5">
                  <span className="text-gray-500">ROLE:</span>
                  <span className="text-cyan-400 font-semibold print:text-black">SOC ANALYST</span>
                </li>
                <li className="flex justify-between border-b border-cyan-950/20 pb-1.5">
                  <span className="text-gray-500">LEVEL:</span>
                  <span className="text-gray-200 print:text-black">THIRD YEAR (IT)</span>
                </li>
                <li className="flex justify-between border-b border-cyan-950/20 pb-1.5">
                  <span className="text-gray-500">AFFILIATION:</span>
                  <span className="text-gray-200 print:text-black">CMS COLLEGE</span>
                </li>
              </ul>
            </div>

            {/* Structured Skills List */}
            <div>
              <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider mb-3 pb-1.5 border-b border-cyan-950/40 flex items-center gap-2 print:text-black print:border-black">
                <Wrench className="w-4 h-4 text-cyan-400 print:hidden" />
                Technical Weaponry
              </h4>
              <div className="space-y-3 text-xs">
                <div>
                  <h5 className="font-semibold text-gray-200 mb-1 font-mono uppercase text-[10px] text-cyan-400/80 print:text-black">
                    Cybersecurity
                  </h5>
                  <p className="text-gray-400 font-sans leading-relaxed print:text-black">
                    Vulnerabilities, Threat Concepts, Basic Web Security, Malware Awareness, CIA Triad.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-200 mb-1 font-mono uppercase text-[10px] text-cyan-400/80 print:text-black">
                    Networking & Logs
                  </h5>
                  <p className="text-gray-400 font-sans leading-relaxed print:text-black">
                    OSI & TCP/IP stack, DNS, HTTPS, Wireshark packet capture, Syslog, firewall rules.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-200 mb-1 font-mono uppercase text-[10px] text-cyan-400/80 print:text-black">
                    Security Software
                  </h5>
                  <p className="text-gray-400 font-sans leading-relaxed print:text-black">
                    Velociraptor, Wazuh SIEM, OpenEDR, Nmap, Kali Linux.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-200 mb-1 font-mono uppercase text-[10px] text-cyan-400/80 print:text-black">
                    Development
                  </h5>
                  <p className="text-gray-400 font-sans leading-relaxed print:text-black">
                    Python Scripting, HTML/CSS, Git, Supabase database, Vercel cloud.
                  </p>
                </div>
              </div>
            </div>

            {/* Awards Reference */}
            <div>
              <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider mb-3 pb-1.5 border-b border-cyan-950/40 flex items-center gap-2 print:text-black print:border-black">
                <Award className="w-4 h-4 text-cyan-400 print:hidden" />
                Honors & Merits
              </h4>
              <ul className="space-y-2 text-xs">
                <li className="text-gray-400 leading-relaxed print:text-black">
                  <span className="text-cyan-400 font-bold print:hidden">•</span> Winner of multiple technical hackathons.
                </li>
                <li className="text-gray-400 leading-relaxed print:text-black">
                  <span className="text-cyan-400 font-bold print:hidden">•</span> Recognized Department Rank Holder.
                </li>
                <li className="text-gray-400 leading-relaxed print:text-black">
                  <span className="text-cyan-400 font-bold print:hidden">•</span> Built & hosted 6+ operational projects.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Columns (Professional Summary, Experience/Timeline, Projects summary) */}
          <div className="space-y-6 md:col-span-2">
            {/* Professional Summary */}
            <div>
              <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider mb-2.5 pb-1.5 border-b border-cyan-950/40 flex items-center gap-2 print:text-black print:border-black">
                <ShieldAlert className="w-4 h-4 text-cyan-400 print:hidden" />
                Executive Intel Summary
              </h4>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-sans print:text-black">
                Technology enthusiast with a proven track record of transforming ideas into deployed applications. Built and maintained multiple web-based solutions, participated in winning hackathon teams, and actively explores cybersecurity through hands-on security projects and research. Combining software engineering, problem-solving, and security-focused thinking to create reliable and secure digital solutions.
              </p>
            </div>

            {/* Education section */}
            <div>
              <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider mb-3 pb-1.5 border-b border-cyan-950/40 flex items-center gap-2 print:text-black print:border-black">
                <BookOpen className="w-4 h-4 text-cyan-400 print:hidden" />
                Academic Operations
              </h4>
              <div className="space-y-1">
                <div className="flex justify-between items-start text-xs font-semibold text-gray-200 print:text-black">
                  <span>CMS College of Engineering and Technology</span>
                  <span className="font-mono text-cyan-400 print:text-black">2024 - 2027</span>
                </div>
                <p className="text-xs text-gray-300 print:text-black">
                  B.Tech Information Technology (minors)
                </p>
                <p className="text-xs text-gray-400 mt-1 print:text-black">
                  Current Status: Third Year — Sixth Semester (Grade/Rank holder). Focus in data protection, secure protocols, and software security.
                </p>
              </div>
            </div>

            {/* Selected Security Projects references */}
            <div>
              <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider mb-3 pb-1.5 border-b border-cyan-950/40 flex items-center gap-2 print:text-black print:border-black">
                <FileText className="w-4 h-4 text-cyan-400 print:hidden" />
                Operational Labs & Research
              </h4>
              <div className="space-y-3.5 text-xs">
                <div>
                  <div className="flex justify-between items-center mb-0.5 print:text-black">
                    <span className="font-semibold text-gray-200 font-display print:text-black">Velociraptor Threat Hunting & Forensics Lab</span>
                    <span className="font-mono text-cyan-500 text-[10px] print:text-black">Security Research</span>
                  </div>
                  <p className="text-gray-400 font-sans print:text-black">
                    Conducted continuous host telemetry gathering, drafted Velociraptor VQL rules to query client memory, registry, and audit process executions for attack signatures.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-0.5 print:text-black">
                    <span className="font-semibold text-gray-200 font-display print:text-black">Wazuh SIEM Ingestion & Active Firewall Block</span>
                    <span className="font-mono text-cyan-500 text-[10px] print:text-black">SIEM Lab</span>
                  </div>
                  <p className="text-gray-400 font-sans print:text-black">
                    Deployed central manager inside Docker containers, ingested Windows Sysmon & Linux logs, created custom XML rulesets, automated firewall-blocking active response for malicious brute force attempts.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-0.5 print:text-black">
                    <span className="font-semibold text-gray-200 font-display print:text-black">GitHub Repository Secret Leak Scanner</span>
                    <span className="font-mono text-cyan-500 text-[10px] print:text-black">Python Tool</span>
                  </div>
                  <p className="text-gray-400 font-sans print:text-black">
                    Designed scanning scripts analyzing code repositories, targeting exposed AWS tokens, database credentials, and critical private keys before active production releases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cyber Security Clearance Footer */}
        <div className="mt-8 pt-4 border-t border-cyan-500/10 text-center font-mono text-[10px] text-gray-500 flex justify-between items-center print:hidden">
          <span>SYS_VERIFIED_DATA // MD5_SUM: d41d8cd98f00b204e9800998ecf8427e</span>
          <span className="text-cyan-500/60 font-semibold uppercase">SECURE DOSSIER</span>
        </div>
      </div>
    </div>
  );
};
