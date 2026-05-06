import Link from "next/link";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              The permanent home of the Bra Willy Back-A-Buddy &amp; Legacy Project. Built for the
              long road.
            </p>
            <div className="social-row" aria-label="Social channels">
              <a href="#" aria-label="Instagram">
                IG
              </a>
              <a href="#" aria-label="YouTube">
                YT
              </a>
              <a href="#" aria-label="TikTok">
                TT
              </a>
              <a href="#" aria-label="X">
                X
              </a>
              <a href="#" aria-label="WhatsApp Channel">
                WA
              </a>
            </div>
          </div>
          <div>
            <h4>Foundation</h4>
            <ul>
              <li>
                <Link href="/story">The Story</Link>
              </li>
              <li>
                <Link href="/programmes">Programmes</Link>
              </li>
              <li>
                <Link href="/about">Trustees</Link>
              </li>
              <li>
                <Link href="/about">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Give</h4>
            <ul>
              <li>
                <Link href="/donate">Donate</Link>
              </li>
              <li>
                <Link href="/donate">Monthly Giving</Link>
              </li>
              <li>
                <Link href="/get-involved">Partner With Us</Link>
              </li>
              <li>
                <Link href="/transparency">Section 18A</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Trust</h4>
            <ul>
              <li>
                <Link href="/transparency">Where The Money Goes</Link>
              </li>
              <li>
                <Link href="/transparency">Annual Reports</Link>
              </li>
              <li>
                <Link href="/legal/popia">POPIA</Link>
              </li>
              <li>
                <Link href="/legal/terms">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>NPO 000-000 (in registration) · Section 18A pending · © 2026 Willy Foundation NPC</div>
          <div>Built with care in South Africa.</div>
        </div>
      </div>
    </footer>
  );
}
