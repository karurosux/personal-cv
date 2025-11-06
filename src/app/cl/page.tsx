'use client';

import { useState } from 'react';
import CoverLetter from '@/components/CoverLetter';
import TerminalPrompt from '@/components/TerminalPrompt';
import { buildCoverLetter } from '@/data/cover-letter-data';
import { cvData } from '@/data/cv-data';

export default function CoverLetterPage() {
  const [companyName, setCompanyName] = useState('[Company Name]');
  const [position, setPosition] = useState('[Position Title]');
  const [whyThisCompany, setWhyThisCompany] = useState(
    '[Explain why you\'re interested in this specific company - research their mission, values, products, or culture and write 2-3 sentences about what resonates with you]'
  );
  const [recipientName, setRecipientName] = useState('');
  const [recipientTitle, setRecipientTitle] = useState('');

  const coverLetterData = buildCoverLetter(
    companyName,
    position,
    whyThisCompany,
    recipientName || undefined,
    recipientTitle || undefined
  );

  return (
    <main className="min-h-screen terminal-scanline">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8 no-print">
          <div className="flex items-center gap-2 mb-4">
            <TerminalPrompt user="carlos" path="~/cover-letter" />
            <span className="text-[#00ffff]">edit</span>
          </div>
          <h1 className="text-3xl font-bold text-[#00ff41] mb-2">
            Cover Letter Builder
          </h1>
          <p className="text-[#8b949e]">
            Customize the details below to build your personalized cover letter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 no-print">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#00ff41] mb-4">
                Customize Details
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#8b949e] mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-[#161b22] border border-[#30363d] rounded px-3 py-2 text-[#c9d1d9] focus:outline-none focus:border-[#00ff41] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#8b949e] mb-2">
                    Position Title *
                  </label>
                  <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full bg-[#161b22] border border-[#30363d] rounded px-3 py-2 text-[#c9d1d9] focus:outline-none focus:border-[#00ff41] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#8b949e] mb-2">
                    Why This Company? *
                  </label>
                  <textarea
                    value={whyThisCompany}
                    onChange={(e) => setWhyThisCompany(e.target.value)}
                    rows={4}
                    className="w-full bg-[#161b22] border border-[#30363d] rounded px-3 py-2 text-[#c9d1d9] focus:outline-none focus:border-[#00ff41] transition-colors resize-none"
                    placeholder="Research the company's mission, values, products, or culture and explain what resonates with you (2-3 sentences)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#8b949e] mb-2">
                    Recipient Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full bg-[#161b22] border border-[#30363d] rounded px-3 py-2 text-[#c9d1d9] focus:outline-none focus:border-[#00ff41] transition-colors"
                    placeholder="e.g., Sarah Johnson"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#8b949e] mb-2">
                    Recipient Title (Optional)
                  </label>
                  <input
                    type="text"
                    value={recipientTitle}
                    onChange={(e) => setRecipientTitle(e.target.value)}
                    className="w-full bg-[#161b22] border border-[#30363d] rounded px-3 py-2 text-[#c9d1d9] focus:outline-none focus:border-[#00ff41] transition-colors"
                    placeholder="e.g., Senior Recruiter"
                  />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#30363d]">
                <button
                  onClick={() => window.print()}
                  className="w-full bg-[#00ff41] text-[#0d1117] font-semibold py-2 px-4 rounded hover:bg-[#00cc33] transition-colors"
                >
                  Print / Save as PDF
                </button>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-4 h-fit">
            <CoverLetter data={coverLetterData} cvData={cvData} />
          </div>
        </div>
      </div>

      <footer className="py-12 px-4 text-center border-t border-[#00ff41]/20 mt-12">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2">
            <TerminalPrompt user="carlos" path="~/cover-letter" />
            <span className="text-[#00ffff]">exit</span>
          </div>
          <p className="text-[#8b949e] text-sm">
            © {new Date().getFullYear()} Carlos Javier Gonzalez Vasquez
          </p>
        </div>
      </footer>
    </main>
  );
}
