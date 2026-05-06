import { Suspense } from "react";
import DonateClient from "./DonateClient";

export const metadata = { title: "Donate — Willy Foundation" };

export default function DonatePage() {
  return (
    <Suspense fallback={null}>
      <DonateClient />
    </Suspense>
  );
}
