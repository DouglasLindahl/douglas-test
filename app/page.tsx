"use client";
import { Header } from "@/app/components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "@/app/components/Footer";
import { HomePage } from "./pages/HomePage";
import { PriceCalculatorPage } from "./pages/PriceCalculatorPage";

export default function Home() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/priskalkylator" element={<PriceCalculatorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
