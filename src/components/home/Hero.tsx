import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow" style={{ color: "var(--gold)" }}>
            Bra Willy Foundation
          </span>
          <h1 style={{ marginTop: 22 }}>
            <span className="word">Strength.</span>
            <span className="word">Legacy.</span>
            <span className="word gold">Community.</span>
          </h1>
          <p className="lead">
            A foundation built by the man who built South African music. Now turning forty years of
            hands into a permanent home for the visually impaired and the communities that hold
            them.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn-primary btn-lg" href="/donate">
              Donate
            </Link>
            <Link className="btn btn-ghost btn-lg" href="/story">
              Read the Story
            </Link>
          </div>
        </div>
        <div
          className="hero-portrait"
          role="img"
          aria-label="Documentary portrait of Bra Willy in warm gold-hour light"
        >
          <div className="placeholder-text">
            [ DOCUMENTARY PORTRAIT ]
            <br />
            BRA WILLY · GOLD-HOUR
            <br />
            WARM GRAIN · DIGNIFIED
          </div>
        </div>
      </div>
    </section>
  );
}
