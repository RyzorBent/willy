import Link from "next/link";

export default function Brand({ small = false }: { small?: boolean }) {
  return (
    <Link className="brand" href="/">
      <span className="brand-mark" aria-hidden="true">
        W
      </span>
      <span>
        <div className="brand-word">
          <span className="w-emph">W</span>ILLY FOUNDATION
        </div>
        {!small && <div className="brand-tag">Strength · Legacy · Community</div>}
      </span>
    </Link>
  );
}
