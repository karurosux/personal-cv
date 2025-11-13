import { ContactInfo } from "@/types/cv";
import TerminalPrompt from "./TerminalPrompt";

interface ContactProps {
  contactInfo: ContactInfo;
}

export default function Contact({ contactInfo }: ContactProps) {
  return (
    <section className="py-20 px-4 border-t border-[#00ff41]/20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 space-y-3">
          <div className="flex items-start gap-2">
            <TerminalPrompt user="carlos" path="~/portfolio" />
            <span className="text-[#00ffff]">
              curl -X GET https://api.carlos.dev/contact
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <a
            href={`mailto:${contactInfo.email}`}
            className="group block p-4 terminal-box hover:bg-[#00ff41]/10 transition-all"
          >
            <div className="space-y-1">
              <p className="text-[#ffff00] text-sm">// email</p>
              <p className="text-[#00ff41] group-hover:terminal-glow transition-all">
                {contactInfo.email}
              </p>
            </div>
          </a>

          {contactInfo.phone?.length > 0 && (
            <a
              href={`tel:${contactInfo.phone}`}
              className="group block p-4 terminal-box hover:bg-[#00ff41]/10 transition-all"
            >
              <div className="space-y-1">
                <p className="text-[#ffff00] text-sm">// phone</p>
                <p className="text-[#00ff41] group-hover:terminal-glow transition-all">
                  {contactInfo.phone}
                </p>
              </div>
            </a>
          )}

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 terminal-box-cyan hover:bg-[#00ffff]/10 transition-all"
          >
            <div className="space-y-1">
              <p className="text-[#ffff00] text-sm">// github</p>
              <p className="text-[#00ffff]">→ github.com/karurosux</p>
            </div>
          </a>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 terminal-box-cyan hover:bg-[#00ffff]/10 transition-all"
          >
            <div className="space-y-1">
              <p className="text-[#ffff00] text-sm">// linkedin</p>
              <p className="text-[#00ffff]">→ linkedin.com/in/karurosux</p>
            </div>
          </a>
        </div>

        <div className="mt-12 space-y-3">
          <div className="flex items-start gap-2">
            <TerminalPrompt user="carlos" path="~/portfolio" />
            <span className="text-[#00ffff]">
              echo &quot;Let&apos;s build something amazing together!&quot;
            </span>
          </div>
          <p className="text-[#8b949e] pl-0">
            Let&apos;s build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
