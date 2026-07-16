export function PageIntro({ eyebrow, title, children, status }: { eyebrow: string; title: string; children: React.ReactNode; status?: string }) {
  return (
    <section className="page-intro section-shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="page-intro-copy">{children}</div>
      {status && <p className="stage-note"><span className="status-dot" aria-hidden="true" />{status}</p>}
    </section>
  );
}
