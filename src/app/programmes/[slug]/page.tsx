import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { PROGRAMMES } from "@/lib/data";

export function generateStaticParams() {
  return PROGRAMMES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = PROGRAMMES.find((x) => x.slug === slug);
  return { title: p ? `${p.name} — Willy Foundation` : "Programme — Willy Foundation" };
}

export default async function ProgrammeDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = PROGRAMMES.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <PageHero eyebrow={`${p.num} · Programme`} title={p.name} lead={p.blurb} />
      <section className="band cream">
        <div className="container">
          <div className="editorial">
            <h2 style={{ marginTop: 0 }}>Why this matters</h2>
            <p>{p.why}</p>
            <h2>What we do</h2>
            <ul style={{ fontSize: "1.15rem", lineHeight: 1.7, paddingLeft: 20 }}>
              {p.activities.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
            <h2>Impact so far</h2>
          </div>
          <div
            className="stats-row mt-2"
            style={{
              maxWidth: 760,
              margin: "32px auto 0",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div className="stat">
              <div className="value">{p.impact.lhs}</div>
              <p className="caption">{p.impact.lhsCap}</p>
            </div>
            <div className="stat">
              <div className="value">{p.impact.rhs}</div>
              <p className="caption">{p.impact.rhsCap}</p>
            </div>
          </div>
          <div className="editorial mt-4">
            <h2>Featured story</h2>
            <figure>
              <div className="img">
                <div className="ph">[ FEATURED BENEFICIARY — WITH PERMISSION ]</div>
              </div>
              <figcaption>
                Subject&apos;s name and full story available with their consent on the news page.
              </figcaption>
            </figure>
            <p>
              Every featured story is published only with full written consent. Where consent
              isn&apos;t given, we don&apos;t run the story — that&apos;s the deal.
            </p>
            <div className="mt-3 center">
              <Link
                className="btn btn-primary btn-lg"
                href={`/donate?programme=${p.slug}`}
              >
                Support this programme
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
