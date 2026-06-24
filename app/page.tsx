import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-12 text-slate-50 sm:px-10 sm:py-16">
      <div
        className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-orange-300/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-400/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="grid gap-8 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur sm:p-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200/40 bg-cyan-200/10 px-4 py-1 text-sm font-semibold text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              15 guided chapters
            </p>
            <h1
              className="mt-5 text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading), sans-serif" }}
            >
              Build your first AI app with a workbook that feels like a roadmap.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
              Move from idea to prototype with prompts, design exercises, and chapter-by-chapter action steps built for beginners.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/workbook/chapter-01"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-300 to-sky-400 px-6 py-3 text-sm font-bold text-slate-900 transition hover:translate-y-[-1px] hover:brightness-110"
              >
                Start Chapter 1
              </Link>
              <Link
                href="/workbook"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/45 hover:bg-white/15"
              >
                Browse All Chapters
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Inside This Workbook
            </p>
            <ul className="mt-4 space-y-4 text-sm text-slate-200">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                Hands-on exercises that turn abstract AI ideas into practical app features.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-orange-300" />
                Prompt templates you can adapt for planning, UI design, and implementation.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" />
                Reflection checkpoints to sharpen your product decisions each week.
              </li>
            </ul>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-cyan-200/20 bg-cyan-100/10 p-5">
            <p className="text-sm font-medium text-cyan-100">Learn by building</p>
            <h2
              className="mt-2 text-xl font-semibold text-white"
              style={{ fontFamily: "var(--font-heading), sans-serif" }}
            >
              Practical, not theoretical
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Every chapter asks you to create, critique, and refine something real.
            </p>
          </article>

          <article className="rounded-2xl border border-orange-200/20 bg-orange-100/10 p-5">
            <p className="text-sm font-medium text-orange-100">Structured flow</p>
            <h2
              className="mt-2 text-xl font-semibold text-white"
              style={{ fontFamily: "var(--font-heading), sans-serif" }}
            >
              Guided from blank page to launch
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Use a clear sequence that reduces overwhelm and keeps momentum high.
            </p>
          </article>

          <article className="rounded-2xl border border-indigo-200/20 bg-indigo-100/10 p-5">
            <p className="text-sm font-medium text-indigo-100">Built for reflection</p>
            <h2
              className="mt-2 text-xl font-semibold text-white"
              style={{ fontFamily: "var(--font-heading), sans-serif" }}
            >
              Improve your product instincts
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Pause points help you evaluate choices and design with intention.
            </p>
          </article>
        </section>

        <footer className="flex flex-wrap items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300">
          <p className="font-medium text-slate-100">Ready when you are.</p>
          <p>Estimated total: 15 chapters</p>
          <p>Focus: AI app ideation, UX, and implementation</p>
        </footer>
      </div>
    </main>
  );
}
