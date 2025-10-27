"use client";

import { ContactInfo } from "@/types/cv";
import TerminalPrompt from "./TerminalPrompt";
import Image from "next/image";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import { track } from "@vercel/analytics";

interface HeroProps {
  name: string;
  title: string;
  yearsOfExperience: number;
  contactInfo: ContactInfo;
}

export default function Hero({
  name,
  title,
  yearsOfExperience,
  contactInfo,
}: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="space-y-6 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="space-y-2 flex-shrink-0">
              <div className="flex items-start gap-2">
                <span className="text-[#8b949e]">$</span>
                <span className="text-[#00ffff]">display avatar.jpeg</span>
              </div>
              <div className="terminal-box p-3 bg-[#00ff41]/5 relative overflow-hidden w-[220px]">
                <Image
                  src="/avatar.jpeg"
                  alt="Carlos Gonzalez"
                  width={220}
                  height={220}
                  className="w-full h-auto terminal-image"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none terminal-image-overlay"></div>
              </div>
              <p className="text-[#8b949e] text-xs">File: avatar.jpeg | 220x220px</p>
            </div>

            <div className="flex-1 w-full">

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <TerminalPrompt user="carlos" path="~/portfolio" />
              <span className="text-[#00ffff]">whoami</span>
            </div>
            <div className="pl-0 space-y-1">
              <p className="text-[#00ff41] text-2xl md:text-4xl font-bold terminal-glow">
                {name}
              </p>
              <p className="text-[#ffff00] text-lg md:text-2xl">&gt; {title}</p>
            </div>
          </div>

          <div className="space-y-2 pl-0">
            <div className="flex items-start gap-2">
              <TerminalPrompt user="carlos" path="~/portfolio" />
              <span className="text-[#00ffff]">cat info.txt</span>
            </div>
            <div className="pl-0 text-[#8b949e] space-y-1">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-[#00ff41]" />
                Location:{" "}
                <span className="text-[#00ff41]">{contactInfo.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={16} className="text-[#00ff41]" />
                Experience:{" "}
                <span className="text-[#00ff41]">
                  {yearsOfExperience} years
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-[#00ff41]" />
                Email:{" "}
                <span className="text-[#00ff41]">{contactInfo.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-[#00ff41]" />
                Phone:{" "}
                <span className="text-[#00ff41]">{contactInfo.phone}</span>
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-6">
            <div className="flex items-start gap-2">
              <TerminalPrompt user="carlos" path="~/portfolio" />
              <span className="text-[#00ffff]">ls -la ./links</span>
            </div>
            <div className="flex flex-wrap gap-3 pl-0">
              <a
                href={`mailto:${contactInfo.email}`}
                onClick={() => track("email_click")}
                className="px-4 py-2 terminal-box bg-[#00ff41] text-[#0d1117] hover:bg-[#00ff41]/90 transition-all font-bold"
              >
                $ contact.sh
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("github_click")}
                className="px-4 py-2 terminal-box-cyan text-[#00ffff] hover:bg-[#00ffff]/10 transition-all"
              >
                → github/
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("linkedin_click")}
                className="px-4 py-2 terminal-box-cyan text-[#00ffff] hover:bg-[#00ffff]/10 transition-all"
              >
                → linkedin/
              </a>

              <a
                href="/api/generate-pdf"
                download
                onClick={() => track("pdf_download")}
                className="px-4 py-2 terminal-box-cyan text-[#00ffff] hover:bg-[#00ffff]/10 transition-all"
              >
                → download pdf
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2 pt-4">
            <TerminalPrompt user="carlos" path="~/portfolio" />
            <span className="cursor-blink">█</span>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
