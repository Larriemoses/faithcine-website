export function PageIntro({ eyebrow, title, children, status }: { eyebrow: string; title: string; children: React.ReactNode; status?: string }) {
  return (
    <section className="page-intro section-shell">
      <div className="page-intro-layout">
        <div className="page-intro-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-intro-copy">
          {children}
          {status && <p className="stage-note"><span className="status-dot" aria-hidden="true" />{status}</p>}
        </div>
      </div>
    </section>
  );
}
