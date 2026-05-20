import { WorkExperience as WorkExperienceType } from '@/types/cv';
import TerminalPrompt from './TerminalPrompt';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

interface WorkExperienceProps {
  experiences: WorkExperienceType[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section className="py-20 px-4 border-t border-[#00ff41]/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 space-y-3">
          <div className="flex items-start gap-2">
            <TerminalPrompt user="carlos" path="~/portfolio" />
            <span className="text-[#00ffff]">git log --all --graph --pretty=format:&apos;%C(yellow)%h%Creset %C(cyan)%an%Creset - %s&apos;</span>
          </div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, expIdx) => (
            <div
              key={expIdx}
              className="relative pl-8 border-l-2 border-[#00ff41]/30 hover:border-[#00ff41] transition-colors"
            >
              {/* Outer timeline node representing the company */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.5)]"></div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#00ff41] flex items-center gap-2">
                    <Briefcase size={20} className="text-[#ffff00]" />
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-[#8b949e] mt-1">
                    <MapPin size={14} className="text-[#00ff41]" />
                    {exp.location}
                  </div>
                </div>

                <div className="space-y-8 pl-4 border-l border-[#00ffff]/10">
                  {exp.positions.map((pos, posIdx) => (
                    <div key={posIdx} className="space-y-3 relative">
                      <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-[#00ffff] shadow-[0_0_5px_rgba(0,255,255,0.5)]"></div>
                      
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-xl font-semibold text-[#00ffff]">{pos.title}</h4>
                        <span className="flex items-center gap-1 text-xs text-[#8b949e]">
                          <Calendar size={12} className="text-[#00ff41]" />
                          {pos.startDate} - {pos.endDate}
                        </span>
                      </div>

                      <div className="terminal-box-cyan p-4 bg-[#00ffff]/5">
                        {Array.isArray(pos.description) ? (
                          <ul className="list-none space-y-2 text-[#8b949e] leading-relaxed text-sm">
                            {pos.description.map((bullet, bulletIdx) => (
                              <li key={bulletIdx} className="flex items-start gap-2">
                                <span className="text-[#ffff00] select-none">-</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-[#8b949e] leading-relaxed text-sm">{pos.description}</p>
                        )}
                      </div>

                      <div>
                        <p className="text-[#ffff00] text-xs mb-1.5">$ echo $TECH_STACK</p>
                        <div className="flex flex-wrap gap-2">
                          {pos.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-0.5 text-xs text-[#00ffff] terminal-box-cyan bg-[#00ffff]/5"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pl-8 border-l-2 border-[#00ff41]/30">
          <div className="absolute w-4 h-4 rounded-full bg-[#8b949e] -ml-[42px]"></div>
          <p className="text-[#8b949e] text-sm">Beginning of timeline...</p>
        </div>
      </div>
    </section>
  );
}
