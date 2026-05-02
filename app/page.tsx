import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WelcomeSection from '@/components/WelcomeSection';
import DocumentarySection from '@/components/DocumentarySection';
import ProgramGrid from '@/components/ProgramGrid';
import CanadaSection from '@/components/CanadaSection';
import WhyChoose from '@/components/WhyChoose';
import Testimonials from '@/components/Testimonials';
import LatestNews from '@/components/LatestNews';
import WorkWithUs from '@/components/WorkWithUs';
import CommunityCTA from '@/components/CommunityCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <WelcomeSection />
      <DocumentarySection />
      <ProgramGrid />
      <CanadaSection />
      <WhyChoose />
      <Testimonials />
      <LatestNews />
      <WorkWithUs />
      <CommunityCTA />
      <Footer />
    </main>
  );
}