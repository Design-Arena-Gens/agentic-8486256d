import { CalendarClock, PenTool, PlayCircle, Rocket } from "lucide-react";

const phases = [
  {
    label: "Week 0",
    title: "Opportunity ignition",
    description: "Stimulus dump, customer dramaturgy, principle curation, alignment on outcomes.",
    icon: CalendarClock
  },
  {
    label: "Week 1",
    title: "Worldbuilding",
    description: "Story-driven walkthroughs, friction audits, agentic moment mapping, instrumentation blueprint.",
    icon: PenTool
  },
  {
    label: "Week 2",
    title: "Prototype theatre",
    description: "High-fidelity prototypes, voiceover journeys, simulation prompts, orchestration script.",
    icon: PlayCircle
  },
  {
    label: "Week 3",
    title: "Launch choreography",
    description: "Experiment set-up, success metrics inventory, narrative handoff, ops enablement.",
    icon: Rocket
  }
];

export function ProcessRoadmap() {
  return (
    <ol className="relative grid gap-6 md:grid-cols-2">
      <div className="pointer-events-none absolute inset-y-0 left-6 hidden border-l border-dashed border-slate-800 md:block" />
      {phases.map((phase, index) => (
        <li key={phase.title} className="relative rounded-3xl border border-slate-800/70 bg-slate-950/50 p-6">
          <span className="absolute -left-[30px] top-6 hidden h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_rgba(37,99,235,0.25)] md:block" />
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-800/70 bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
            <phase.icon className="h-4 w-4 text-primary" />
            {phase.label}
          </div>
          <h4 className="mt-4 text-xl font-semibold text-slate-100">{phase.title}</h4>
          <p className="mt-3 text-sm text-slate-300">{phase.description}</p>
          <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-slate-500" />
            <p>{index === 0 ? "Co-create principles" : index === phases.length - 1 ? "Deliver launch kit" : "Iterate narratives"}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
