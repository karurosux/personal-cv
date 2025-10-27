'use client';

import { useState } from 'react';
import { track } from '@vercel/analytics';
import TerminalPrompt from './TerminalPrompt';

interface SkillsProps {
  primarySkills: string[];
  allSkills: string[];
  programmingLanguages: string[];
  frameworks: string[];
}

export default function Skills({
  primarySkills,
  allSkills,
  programmingLanguages,
  frameworks
}: SkillsProps) {
  const [activeTab, setActiveTab] = useState<'primary' | 'languages' | 'frameworks' | 'all'>('primary');

  const getSkillsToDisplay = () => {
    switch (activeTab) {
      case 'primary':
        return primarySkills;
      case 'languages':
        return programmingLanguages;
      case 'frameworks':
        return frameworks;
      case 'all':
        return allSkills;
      default:
        return primarySkills;
    }
  };

  const getCommand = () => {
    switch (activeTab) {
      case 'primary':
        return 'cat skills/primary.json';
      case 'languages':
        return 'cat skills/languages.json';
      case 'frameworks':
        return 'cat skills/frameworks.json';
      case 'all':
        return 'cat skills/other.json';
      default:
        return 'cat skills/primary.json';
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
            <p>drwxr-xr-x  4 carlos  staff  128 Oct 23 2024 .</p>
            <p>drwxr-xr-x  8 carlos  staff  256 Oct 23 2024 ..</p>
            <p className="text-[#00ff41]">-rw-r--r--  1 carlos  staff  1.2K Oct 23 2024 primary.json</p>
            <p className="text-[#00ff41]">-rw-r--r--  1 carlos  staff  512B Oct 23 2024 languages.json</p>
            <p className="text-[#00ff41]">-rw-r--r--  1 carlos  staff  768B Oct 23 2024 frameworks.json</p>
            <p className="text-[#00ff41]">-rw-r--r--  1 carlos  staff  256B Oct 23 2024 other.json</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => {
              track('skills_tab_click', { tab: 'primary' });
              setActiveTab('primary');
            }}
            className={`px-4 py-2 terminal-box transition-all ${
              activeTab === 'primary'
                ? 'bg-[#00ff41] text-[#0d1117]'
                : 'text-[#00ff41] hover:bg-[#00ff41]/10'
            }`}
          >
            $ primary.json
          </button>
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
              track('skills_tab_click', { tab: 'all' });
              setActiveTab('all');
            }}
            className={`px-4 py-2 terminal-box transition-all ${
              activeTab === 'all'
                ? 'bg-[#00ff41] text-[#0d1117]'
                : 'text-[#00ff41] hover:bg-[#00ff41]/10'
            }`}
          >
            $ other.json
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
              <p className="text-[#ffff00]">"skills": [</p>
              <div className="flex flex-wrap gap-2 pl-4">
                {getSkillsToDisplay().map((skill, index) => (
                  <span
                    key={skill}
                    className="text-[#00ffff]"
                  >
                    "{skill}"{index < getSkillsToDisplay().length - 1 ? ',' : ''}
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
