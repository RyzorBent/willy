"use client";

import { useRef } from "react";
import { VOICES } from "@/lib/data";

export default function Voices() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 440, behavior: "smooth" });
  };

  return (
    <section className="band ink">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              From the hands
            </span>
            <h2 className="mt-2" style={{ color: "var(--paper)" }}>
              The voices Bra Willy raised.
            </h2>
          </div>
          <p style={{ color: "rgba(248,244,233,0.7)", margin: 0, alignSelf: "end" }}>
            Forty years of South African music came through these hands. They speak for him now.
          </p>
        </div>
        <div className="voices">
          <div className="voice-track" ref={trackRef}>
            {VOICES.map((v, i) => (
              <article key={i} className="voice">
                <p className="q">&ldquo;{v.q}&rdquo;</p>
                <div className="meta">
                  <div className="avatar" aria-hidden="true">
                    {v.initials}
                  </div>
                  <div>
                    <div className="who">{v.who}</div>
                    <div className="role">{v.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="voices-controls">
            <button
              className="icon-btn"
              aria-label="Previous voice"
              onClick={() => scroll(-1)}
              style={{ borderColor: "var(--paper)", color: "var(--paper)" }}
            >
              ←
            </button>
            <button
              className="icon-btn"
              aria-label="Next voice"
              onClick={() => scroll(1)}
              style={{ borderColor: "var(--paper)", color: "var(--paper)" }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
