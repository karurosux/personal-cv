import TerminalPrompt from './TerminalPrompt';

interface ProfessionalSummaryProps {
  summary: {
    intro: string;
    careerProgression: string;
    currentRole: string;
  };
}

export default function ProfessionalSummary({ summary }: ProfessionalSummaryProps) {
  return (
    <section className="py-20 px-4 border-t border-[#00ff41]/20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 space-y-3">
          <div className="flex items-start gap-2">
            <TerminalPrompt user="carlos" path="~/portfolio" />
            <span className="text-[#00ffff]">cat about/README.md</span>
          </div>
        </div>

        <div className="space-y-8 pl-0">
          <div className="space-y-3">
            <h3 className="text-[#ffff00] text-xl">## Professional Summary</h3>
            <p className="text-[#8b949e] leading-relaxed">{summary.intro}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[#ffff00] text-xl">## Career Progression</h3>
            <p className="text-[#8b949e] leading-relaxed">{summary.careerProgression}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[#ffff00] text-xl">## Current Role & Achievements</h3>
            <p className="text-[#8b949e] leading-relaxed">{summary.currentRole}</p>
          </div>

          <div className="pt-6 border-t border-[#00ff41]/20">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <TerminalPrompt user="carlos" path="~/portfolio" />
                <span className="text-[#00ffff]">cat awards.txt</span>
              </div>
              <div className="pl-0 terminal-box-cyan p-4 bg-[#00ffff]/5">
                <p className="text-[#00ffff]">
                  ⭐ <span className="text-[#ffff00] font-bold">Employee of the Year</span> - Semantic AI
                </p>
                <p className="text-[#8b949e] text-sm mt-2">
                  Recognition for exceptional contributions, problem-solving, and driving meaningful impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
