import GraphicBackground from './components/GraphicBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import SplitArenaSection from './components/SplitArenaSection';
import AboutUs from './components/AboutUs';
import WhyConsortium from './components/WhyConsortium';
import AdditionalSections from './components/AdditionalSections';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const handleGoToEvents = () => {
    const el = document.getElementById('events');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Existing Background System — Untouched as mandated */}
      <GraphicBackground isVideoPlaying={true} />

      {/* Combined Top Overlay: Cyber Navbar with Legendary Metallic Silver-White Countdown HUD */}
      <Navbar onNavigateToEvents={handleGoToEvents} />

      {/* Main Experience Flow matching Mockup & Brief */}
      <main>
        {/* 2. Hero Section (Chrome Title, Slanted Brush 2026, Action Buttons) */}
        <Hero onNavigateToEvents={handleGoToEvents} />

        {/* 3. Featured Events (10 Flagship Events, Carousel) */}
        <Events />

        {/* 4. Battle Beyond Boundaries Section */}
        <SplitArenaSection />

        {/* 5. About Us: Institute of Aeronautical Engineering (Host Institution) */}
        <AboutUs />

        {/* 6. Why Consortium Matrix (IT'S MORE THAN A FEST: Compete, Learn, Network, Grow) */}
        <WhyConsortium />

        {/* 7. Additional Confirmed Requirements (Schedule, Gallery, Team, Venue) */}
        <AdditionalSections />

        {/* 8. Trophy Banner CTA (READY TO MAKE YOUR MARK?) */}
        <FinalCTA onNavigateToEvents={handleGoToEvents} />
      </main>

      {/* 9. Wordmark Footer with confirmed section links */}
      <Footer />
    </>
  );
}

export default App;
