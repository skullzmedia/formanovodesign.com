"use client"
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
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
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
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
      <div className="relative z-20 text-center p-6 max-w-4xl">
        {/* Logo */}
        <div className="w-40 h-40 mx-auto mb-12 relative flex items-center justify-center">
          <img
            src="https://formanovodesign.b-cdn.net/formanovo.png"
            alt="Formanovo Logo"
            className={`max-w-full max-h-full object-contain transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
          />
        </div>
        
        {/* Headings */}
        <h1 className="text-5xl font-bold mb-4 text-white">
          Innovating Personalised
        </h1>
        <h2 className="text-3xl mb-12 text-gray-300">
          Products and Solutions
        </h2>
        
        {/* CTA Section */}
        <div className="mb-16">
          <p className="text-xl mb-6">Taking Orders</p>
          <a
            href="https://wa.me/917391086524"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105"
            aria-label="Order Now via WhatsApp"
          >
            Order Now
          </a>
        </div>
        
        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8">
          <div className="flex items-center justify-center gap-2">
            <Phone className="text-gray-400 w-6 h-6" />
            <a 
              href="tel:+917391086524"
              className="hover:text-gray-300 transition-colors"
            >
              +91 7391 086 524
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="text-gray-400 w-6 h-6" />
            <a 
              href="mailto:iraj.shet@formanovodesign.com"
              className="break-all hover:text-gray-300 transition-colors"
            >
              iraj.shet@formanovodesign.com
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917391086524"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-30"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
      </a>
    </div>
  );
};

export default LandingPage;