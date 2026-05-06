"use client";

import { useEffect, useState } from "react";

type Size = "md" | "lg" | "xl";

export default function A11yToolbar() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<Size>("md");
  const [hc, setHc] = useState(false);
  const [rm, setRm] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const s = (localStorage.getItem("wf:size") as Size) || "md";
    setSize(s);
    setHc(localStorage.getItem("wf:hc") === "1");
    setRm(localStorage.getItem("wf:rm") === "1");
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.body.dataset.textSize = size;
    document.body.classList.toggle("high-contrast", hc);
    document.body.classList.toggle("reduced-motion", rm);
    localStorage.setItem("wf:size", size);
    localStorage.setItem("wf:hc", hc ? "1" : "0");
    localStorage.setItem("wf:rm", rm ? "1" : "0");
  }, [size, hc, rm, hydrated]);

  return (
    <div className="a11y-toolbar">
      {open && (
        <div className="a11y-panel" role="dialog" aria-label="Accessibility settings">
          <h4>Accessibility</h4>
          <div className="a11y-row">
            <span className="label">Text size</span>
            <div className="seg-control" role="radiogroup">
              {(["md", "lg", "xl"] as const).map((s) => (
                <button
                  key={s}
                  className={"seg-btn " + (size === s ? "active" : "")}
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                >
                  {s === "md" ? "A" : s === "lg" ? "A+" : "A++"}
                </button>
              ))}
            </div>
          </div>
          <div className="a11y-row">
            <span className="label">High contrast</span>
            <button
              className={"toggle-sw " + (hc ? "on" : "")}
              onClick={() => setHc((v) => !v)}
              aria-pressed={hc}
              aria-label="Toggle high contrast"
            ></button>
          </div>
          <div className="a11y-row">
            <span className="label">Reduced motion</span>
            <button
              className={"toggle-sw " + (rm ? "on" : "")}
              onClick={() => setRm((v) => !v)}
              aria-pressed={rm}
              aria-label="Toggle reduced motion"
            ></button>
          </div>
        </div>
      )}
      <button
        className="a11y-toggle"
        aria-label={open ? "Close accessibility settings" : "Open accessibility settings"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="6.5" r="1.5" fill="currentColor" />
          <path
            d="M7 10l5 1 5-1M12 11v4l-2 4M12 15l2 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
