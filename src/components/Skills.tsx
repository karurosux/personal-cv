'use client';

import { useState } from 'react';
import { track } from '@vercel/analytics';
import TerminalPrompt from './TerminalPrompt';

interface SkillsProps {
  programmingLanguages: string[];
  frameworks: string[];
  databases?: string[];
  infrastructure?: string[];
  concepts?: string[];
}

export default function Skills({
  programmingLanguages,
  frameworks,
  databases = [],
  infrastructure = [],
  concepts = []
}: SkillsProps) {
  const [activeTab, setActiveTab] = useState<'languages' | 'frameworks' | 'databases' | 'infrastructure' | 'concepts'>('languages');

  const getSkillsToDisplay = () => {
    switch (activeTab) {
      case 'languages':
        return programmingLanguages;
      case 'frameworks':
        return frameworks;
      case 'databases':
        return databases;
      case 'infrastructure':
        return infrastructure;
      case 'concepts':
        return concepts;
      default:
        return programmingLanguages;
    }
  };

  const getCommand = () => {
    switch (activeTab) {
      case 'languages':
        return 'cat skills/languages.json';
      case 'frameworks':
        return 'cat skills/frameworks.json';
      case 'databases':
        return 'cat skills/databases.json';
      case 'infrastructure':
        return 'cat skills/infrastructure.json';
      case 'concepts':
        return 'cat skills/concepts.json';
      default:
        return 'cat skills/languages.json';
    }
  };

  return (
    <section className="py-20 px-4 border-t border-[#00ff41]/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 space-y-3">
          <div className="flex items-start gap-2">
            <TerminalPrompt user="carlos" path="~/portfolio" />
            <span className="text-[#00ffff]">ls -la ./skills</span>
          </div>
          <div className="text-[#8b949e] text-sm pl-0">
            <p>drwxr-xr-x  5 carlos  staff  160 May 19 2026 .</p>
            <p>drwxr-xr-x  8 carlos  staff  256 May 19 2026 ..</p>
            <p className="text-[#00ff41]">-rw-r--r--  1 carlos  staff  512B May 19 2026 languages.json</p>
            <p className="text-[#00ff41]">-rw-r--r--  1 carlos  staff  768B May 19 2026 frameworks.json</p>
            <p className="text-[#00ff41]">-rw-r--r--  1 carlos  staff  640B May 19 2026 databases.json</p>
            <p className="text-[#00ff41]">-rw-r--r--  1 carlos  staff  1.1K May 19 2026 infrastructure.json</p>
            <p className="text-[#00ff41]">-rw-r--r--  1 carlos  staff  450B May 19 2026 concepts.json</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => {
              track('skills_tab_click', { tab: 'languages' });
              setActiveTab('languages');
            }}
            className={`px-4 py-2 terminal-box transition-all ${
              activeTab === 'languages'
                ? 'bg-[#00ff41] text-[#0d1117]'
                : 'text-[#00ff41] hover:bg-[#00ff41]/10'
            }`}
          >
            $ languages.json
          </button>
          <button
            onClick={() => {
              track('skills_tab_click', { tab: 'frameworks' });
              setActiveTab('frameworks');
            }}
            className={`px-4 py-2 terminal-box transition-all ${
              activeTab === 'frameworks'
                ? 'bg-[#00ff41] text-[#0d1117]'
                : 'text-[#00ff41] hover:bg-[#00ff41]/10'
            }`}
          >
            $ frameworks.json
          </button>
          <button
            onClick={() => {
              track('skills_tab_click', { tab: 'databases' });
              setActiveTab('databases');
            }}
            className={`px-4 py-2 terminal-box transition-all ${
              activeTab === 'databases'
                ? 'bg-[#00ff41] text-[#0d1117]'
                : 'text-[#00ff41] hover:bg-[#00ff41]/10'
            }`}
          >
            $ databases.json
          </button>
          <button
            onClick={() => {
              track('skills_tab_click', { tab: 'infrastructure' });
              setActiveTab('infrastructure');
            }}
            className={`px-4 py-2 terminal-box transition-all ${
              activeTab === 'infrastructure'
                ? 'bg-[#00ff41] text-[#0d1117]'
                : 'text-[#00ff41] hover:bg-[#00ff41]/10'
            }`}
          >
            $ infrastructure.json
          </button>
          <button
            onClick={() => {
              track('skills_tab_click', { tab: 'concepts' });
              setActiveTab('concepts');
            }}
            className={`px-4 py-2 terminal-box transition-all ${
              activeTab === 'concepts'
                ? 'bg-[#00ff41] text-[#0d1117]'
                : 'text-[#00ff41] hover:bg-[#00ff41]/10'
            }`}
          >
            $ concepts.json
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <TerminalPrompt user="carlos" path="~/portfolio" />
            <span className="text-[#00ffff]">{getCommand()}</span>
          </div>

          <div className="pl-0 space-y-2">
            <p className="text-[#8b949e]">{"{"}</p>
            <div className="pl-4 space-y-1">
              <p className="text-[#ffff00]">&quot;skills&quot;: [</p>
              <div className="flex flex-wrap gap-2 pl-4">
                {getSkillsToDisplay().map((skill, index) => (
                  <span
                    key={skill}
                    className="text-[#00ffff]"
                  >
                    &quot;{skill}&quot;{index < getSkillsToDisplay().length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              <p className="text-[#ffff00]">]</p>
            </div>
            <p className="text-[#8b949e]">{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
