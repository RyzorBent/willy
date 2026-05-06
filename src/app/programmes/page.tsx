import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PROGRAMMES } from "@/lib/data";

export const metadata = { title: "Programmes — Willy Foundation" };

export default function ProgrammesIndex() {
  return (
    <>
      <PageHero
        eyebrow="The Wish List"
        title="Four programmes. One mandate."
        lead="Bra Willy wrote the wish list himself, on a yellow legal pad, in a kitchen in Norwood. We costed it. Pick where you want your money to go."
      />
      <section className="band cream">
        <div className="container">
          {PROGRAMMES.map((p, i) => (
            <div key={p.slug} className={"prog-row" + (i % 2 === 1 ? " flip" : "")}>
              <div className="prog-img-side">
                <div className="ph">[ {p.name.toUpperCase()} ]</div>
              </div>
              <div>
                <div className="num">{p.num} · Programme</div>
                <h3>{p.name}</h3>
                <p className="muted">{p.blurb}</p>
                <div className="progress-meta">
                  <span>R {(p.raised / 1000).toFixed(0)}k raised</span>
                  <span>Goal R {(p.goal / 1000).toFixed(0)}k</span>
                </div>
                <div className="progress">
                  <span style={{ width: (p.raised / p.goal) * 100 + "%" }}></span>
                </div>
                <div className="ctas">
                  <Link className="btn btn-primary" href={`/donate?programme=${p.slug}`}>
                    Support this programme
                  </Link>
                  <Link className="btn btn-ghost" href={`/programmes/${p.slug}`}>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
