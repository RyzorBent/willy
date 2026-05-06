import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";

const TITLES = {
  popia: {
    eyebrow: "POPIA",
    title: "Privacy Policy",
    body: "We collect only what we need to run the donation flow and the newsletter. We never sell your data. Information Officer: Ryzor Dlamini, contact via popia@willyfoundation.co.za.",
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of Use",
    body: "Donations are voluntary and non-refundable except in the case of error or fraud. Section 18A receipts are issued only once NPC status is finalised.",
  },
  cookies: {
    eyebrow: "Legal",
    title: "Cookie Policy",
    body: "We use Plausible analytics (no personal data, no fingerprinting) and the cookies required by our donation processor. You can opt out via the banner or your browser settings.",
  },
} as const;

type Kind = keyof typeof TITLES;

export function generateStaticParams() {
  return (Object.keys(TITLES) as Kind[]).map((kind) => ({ kind }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kind: string }>;
}) {
  const { kind } = await params;
  const t = TITLES[kind as Kind];
  return { title: t ? `${t.title} — Willy Foundation` : "Legal — Willy Foundation" };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ kind: string }>;
}) {
  const { kind } = await params;
  const t = TITLES[kind as Kind];
  if (!t) notFound();

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} />
      <section className="band cream">
        <div className="container">
          <article className="editorial">
            <p>{t.body}</p>
            <p className="muted">
              This is a prototype page. Final legal copy will be reviewed and signed off by an
              attorney before public launch.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
