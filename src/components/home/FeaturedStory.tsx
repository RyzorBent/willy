import Link from "next/link";

export default function FeaturedStory() {
  return (
    <section className="band cream">
      <div className="container">
        <div className="feature-grid">
          <div
            className="video-frame"
            role="img"
            aria-label="Documentary episode video — Tembisa stop"
          >
            <div className="play" aria-hidden="true">
              ▶
            </div>
            <div className="ph-text">[ DOCUMENTARY EP. 1 — TEMBISA STOP · 24 MIN ]</div>
          </div>
          <div>
            <span className="eyebrow">Latest documentary</span>
            <h2 className="mt-2" style={{ fontSize: "2.2rem" }}>
              The Tembisa stop.
            </h2>
            <p className="muted">
              Episode one of the township activation tour. Bra Willy walks through T-Shed for the
              first time since the inaugural grant cleared. No script.
            </p>
            <Link className="btn btn-ghost mt-2" href="/news">
              More stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
