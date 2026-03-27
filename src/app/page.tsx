import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Ambience } from "@/components/sections/Ambience";
import { HeroCanvas } from "@/components/sections/HeroCanvas";
import { MenuSection } from "@/components/sections/MenuSection";
import { OurStory } from "@/components/sections/OurStory";
import { Reservations } from "@/components/sections/Reservations";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCanvas />
        <MenuSection />
        <OurStory />
        <Ambience />
        <Testimonials />
        <Reservations />
      </main>
      <Footer />
    </>
  );
}
