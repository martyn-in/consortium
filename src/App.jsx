import { useState } from 'react';
import GraphicBackground from './components/GraphicBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import PassModal from './components/PassModal';
import CursorTrail from './components/common/CursorTrail';

function App() {
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const handleOpenPassModal = () => {
    setIsPassModalOpen(true);
  };

  const handleClosePassModal = () => {
    setIsPassModalOpen(false);
  };

  const handleToggleVideo = () => {
    setIsVideoPlaying((prev) => !prev);
  };

  return (
    <>
      {/* Ambient Glowing Laser Cursor Trail */}
      <CursorTrail />

      {/* High-Level Professional Graphics & Aurora Video System */}
      <GraphicBackground isVideoPlaying={isVideoPlaying} />

      {/* Main Navigation */}
      <Navbar 
        onOpenPassModal={handleOpenPassModal} 
        isVideoPlaying={isVideoPlaying}
        onToggleVideo={handleToggleVideo}
      />

      {/* Main Experience Stream */}
      <main>
        <Hero onOpenPassModal={handleOpenPassModal} />
        <About onOpenPassModal={handleOpenPassModal} />
        <Events onOpenPassModal={handleOpenPassModal} />
        <Schedule />
        <Sponsors />
      </main>

      {/* Aerospace Terminal Footer */}
      <Footer onOpenPassModal={handleOpenPassModal} />

      {/* Interactive Holographic Cyber Pass Generator Modal */}
      <PassModal 
        isOpen={isPassModalOpen} 
        onClose={handleClosePassModal} 
      />
    </>
  );
}

export default App;
