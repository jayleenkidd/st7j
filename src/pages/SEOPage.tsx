import React from 'react';
import { ArrowLeft, TrendingUp, Search, MapPin, BarChart3, Globe, Target, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SEOPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FFD700] to-[#0A2463] text-white py-8 mt-20">
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
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-poppins">SEO Optimization Service</h1>
              <p className="text-xl text-blue-100">Dominate Google search results for your hotel</p>
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
              Get Found by More Guests on Google
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              When travelers search for hotels in your area, where does your property appear? 
              Our specialized hotel SEO services ensure your hotel ranks at the top of Google 
              search results, driving more organic traffic and direct bookings.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand the unique SEO challenges hotels face and use proven strategies 
              to improve your visibility for both generic and location-specific searches. 
              From "hotels in [your city]" to "luxury resort near [landmark]" - we'll help 
              you capture every potential guest.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-bold text-yellow-800 mb-3">SEO Package Includes:</h3>
              <div className="space-y-2">
                {[
                  'Complete SEO audit and strategy',
                  'Keyword research and optimization',
                  'Local SEO and Google My Business',
                  'Monthly performance reports',
                  'Content optimization',
                  'Technical SEO improvements'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-yellow-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <img
              src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="SEO Analytics Dashboard"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            Our SEO Optimization Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="w-6 h-6" />,
                title: 'Keyword Research & Strategy',
                description: 'Identify high-converting keywords that your potential guests are searching for.'
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'Local SEO Optimization',
                description: 'Dominate local search results and Google My Business for your location.'
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: 'Performance Tracking',
                description: 'Monitor rankings, traffic, and conversions with detailed monthly reports.'
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: 'Technical SEO',
                description: 'Optimize site speed, mobile responsiveness, and search engine crawlability.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#0A2463] rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0A2463] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-r from-[#FFD700] to-[#0A2463] rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Ready to Dominate Google?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Start ranking higher and getting more organic bookings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Included in all packages</div>
              <div className="text-blue-100">SEO optimization built-in</div>
              <div className="text-sm text-blue-200">Advanced SEO available</div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-white text-[#0A2463] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get SEO Audit
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                View SEO Package
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SEOPage;