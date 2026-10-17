import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import OurGallery from './components/OurGallery';
import Clients from './components/Clients';
import ProjectHighlight from './components/ProjectHighlight';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Instant, not smooth: a smooth scroll here keeps animating after load/route
    // change and fights the user if they grab the scrollbar mid-animation.
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* overflow-x-clip, not overflow-x-hidden: "hidden" silently makes this div a
          vertical scroll container too, and macOS trackpad swipes latch onto it
          instead of the page, so scrolling "locks" until the next swipe. */}
      <div className="overflow-x-clip min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services/>
                <Features />
                <Gallery />
                <Clients />
                <Blog />
                <Contact />
              </>
            } />
            <Route path="/services" element={<Features />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/projects" element={<Clients />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/gallery" element={<OurGallery />} />
          </Routes>
        </div>
        <Footer />
        <Chatbot />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
