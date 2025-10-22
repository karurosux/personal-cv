import { WorkExperience as WorkExperienceType } from '@/types/cv';
import TerminalPrompt from './TerminalPrompt';

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

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-[#00ff41]/30 hover:border-[#00ff41] transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.5)]"></div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-[#ffff00]">*</span>
                    <h3 className="text-2xl font-bold text-[#00ff41]">{exp.title}</h3>
                  </div>
                  <p className="text-xl text-[#00ffff]">@ {exp.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-[#8b949e] mt-2">
                    <span>📍 {exp.location}</span>
                    <span>|</span>
                    <span>
                      📅 {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                </div>

                <div className="terminal-box-cyan p-4 bg-[#00ffff]/5">
                  <p className="text-[#8b949e] leading-relaxed">{exp.description}</p>
                </div>

                <div>
                  <p className="text-[#ffff00] text-sm mb-2">$ echo $TECH_STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm text-[#00ffff] terminal-box-cyan bg-[#00ffff]/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
