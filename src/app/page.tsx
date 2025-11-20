import Hero from "@/components/public/Hero";
import Partner from "@/components/public/Partner";
import About from "@/components/public/About";
import Mission from "@/components/public/Mission";
import Vision from "@/components/public/Vision";
import Export from "@/components/public/Export";
import Sustainability from "@/components/public/Sustainability";
import Invest from "@/components/public/Invest";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <Vision />
      <Partner />
      <Export/>
      <Invest/>
      <Sustainability/>
    </>
  );
}
