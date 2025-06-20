import React from 'react';
import { Search, ShoppingBag, Heart, Menu, Leaf } from 'lucide-react';
import { PageType } from '../types';

interface HeaderProps {
  cartItemCount: number;
  onCartToggle: () => void;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartToggle, currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home' as PageType, label: 'Home' },
    { id: 'plants' as PageType, label: 'Plants' },
    { id: 'categories' as PageType, label: 'Categories' },
    { id: 'care-guide' as PageType, label: 'Care Guide' },
    { id: 'about' as PageType, label: 'About' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 group cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg group-hover:from-emerald-600 group-hover:to-green-700 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-105">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              Plantopia
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium relative group ${
                  currentPage === item.id ? 'text-emerald-600' : ''
                }`}
              >
                {item.label}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${
                  currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-md mx-8 flex-1">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search plants..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-200 hover:scale-110">
              <Heart className="h-5 w-5" />
            </button>
            
            <button 
              onClick={onCartToggle}
              className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-200 hover:scale-110 group"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold animate-pulse group-hover:animate-bounce">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button className="md:hidden p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-200">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;