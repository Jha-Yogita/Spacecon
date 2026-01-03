import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import SponsorsSection from '@/components/SponsorsSection';
import AboutSection from '@/components/AboutSection';
// import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';


import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EventsSection />
      <SponsorsSection />
      <AboutSection />
      {/* <TeamSection /> */}
      <ContactSection />
      
      <Footer />
      
    
    </div>
  );
}