"use client";

import { useState } from "react";
import { NEWS } from "@/lib/data";

const FILTERS = ["All", "Documentary", "Article", "Press", "Programme"];

export default function NewsClient() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? NEWS : NEWS.filter((n) => n.type === filter);

  return (
    <section className="band cream">
      <div className="container">
        <div className="news-filter" role="tablist">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={"pill" + (filter === f ? " active" : "")}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="news-grid">
          {items.map((n, i) => (
            <a key={i} className="news-card" href="#">
              <div className={"img " + (n.img || "")}>
                <div className="ph">[ {n.ph} ]</div>
              </div>
              <div className="body">
                <div className="meta">
                  {n.type} · {n.date}
                </div>
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
