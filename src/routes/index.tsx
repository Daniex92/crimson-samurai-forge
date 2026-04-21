import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/samurai/Navbar";
import { Hero } from "@/components/samurai/Hero";
import { About } from "@/components/samurai/About";
import { Members } from "@/components/samurai/Members";
import { Tournaments } from "@/components/samurai/Tournaments";
import { News } from "@/components/samurai/News";
import { Join } from "@/components/samurai/Join";
import { Footer } from "@/components/samurai/Footer";
import { SmokeBackdrop } from "@/components/samurai/SmokeBackdrop";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0">
        <SmokeBackdrop intensity="medium" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Members />
          <Tournaments />
          <News />
          <Join />
        </main>
        <Footer />
      </div>
    </div>
  );
}
