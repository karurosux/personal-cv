interface TerminalPromptProps {
  user?: string;
  path?: string;
}

export default function TerminalPrompt({ user = 'guest', path = '~' }: TerminalPromptProps) {
  return (
    <span className="text-[#00ffff]">
      <span className="text-[#00ff41]">{user}</span>
      <span className="text-[#8b949e]">@</span>
      <span className="text-[#00ff41]">cv</span>
      <span className="text-[#8b949e]">:</span>
      <span className="text-[#58a6ff]">{path}</span>
      <span className="text-[#8b949e]">$ </span>
    </span>
  );
}
