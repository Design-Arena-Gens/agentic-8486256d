import { Compass, Layers, Palette } from "lucide-react";

const highlights = [
  {
    title: "Edge-native research",
    description: "Signal mining across lead users, frontier fragments, and emergent behaviors.",
    icon: Compass
  },
  {
    title: "Narrative prototyping",
    description: "High-fidelity rituals that align experience principles across teams.",
    icon: Palette
  },
  {
    title: "Systems choreography",
    description: "Service and data orchestration maps that anchor agentic decision loops.",
    icon: Layers
  }
];

export function Highlights() {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {highlights.map((item) => (
        <li
          key={item.title}
          className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5 text-sm text-slate-300 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.9)]"
        >
          <item.icon className="mb-3 h-5 w-5 text-primary" />
          <p className="text-base font-semibold text-slate-100">{item.title}</p>
          <p className="mt-2 text-slate-400">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
