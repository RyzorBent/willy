import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import Mandate from "@/components/home/Mandate";
import ProgrammesGrid from "@/components/home/ProgrammesGrid";
import FeaturedStory from "@/components/home/FeaturedStory";
import TransparencySnapshot from "@/components/home/TransparencySnapshot";
import Voices from "@/components/home/Voices";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Mandate />
      <ProgrammesGrid />
      <FeaturedStory />
      <TransparencySnapshot />
      <Voices />
      <UpcomingEvents />
      <Newsletter />
    </>
  );
}
