import PageHero from "@/components/PageHero";

export const metadata = { title: "Events — Willy Foundation" };

const EVENTS = [
  {
    date: "01 Aug 2026",
    h: "Inaugural Gala & Soft Launch",
    p: "Sun Intercontinental, Sandton. The public unveiling. Patrons, performance, and the year-one promise.",
    img: "gold",
    ph: "GALA — SANDTON",
  },
  {
    date: "14 Sep 2026",
    h: "Township Activation — Stop 02",
    p: "Soweto. Free screening, mentorship session, documentary crew. Open to all.",
    img: "",
    ph: "TOWNSHIP TOUR — SOWETO",
  },
  {
    date: "28 Nov 2026",
    h: "Annual Birthday Celebration",
    p: "Bra Willy turns 68. Live music, beneficiaries, and the unveiling of next year's wish list.",
    img: "",
    ph: "BIRTHDAY CELEBRATION",
  },
];

const STOPS = [
  "Tembisa",
  "Soweto",
  "Khayelitsha",
  "Mamelodi",
  "Mdantsane",
  "Mitchells Plain",
  "Galeshewe",
  "Tshing",
  "Diepsloot",
  "Umlazi",
  "Atteridgeville",
  "Alexandra",
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="The campaign trail."
        lead="Three pillars. The Gala, the Township Activation Tour, and the annual Birthday Celebration. Each one funds, documents, and gathers."
      />
      <section className="band cream">
        <div className="container">
          <div className="event-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {EVENTS.map((e, i) => (
              <a key={i} className="event-card" href="#">
                <div className={"img " + (e.img || "")}>
                  <div className="ph">[ {e.ph} ]</div>
                </div>
                <div className="body">
                  <div className="date">{e.date}</div>
                  <h3>{e.h}</h3>
                  <p>{e.p}</p>
                  <span className="more burgundy">Details →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="band white">
        <div className="container">
          <span className="eyebrow">Township activation tour</span>
          <h2 className="mt-2 mb-4">Twelve stops. One year. One country.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {STOPS.map((stop, i) => (
              <div
                key={stop}
                style={{ padding: "20px 18px", background: "var(--n50)", border: "1px solid var(--n200)" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  Stop {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    marginTop: 4,
                  }}
                >
                  {stop}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--n500)", marginTop: 6 }}>
                  {i === 0 ? "Completed Mar 2026" : i < 3 ? "Scheduled" : "TBC"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
