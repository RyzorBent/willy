import Link from "next/link";

export default function UpcomingEvents() {
  return (
    <section className="band cream">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">What&apos;s next</span>
            <h2 className="mt-2">Upcoming.</h2>
          </div>
        </div>
        <div className="event-grid">
          <Link className="event-card" href="/events">
            <div className="img gold">
              <div className="ph">[ GALA — SUN INTERCONTINENTAL · 1 AUG ]</div>
            </div>
            <div className="body">
              <div className="date">01 Aug 2026 · Sandton</div>
              <h3>The Inaugural Gala &amp; Soft Launch</h3>
              <p>
                An evening of patrons, performance, and the public unveiling of the Foundation.
                Limited table seats remain.
              </p>
              <span className="more burgundy">Details →</span>
            </div>
          </Link>
          <Link className="event-card" href="/events">
            <div className="img">
              <div className="ph">[ TOWNSHIP TOUR — STOP 02 ]</div>
            </div>
            <div className="body">
              <div className="date">14 Sep 2026 · Soweto</div>
              <h3>Township Activation Tour — Stop 02</h3>
              <p>
                Free glaucoma screening, mentorship session, and a documentary crew. Open to the
                community, no booking required.
              </p>
              <span className="more burgundy">Details →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
