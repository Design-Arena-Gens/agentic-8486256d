"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, BrainCircuit, LineChart, Sparkles } from "lucide-react";

const CATEGORIES = [
  {
    id: "onboarding",
    label: "Adaptive onboarding",
    icon: BrainCircuit
  },
  {
    id: "ops",
    label: "Operational copilots",
    icon: LineChart
  },
  {
    id: "rituals",
    label: "Automated rituals",
    icon: Sparkles
  }
];

const concepts = {
  onboarding: [
    {
      title: "Contextual pathfinder",
      story: "Negotiates trust by surfacing mission-critical metrics and tailored playbooks for every new team.",
      outcome: "Cuts time-to-value by 48% through adaptive decision frames."
    },
    {
      title: "Shared agency canvas",
      story: "Facilitates collaborative goal-setting between AI and operators through narrative prompts.",
      outcome: "Boosts activation by aligning roles, rituals, and levers in a single session."
    }
  ],
  ops: [
    {
      title: "Command shift console",
      story: "Synthesizes telemetry, incidents, and policies into clear moves with human override moments.",
      outcome: "Reduces escalations by 37% while retaining accountability."
    },
    {
      title: "Pulse choreography",
      story: "Anticipates demand spikes and orchestrates resources with clear fallback micro-actions.",
      outcome: "Elevates confidence through transparent automation narratives."
    }
  ],
  rituals: [
    {
      title: "Momentum lane",
      story: "Celebrates compounding wins with cinematic progress stories and next-best-experiments.",
      outcome: "Keeps teams aligned to north-star impact indicators across cycles."
    },
    {
      title: "Guardian cadence",
      story: "Applies principle-based guardrails to evolving automations, recording rationale and intents.",
      outcome: "Safeguards ethics reviews without slowing experimentation."
    }
  ]
} as const;

export function ConceptDeck() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]["id"]>("onboarding");

  const activeConcepts = useMemo(() => concepts[category], [category]);

  return (
    <div className="rounded-3xl border border-slate-800/70 bg-slate-950/60 p-6">
      <div className="flex flex-col gap-3 border-b border-slate-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Concept modes</p>
          <h3 className="text-2xl font-semibold text-slate-100">Select a canvas to explore potential moves</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setCategory(id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                category === id
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-slate-700 text-slate-300 hover:border-primary hover:text-primary"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {activeConcepts.map((concept) => (
          <article key={concept.title} className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition group-hover:bg-primary/30" />
            <div className="absolute -bottom-14 -left-14 h-24 w-24 rounded-full bg-accent/20 blur-3xl transition group-hover:bg-accent/30" />
            <div className="relative space-y-4">
              <h4 className="text-xl font-semibold text-slate-100">{concept.title}</h4>
              <p className="text-sm text-slate-300">{concept.story}</p>
              <p className="text-sm font-medium text-primary">{concept.outcome}</p>
              <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                View storyboard
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
