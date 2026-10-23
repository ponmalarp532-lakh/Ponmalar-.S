import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldAlert, Wrench, Cpu } from 'lucide-react';
import { STATS_DATA } from '../data';

// Custom Animated Counter Hook/Component
const Counter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    // Total duration of counting animation in ms
    const duration = 1500;
    const incrementTime = Math.max(Math.floor(duration / end), 15);

    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsDashboard: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Clock':
        return <Clock className="w-5 h-5 text-cyan-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      default:
        return <Clock className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {STATS_DATA.map((stat, idx) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative glass-panel rounded-xl p-5 md:p-6 overflow-hidden hover:border-cyan-500/40 group cursor-default"
        >
          {/* Subtle Ambient Background Laser Glow */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/10 transition-colors" />

          {/* Top Line Tech Status Bar Indicator */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-right from-transparent via-cyan-500/10 to-transparent group-hover:via-cyan-500/40 transition-all duration-500" />

          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.15)] transition-all shrink-0">
              {getIcon(stat.iconName)}
            </div>
            <span className="font-mono text-[10px] text-cyan-400/80 tracking-widest uppercase">
              METRIC_ID: 0{idx + 1}
            </span>
          </div>

          <div className="font-display text-2xl md:text-4xl font-bold text-white tracking-tight leading-none mb-1 text-glow-cyber">
            <Counter value={stat.value} suffix={stat.suffix} />
          </div>

          <div className="text-sm font-semibold text-gray-200 font-display mb-1.5 uppercase tracking-wide">
            {stat.label}
          </div>

          <p className="text-gray-400 text-xs leading-relaxed font-sans">
            {stat.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
