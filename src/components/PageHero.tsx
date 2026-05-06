type MetaItem = { k: string; v: string };

export default function PageHero({
  eyebrow,
  title,
  lead,
  meta,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  meta?: MetaItem[];
}) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && (
          <span className="eyebrow" style={{ color: "var(--gold)" }}>
            {eyebrow}
          </span>
        )}
        <h1 style={{ marginTop: 16 }}>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {meta && (
          <div className="meta">
            {meta.map((m, i) => (
              <span key={i}>
                <strong>{m.k}</strong>
                {m.v}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
