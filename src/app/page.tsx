import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import TerminalPrompt from '@/components/TerminalPrompt';
import { cvData } from '@/data/cv-data';

export default function Home() {
  return (
    <main className="min-h-screen terminal-scanline">
      <Hero
        name={cvData.name}
        title={cvData.title}
        yearsOfExperience={cvData.yearsOfExperience}
        contactInfo={cvData.contactInfo}
      />

      <ProfessionalSummary summary={cvData.professionalSummary} />

      <Skills
        primarySkills={cvData.primarySkills}
        allSkills={cvData.allSkills}
        programmingLanguages={cvData.programmingLanguages}
        frameworks={cvData.frameworks}
      />

      <WorkExperience experiences={cvData.workExperience} />

      <Education education={cvData.education} />

      <Contact contactInfo={cvData.contactInfo} />

      <footer className="py-12 px-4 text-center border-t border-[#00ff41]/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2">
            <TerminalPrompt user="carlos" path="~/portfolio" />
            <span className="text-[#00ffff]">exit</span>
          </div>
          <p className="text-[#8b949e] text-sm">
            © {new Date().getFullYear()} Carlos Javier Gonzalez Vasquez
          </p>
          <p className="text-[#8b949e] text-xs">
            Built with Next.js, TypeScript & Tailwind CSS | <span className="text-[#00ff41]">Connection closed.</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
