import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickActionBar } from './components/QuickActionBar';
import { AboutSection } from './components/AboutSection';
import { CorePillars } from './components/CorePillars';
import { MenuSection } from './components/MenuSection';
import { CakesSection } from './components/CakesSection';
import { PartyHallSection } from './components/PartyHallSection';
import { CelebrationJourney } from './components/CelebrationJourney';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OrderOnlineSection } from './components/OrderOnlineSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EnquiryModal } from './components/EnquiryModal';
import { MenuItem } from './data/restaurantData';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('General Enquiry');
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const handleOpenEnquiry = (type: string = 'General Enquiry') => {
    setSelectedMenuItem(null);
    setModalType(type);
    setModalOpen(true);
  };

  const handleSelectItem = (item: MenuItem) => {
    setSelectedMenuItem(item);
    setModalType('Food / Item Order');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#f4ede4] flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* Quick Action Bar immediately below hero */}
        <QuickActionBar onOpenEnquiry={handleOpenEnquiry} />

        {/* Core 3 Pillars */}
        <CorePillars onOpenEnquiry={handleOpenEnquiry} />

        {/* About Section */}
        <AboutSection />

        {/* Interactive Menu Showcase */}
        <MenuSection onSelectItem={handleSelectItem} />

        {/* Cakes & Celebration Bakery Section */}
        <CakesSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Party Hall Section */}
        <PartyHallSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Celebration 4-Step Journey */}
        <CelebrationJourney />

        {/* Why People Come Here */}
        <WhyChooseUs />

        {/* Gallery Section with Lightbox */}
        <GallerySection />

        {/* Customer Reviews & Google Rating */}
        <ReviewsSection />

        {/* Order Online CTA */}
        <OrderOnlineSection />

        {/* Location & Maps Section */}
        <LocationSection />

        {/* Planning Something Special / Contact Form */}
        <ContactSection initialEnquiryType="General Enquiry" />
      </main>

      {/* Footer with KEAGROW concept disclaimer */}
      <Footer />

      {/* Mobile Ergonomic Bottom Action Bar */}
      <MobileBottomBar onOpenMenu={() => {
        const menuEl = document.getElementById('menu');
        menuEl?.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Global Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
        selectedItem={selectedMenuItem}
      />
    </div>
  );
}
