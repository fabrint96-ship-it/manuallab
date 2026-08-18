function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              ManualLab
            </p>

            <h1 className="mt-1 text-xl font-semibold">
              Technical Knowledge Platform
            </h1>
          </div>

          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
            Foundation v0.1.0
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600">
            EP-00 · Foundation
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Transform technical manuals into structured knowledge.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            ManualLab will transform technical PDF manuals into traceable
            knowledge, interactive study content and simulated laboratories.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Documentation</p>

            <h3 className="mt-2 text-lg font-semibold">
              Multimodal processing
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Text, images, tables, diagrams and scanned PDF pages.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Knowledge</p>

            <h3 className="mt-2 text-lg font-semibold">Human-reviewed AI</h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              AI proposes structured knowledge while preserving source
              traceability and human review.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Practice</p>

            <h3 className="mt-2 text-lg font-semibold">
              Interactive laboratories
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Study, commands, terminals, cases, simulations and evaluation
              within the same platform.
            </p>
          </article>
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white/60 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium">Foundation status</p>

              <p className="mt-1 text-sm text-slate-500">
                Web application initialized successfully.
              </p>
            </div>

            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              WEB READY
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
