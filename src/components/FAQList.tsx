"use client";

import { useState } from "react";

type FAQ = { q: string; a: string };

export default function FAQList({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number>(0);
  return (
    <div>
      {items.map((it, i) => (
        <div key={i} className={"faq-item" + (open === i ? " open" : "")}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            <span>{it.q}</span>
            <span className="plus" aria-hidden="true">
              +
            </span>
          </button>
          <div className="answer">
            <p>{it.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
