import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import VrindavanStory from "@/components/sections/VrindavanStory";
import SpiritualCapital from "@/components/sections/SpiritualCapital";
import Philosophy from "@/components/sections/Philosophy";
import Destination from "@/components/sections/Destination";
import SignatureSuites from "@/components/sections/SignatureSuites";
import Experience from "@/components/sections/Experience";
import Devika from "@/components/sections/Devika";
import Enquiry from "@/components/sections/Enquiry";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-50 text-ink">
      <Nav />
      <Hero />
      <VrindavanStory />
      <SpiritualCapital />
      <Philosophy />
      <Destination />
      <SignatureSuites />
      <Experience />
      <Devika />
      <Enquiry />
    </main>
  );
}
