"use client";

import { Education as EducationType } from '@/types/cv';
import TerminalPrompt from './TerminalPrompt';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="py-20 px-4 border-t border-[#00ff41]/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 space-y-3">
          <div className="flex items-start gap-2">
            <TerminalPrompt user="carlos" path="~/portfolio" />
            <span className="text-[#00ffff]">cat ~/.education/credentials.log</span>
          </div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-[#00ffff]/30 hover:border-[#00ffff] transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00ffff] shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <GraduationCap size={24} className="text-[#00ffff] mt-1" />
                    <h3 className="text-2xl font-bold text-[#00ffff]">{edu.degree}</h3>
                  </div>
                  <p className="text-xl text-[#00ff41]">@ {edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-[#8b949e] mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-[#00ffff]" />
                      {edu.location}
                    </span>
                    <span>|</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-[#00ffff]" />
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                </div>

                {edu.description && (
                  <div className="terminal-box-cyan p-4 bg-[#00ffff]/5">
                    <p className="text-[#8b949e] leading-relaxed">{edu.description}</p>
                  </div>
                )}

                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <p className="text-[#ffff00] text-sm mb-2">$ cat achievements.txt</p>
                    <div className="terminal-box-cyan p-4 bg-[#00ffff]/5 space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-[#00ffff]">▸</span>
                          <span className="text-[#8b949e]">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pl-8 border-l-2 border-[#00ffff]/30">
          <div className="absolute w-4 h-4 rounded-full bg-[#8b949e] -ml-[42px]"></div>
          <p className="text-[#8b949e] text-sm">Beginning of academic journey...</p>
        </div>
      </div>
    </section>
  );
}
