'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Technology {
  name: string;
  href: string;
  icon: string;
  invertBg?: boolean;
}

const highlights = [
  {
    label: 'Full-Stack',
    title: 'Web & Systems',
    text: 'Building end-to-end applications across front-end interfaces, back-end logic, and databases with clean architecture and version control.',
  },
  {
    label: 'Edge AI',
    title: 'FPGA & Machine Learning',
    text: 'Developing real-time YOLOv5 drone detection on the AMD Kria KV260 (FPGA & DPU) while self-studying ML foundations from scratch.',
  },
  {
    label: 'Focus',
    title: 'First SWE Role',
    text: 'Ready to bring fast self-learning and hands-on project experience into a professional engineering team solving demanding problems.',
  },
];

export default function AboutSection({ technologies }: { technologies: Technology[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="relative z-10 scroll-mt-16 py-16 md:py-24 px-4 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-10 text-center tracking-tight">
          About me
        </h2>

        <div className="relative p-5 sm:p-8 md:p-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl ring-1 ring-white/5 shadow-2xl">
          <p className="text-base sm:text-lg md:text-xl text-white/95 font-normal leading-relaxed">
            I&apos;m a Computer Science student at Aalto University focused on full-stack development, algorithmic systems, and edge AI.
          </p>

          <div
            className={`mt-5 md:mt-8 grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 ${
              expanded ? 'grid' : 'hidden md:grid'
            }`}
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 md:p-5 flex flex-col gap-1.5"
              >
                <span className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  {item.label}
                </span>
                <h3 className="text-sm md:text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="mt-4 md:hidden inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/10 text-xs font-medium text-slate-200 transition-colors cursor-pointer"
          >
            <span>{expanded ? 'Show less' : 'Read more'}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>

          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
            <h3 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">
              Technologies
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:flex md:flex-wrap gap-3 sm:gap-4 md:gap-8 items-center">
              {technologies.map((tech) => (
                <a
                  key={tech.name}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] py-3 px-2 md:border-0 md:bg-transparent md:p-0 group transition-colors hover:bg-white/[0.06] md:hover:bg-transparent"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`w-8 h-8 md:w-11 md:h-11 transition-transform group-hover:scale-110 ${
                      tech.invertBg ? 'bg-white rounded-full p-0.5' : ''
                    }`}
                  />
                  <span className="text-[11px] md:text-xs text-slate-400 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
