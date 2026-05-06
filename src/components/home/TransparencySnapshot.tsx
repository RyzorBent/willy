import Link from "next/link";

export default function TransparencySnapshot() {
  return (
    <section className="band white">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Where the money goes</span>
            <h2 className="mt-2">The books, in public.</h2>
          </div>
          <p className="muted" style={{ margin: 0, alignSelf: "end" }}>
            Updated 21 March 2026. Next quarterly statement publishes 30 June 2026.
          </p>
        </div>
        <div className="stats-row">
          <div className="stat">
            <div className="label">Total raised</div>
            <div className="value">R 1.84m</div>
            <p className="caption">Across Back-A-Buddy, gala patrons, and direct EFT</p>
          </div>
          <div className="stat">
            <div className="label">Disbursed to programmes</div>
            <div className="value">R 1.42m</div>
            <p className="caption">77.4% deployment rate. Operating cost ratio 9.8%.</p>
          </div>
          <div className="stat">
            <div className="label">Active beneficiaries</div>
            <div className="value">68</div>
            <p className="caption">Individuals and one partner NPO (T-Shed)</p>
          </div>
        </div>
        <div className="allocation-bar" aria-label="Programme allocation breakdown">
          <div className="seg" style={{ background: "rgba(201,162,39,0.32)", flex: 412 }}>
            VI Assistance
          </div>
          <div
            className="seg"
            style={{ background: "rgba(92,31,42,0.18)", flex: 285, color: "var(--burgundy)" }}
          >
            NPO Grants
          </div>
          <div className="seg" style={{ background: "rgba(168,196,162,0.4)", flex: 96 }}>
            Glaucoma
          </div>
          <div className="seg" style={{ background: "rgba(14,17,22,0.08)", flex: 178 }}>
            Mentorship
          </div>
        </div>
        <div className="allocation-legend">
          <span>
            <span className="dot" style={{ background: "var(--gold)" }}></span>VI Assistance — R
            412k
          </span>
          <span>
            <span className="dot" style={{ background: "var(--burgundy)" }}></span>NPO Grants — R
            285k
          </span>
          <span>
            <span className="dot" style={{ background: "var(--sage)" }}></span>Glaucoma Research —
            R 96k
          </span>
          <span>
            <span className="dot" style={{ background: "var(--ink)" }}></span>Mentorship — R 178k
          </span>
        </div>
        <div className="mt-4">
          <Link className="btn btn-burgundy" href="/transparency">
            See the full breakdown
          </Link>
        </div>
      </div>
    </section>
  );
}
