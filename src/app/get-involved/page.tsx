import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Get Involved — Willy Foundation" };

const CARDS = [
  {
    num: "01",
    h: "Give Monthly",
    p: "The closest thing to a guarantee. Three named tiers, cancel any time. Goes straight to a programme of your choice.",
    cta: "Set up a monthly gift",
    path: "/donate",
  },
  {
    num: "02",
    h: "Partner With Us",
    p: "Corporate partnerships, named programmes, in-kind support. We treat partnership like a relationship, not a transaction.",
    cta: "Start a conversation",
    path: "/donate",
  },
  {
    num: "03",
    h: "Become an Ambassador",
    p: "Take the message into your room — your school, your network, your community. We supply the materials. You bring the audience.",
    cta: "Apply",
    path: "/get-involved",
  },
  {
    num: "04",
    h: "Apply for Support",
    p: "If you or your organisation could be a beneficiary or grantee, this is the door. Fair, transparent, and reviewed every quarter.",
    cta: "See criteria",
    path: "/get-involved",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Four ways to lean in."
        lead="Pick the one that fits your hands."
      />
      <section className="band cream">
        <div className="container">
          <div className="prog-grid">
            {CARDS.map((c, i) => (
              <Link key={i} className="prog-card" href={c.path}>
                <div className="num">{c.num}</div>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
                <span className="arrow">{c.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
