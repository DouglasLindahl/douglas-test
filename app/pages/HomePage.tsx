import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { About } from "@/app/components/About";
import { Process } from "@/app/components/Process";
import { CTA } from "@/app/components/CTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <CTA />
    </>
  );
}
