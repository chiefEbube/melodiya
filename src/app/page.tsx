// import Image from "next/image";

import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { CTASection } from "@/components/ui/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-violet-950 text-white">
      <main className="container mx-auto px-4 py-8">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <footer className="text-center py-8 text-sm opacity-70">
        © 2024 Melodya. All rights reserved.
      </footer>
    </div>
  );
}
