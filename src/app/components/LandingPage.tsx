import { Hero } from './Hero';
import { Features } from './Features';
import { DashboardPreview } from './DashboardPreview';
import { Benefits } from './Benefits';
import { CtaSection } from './CtaSection';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <Benefits />
      <CtaSection />
      <Footer />
    </div>
  );
}
