"use client";

import { useEffect, useState } from "react";

export default function Ticker() {
  const [n, setN] = useState(847);

  useEffect(() => {
    const t = setInterval(() => setN((v) => v + Math.floor(Math.random() * 3)), 4500);
    return () => clearInterval(t);
  }, []);

  const raised = 1840000;
  const goal = 3000000;
  const pct = (raised / goal) * 100;

  return (
    <div className="ticker" aria-label="Live donation progress">
      <div className="container">
        <div className="ticker-inner">
          <div className="ticker-cell">
            <div className="label">
              <span className="live-dot" aria-hidden="true"></span>Raised so far
            </div>
            <div className="value">
              R 1,840,420{" "}
              <span style={{ color: "var(--n500)", fontSize: "0.95rem", fontWeight: 400 }}>
                of R 3,000,000
              </span>
            </div>
            <div className="progress" aria-hidden="true">
              <span style={{ width: pct + "%" }}></span>
            </div>
          </div>
          <div className="ticker-cell">
            <div className="label">Donors</div>
            <div className="value">{n.toLocaleString()}</div>
          </div>
          <div className="ticker-cell">
            <div className="label">Last gift</div>
            <div className="value">3 min ago</div>
          </div>
          <div className="ticker-cell">
            <div className="label">Beneficiaries</div>
            <div className="value">68</div>
          </div>
        </div>
      </div>
    </div>
  );
}
