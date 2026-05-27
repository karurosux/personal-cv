"use client";

import React, {
  useState,
  useEffect,
  useRef,
  KeyboardEvent,
  useCallback,
} from "react";
import { CVData } from "@/types/cv";
import TerminalPrompt from "./TerminalPrompt";
import { useRouter } from "next/navigation";

interface TerminalExperienceProps {
  cvData: CVData;
}

interface HistoryItem {
  id: string;
  content: React.ReactNode;
}

export default function TerminalExperience({
  cvData,
}: TerminalExperienceProps) {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentCommandTyping, setCurrentCommandTyping] = useState("");
  const [inputMode, setInputMode] = useState<"command" | "tailor">("command");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const addHistory = useCallback((content: React.ReactNode) => {
    setHistory((prev) => [
      ...prev,
      { id: Math.random().toString(36).substring(7), content },
    ]);
  }, []);

  const printHelp = useCallback(() => {
    const commands = [
      { cmd: "help", desc: "List available commands" },
      { cmd: "about", desc: "Display professional summary" },
      { cmd: "skills", desc: "Display technical competencies" },
      { cmd: "experience", desc: "Display work history" },
      { cmd: "projects", desc: "Display notable projects" },
      { cmd: "education", desc: "Display education and certifications" },
      { cmd: "contact", desc: "Display contact information" },
      { cmd: "gui", desc: "Launch graphical user interface (Static CV)" },
      { cmd: "pdf", desc: "Download PDF resume" },
      { cmd: "docx", desc: "Download DOCX resume" },
      { cmd: "clear", desc: "Clear the terminal screen" },
    ];

    addHistory(
      <div className="mb-4 text-[#8b949e]">
        <div className="text-[#00ff41] mb-2">Available commands:</div>
        <div className="grid grid-cols-[120px_1fr] gap-y-1">
          {commands.map((c) => (
            <React.Fragment key={c.cmd}>
              <div className="text-[#00ffff] font-bold">{c.cmd}</div>
              <div>{c.desc}</div>
            </React.Fragment>
          ))}
        </div>
      </div>,
    );
  }, [addHistory]);

  const printAbout = useCallback(
    async (isBoot = false, isMountedFunc?: () => boolean) => {
      const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

      if (isMountedFunc && !isMountedFunc()) return;
      addHistory(
        <div className="mb-4 mt-2">
          <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-[#00ff41] bg-[#00ff41] overflow-hidden relative">
            <img
              src="/avatar.png"
              alt="Avatar"
              className="w-[12.5%] h-[12.5%] object-cover grayscale contrast-[2.5] mix-blend-multiply origin-top-left"
              style={{ imageRendering: "pixelated", transform: "scale(8)" }}
            />
          </div>
        </div>,
      );
      if (isBoot) await sleep(300);

      const heroLines = [
        `===================================================================`,
        `  ${cvData.name.toUpperCase()}`,
        `  ${cvData.title} | ${cvData.yearsOfExperience} Years of Experience`,
        `===================================================================`,
        `  [System Initialization Complete]`,
        `  Loading modules... Done.`,
        `  Establishing secure connection... OK.`,
      ];

      for (const line of heroLines) {
        if (isMountedFunc && !isMountedFunc()) return;
        addHistory(
          <div className="text-[#00ff41] whitespace-pre-wrap">{line}</div>,
        );
        if (isBoot) await sleep(150);
      }
    },
    [addHistory, cvData],
  );

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, currentCommandTyping]);

  useEffect(() => {
    // Prevent focus loss when typing is false
    if (!isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  useEffect(() => {
    // Boot sequence
    let isMounted = true;
    const isMountedFunc = () => isMounted;

    const runBootSequence = async () => {
      const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

      // 1. Print Hero
      await printAbout(true, isMountedFunc);
      if (!isMounted) return;

      await sleep(1000);

      const typeCommand = async (cmd: string) => {
        setCurrentCommandTyping("");
        for (let i = 0; i <= cmd.length; i++) {
          if (!isMounted) return;
          setCurrentCommandTyping(cmd.slice(0, i));
          await sleep(100);
        }
        await sleep(300);
        setCurrentCommandTyping("");
      };

      // 2. Type "help" (skip "clear" step)
      await sleep(500);
      if (!isMounted) return;
      await typeCommand("help");

      // Print help
      if (!isMounted) return;
      addHistory(
        <div className="flex gap-2 mt-4">
          <TerminalPrompt user="carlos" path="~" />
          <span className="text-[#00ffff]">help</span>
        </div>,
      );
      printHelp();

      if (!isMounted) return;
      setIsTyping(false);
    };

    runBootSequence();

    return () => {
      isMounted = false;
    };
  }, [printAbout, printHelp, addHistory]);

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    // Echo the command
    addHistory(
      <div className="flex gap-2">
        <TerminalPrompt user="carlos" path="~" />
        <span className="text-[#00ffff]">{cmd}</span>
      </div>,
    );

    if (trimmedCmd === "") return;

    if (trimmedCmd === "tailor") {
      addHistory(
        <div className="mb-4 text-[#00ff41]">
          Entering Tailor Mode. Please paste the job description below. Press{" "}
          <span className="text-white">Shift+Enter</span> for new lines and{" "}
          <span className="text-white">Enter</span> to submit. Type{" "}
          <span className="text-white">cancel</span> to abort.
        </div>,
      );
      setInputMode("tailor");
      return;
    }

    if (trimmedCmd.startsWith("tailor ")) {
      addHistory(
        <div className="mb-4 text-red-500">
          Usage: Type exactly &apos;tailor&apos; and press Enter to open the job
          description prompt.
        </div>,
      );
      return;
    }

    switch (trimmedCmd) {
      case "help":
        printHelp();
        break;
      case "about":
        printAbout(false);
        break;
      case "skills":
        addHistory(
          <div className="mb-4 space-y-2">
            <div className="text-[#00ff41]">Core Technical Competencies:</div>
            <div className="grid grid-cols-[180px_1fr] gap-y-1 text-[#8b949e]">
              <div className="text-[#00ffff]">Languages:</div>
              <div>{cvData.programmingLanguages.join(", ")}</div>
              <div className="text-[#00ffff]">Frameworks:</div>
              <div>{cvData.frameworks.join(", ")}</div>
              <div className="text-[#00ffff]">Databases:</div>
              <div>{cvData.databases?.join(", ")}</div>
              <div className="text-[#00ffff]">Infrastructure:</div>
              <div>{cvData.infrastructure?.join(", ")}</div>
            </div>
          </div>,
        );
        break;
      case "experience":
        addHistory(
          <div className="mb-4 space-y-4">
            <div className="text-[#00ff41]">Professional Experience:</div>
            {cvData.workExperience.map((exp, i) => (
              <div key={i} className="pl-4 border-l border-[#00ff41]/30">
                <div className="text-[#00ffff] font-bold">
                  {exp.company}{" "}
                  <span className="text-[#8b949e] font-normal">
                    | {exp.location}
                  </span>
                </div>
                <div className="space-y-2 mt-2">
                  {exp.positions.map((pos, pIdx) => (
                    <div key={pIdx} className="mb-3">
                      <div className="text-white">
                        {"=> "} {pos.title}{" "}
                        <span className="text-[#8b949e]">
                          ({pos.startDate} - {pos.endDate})
                        </span>
                      </div>
                      {Array.isArray(pos.description) ? (
                        <div className="text-[#8b949e] mt-1 space-y-1 pl-6">
                          {pos.description.map((desc, dIdx) => (
                            <div key={dIdx}>- {desc}</div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-[#8b949e] mt-1 pl-6">
                          - {pos.description}
                        </div>
                      )}
                      <div className="text-[#00ffff] text-sm mt-2 pl-6">
                        Tech:{" "}
                        <span className="text-[#8b949e]">
                          {pos.skills.join(", ")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>,
        );
        break;
      case "projects":
        if (!cvData.projects || cvData.projects.length === 0) {
          addHistory(
            <div className="mb-4 text-[#8b949e]">No projects found.</div>,
          );
          break;
        }
        addHistory(
          <div className="mb-4 space-y-4">
            <div className="text-[#00ff41]">Projects:</div>
            {cvData.projects.map((proj, i) => (
              <div key={i} className="pl-4 border-l border-[#00ffff]/30 mb-4">
                <div className="text-[#00ffff] font-bold">
                  {proj.name}
                  {proj.url && (
                    <span className="text-[#8b949e] font-normal ml-2">
                      [{proj.url}]
                    </span>
                  )}
                </div>
                {Array.isArray(proj.description) ? (
                  <div className="text-[#8b949e] mt-2 space-y-1 pl-4">
                    {proj.description.map((desc, dIdx) => (
                      <div key={dIdx}>- {desc}</div>
                    ))}
                  </div>
                ) : (
                  <div className="text-[#8b949e] mt-2 pl-4">
                    - {proj.description}
                  </div>
                )}
                <div className="text-[#00ffff] text-sm mt-2 pl-4">
                  Tech:{" "}
                  <span className="text-[#8b949e]">
                    {proj.technologies.join(", ")}
                  </span>
                </div>
              </div>
            ))}
          </div>,
        );
        break;
      case "education":
        addHistory(
          <div className="mb-4 space-y-4">
            <div className="text-[#00ff41]">Education & Certifications:</div>
            {cvData.education.map((edu, i) => (
              <div key={i} className="text-[#8b949e]">
                <span className="text-[#00ffff]">{edu.degree}</span> @{" "}
                {edu.institution} ({edu.startDate} - {edu.endDate})
              </div>
            ))}
            {cvData.certifications && cvData.certifications.length > 0 && (
              <div className="mt-2">
                <div className="text-[#00ffff]">Certifications:</div>
                {cvData.certifications.map((cert, i) => (
                  <div key={i} className="text-[#8b949e] pl-4">
                    - {cert.name}
                  </div>
                ))}
              </div>
            )}
          </div>,
        );
        break;
      case "contact":
        addHistory(
          <div className="mb-4 space-y-1">
            <div className="text-[#00ff41]">Contact Information:</div>
            <div className="text-[#8b949e]">
              <span className="text-[#00ffff]">Email:</span>{" "}
              {cvData.contactInfo.email}
            </div>
            {cvData.contactInfo.phone && (
              <div className="text-[#8b949e]">
                <span className="text-[#00ffff]">Phone:</span>{" "}
                {cvData.contactInfo.phone}
              </div>
            )}
            <div className="text-[#8b949e]">
              <span className="text-[#00ffff]">GitHub:</span>{" "}
              {cvData.contactInfo.github}
            </div>
            <div className="text-[#8b949e]">
              <span className="text-[#00ffff]">LinkedIn:</span>{" "}
              {cvData.contactInfo.linkedin}
            </div>
          </div>,
        );
        break;
      case "gui":
      case "static":
        addHistory(
          <div className="mb-4 text-[#00ff41]">
            Launching Graphical User Interface...
          </div>,
        );
        setTimeout(() => {
          router.push("/static");
        }, 1000);
        break;
      case "pdf":
        addHistory(
          <div className="mb-4 text-[#00ff41]">
            Generating optimized PDF...
          </div>,
        );
        window.open("/api/generate-pdf", "_blank");
        break;
      case "docx":
        addHistory(
          <div className="mb-4 text-[#00ff41]">
            Generating optimized DOCX...
          </div>,
        );
        window.open("/api/generate-docx", "_blank");
        break;
      case "clear":
        setHistory([]);
        break;
      case "sudo":
        addHistory(
          <div className="mb-4 text-red-500">
            carlos is not in the sudoers file. This incident will be reported.
          </div>,
        );
        break;
      case "whoami":
        addHistory(<div className="mb-4 text-[#8b949e]">guest_user</div>);
        break;
      default:
        addHistory(
          <div className="mb-4 text-red-500">
            Command not found: {trimmedCmd}. Type &apos;help&apos; to see
            available commands.
          </div>,
        );
    }
  };

  const handleTailorSubmit = async (jobPosition: string) => {
    setIsTyping(true);
    setCurrentCommandTyping("AI Optimization Engine Online...");

    try {
      addHistory(
        <div className="text-[#00ff41]">
          Analyzing target job description...
        </div>,
      );
      addHistory(
        <div className="text-[#8b949e]">Connecting to LLM cluster...</div>,
      );

      const response = await fetch("/api/tailor-docx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobPosition }),
      });

      if (!response.ok) {
        throw new Error("Failed to tailor CV");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Carlos_Gonzalez_Tailored.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      addHistory(
        <div className="mb-4 text-[#00ff41] font-bold">
          Optimization complete. Download started.
        </div>,
      );
    } catch {
      addHistory(
        <div className="mb-4 text-red-500">
          Engine Failure: Could not optimize CV.
        </div>,
      );
    } finally {
      setIsTyping(false);
      setCurrentCommandTyping("");
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (inputMode === "tailor") {
        if (!e.shiftKey) {
          e.preventDefault();
          const text = input.trim();
          setInput("");
          setInputMode("command");

          addHistory(
            <div className="flex gap-2 items-start">
              <TerminalPrompt user="carlos" path="~/tailor" />
              <span className="text-[#00ffff]">
                {text.toLowerCase() === "cancel"
                  ? "cancel"
                  : "<job description provided>"}
              </span>
            </div>,
          );

          if (text.toLowerCase() === "cancel") {
            addHistory(
              <div className="mb-4 text-[#8b949e]">Tailor aborted.</div>,
            );
            return;
          }

          if (!text) {
            addHistory(
              <div className="mb-4 text-red-500">
                Job description cannot be empty. Aborting tailor.
              </div>,
            );
            return;
          }

          handleTailorSubmit(text);
        }
      } else {
        e.preventDefault();
        handleCommand(input);
        setInput("");
      }
    }
  };

  const focusInput = () => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <main
      className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono p-4 terminal-scanline cursor-text relative overflow-hidden flex flex-col"
      onClick={focusInput}
    >
      {/* Terminal History */}
      <div className="flex-1 overflow-y-auto pb-4 space-y-1">
        {history.map((item) => (
          <div key={item.id}>{item.content}</div>
        ))}

        {/* Active Prompt */}
        <div className="flex gap-2 items-start">
          <TerminalPrompt
            user="carlos"
            path={inputMode === "tailor" ? "~/tailor" : "~"}
          />
          {isTyping ? (
            <span className="text-[#00ffff]">
              {currentCommandTyping}
              <span className="animate-pulse">_</span>
            </span>
          ) : (
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (inputRef.current) {
                  inputRef.current.style.height = "auto";
                  inputRef.current.style.height =
                    inputRef.current.scrollHeight + "px";
                }
              }}
              onKeyDown={onKeyDown}
              className="bg-transparent border-none outline-none text-[#00ffff] flex-1 min-w-[50%] resize-none overflow-hidden"
              rows={1}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          )}
        </div>
        <div ref={bottomRef} />
      </div>

      {/* CRT Overlay Effect */}
      <div className="pointer-events-none fixed inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] opacity-50 mix-blend-multiply"></div>
    </main>
  );
}
