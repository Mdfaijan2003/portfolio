export default function SectionLoader({ label = "Loading section" }) {
  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-16 md:px-12">
      <div className="w-full rounded-2xl border border-cyan-200/15 bg-slate-900/35 p-6 backdrop-blur-md md:p-8">
        <div className="mb-4 h-3 w-28 animate-pulse rounded-full bg-cyan-300/25" />
        <div className="space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-white/10" />
          <div className="h-4 w-11/12 animate-pulse rounded bg-white/10" />
          <div className="h-4 w-10/12 animate-pulse rounded bg-white/10" />
        </div>
        <p className="mt-5 font-mono text-xs tracking-[0.18em] text-cyan-200/80">{label}...</p>
      </div>
    </div>
  );
}