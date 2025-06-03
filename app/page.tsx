import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimationObserver from "./components/AnimationObserver";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import ImpactSection from "./components/ImpactSection";
import ProcessSection from "./components/ProcessSection";
import ProductsSection from "./components/ProductsSection";
import CtaSection from "./components/CtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <AnimationObserver />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ImpactSection />
        <ProcessSection />
        <ProductsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
