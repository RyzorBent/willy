"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PageHero from "@/components/PageHero";
import { PROGRAMMES } from "@/lib/data";

type Mode = "once" | "monthly" | "major";
type TierKey = "friend" | "patron" | "champion";

const TIERS: Record<TierKey, { name: string; price: number; what: string }> = {
  friend: {
    name: "Friend",
    price: 100,
    what: "Equips one assistive cane and orientation session per quarter.",
  },
  patron: {
    name: "Patron",
    price: 250,
    what: "Funds one screen-reader licence per year for a beneficiary.",
  },
  champion: {
    name: "Champion",
    price: 500,
    what: "Underwrites a full school visit programme each quarter.",
  },
};

const ONCE_AMOUNTS = [100, 250, 500, 1000, 2500, 5000, 10000];

export default function DonateClient() {
  const searchParams = useSearchParams();
  const initialProgramme = searchParams.get("programme") || "all";

  const [mode, setMode] = useState<Mode>("monthly");
  const [tier, setTier] = useState<TierKey>("patron");
  const [amount, setAmount] = useState(250);
  const [programme, setProgramme] = useState(initialProgramme);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setProgramme(initialProgramme);
  }, [initialProgramme]);

  const submit = () => {
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (done) {
    return (
      <section className="band ink" style={{ minHeight: "60vh" }}>
        <div className="container center" style={{ maxWidth: 700 }}>
          <span className="eyebrow" style={{ color: "var(--gold)" }}>
            Thank you
          </span>
          <h1 style={{ color: "var(--paper)", marginTop: 22 }}>
            The hands stay working because of yours.
          </h1>
          <p
            style={{
              color: "rgba(248,244,233,0.78)",
              margin: "24px auto",
              fontSize: "1.2rem",
            }}
          >
            A confirmation is on its way to your email. Your Section 18A receipt will follow within
            24 hours.
          </p>
          <div className="hero-ctas" style={{ justifyContent: "center" }}>
            <Link className="btn btn-primary" href="/transparency">
              See where it goes
            </Link>
            <Link
              className="btn btn-ghost"
              style={{ color: "var(--paper)", borderColor: "rgba(248,244,233,0.4)" }}
              href="/"
              onClick={() => setDone(false)}
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Every Rand goes where we say it goes."
        lead="Pick how you want to give. Direct it to a programme if you like. Section 18A receipt arrives by email within a day."
      />
      <section className="band cream">
        <div className="container" style={{ maxWidth: 920 }}>
          <div className="donate-grid">
            <button
              className={"donate-card" + (mode === "once" ? " active" : "")}
              onClick={() => setMode("once")}
            >
              <span className="check"></span>
              <div className="num">01 · Most common</div>
              <h3>Once-Off Gift</h3>
              <div className="desc">
                A one-time donation processed through Back-A-Buddy. Card, EFT, SnapScan.
              </div>
            </button>
            <button
              className={"donate-card" + (mode === "monthly" ? " active" : "")}
              onClick={() => setMode("monthly")}
            >
              <span className="check"></span>
              <div className="num">02 · Recommended</div>
              <h3>Monthly Giving</h3>
              <div className="desc">
                Three named tiers. Cancel any time. The closest thing we have to a guarantee.
              </div>
            </button>
            <button
              className={"donate-card" + (mode === "major" ? " active" : "")}
              onClick={() => setMode("major")}
            >
              <span className="check"></span>
              <div className="num">03 · Partnership</div>
              <h3>Major Gift / Corporate</h3>
              <div className="desc">
                A conversation, a tailored partnership, and a named line in our annual report.
              </div>
            </button>
          </div>

          <div className="donate-panel">
            {mode === "once" && (
              <div>
                <h3 style={{ marginBottom: 4 }}>Choose an amount</h3>
                <p className="muted" style={{ marginBottom: 24 }}>
                  In Rand. Any amount welcome — the small ones add up.
                </p>
                <div className="amount-grid">
                  {ONCE_AMOUNTS.map((a) => (
                    <button
                      key={a}
                      className={"amount-btn" + (amount === a ? " active" : "")}
                      onClick={() => setAmount(a)}
                    >
                      R {a.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div className="field">
                  <label htmlFor="custom">Or a custom amount</label>
                  <input
                    id="custom"
                    type="number"
                    min={10}
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value || "0", 10))}
                  />
                </div>
              </div>
            )}
            {mode === "monthly" && (
              <div>
                <h3 style={{ marginBottom: 4 }}>Choose a tier</h3>
                <p className="muted" style={{ marginBottom: 24 }}>
                  Every tier comes with a quarterly statement, named on the donor wall (if you
                  wish), and a Section 18A receipt.
                </p>
                <div className="tier-grid">
                  {(Object.entries(TIERS) as [TierKey, (typeof TIERS)[TierKey]][]).map(
                    ([key, t]) => (
                      <button
                        key={key}
                        className={"tier" + (tier === key ? " active" : "")}
                        onClick={() => setTier(key)}
                      >
                        <div className="name">{t.name}</div>
                        <div className="price">R {t.price} / month</div>
                        <div className="what">{t.what}</div>
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
            {mode === "major" && (
              <div>
                <h3 style={{ marginBottom: 4 }}>Start a conversation</h3>
                <p className="muted" style={{ marginBottom: 24 }}>
                  For corporate partnerships, named programmes, or estate gifts. We&apos;ll come
                  back to you within two working days.
                </p>
                <div className="field">
                  <label>Your name</label>
                  <input type="text" />
                </div>
                <div className="field">
                  <label>Organisation (optional)</label>
                  <input type="text" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" />
                </div>
                <div className="field">
                  <label>Tell us what you have in mind</label>
                  <textarea rows={4} />
                </div>
              </div>
            )}

            <hr className="divider" style={{ margin: "32px 0" }} />

            <div className="field">
              <label htmlFor="prog">Direct your gift (optional)</label>
              <select
                id="prog"
                value={programme}
                onChange={(e) => setProgramme(e.target.value)}
              >
                <option value="all">Wherever the need is greatest</option>
                {PROGRAMMES.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="btn btn-primary btn-lg"
              style={{ width: "100%", marginTop: 12 }}
              onClick={submit}
            >
              {mode === "once" && `Donate R ${amount.toLocaleString()}`}
              {mode === "monthly" && `Give R ${TIERS[tier].price} per month`}
              {mode === "major" && "Send my message"}
            </button>
            <p
              className="muted center"
              style={{ fontSize: "0.85rem", marginTop: 16, marginBottom: 0 }}
            >
              Processed via Back-A-Buddy. Card, EFT, SnapScan, Zapper accepted.
            </p>
          </div>

          <div className="trust-block">
            <div className="item">
              <div className="label">NPC Status</div>
              <div className="val">In registration</div>
            </div>
            <div className="item">
              <div className="label">Section 18A</div>
              <div className="val">Pending — May 2026</div>
            </div>
            <div className="item">
              <div className="label">Operating ratio</div>
              <div className="val">9.8% (target &lt;12%)</div>
            </div>
          </div>

          <div className="mt-4">
            <span className="eyebrow">What it actually buys</span>
            <h3 className="mt-2" style={{ marginBottom: 24 }}>
              This quarter, on the ground.
            </h3>
            <div className="prog-grid">
              <div className="prog-card">
                <div className="num">R 100</div>
                <h3 style={{ fontSize: "1.3rem" }}>One white cane</h3>
                <p>
                  Plus an orientation session at the SA Guide-Dogs Association. Updated for Q2 2026
                  prices.
                </p>
              </div>
              <div className="prog-card">
                <div className="num">R 500</div>
                <h3 style={{ fontSize: "1.3rem" }}>One school visit</h3>
                <p>
                  Travel and honorarium for a mentor speaker into a school in Gauteng or
                  Mpumalanga.
                </p>
              </div>
              <div className="prog-card">
                <div className="num">R 1,000</div>
                <h3 style={{ fontSize: "1.3rem" }}>One screen-reader</h3>
                <p>
                  Annual licence for JAWS or NVDA Pro for a working beneficiary, plus training day.
                </p>
              </div>
              <div className="prog-card">
                <div className="num">R 5,000</div>
                <h3 style={{ fontSize: "1.3rem" }}>One free screening day</h3>
                <p>
                  A full glaucoma screening day at a township clinic, including equipment and
                  clinician time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
