import React from 'react';
import { Clock, User, ArrowRight, BookOpen, Lightbulb, Droplets, Scissors } from 'lucide-react';
import { careGuides } from '../data/careGuides';

const CareGuide: React.FC = () => {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  const quickTips = [
    {
      icon: Lightbulb,
      title: 'Light Requirements',
      tip: 'Most houseplants prefer bright, indirect light. Avoid direct sunlight which can scorch leaves.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Droplets,
      title: 'Watering Wisdom',
      tip: 'Check soil moisture before watering. Most plants prefer to dry out slightly between waterings.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Scissors,
      title: 'Pruning Tips',
      tip: 'Regular pruning encourages growth. Remove dead or yellowing leaves to keep plants healthy.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
            <BookOpen className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">Expert Knowledge</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Plant Care Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the art of plant care with our comprehensive guides. From beginner basics to advanced techniques, we've got you covered.
          </p>
        </div>

        {/* Quick Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {quickTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${tip.color} mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tip.tip}</p>
              </div>
            );
          })}
        </div>

        {/* Care Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {careGuides.map((guide) => (
            <article
              key={guide.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {guide.category}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{guide.readTime} min read</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[guide.difficulty]}`}>
                      {guide.difficulty}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200">
                  {guide.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {guide.excerpt}
                </p>

                <div className="flex items-center text-emerald-600 font-medium group-hover:translate-x-2 transition-transform duration-200">
                  <span>Read Guide</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Get Weekly Plant Care Tips</h3>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of plant lovers receiving expert care advice, seasonal tips, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
            />
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareGuide;