import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import USPSection from './components/USPSection';
import TemplateShowcase from './components/TemplateShowcase';
import DashboardShowcase from './components/DashboardShowcase';
import ServicesOverview from './components/ServicesOverview';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WebDesignPage from './pages/WebDesignPage';
import BookingEnginePage from './pages/BookingEnginePage';
import SEOPage from './pages/SEOPage';
import WebRedesignPage from './pages/WebRedesignPage';
import AnalyticsPage from './pages/AnalyticsPage';
import HotelPMSPage from './pages/HotelPMSPage';

const HomePage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <Hero />
    <USPSection />
    <TemplateShowcase />
    <DashboardShowcase />
    <ServicesOverview />
    <AboutSection />
    <PricingSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/web-design" element={<WebDesignPage />} />
        <Route path="/services/booking-engine" element={<BookingEnginePage />} />
        <Route path="/services/seo-optimization" element={<SEOPage />} />
        <Route path="/services/web-redesign" element={<WebRedesignPage />} />
        <Route path="/services/analytics" element={<AnalyticsPage />} />
        <Route path="/services/hotel-pms" element={<HotelPMSPage />} />
      </Routes>
    </Router>
  );
}

export default App;