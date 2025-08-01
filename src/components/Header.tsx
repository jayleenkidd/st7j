import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Designs', href: '#templates' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  const serviceItems = [
    { name: 'Web Design', href: '#services', description: 'Custom hotel website design' },
    { name: 'Booking Engine', href: '#services', description: 'Integrated booking system' },
    { name: 'SEO Optimization', href: '#services', description: 'Google rankings improvement' },
    { name: 'Web Redesign', href: '#services', description: 'Modernize existing websites' },
    { name: 'Hotel PMS', href: '#services', description: 'Property management system' },
    { name: 'Analytics', href: '#services', description: 'Performance insights' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ST</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#0A2463] font-poppins">StayTech</h1>
              <p className="text-xs text-gray-600">Hospitality Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 relative">
            {navItems.map((item) => (
              item.name === 'Services' ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a 
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-800 hover:text-[#0A2463] font-semibold transition-colors duration-200 relative group py-2"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  
                  {/* Services Dropdown */}
                  <div className={`absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-200 z-50 ${
                    isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="p-4">
                      <div className="text-sm font-semibold text-[#0A2463] mb-3 px-3">Our Services</div>
                      <div className="grid gap-1">
                        {serviceItems.map((service, index) => (
                          <a
                            key={index}
                            href="#"
                            className="flex flex-col px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsServicesOpen(false);
                              // Navigate to specific service page
                              const serviceEvent = new CustomEvent('navigateToService', {
                                detail: { serviceId: service.name.toLowerCase().replace(' ', '-') }
                              });
                              window.dispatchEvent(serviceEvent);
                            }}
                          >
                            <span className="font-medium text-gray-800 group-hover:text-[#0A2463] transition-colors">
                              {service.name}
                            </span>
                            <span className="text-xs text-gray-500 mt-1">
                              {service.description}
                            </span>
                          </a>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 mt-3 pt-3">
                        <a
                          href="#contact"
                          className="block px-3 py-2 text-center bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] text-white rounded-lg font-medium hover:shadow-md transition-all"
                        >
                          Get Free Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-[#0A2463] font-semibold transition-colors duration-200 relative group py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
              </a>
              )
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+911234567890" className="flex items-center space-x-1 text-sm text-gray-700 hover:text-[#0A2463] transition-colors font-medium">
              <Phone className="w-4 h-4" />
              <span>+91 12345 67890</span>
            </a>
            <a href="mailto:info@staytech.com" className="flex items-center space-x-1 text-sm text-gray-700 hover:text-[#0A2463] transition-colors font-medium">
              <Mail className="w-4 h-4" />
              <span>info@staytech.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-800 hover:text-[#0A2463] hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.name === 'Services' ? (
                  <div key={item.name}>
                    <div className="text-gray-800 hover:text-[#0A2463] font-semibold transition-colors px-4 py-2">
                      {item.name}
                    </div>
                    <div className="ml-4 space-y-2">
                      {serviceItems.map((service, index) => (
                        <a
                          key={index}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsServicesOpen(false);
                            // Scroll to services section and then navigate to specific service
                            const servicesSection = document.getElementById('services');
                            if (servicesSection) {
                              servicesSection.scrollIntoView({ behavior: 'smooth' });
                              // Small delay to allow scroll, then trigger service navigation
                              setTimeout(() => {
                                const serviceEvent = new CustomEvent('navigateToService', {
                                  detail: { serviceId: service.name.toLowerCase().replace(' ', '-') }
                                });
                                window.dispatchEvent(serviceEvent);
                              }, 500);
                            }
                          }}
                          className="block text-gray-600 hover:text-[#0A2463] transition-colors px-4 py-2 text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-[#0A2463] font-semibold transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
                )
              ))}
              <div className="border-t pt-4 px-4 space-y-2">
                <a href="tel:+911234567890" className="flex items-center space-x-2 text-sm text-gray-700 font-medium">
                  <Phone className="w-4 h-4" />
                  <span>+91 12345 67890</span>
                </a>
                <a href="mailto:info@staytech.com" className="flex items-center space-x-2 text-sm text-gray-700 font-medium">
                  <Mail className="w-4 h-4" />
                  <span>info@staytech.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Overlay for dropdown */}
    </header>
  );
};

export default Header;