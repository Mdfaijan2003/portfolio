import { useState, useEffect, useRef } from 'react';

const DEFAULT_DATA = {
  user: {
    name: "Your Name",
    title: "Software Development Engineer",
    location: "City, Country",
    email: "you@email.com",
    links: [
      { label: "github", href: "https://github.com/yourhandle" },
      { label: "linkedin", href: "https://linkedin.com/in/yourhandle" },
      { label: "resume", href: "#" }
    ]
  },
  about: "SDE focused on building scalable systems, crisp UI, and reliable developer tooling. I like performance work, clean abstractions, and pragmatic engineering.",
  skills: {
    languages: ["JavaScript", "TypeScript", "Java", "Python"],
    backend: ["Node.js", "Express", "REST", "PostgreSQL", "Redis"],
    frontend: ["React", "Vite", "CSS", "Accessibility"],
    tooling: ["Git", "Docker", "CI/CD"]
  },
  experience: [
    {
      company: "Company A",
      role: "SDE Intern",
      period: "Jun 2025 → Aug 2025",
      bullets: [
        "Built X that reduced Y by 30%",
        "Optimized API latency from 220ms → 90ms",
        "Shipped features with tests + monitoring"
      ]
    }
  ],
  projects: [
    {
      name: "terminal-portfolio",
      description: "A terminal-themed portfolio with boot sequence intro and command-driven navigation.",
      stack: ["HTML", "CSS", "JS"],
      links: [
        { label: "repo", href: "https://github.com/yourhandle/terminal-portfolio" },
        { label: "live", href: "#" }
      ]
    },
    {
      name: "service-observer",
      description: "Lightweight service health dashboard with p95 latency + error budget indicators.",
      stack: ["Node", "Postgres", "Redis"],
      links: [{ label: "repo", href: "#" }]
    }
  ]
};

export default function TerminalUI({ data = DEFAULT_DATA, onBootReplay }) {
  const [activeSection, setActiveSection] = useState('about');
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [theme, setTheme] = useState('cyan');
  const consoleRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Initial welcome messages
    pushConsole("Welcome, recruiter.");
    pushConsole("Type 'help' to list commands.");
    pushConsole(`Currently viewing: ${activeSection}`);
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    // Auto scroll console
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [consoleOutput]);

  const pushConsole = (text) => {
    setConsoleOutput(prev => [...prev, text]);
  };

  const clearConsole = () => {
    setConsoleOutput([]);
  };

  const helpText = () => {
    return [
      "commands:",
      "  help                 show this help",
      "  clear                clear terminal output",
      "  about | skills | projects | experience | contact",
      "  open github|linkedin|resume   open link in new tab",
      "  theme green|cyan|mono set accent theme",
      "  boot                  replay boot intro"
    ].join("\n");
  };

  const openLink = (key) => {
    const link = data.user.links.find(x => x.label.toLowerCase() === key);
    if (!link) return null;
    window.open(link.href, "_blank", "noopener,noreferrer");
    return link.href;
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;

    pushConsole(`$ ${text}`);
    const lower = text.toLowerCase();

    if (lower === "help") {
      pushConsole(helpText());
    } else if (lower === "clear") {
      clearConsole();
    } else if (["about", "skills", "projects", "experience", "contact"].includes(lower)) {
      setActiveSection(lower);
      pushConsole(`switched to: ${lower}`);
    } else if (lower.startsWith("theme ")) {
      const t = lower.replace("theme ", "").trim();
      if (["green", "cyan", "mono"].includes(t)) {
        setTheme(t);
        pushConsole(`theme set: ${t}`);
      } else {
        pushConsole(`unknown theme: ${t} (try green|cyan|mono)`);
      }
    } else if (lower.startsWith("open ")) {
      const key = lower.replace("open ", "").trim();
      const href = openLink(key);
      if (href) pushConsole(`opening: ${key} → ${href}`);
      else pushConsole(`unknown link: ${key}`);
    } else if (lower === "boot") {
      pushConsole("replaying boot sequence...");
      setTimeout(() => {
        onBootReplay?.();
      }, 250);
    } else {
      pushConsole(`command not found: ${text}`);
    }

    setInputValue('');
  };

  const handleTabClick = (section) => {
    setActiveSection(section);
    pushConsole(`switched to: ${section}`);
    inputRef.current?.focus();
  };

  // Theme colors
  const themeColors = {
    green: { accent: '#34d399', accent2: '#a3ff12' },
    cyan: { accent: '#33d6c9', accent2: '#2ab3ff' },
    mono: { accent: 'rgba(240,245,255,0.88)', accent2: 'rgba(240,245,255,0.62)' }
  };

  const currentTheme = themeColors[theme];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-[#05070b] via-[#07090d] to-[#05070b] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[1200px] h-[700px] rounded-full blur-[120px]" 
             style={{ background: `${currentTheme.accent}20` }} />
        <div className="absolute top-[20%] right-[15%] w-[900px] h-[600px] rounded-full blur-[120px]" 
             style={{ background: `${currentTheme.accent2}20` }} />
        <div className="absolute bottom-[10%] left-[60%] w-[900px] h-[700px] rounded-full blur-[120px]" 
             style={{ background: `${currentTheme.accent}15` }} />
      </div>

      {/* Terminal Window */}
      <div className="w-full max-w-[1100px] border border-white/[0.09] bg-[rgba(14,18,28,0.78)] backdrop-blur-md rounded-[14px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.55)] relative z-10">
        
        {/* Window Bar */}
        <div className="flex items-center gap-2.5 px-3.5 py-3 border-b border-white/[0.09] bg-gradient-to-b from-white/[0.04] to-transparent flex-wrap">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] opacity-90" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] opacity-90" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] opacity-90" />
          <div className="ml-1.5 text-xs text-white/60 font-mono flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
            {data.user.name.toLowerCase().replace(/\s+/g, "_")}@portfolio:{activeSection}
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="text-[11px] px-2 py-1 rounded-full border border-white/10 bg-black/20 text-white/80">
              {data.user.title}
            </span>
            <span className="text-[11px] px-2 py-1 rounded-full border border-white/10 bg-black/20 text-white/80">
              {data.user.location}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-3 py-2.5 border-b border-white/[0.09] bg-black/20 flex-wrap items-center">
          {['about', 'skills', 'projects', 'experience', 'contact'].map(section => (
            <button
              key={section}
              onClick={() => handleTabClick(section)}
              className={`font-mono text-xs px-2.5 py-1.5 rounded-full border transition-all ${
                activeSection === section
                  ? 'border-white/35 text-white/95 shadow-inner'
                  : 'border-white/10 text-white/60 bg-black/25'
              }`}
              style={activeSection === section ? {
                borderColor: `${currentTheme.accent}55`,
                boxShadow: `inset 0 0 0 1px ${currentTheme.accent}30`
              } : {}}
            >
              {section}
            </button>
          ))}
          <div className="ml-auto text-xs text-white/60 font-mono hidden sm:block">
            type <kbd className="border border-white/15 bg-black/25 px-1.5 py-0.5 rounded font-mono">help</kbd> for commands
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[1.25fr_0.95fr] gap-3.5 p-3.5">
          
          {/* Left Panel */}
          <div className="border border-white/[0.08] rounded-xl bg-black/20 p-4 overflow-auto max-h-[600px]">
            {/* Header */}
            <div className="mb-4">
              <h1 className="text-[22px] font-bold tracking-tight mb-1">
                {data.user.name} <span style={{ color: currentTheme.accent }}>▊</span>
              </h1>
              <div className="text-xs text-white/60 mb-2.5">{data.user.title}</div>
              <div className="flex gap-2.5 flex-wrap">
                {data.user.links.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs hover:underline"
                    style={{ color: currentTheme.accent }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Dynamic Content */}
            <SectionContent 
              section={activeSection} 
              data={data} 
              accentColor={currentTheme.accent}
            />
          </div>

          {/* Right Panel */}
          <div className="border border-white/[0.08] rounded-xl bg-black/20 overflow-hidden grid grid-rows-[1fr_auto_auto]">
            
            {/* Console Output */}
            <div 
              ref={consoleRef}
              className="p-3.5 overflow-auto max-h-[420px] font-mono text-xs"
              onClick={() => inputRef.current?.focus()}
            >
              {consoleOutput.map((line, idx) => (
                <pre key={idx} className="mb-2 whitespace-pre-wrap break-words text-white/90">
                  {line}
                </pre>
              ))}
            </div>

            {/* Command Prompt */}
            <form onSubmit={handleCommand} className="grid grid-cols-[auto_1fr_auto] gap-2.5 items-center px-3 py-2.5 border-t border-white/[0.08] bg-black/20">
              <span className="font-mono font-bold text-xs" style={{ color: currentTheme.accent }}>$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="type a command (help)"
                className="font-mono text-xs text-white/95 bg-black/25 border border-white/10 rounded-lg px-2.5 py-2 outline-none focus:border-white/35 transition-colors"
                style={{
                  boxShadow: inputValue ? `0 0 0 3px ${currentTheme.accent}15` : 'none'
                }}
                spellCheck="false"
                autoComplete="off"
              />
              <button
                type="submit"
                className="font-mono text-xs px-3 py-2 rounded-lg border border-white/10 text-white/95 transition-all"
                style={{
                  background: `linear-gradient(180deg, ${currentTheme.accent}25, rgba(0,0,0,0.2))`
                }}
              >
                run
              </button>
            </form>

            {/* Footer */}
            <div className="px-3 py-2.5 text-[11px] text-white/60 border-t border-white/[0.08] bg-black/20 font-mono">
              Tip: <code className="bg-black/25 border border-white/10 px-1.5 py-0.5 rounded text-white/85">theme {theme === 'cyan' ? 'green' : 'cyan'}</code>, <code className="bg-black/25 border border-white/10 px-1.5 py-0.5 rounded text-white/85">open github</code>, <code className="bg-black/25 border border-white/10 px-1.5 py-0.5 rounded text-white/85">boot</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionContent({ section, data, accentColor }) {
  if (section === 'about') {
    return (
      <div>
        <h2 className="text-sm font-semibold mb-2.5 text-white/90">about</h2>
        <p className="text-[13px] leading-[1.7] text-white/85">{data.about}</p>
      </div>
    );
  }

  if (section === 'skills') {
    return (
      <div>
        <h2 className="text-sm font-semibold mb-2.5 text-white/90">skills</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {Object.entries(data.skills).map(([category, items]) => (
            <div key={category} className="border border-white/10 bg-black/20 rounded-xl p-3">
              <div className="text-[13px] text-white/95 mb-2.5">{category}</div>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-white/80 bg-black/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section === 'projects') {
    return (
      <div>
        <h2 className="text-sm font-semibold mb-2.5 text-white/90">projects</h2>
        <div className="space-y-3">
          {data.projects.map((project, idx) => (
            <div key={idx} className="border border-white/10 bg-black/20 rounded-xl p-3">
              <div className="flex justify-between items-start mb-2 gap-2 flex-wrap">
                <div>
                  <div className="text-[13px] text-white/95 font-medium">{project.name}</div>
                  <div className="text-xs text-white/60 mt-1">{project.description}</div>
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-white/80 bg-black/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2.5 mt-2">
                {project.links.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs hover:underline"
                    style={{ color: accentColor }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section === 'experience') {
    return (
      <div>
        <h2 className="text-sm font-semibold mb-2.5 text-white/90">experience</h2>
        <div className="space-y-3">
          {data.experience.map((exp, idx) => (
            <div key={idx} className="border border-white/10 bg-black/20 rounded-xl p-3">
              <div className="flex justify-between items-start mb-2 gap-2">
                <div>
                  <div className="text-[13px] text-white/95 font-medium">
                    {exp.role} @ {exp.company}
                  </div>
                  <div className="text-xs text-white/60 mt-1">{exp.period}</div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 mt-2 text-xs text-white/85 leading-[1.7]">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section === 'contact') {
    return (
      <div>
        <h2 className="text-sm font-semibold mb-2.5 text-white/90">contact</h2>
        <div className="border border-white/10 bg-black/20 rounded-xl p-3">
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="text-xs text-white/60 mb-1">email</div>
              <div className="text-[13px] text-white/95">{data.user.email}</div>
            </div>
            <a
              href={`mailto:${data.user.email}`}
              className="text-xs hover:underline"
              style={{ color: accentColor }}
            >
              compose
            </a>
          </div>
          <div className="h-px bg-white/[0.08] my-3" />
          <div className="flex gap-2.5 flex-wrap">
            {data.user.links.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs hover:underline"
                style={{ color: accentColor }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}