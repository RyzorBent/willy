import PageHero from "@/components/PageHero";
import { TRUSTEES } from "@/lib/data";

export const metadata = { title: "About — Willy Foundation" };

const labelStyle = {
  fontSize: "0.72rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "var(--n500)",
  fontWeight: 600,
  marginBottom: 6,
};

const valueStyle = { fontFamily: "var(--font-display)", fontSize: "1.15rem" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Six trustees. One mandate."
        lead="A small board, picked for what they bring to the table, not for what they look like in a press release."
      />
      <section className="band cream">
        <div className="container">
          <span className="eyebrow">Trustees</span>
          <h2 className="mt-2 mb-4">The people on the hook.</h2>
          <div className="trustee-grid">
            {TRUSTEES.map((t, i) => (
              <article key={i} className="trustee">
                <div className="av" aria-hidden="true">
                  {t.initials}
                </div>
                <div className="name">{t.name}</div>
                <div className="role">{t.role}</div>
                <p>{t.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="band white">
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Governance</span>
          <h2 className="mt-2 mb-2">How we keep ourselves honest.</h2>
          <p className="muted">
            Registered NPC with five-plus trustees. Independent auditor (announced May 2026).
            Quarterly management accounts published within 30 days. Audit &amp; Risk subcommittee
            signs off every disbursement above R 25,000. POPIA Information Officer: Ryzor Dlamini.
          </p>
          <div className="report-list mt-3">
            <a className="report" href="#">
              <div className="meta">
                <div className="name">Trust Deed</div>
                <div className="sub">Founding document</div>
              </div>
              <span className="pdf">PDF →</span>
            </a>
            <a className="report" href="#">
              <div className="meta">
                <div className="name">Board Charter</div>
                <div className="sub">Roles, conflicts, code</div>
              </div>
              <span className="pdf">PDF →</span>
            </a>
            <a className="report" href="#">
              <div className="meta">
                <div className="name">Child Safety Policy</div>
                <div className="sub">Approved Nov 2025</div>
              </div>
              <span className="pdf">PDF →</span>
            </a>
            <a className="report" href="#">
              <div className="meta">
                <div className="name">POPIA Manual</div>
                <div className="sub">Information Officer: Ryzor</div>
              </div>
              <span className="pdf">PDF →</span>
            </a>
          </div>
        </div>
      </section>
      <section className="band cream">
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">Contact</span>
          <h2 className="mt-2 mb-2">Where to find us.</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 24,
            }}
          >
            <div>
              <div style={labelStyle}>General</div>
              <div style={valueStyle}>hello@willyfoundation.co.za</div>
            </div>
            <div>
              <div style={labelStyle}>Press</div>
              <div style={valueStyle}>press@willyfoundation.co.za</div>
            </div>
            <div>
              <div style={labelStyle}>Postal</div>
              <div style={{ ...valueStyle, fontSize: "1.05rem", lineHeight: 1.5 }}>
                P.O. Box 4127
                <br />
                Norwood, 2117
                <br />
                Johannesburg, South Africa
              </div>
            </div>
            <div>
              <div style={labelStyle}>Phone</div>
              <div style={valueStyle}>+27 (0) 11 880 4127</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
