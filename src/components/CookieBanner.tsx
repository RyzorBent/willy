"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(!localStorage.getItem("wf:cookies"));
  }, []);

  if (!show) return null;

  const close = (val: string) => {
    localStorage.setItem("wf:cookies", val);
    setShow(false);
  };

  return (
    <div className="cookie" role="dialog" aria-label="Cookie notice">
      <h4>About cookies</h4>
      <p>
        We use only what we need — Plausible analytics (no personal data) and what&apos;s required
        to run the donation flow. POPIA-compliant.{" "}
        <Link href="/legal/cookies" style={{ color: "var(--gold)" }}>
          Read the policy
        </Link>
        .
      </p>
      <div className="actions">
        <button
          className="btn btn-ghost btn-sm"
          style={{ color: "var(--paper)", borderColor: "rgba(248,244,233,0.3)" }}
          onClick={() => close("essential")}
        >
          Essential only
        </button>
        <button className="btn btn-primary btn-sm" onClick={() => close("all")}>
          Accept all
        </button>
      </div>
    </div>
  );
}
