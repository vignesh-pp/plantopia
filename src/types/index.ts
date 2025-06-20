export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'indoor' | 'outdoor' | 'succulent' | 'flowering' | 'tropical';
  difficulty: 'easy' | 'medium' | 'hard';
  light: 'low' | 'medium' | 'bright';
  water: 'low' | 'medium' | 'high';
  description: string;
  features: string[];
  inStock: boolean;
  featured: boolean;
}

export interface CartItem {
  plant: Plant;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  total: number;
}

export interface CareGuide {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readTime: number;
}

export type PageType = 'home' | 'plants' | 'categories' | 'care-guide' | 'about';