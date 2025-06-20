import React from 'react';
import { Heart, Award, Users, Leaf, Shield, Truck, Clock, Star } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Plants',
      description: 'We believe every space deserves the beauty and benefits of living plants.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every plant is carefully selected and nurtured to ensure the highest quality.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building a community of plant lovers who support and learn from each other.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and sustainable growing methods.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Customers', icon: Users },
    { number: '500+', label: 'Plant Varieties', icon: Leaf },
    { number: '99%', label: 'Survival Rate', icon: Shield },
    { number: '24/7', label: 'Expert Support', icon: Clock }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Plant Expert',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: '15+ years in horticulture, passionate about making plant care accessible to everyone.'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Cultivation',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Expert in sustainable growing practices with a focus on plant health and quality.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Customer Care Lead',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Dedicated to helping customers succeed with their plant journey through expert guidance.'
    }
  ];

  return (
    <section className="py-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                About
                <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Plantopia
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Founded in 2020, Plantopia began as a small passion project to share the joy of plants with the world. Today, we're a thriving community of plant enthusiasts dedicated to bringing nature into every home.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                      <Star className="h-4 w-4 text-white fill-current" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Plantopia greenhouse"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-emerald-600">5+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-200">
                    <Icon className="h-8 w-8 text-emerald-600 mx-auto" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our core values and commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${value.color} mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate experts behind Plantopia, dedicated to helping you succeed with plants.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed mb-8 text-emerald-100">
            To make the joy and benefits of plants accessible to everyone, regardless of experience level. 
            We believe that every person deserves to experience the transformative power of nature in their daily life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="h-12 w-12 mx-auto mb-4 text-emerald-200" />
              <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-emerald-100 text-sm">Every plant comes with our 30-day health guarantee</p>
            </div>
            <div>
              <Truck className="h-12 w-12 mx-auto mb-4 text-emerald-200" />
              <h3 className="text-lg font-semibold mb-2">Safe Delivery</h3>
              <p className="text-emerald-100 text-sm">Carefully packaged and shipped with love</p>
            </div>
            <div>
              <Heart className="h-12 w-12 mx-auto mb-4 text-emerald-200" />
              <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
              <p className="text-emerald-100 text-sm">Expert care advice whenever you need it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;