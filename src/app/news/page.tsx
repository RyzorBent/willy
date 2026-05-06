import PageHero from "@/components/PageHero";
import NewsClient from "./NewsClient";

export const metadata = { title: "News & Stories — Willy Foundation" };

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Stories"
        title="Living archive."
        lead="Every documentary episode, every press clipping, every quarterly note. A standing record of the work as it happens."
      />
      <NewsClient />
    </>
  );
}
