import FAQList from "@/components/FAQList";
import { DISBURSEMENTS, FAQS } from "@/lib/data";

export const metadata = { title: "Where The Money Goes — Willy Foundation" };

export default function TransparencyPage() {
  return (
    <>
      <section className="band ink">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>
            Where the money goes
          </span>
          <h1 className="mt-2" style={{ color: "var(--paper)", maxWidth: "16ch" }}>
            The books, in public.
          </h1>
          <p
            style={{
              color: "rgba(248,244,233,0.78)",
              fontSize: "1.2rem",
              marginTop: 24,
              maxWidth: "60ch",
            }}
          >
            Every Rand documented. Quarterly statements within 30 days of quarter-end. Annual
            audit by an independent firm. No exceptions.
          </p>
        </div>
      </section>

      <section className="band cream">
        <div className="container">
          <span className="eyebrow">Live dashboard</span>
          <h2 className="mt-2 mb-2">As of 21 March 2026.</h2>
          <div className="dashboard">
            <div className="stat">
              <div className="label">Total raised</div>
              <div className="value">R 1.84m</div>
              <p className="caption">Since 1 Sep 2025</p>
            </div>
            <div className="stat">
              <div className="label">Disbursed</div>
              <div className="value">R 1.42m</div>
              <p className="caption">77.4% of raised</p>
            </div>
            <div className="stat">
              <div className="label">In reserve</div>
              <div className="value">R 421k</div>
              <p className="caption">3-month runway</p>
            </div>
            <div className="stat">
              <div className="label">Operating cost</div>
              <div className="value">9.8%</div>
              <p className="caption">Target &lt; 12%</p>
            </div>
          </div>

          <h3 className="mt-4 mb-2">Allocation across programmes</h3>
          <div className="allocation-bar">
            <div className="seg" style={{ background: "rgba(201,162,39,0.32)", flex: 412 }}>
              VI Assistance · 42%
            </div>
            <div
              className="seg"
              style={{ background: "rgba(92,31,42,0.18)", flex: 285, color: "var(--burgundy)" }}
            >
              NPO Grants · 29%
            </div>
            <div className="seg" style={{ background: "rgba(168,196,162,0.4)", flex: 96 }}>
              Glaucoma · 10%
            </div>
            <div className="seg" style={{ background: "rgba(14,17,22,0.08)", flex: 178 }}>
              Mentorship · 19%
            </div>
          </div>

          <h3 className="mt-4 mb-2">Every disbursement, since launch.</h3>
          <div
            style={{
              overflowX: "auto",
              border: "1px solid var(--n200)",
              background: "var(--n50)",
            }}
          >
            <table className="disbursement-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Recipient</th>
                  <th>Programme</th>
                  <th style={{ textAlign: "right" }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {DISBURSEMENTS.map((d, i) => (
                  <tr key={i}>
                    <td style={{ whiteSpace: "nowrap", color: "var(--n500)" }}>{d.date}</td>
                    <td>{d.to}</td>
                    <td>
                      <span className={"tag " + d.tag}>{d.programme}</span>
                    </td>
                    <td className="amount" style={{ textAlign: "right" }}>
                      {d.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="band white">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Quarterly statements</span>
              <h2 className="mt-2">Every quarter. Within 30 days. Signed.</h2>
            </div>
            <p className="muted" style={{ margin: 0, alignSelf: "end" }}>
              Signed off by Tumi Mokoena, CA(SA), Trustee — Audit &amp; Risk.
            </p>
          </div>
          <div className="report-list">
            <a className="report" href="#">
              <div className="meta">
                <div className="name">Q1 2026 Statement</div>
                <div className="sub">Jan – Mar 2026 · 18 pages · Signed</div>
              </div>
              <span className="pdf">PDF →</span>
            </a>
            <a className="report" href="#">
              <div className="meta">
                <div className="name">Q4 2025 Statement</div>
                <div className="sub">Oct – Dec 2025 · 16 pages · Signed</div>
              </div>
              <span className="pdf">PDF →</span>
            </a>
            <a className="report" href="#">
              <div className="meta">
                <div className="name">Founding Trust Deed</div>
                <div className="sub">NPC registration documents</div>
              </div>
              <span className="pdf">PDF →</span>
            </a>
            <a className="report" href="#">
              <div className="meta">
                <div className="name">Child Safety Policy</div>
                <div className="sub">Approved by trustees, Nov 2025</div>
              </div>
              <span className="pdf">PDF →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="band cream">
        <div className="container">
          <div className="feature-grid">
            <div
              className="video-frame"
              role="img"
              aria-label="Bra Willy walking through the latest quarterly statement on camera"
            >
              <div className="play" aria-hidden="true">
                ▶
              </div>
              <div className="ph-text">[ BRA WILLY · Q1 STATEMENT WALKTHROUGH · 12 MIN ]</div>
            </div>
            <div>
              <span className="eyebrow">Bra Willy on the numbers</span>
              <h2 className="mt-2" style={{ fontSize: "2rem" }}>
                He reads the statement himself.
              </h2>
              <p className="muted">
                Every quarter, Bra Willy sits down on camera and walks through the statement
                personally. Twelve minutes. No script. No questions off-limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band white">
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Donor questions</span>
          <h2 className="mt-2 mb-4">The ones we hear most.</h2>
          <FAQList items={FAQS} />
        </div>
      </section>
    </>
  );
}
