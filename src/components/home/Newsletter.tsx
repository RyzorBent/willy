"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
    setEmail("");
  };

  return (
    <section className="newsletter" aria-label="Newsletter">
      <div className="container">
        <div className="ns-grid">
          <div>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              Stay close
            </span>
            <h2 className="mt-2" style={{ color: "var(--paper)" }}>
              Once a month. Just the truth and the receipts.
            </h2>
          </div>
          <div>
            <p>
              No marketing fluff. The quarterly statements when they drop, the next township stop,
              and one story we think is worth your time.
            </p>
            <form onSubmit={submit}>
              <label className="visually-hidden" htmlFor="nl-email">
                Email address
              </label>
              <input
                id="nl-email"
                type="email"
                placeholder="your@email.co.za"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe →</button>
            </form>
            {done && (
              <p className="ok" role="status">
                Thank you — please check your inbox to confirm.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
