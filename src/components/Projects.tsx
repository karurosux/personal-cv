"use client";

import { Project } from "@/types/cv";
import TerminalPrompt from "./TerminalPrompt";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-start gap-2">
            <TerminalPrompt user="carlos" path="~/portfolio" />
            <span className="text-[#00ffff]">ls ./projects</span>
          </div>

          <div className="space-y-4 pl-0">
            {projects.map((project, index) => (
              <div
                key={index}
                className="terminal-box bg-[#0d1117]/80 p-4 border border-[#00ff41]/20 hover:border-[#00ff41]/40 transition-colors"
              >
                <h3 className="text-[#00ff41] text-lg font-bold terminal-glow flex flex-col sm:flex-row sm:items-center justify-between">
                  <span>{project.name}</span>
                  {project.url && (
                    <a
                      href={project.url.startsWith('http') ? project.url : (project.url.includes('.') && !project.url.includes(' ') ? `https://${project.url}` : undefined)}
                      target={project.url.includes('.') && !project.url.includes(' ') ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-normal text-[#00ffff] hover:underline mt-1 sm:mt-0"
                    >
                      {project.url}
                    </a>
                  )}
                </h3>
                {Array.isArray(project.description) ? (
                  <ul className="list-disc list-inside text-[#8b949e] mt-2 space-y-2">
                    {project.description.map((bullet, idx) => (
                      <li key={idx} className="pl-1 text-sm">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#8b949e] mt-2">{project.description}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-[#00ff41]/10 text-[#00ff41] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}