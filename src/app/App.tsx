import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DashboardPreview } from './components/DashboardPreview';
import { Benefits } from './components/Benefits';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

export default function App() {
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