"use client";

import { Language } from '@/types/cv';
import TerminalPrompt from './TerminalPrompt';
import { Languages as LanguagesIcon } from 'lucide-react';

interface LanguagesProps {
  languages: Language[];
}

export default function Languages({ languages }: LanguagesProps) {
  return (
    <section className="py-20 px-4 border-t border-[#00ff41]/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 space-y-3">
          <div className="flex items-start gap-2">
            <TerminalPrompt user="carlos" path="~/portfolio" />
            <span className="text-[#00ffff]">cat ~/.config/languages.json</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((language, index) => (
            <div
              key={index}
              className="terminal-box-cyan p-6 bg-[#00ffff]/5 hover:bg-[#00ffff]/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <LanguagesIcon size={24} className="text-[#00ffff] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#00ffff] mb-1">
                    {language.name}
                  </h3>
                  <p className="text-[#8b949e]">
                    Proficiency: <span className="text-[#00ff41]">{language.proficiency}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
