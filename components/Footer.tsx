export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Agentic Studio. Crafted for rapid experimentation.</p>
        <div className="flex gap-5">
          <a href="mailto:hello@agentic.studio" className="transition hover:text-primary">
            Contact
          </a>
          <a href="#process" className="transition hover:text-primary">
            Process
          </a>
          <a href="#cta" className="transition hover:text-primary">
            Launch
          </a>
        </div>
      </div>
    </footer>
  );
}
