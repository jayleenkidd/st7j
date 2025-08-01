import React from 'react';
import { ArrowLeft, Calendar, CreditCard, Smartphone, Globe, Shield, TrendingUp, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BookingEnginePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5FBDB0] to-[#FFD700] text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-all duration-200 hover:translate-x-1"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
              <Calendar className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-poppins text-[#0A2463]">Booking Engine Service</h1>
              <p className="text-xl text-[#0A2463]/80">Integrated booking system for maximum direct reservations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#0A2463] mb-6 font-poppins">
              Maximize Direct Bookings with Our Booking Engine
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Stop paying hefty commissions to OTAs! Our integrated booking engine is designed 
              specifically for hotels to capture direct bookings and increase revenue. With 
              real-time availability, secure payments, and mobile optimization, your guests 
              can book directly from your website with confidence.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our booking engine seamlessly integrates with your hotel website and existing 
              systems, providing a smooth booking experience that converts more visitors 
              into confirmed guests.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-blue-800 mb-3">What's Included:</h3>
              <div className="space-y-2">
                {[
                  'Complete booking engine integration',
                  'Real-time availability system',
                  'Secure payment processing',
                  'Mobile-responsive booking flow',
                  'Guest management system',
                  'Automated confirmations'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <img
              src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Booking Engine Interface"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            Powerful Booking Engine Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calendar className="w-6 h-6" />,
                title: 'Real-Time Availability',
                description: 'Instant room availability updates across all channels to prevent overbooking.'
              },
              {
                icon: <CreditCard className="w-6 h-6" />,
                title: 'Secure Payment Processing',
                description: 'PCI-compliant payment gateway supporting multiple payment methods and currencies.'
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: 'Mobile-Optimized Booking',
                description: 'Seamless booking experience across all devices with mobile-first design.'
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Commission-Free Bookings',
                description: 'Keep 100% of your booking revenue without paying OTA commissions.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5FBDB0] to-[#FFD700] rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0A2463] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-r from-[#5FBDB0] to-[#FFD700] rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4 font-poppins text-[#0A2463]">Ready to Increase Direct Bookings?</h2>
          <p className="text-xl text-[#0A2463]/80 mb-6">
            Get your integrated booking engine and start saving on commissions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0A2463] mb-2">₹36,000</div>
              <div className="text-[#0A2463]/80">Website + Booking Engine</div>
              <div className="text-sm text-[#0A2463]/60">Or ₹1,599/month</div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-[#0A2463] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0A2463]/90 transition-colors">
                Get Started Today
              </button>
              <button className="bg-white/20 backdrop-blur-md text-[#0A2463] px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-[#0A2463]/20">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookingEnginePage;