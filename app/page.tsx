"use client";
import { Header } from "@/app/components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "@/app/components/Footer";
import { HomePage } from "./pages/HomePage";
import { PriceCalculatorPage } from "./pages/PriceCalculatorPage";
import { CTA } from "./components/CTA";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Process } from "./components/Process";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}
