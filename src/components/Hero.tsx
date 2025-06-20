import React from 'react';
import { ArrowRight, Sparkles, Shield, Truck, Award } from 'lucide-react';
import { PageType } from '../types';

interface HeroProps {
  onNavigate: (page: PageType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-emerald-400 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-green-400 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-lime-400 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm border border-emerald-200 rounded-full px-4 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Premium Plant Collection</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Space with
                <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">
                  Living Beauty
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover our curated collection of premium plants, expert care guides, and everything you need to create your perfect green sanctuary.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('plants')}
                className="group bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Shop Plants</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button 
                onClick={() => onNavigate('care-guide')}
                className="group bg-white/80 backdrop-blur-sm text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-emerald-200 hover:border-emerald-300 hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                Care Guide
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                  <Shield className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Quality Guarantee</div>
                  <div className="text-xs text-gray-600">30-day promise</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                  <Truck className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Free Shipping</div>
                  <div className="text-xs text-gray-600">Orders over $50</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                  <Award className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Expert Care</div>
                  <div className="text-xs text-gray-600">24/7 support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:justify-self-end">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Beautiful indoor plants collection"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-emerald-100">
                <div className="text-2xl font-bold text-emerald-600">500+</div>
                <div className="text-xs text-gray-600">Plant Varieties</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-emerald-100">
                <div className="text-xs text-gray-600 mb-1">Expert Care</div>
                <div className="text-sm font-semibold text-emerald-600">Included Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;