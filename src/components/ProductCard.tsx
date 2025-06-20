import React from 'react';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import { Plant } from '../types';

interface ProductCardProps {
  plant: Plant;
  onAddToCart: (plant: Plant) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ plant, onAddToCart }) => {
  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  const lightColors = {
    low: 'bg-gray-100 text-gray-700',
    medium: 'bg-orange-100 text-orange-700',
    bright: 'bg-yellow-100 text-yellow-700'
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
          <div className="absolute top-4 right-4 flex flex-col space-y-2 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 delay-100">
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200">
              <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
            </button>
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200">
              <Eye className="h-4 w-4 text-gray-600 hover:text-emerald-600" />
            </button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {plant.featured && (
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg animate-pulse">
              Featured
            </span>
          )}
          {plant.originalPrice && (
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              Sale
            </span>
          )}
          {!plant.inStock && (
            <span className="bg-gray-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              Out of Stock
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category & Difficulty */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {plant.category}
          </span>
          <div className="flex items-center space-x-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColors[plant.difficulty]}`}>
              {plant.difficulty}
            </span>
          </div>
        </div>

        {/* Plant Name */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
            {plant.name}
          </h3>
          <p className="text-sm text-gray-500 italic mt-1">{plant.scientificName}</p>
        </div>

        {/* Care Info */}
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <span className="text-gray-600">Light: {plant.light}</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <span className="text-gray-600">Water: {plant.water}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1">
          {plant.features.slice(0, 2).map((feature, index) => (
            <span 
              key={index}
              className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full border border-emerald-200"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">${plant.price}</span>
              {plant.originalPrice && (
                <span className="text-sm text-gray-500 line-through">${plant.originalPrice}</span>
              )}
            </div>
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs text-gray-500">(4.8)</span>
            </div>
          </div>

          <button
            onClick={() => onAddToCart(plant)}
            disabled={!plant.inStock}
            className={`
              p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group/btn
              ${plant.inStock 
                ? 'bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white hover:shadow-xl' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            <ShoppingCart className="h-5 w-5 group-hover/btn:animate-bounce" />
          </button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default ProductCard;