import React from 'react';
import { Users, Award, Clock, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: '200+', label: 'Hotels Served' },
    { icon: <Award className="w-6 h-6" />, number: '5.0', label: 'Average Rating' },
    { icon: <Clock className="w-6 h-6" />, number: '7', label: 'Days Average Delivery' },
    { icon: <MapPin className="w-6 h-6" />, number: '15+', label: 'Countries Served' }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: '15+ years in hospitality technology'
    },
    {
      name: 'Priya Sharma',
      position: 'Lead Designer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Award-winning UI/UX specialist'
    },
    {
      name: 'Amit Patel',
      position: 'Technical Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Full-stack development expert'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
            About StayTech
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering hotels with technology-driven solutions that drive bookings and enhance guest experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4 font-poppins">
                Why StayTech is Different
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At StayTech, we stand apart from typical IT companies—we are a specialized hotel website design 
                agency with a deep understanding of what it takes to drive direct room bookings online. 
                Recognized among the world's top 50 digital marketing agencies for hotels, StayTech's reputation 
                for excellence speaks for itself.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our expertise goes beyond building attractive sites; we know how to create high-converting 
                websites that turn visitors into guests. With hundreds of successful hotel websites launched 
                for our clients, we deliver every project with consistent quality and punctuality.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#0A2463] font-poppins">
                Our Commitment to Excellence
              </h4>
              {[
                'Dedicated project manager for every website from start to finish',
                'Top 50 digital marketing agency for hotels worldwide',
                'Hundreds of successful hotel websites delivered',
                'Deep understanding of hotel booking conversion optimization',
                'Consistent quality and punctuality in every project delivery'
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team working"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] rounded-2xl p-6 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm">Happy Hotels</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] text-white rounded-xl mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-[#0A2463] mb-2 font-poppins">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] font-poppins mb-4">
              Meet Our Team
            </h3>
            <p className="text-lg text-gray-600">
              Experienced professionals dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-[#0A2463]/20 to-[#5FBDB0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-[#0A2463] mb-2 font-poppins">
                  {member.name}
                </h4>
                <p className="text-[#5FBDB0] font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mt-20 bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white text-center">
          <MapPin className="w-8 h-8 mx-auto mb-4 text-[#FFD700]" />
          <h3 className="text-2xl font-bold mb-4 font-poppins">
            Building Long-Term Relationships
          </h3>
          <p className="text-lg text-blue-100 mb-2">
            At StayTech, your success is at the heart of everything we do. Many of our clients have 
            partnered with us for years—testament to our commitment to delivering outstanding results.
          </p>
          <p className="text-blue-100">
            We believe in flexibility and trust, with no long-term contracts or hidden commitments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;