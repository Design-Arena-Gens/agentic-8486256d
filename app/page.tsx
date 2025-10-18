import { ArrowRight, Flame, Sparkles, Telescope } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Highlights } from "@/components/Highlights";
import { ConceptDeck } from "@/components/ConceptDeck";
import { ProcessRoadmap } from "@/components/ProcessRoadmap";

export default function HomePage() {
  return (
    <div className="main-gradient min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pb-24">
        <section className="grid gap-12 pb-20 pt-16 md:grid-cols-[1.2fr,0.8fr] md:items-center">
          <div className="flex flex-col gap-8">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-slate-800 bg-slate-900 px-4 py-1 text-sm text-slate-300">
              <Sparkles className="h-4 w-4 text-primary" />
              Future-Ready Agentic Interfaces
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-100 md:text-5xl">
              Design, validate, and ship agentic experiences in days—not quarters.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Agentic Studio merges rapid prototyping with immersive storytelling to help teams imagine, test, and launch
              AI-native product experiences that feel inevitable.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Launch a sprint
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#concepts"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary hover:text-primary"
              >
                Explore concepts
              </a>
            </div>
            <Highlights />
          </div>
          <div className="relative hidden overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-xl shadow-black/40 md:block">
            <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.18),transparent_55%)]" />
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px opacity-20">
              {Array.from({ length: 36 }).map((_, index) => (
                <div key={index} className="bg-slate-800/40" />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 border border-white/10" />
          </div>
        </section>

        <section id="vision" className="glass-panel mb-20 rounded-3xl px-8 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="section-title">Vision & Operating System</h2>
              <p className="section-subtitle mt-4 max-w-2xl">
                We design autonomously adaptive customer journeys that blend automation with human choice. Each sprint maps
                moments of agency, aligns them with business outcomes, and crystallizes the interface through prototyped
                rituals.
              </p>
            </div>
            <ul className="grid gap-4 text-sm text-slate-300 md:w-80">
              <li className="flex items-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3">
                <Telescope className="h-4 w-4 text-primary" />
                Pattern sparks with speculative walkthroughs
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3">
                <Flame className="h-4 w-4 text-accent" />
                Pilot flows that respond to evolving intent
              </li>
            </ul>
          </div>
        </section>

        <section id="concepts" className="mb-20">
          <div className="mb-10">
            <h2 className="section-title">Signature Concept Library</h2>
            <p className="section-subtitle mt-3 max-w-3xl">
              Proven blueprints spanning onboarding, decision consoles, operational copilots, and ritualized automations.
              Each concept is paired with instrumentation, copy frameworks, and purposeful guardrails.
            </p>
          </div>
          <ConceptDeck />
        </section>

        <section id="process" className="mb-20">
          <div className="mb-10">
            <h2 className="section-title">3-Week Agentic Sprint</h2>
            <p className="section-subtitle mt-3 max-w-3xl">
              Navigate from undefined opportunity to launch-ready story. We combine customer dramaturgy, systems mapping,
              and design simulation to surface conviction.
            </p>
          </div>
          <ProcessRoadmap />
        </section>

        <section id="cta" className="glass-panel rounded-3xl px-8 py-12">
          <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-6">
              <h2 className="section-title">Launch a discovery session</h2>
              <p className="section-subtitle">
                Share your frontier challenge. We will respond within 48 hours with a tailored canvas outlining potential
                agentic moves, research pathways, and sprint configuration.
              </p>
              <div className="grid gap-4 text-sm text-slate-300 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-4">
                  <p className="font-medium text-slate-100">What you receive</p>
                  <p className="mt-2 text-slate-400">Opportunity decode, north-star storyboard, experiment stack.</p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-4">
                  <p className="font-medium text-slate-100">How we collaborate</p>
                  <p className="mt-2 text-slate-400">Product squads, venture studios, founding teams, innovation labs.</p>
                </div>
              </div>
            </div>
            <form className="space-y-4 text-sm">
              <div>
                <label className="mb-1 block text-slate-300" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Josie Chen"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-slate-300" htmlFor="email">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-slate-300" htmlFor="challenge">
                  What frontier are you exploring?
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={4}
                  placeholder="Describe the customer, outcome, and constraints."
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                Send briefing packet request
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
