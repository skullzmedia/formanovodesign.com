"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function LandingPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleIframeLoad = () => {
      setIframeLoaded(true)
    }

    if (iframeRef.current) {
      iframeRef.current.addEventListener('load', handleIframeLoad)
    }

    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', handleIframeLoad)
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          ref={iframeRef}
          src="https://iframe.mediadelivery.net/embed/329974/a3a87ad9-b340-47f8-8aa1-f47c8ffa386d?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
          className={`absolute top-0 left-0 w-full h-full ${
            iframeLoaded ? 'opacity-30' : 'opacity-0'
          } transition-opacity duration-1000`}
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center p-6 max-w-4xl">
        <Image
          src="https://formanovodesign.b-cdn.net/formanovo.png"
          alt="Formanovo Logo"
          width={150}
          height={150}
          className="mx-auto mb-12"
        />
        
        <h1 className="text-5xl font-bold mb-4 text-white">
          Innovating Personalised
        </h1>
        <h2 className="text-3xl mb-12 text-gray-300">Products and Solutions</h2>
        
        <div className="mb-16">
          <p className="text-xl mb-6">Taking Orders</p>
          <a
            href="https://wa.me/917391086524"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition duration-300 transform hover:scale-105"
          >
            Order Now
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <div className="flex items-center justify-center space-x-2">
            <Phone size={24} className="text-gray-400" />
            <span>+91 7391 086 524</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Mail size={24} className="text-gray-400" />
            <span className="break-all">iraj.shet@formanovodesign.com</span>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/917391086524"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-110 z-30"
      >
        <MessageCircle size={24} className="sm:w-8 sm:h-8" />
      </a>
    </div>
  )
}