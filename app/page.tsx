"use client";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { About } from "@/app/components/About";
import { Process } from "@/app/components/Process";
import { CTA } from "@/app/components/CTA";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}
