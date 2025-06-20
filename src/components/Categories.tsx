import React from 'react';
import { ArrowRight, Leaf, Sun, Droplets, Flower } from 'lucide-react';
import { PageType } from '../types';

interface CategoriesProps {
  onNavigate: (page: PageType) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onNavigate }) => {
  const categories = [
    {
      id: 'indoor',
      name: 'Indoor Plants',
      description: 'Perfect for brightening up your living spaces',
      image: 'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Leaf,
      count: 45,
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'outdoor',
      name: 'Outdoor Plants',
      description: 'Hardy plants for gardens and patios',
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Sun,
      count: 32,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'succulent',
      name: 'Succulents',
      description: 'Low-maintenance desert beauties',
      image: 'https://images.pexels.com/photos/6208159/pexels-photo-6208159.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Droplets,
      count: 28,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'flowering',
      name: 'Flowering Plants',
      description: 'Colorful blooms to brighten your day',
      image: 'https://images.pexels.com/photos/7084308/pexels-photo-7084308.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Flower,
      count: 24,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'tropical',
      name: 'Tropical Plants',
      description: 'Exotic plants for a jungle vibe',
      image: 'https://images.pexels.com/photos/7084302/pexels-photo-7084302.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Leaf,
      count: 18,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Plant Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse collection of plants, carefully categorized to help you find the perfect green companions for any space and lifestyle.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => onNavigate('plants')}
              >
                {/* Background Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300">
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${category.color}`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm font-medium opacity-80">{category.count} varieties</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-300 transition-colors duration-200">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-200 text-sm mb-4 opacity-90">
                      {category.description}
                    </p>

                    <div className="flex items-center text-emerald-300 font-medium group-hover:translate-x-2 transition-transform duration-200">
                      <span className="text-sm">Explore Collection</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 rounded-3xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => onNavigate('plants')}
            className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>View All Plants</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;