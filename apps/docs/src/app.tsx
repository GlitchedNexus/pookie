import { useState } from "react";
import { Button } from "@glitchednexus/pookie";

export function App() {
  const [isSaving, setIsSaving] = useState(false);

  async function handleSave() {
    setIsSaving(true);
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setIsSaving(false);
  }

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-violet-50 text-[#242038]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-40 size-[34rem] rounded-full bg-violet-300/30 blur-3xl" />
        <div className="absolute -top-24 -right-36 size-[30rem] rounded-full bg-pink-200/35 blur-3xl" />
      </div>

      <main className="mx-auto max-w-6xl px-6 py-12 sm:py-20 lg:py-28">
        <header className="max-w-3xl">
          <p className="mb-3 text-xs font-bold tracking-[0.12em] text-[#6558d3] uppercase">
            @glitchednexus/pookie
          </p>
          <h1 className="mb-6 text-5xl leading-[0.92] font-bold tracking-[-0.065em] sm:text-7xl lg:text-8xl">
            Small components, carefully made.
          </h1>
          <p className="text-lg leading-relaxed text-[#5d5773] sm:text-xl">
            This local playground consumes the same package exports that npm
            users receive.
          </p>
        </header>

        <section
          aria-labelledby="button-title"
          className="mt-12 grid items-center gap-8 rounded-3xl border border-[#6558d3]/15 bg-white/80 p-6 shadow-[0_1.5rem_5rem_rgb(45_35_102_/_12%)] backdrop-blur-sm sm:mt-20 sm:p-10 lg:mt-24 lg:grid-cols-2 lg:p-14"
        >
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.12em] text-[#6558d3] uppercase">
              Component 01
            </p>
            <h2
              id="button-title"
              className="mb-3 text-3xl font-bold tracking-[-0.035em]"
            >
              Button
            </h2>
            <p className="text-lg leading-relaxed text-[#5d5773]">
              Accessible defaults, ref forwarding, loading feedback, and
              themeable Tailwind styles.
            </p>
          </div>

          <div className="flex min-h-60 flex-wrap items-center justify-center gap-3 rounded-2xl border border-dashed border-[#c7c0ed] bg-[#fbfaff] p-8">
            <Button
              isLoading={isSaving}
              loadingText="Saving"
              onClick={handleSave}
            >
              Save changes
            </Button>
            <Button variant="secondary">Preview</Button>
            <Button size="small" variant="secondary">
              Small action
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
