import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Linkedin, Github, Send, ShieldAlert, Terminal, CheckCircle } from 'lucide-react';

interface ContactPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactPanel: React.FC<ContactPanelProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Security Operations Inquiry',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const simulateLogs = () => {
    const logs = [
      'Establishing secure TLS/SSL socket...',
      'Encrypting message body with RSA-4096...',
      'Signing transmission with local signature key...',
      'Resolving mx record for gmail.com...',
      'Connecting to outbound proxy...',
      'Pushing payload into message queue...',
      'Secure packet transmitted successfully.'
    ];

    setTerminalLogs([]);
    logs.forEach((log, index) => {
      setTimeout(() => {
        setTerminalLogs((prev) => [...prev, log]);
      }, (index + 1) * 300);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    simulateLogs();

    // After animations completes (about 2.5s)
    setTimeout(() => {
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: 'Security Operations Inquiry',
        message: '',
      });
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-lg h-full bg-cyber-dark border-l border-cyan-500/20 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl z-10 scanlines"
          >
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            {/* Glowing top line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-cyan-500 animate-pulse" />

            {/* Close Button */}
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 mb-6 relative">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-cyan-400" />
                <h3 className="font-display font-bold text-white text-lg uppercase tracking-wider">
                  Secure Uplink
                </h3>
              </div>
              <button
                onClick={onClose}
                id="close-contact-panel"
                className="p-1.5 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-cyan-950/40 border border-transparent hover:border-cyan-500/20 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Container */}
            <div className="flex-1 space-y-6 relative">
              <p className="text-gray-300 text-sm leading-relaxed">
                Transmit an encrypted dispatch. Blue Team communications are monitored. Your message will be routed directly to the SOC student mailbox.
              </p>

              {status !== 'success' ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                      Sender Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={status === 'sending'}
                      placeholder="e.g. Recruiter, Security Manager"
                      className="w-full bg-[#05070c] border border-cyan-500/25 rounded px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.15)] transition-all font-mono"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                      Sender Address (Email)
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={status === 'sending'}
                      placeholder="e.g. agency@security.com"
                      className="w-full bg-[#05070c] border border-cyan-500/25 rounded px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.15)] transition-all font-mono"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                      Uplink Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={status === 'sending'}
                      className="w-full bg-[#05070c] border border-cyan-500/25 rounded px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.15)] transition-all font-mono"
                    >
                      <option value="Security Operations Inquiry">SOC / Blue Team Recruitment</option>
                      <option value="Academic Collaboration">Academic Collaboration</option>
                      <option value="Project Feedback">Project Feedback</option>
                      <option value="General Dispatch">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                      Secure Payload (Message)
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={status === 'sending'}
                      placeholder="Input message contents..."
                      className="w-full bg-[#05070c] border border-cyan-500/25 rounded px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.15)] transition-all font-mono resize-none"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full py-2.5 rounded font-display font-bold text-sm tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      status === 'sending'
                        ? 'bg-cyan-950/50 border border-cyan-500/30 text-cyan-500 cursor-not-allowed'
                        : 'bg-cyan-500 text-black hover:bg-cyan-400 font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                    }`}
                  >
                    {status === 'sending' ? (
                      <>
                        <Terminal className="w-4 h-4 animate-spin" />
                        <span>ENCRYPTING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>TRANSMIT PACKET</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center p-6 rounded bg-[#05070c] border border-emerald-500/30 space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-emerald-400 text-base uppercase tracking-wider">
                      Uplink Confirmed
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      Message package digested and sent securely.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-1.5 rounded bg-emerald-950/50 border border-emerald-500/30 text-xs font-mono text-emerald-400 hover:bg-emerald-900/50 transition-all cursor-pointer"
                  >
                    Send Another Dispatch
                  </button>
                </motion.div>
              )}

              {/* Encryption Log Telemetry */}
              {status === 'sending' && (
                <div className="bg-black/90 rounded border border-cyan-500/20 p-3.5 font-mono text-[10px] text-cyan-400/80 space-y-1">
                  <div className="flex justify-between border-b border-cyan-500/10 pb-1.5 mb-1.5">
                    <span className="font-bold">CIPHER_TELEMETRY</span>
                    <span className="animate-pulse">ONLINE</span>
                  </div>
                  {terminalLogs.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-1">
                      <span className="text-cyan-500 font-bold shrink-0">&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Secure Credentials Divider */}
              <div className="pt-6 border-t border-cyan-500/10 space-y-4">
                <h4 className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                  Permanent Channels
                </h4>

                <div className="grid grid-cols-1 gap-3 font-mono text-xs">
                  {/* Email Channel */}
                  <a
                    href="mailto:ponmalars25@gmail.com"
                    className="flex items-center gap-3 p-3 rounded bg-cyan-950/20 border border-cyan-950 hover:border-cyan-500/30 hover:bg-cyan-950/40 transition-all group"
                  >
                    <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] text-gray-500 leading-none mb-0.5">DIRECT_MAIL</div>
                      <div className="text-gray-200 group-hover:text-cyan-400 transition-colors">
                        ponmalars25@gmail.com
                      </div>
                    </div>
                  </a>

                  {/* LinkedIn Channel */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded bg-cyan-950/20 border border-cyan-950 hover:border-cyan-500/30 hover:bg-cyan-950/40 transition-all group"
                  >
                    <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] text-gray-500 leading-none mb-0.5">LINKEDIN</div>
                      <div className="text-gray-200 group-hover:text-cyan-400 transition-colors">
                        linkedin.com/in/ponmalar-s
                      </div>
                    </div>
                  </a>

                  {/* GitHub Channel */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded bg-cyan-950/20 border border-cyan-950 hover:border-cyan-500/30 hover:bg-cyan-950/40 transition-all group"
                  >
                    <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] text-gray-500 leading-none mb-0.5">GITHUB_RECON</div>
                      <div className="text-gray-200 group-hover:text-cyan-400 transition-colors">
                        github.com/ponmalar
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer of panel */}
            <div className="mt-6 pt-4 border-t border-cyan-500/10 text-center font-mono text-[9px] text-gray-500">
              DISPATCH KEY: {Math.random().toString(16).substring(2, 10).toUpperCase()} // END_OF_SESSION
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
