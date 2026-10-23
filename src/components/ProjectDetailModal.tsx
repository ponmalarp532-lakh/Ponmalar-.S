import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, Terminal, Network, Layout, Eye, ExternalLink, Shield } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 cursor-pointer"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative w-full max-w-5xl h-[85vh] overflow-y-auto glass-panel rounded-xl text-gray-100 shadow-2xl flex flex-col md:flex-row border border-cyan-500/30 overflow-hidden scanlines"
      >
        {/* Decorative Grid Corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          id={`close-project-btn-${project.id}`}
          className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-cyan-400 rounded-full hover:bg-cyan-950/40 border border-transparent hover:border-cyan-500/20 transition-all cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Text Details */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-full md:max-h-[85vh] border-b md:border-b-0 md:border-r border-cyan-950/50">
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 text-xs font-mono rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                {project.category}
              </span>
              {project.metric && (
                <span className="px-2.5 py-0.5 text-xs font-mono rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                  {project.metric.label}: {project.metric.value}
                </span>
              )}
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-cyan-400 shrink-0" />
              {project.title}
            </h3>

            {/* Description */}
            <div className="space-y-4 mb-6">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Outcomes */}
            <div className="mb-6">
              <h4 className="font-display font-semibold text-cyan-400 text-sm uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Key Deliverables & Outcomes
              </h4>
              <ul className="space-y-2.5">
                {project.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="text-cyan-500 font-mono mt-0.5 font-bold shrink-0">[{idx + 1}]</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer of Left Panel: Tech Stack */}
          <div className="pt-6 border-t border-cyan-950/50 mt-4">
            <h5 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
              System Tech Stack
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono rounded bg-cyan-950/30 text-gray-300 border border-cyan-950 hover:border-cyan-500/30 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Custom Links for verified sites */}
            {project.metric?.label === 'Service Link' && (
              <div className="mt-4">
                <a
                  href={`https://${project.metric.value}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Launch Live Prototype ({project.metric.value})
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Virtual Cybersecurity Interface Screen / Screenshot Gallery */}
        <div className="flex-1 p-6 md:p-8 bg-black/45 flex flex-col justify-between max-h-full md:max-h-[85vh] overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-display font-semibold text-gray-200 text-sm uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                System Screen Telemetry
              </h4>
              {/* Tab Selector if multiple screenshots exist */}
              {project.screenshots.length > 1 && (
                <div className="flex gap-1.5">
                  {project.screenshots.map((screen, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreenshotIndex(idx)}
                      className={`px-2 py-1 text-xs font-mono rounded transition-all cursor-pointer ${
                        activeScreenshotIndex === idx
                          ? 'bg-cyan-500 text-black font-semibold'
                          : 'bg-cyan-950/40 text-cyan-400 hover:bg-cyan-900/40 border border-cyan-500/20'
                      }`}
                    >
                      Console {idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Simulated Technical Terminal Screen */}
            <div className="w-full bg-[#05070c] rounded-lg border border-cyan-500/30 overflow-hidden shadow-2xl flex flex-col font-mono text-xs text-gray-300 min-h-[300px] md:min-h-[400px]">
              {/* Terminal Title Bar */}
              <div className="bg-[#0b0f19] border-b border-cyan-500/20 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-[10px] text-gray-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                    {project.screenshots[activeScreenshotIndex].type === 'terminal' && <Terminal className="w-3 h-3 text-cyan-400" />}
                    {project.screenshots[activeScreenshotIndex].type === 'network' && <Network className="w-3 h-3 text-cyan-400" />}
                    {project.screenshots[activeScreenshotIndex].type === 'log' && <Layout className="w-3 h-3 text-cyan-400" />}
                    {project.screenshots[activeScreenshotIndex].type === 'dashboard' && <Eye className="w-3 h-3 text-cyan-400" />}
                    {project.screenshots[activeScreenshotIndex].title}
                  </span>
                </div>
                <span className="text-[9px] text-cyan-500/60 font-semibold tracking-widest uppercase animate-pulse">
                  SECURE-LINK
                </span>
              </div>

              {/* Terminal Console Output */}
              <div className="p-4 flex-1 space-y-1.5 overflow-y-auto bg-black/90 scrollbar-thin select-all">
                {project.screenshots[activeScreenshotIndex].content.map((line, idx) => {
                  let isAlert = line.startsWith('[!]') || line.startsWith('**') || line.includes('WARNING');
                  let isSuccess = line.startsWith('[SUCCESS]') || line.includes('COMPLETE') || line.includes('Verified');
                  let isHeader = line.startsWith('==') || line.startsWith('⚡') || line.startsWith('root@');

                  let textColor = 'text-gray-300';
                  if (isAlert) textColor = 'text-rose-400 font-medium';
                  else if (isSuccess) textColor = 'text-emerald-400 font-medium';
                  else if (isHeader) textColor = 'text-cyan-400 font-bold';

                  return (
                    <div key={idx} className={`${textColor} leading-relaxed whitespace-pre-wrap`}>
                      {line}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="mt-4 text-[10px] text-gray-500 font-mono text-center">
            * Fully simulated live interactive telemetry representing active DFIR sandbox environments.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
