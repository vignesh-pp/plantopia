import React from 'react';
import Hero from './Hero';
import Categories from './Categories';
import ProductGrid from './ProductGrid';
import { PageType, Plant } from '../types';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  plants: Plant[];
  onAddToCart: (plant: Plant) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, plants, onAddToCart }) => {
  // Show only featured plants on home page
  const featuredPlants = plants.filter(plant => plant.featured);

  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <Categories onNavigate={onNavigate} />
      
      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured Plants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our hand-picked selection of the most popular and beautiful plants, perfect for any home or office.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredPlants.map((plant) => (
              <div key={plant.id} className="animate-fade-in-up">
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg animate-pulse">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                        {plant.name}
                      </h3>
                      <p className="text-sm text-gray-500 italic">{plant.scientificName}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-gray-900">${plant.price}</span>
                          {plant.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">${plant.originalPrice}</span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => onAddToCart(plant)}
                        className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('plants')}
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Plants
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;