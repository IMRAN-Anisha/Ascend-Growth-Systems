import { useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { CalculatorSection } from "./components/CalculatorSection";
import { QuizSection } from "./components/QuizSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { IntegrationsSection } from "./components/IntegrationsSection";
import { ResultsBand } from "./components/ResultsBand";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { BookingSection } from "./components/BookingSection";
import { FAQSection } from "./components/FAQSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <IndustriesSection />
      <CalculatorSection />
      <QuizSection />
      <SolutionsSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <ResultsBand />
      <TestimonialsSection />
      <BookingSection />
      <FAQSection />
      <FooterSection />

      <style>{`
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        body { overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
        }
      `}</style>
    </div>
  );
}
