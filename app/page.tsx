// app/page.tsx
"use client"; // Importante! Adicione esta linha no topo.

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { PhotoBooth } from '../components/PhotoBooth';
import { Gallery } from '../components/Gallery';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { WhatsAppFloat } from '../components/WhatsAppFloat';

export default function Home() { // Renomeado de App para Home
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PhotoBooth />
        <Gallery />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}