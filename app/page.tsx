'use client'

import { useState, useEffect, useRef } from 'react'
import { Phone, Mail, MessageCircle } from 'lucide-react'

const LandingPage = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    
    if (iframe) {
      const handleIframeLoad = () => {
        setIframeLoaded(true);
      };

      iframe.addEventListener('load', handleIframeLoad);
      return () => iframe.removeEventListener('load', handleIframeLoad);
    }
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          ref={iframeRef}
          src="https://iframe.mediadelivery.net/embed/329974/a3a87ad9-b340-47f8-8aa1-f47c8ffa386d?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            iframeLoaded ? 'opacity-30' : 'opacity-100'
          }`}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Background Video"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center p-6 max-w-4xl w-full">
        {/* Logo */}
        <div className="w-auto h-20 mx-auto mb-12 relative flex items-center justify-center">
          <img
            src="./black-bg-formanovo.png"
            alt="Formanovo Design Studio Logo"
            className="h-full w-auto"
          />
        </div>
        
        {/* Headings - Combined into one line */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
          Innovating Personalised Products and Solutions
        </h1>
        
        {/* Launching Soon text */}
        <p className="text-xl mb-12 text-white">Launching Soon</p>
        
        {/* CTA Section */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/917391086524"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              aria-label="Order Now via WhatsApp"
            >
              Order Now
            </a>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8">
          <div className="flex items-center justify-center gap-2">
            <Phone className="text-gray-400 w-6 h-6" />
            <span className="text-gray-300">+91 7391 086 524</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="text-gray-400 w-6 h-6" />
            <span className="text-gray-300">iraj.sheth@formanovodesign.com</span>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="relative z-20 w-full py-4 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
        <div className="container mx-auto text-center text-sm text-gray-400">
          &copy; 2023 Formanovo. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;