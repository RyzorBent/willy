import Link from "next/link";

export default function MobileDonateBar() {
  return (
    <div className="mobile-donate-bar" role="region" aria-label="Donate">
      <div className="label">
        <strong>R 1.84m</strong> raised of R 3m goal
      </div>
      <Link className="btn btn-primary btn-sm" href="/donate">
        Donate
      </Link>
    </div>
  );
}
