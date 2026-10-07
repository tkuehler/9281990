export function FunnelProgress({ page, total }: { page: number; total: number }) {
  return (
    <div className="progress" role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={page}>
      <div className="wrap">
        <span className="label">Page {page} of {total}</span>
        <a href="/" className="label soft" style={{ textDecoration: "none" }}>Exit</a>
      </div>
      <div className="bar"><i style={{ width: `${(page / total) * 100}%` }} /></div>
    </div>
  );
}

export function FunnelStep({
  kicker, title, hint, back, children,
}: { kicker: string; title: React.ReactNode; hint?: string; back?: boolean; children: React.ReactNode }) {
  return (
    <section className={`page ${back ? "back" : ""}`} aria-live="polite">
      <span className="kicker">{kicker}</span>
      <h2 className="h2">{title}</h2>
      {hint && <p className="soft" style={{ marginBottom: 28 }}>{hint}</p>}
      {children}
    </section>
  );
}
