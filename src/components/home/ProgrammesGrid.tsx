import Link from "next/link";
import { PROGRAMMES } from "@/lib/data";

export default function ProgrammesGrid() {
  return (
    <section className="band white">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">The Wish List</span>
            <h2 className="mt-2">
              Four programmes.
              <br />
              One mandate.
            </h2>
          </div>
          <p className="muted" style={{ margin: 0, alignSelf: "end" }}>
            Bra Willy wrote the wish list himself. Then we costed it. Each programme stands on its
            own and can be funded directly.
          </p>
        </div>
        <div className="prog-grid">
          {PROGRAMMES.map((p) => (
            <Link key={p.slug} className="prog-card" href={`/programmes/${p.slug}`}>
              <div className="num">{p.num}</div>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
              <span className="arrow">Learn more</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
