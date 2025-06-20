import React from 'react';
import ProductCard from './ProductCard';
import { Plant } from '../types';

interface ProductGridProps {
  plants: Plant[];
  onAddToCart: (plant: Plant) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ plants, onAddToCart }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Plant Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect plants for your space. Each one carefully selected for quality and beauty.
          </p>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600 text-center">
            Showing <span className="font-semibold">{plants.length}</span> beautiful plants
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <div key={plant.id} className="animate-fade-in-up">
              <ProductCard plant={plant} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;