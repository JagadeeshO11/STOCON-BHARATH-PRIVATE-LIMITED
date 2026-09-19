import type { ProductCategory } from '../types/product'

export const productCategories: ProductCategory[] = [
  {
    id: 'fresh-vegetables',
    title: 'Fresh Vegetables',
    description: 'Fresh Indian vegetables selected for quality, consistency and export-oriented supply requirements.',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=1200&q=85',
    products: ['Green Chilli', 'Lemon', 'Onion', 'Potato', 'Tomato', 'Ginger', 'Garlic', 'Seasonal Vegetables']
  },
  {
    id: 'fresh-fruits',
    title: 'Fresh Fruits',
    description: 'Fresh fruits sourced for dependable supply, careful handling and international market requirements.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789389015/hero-fresh-fruits-vegetables.png',
    products: ['Pomegranate', 'Mango', 'Banana', 'Grapes', 'Watermelon', 'Muskmelon', 'Seasonal Fruits', 'Requirement-Based Fruits']
  },
  {
    id: 'non-perishable',
    title: 'Food & Non-Perishable',
    description: 'Shelf-stable food products prepared for bulk sourcing and export-focused requirements.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789389022/hero-dehydrated-products.jpg',
    products: ['Rice', 'Wheat Flour', 'Turmeric', 'Dry Red Chilli', 'Sugar', 'Raisins', 'Pulses', 'Other Food Products']
  },
  {
    id: 'imported-fruits',
    title: 'Imported Fruits',
    description: 'Premium imported fruit options selected to meet changing buyer and Indian market requirements.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789389015/hero-fresh-fruits-vegetables.png',
    products: ['Apple', 'Kiwi', 'Dragon Fruit', 'Pear', 'Beauty Pear', 'Mandarin Orange', 'Orange', 'Red Globe Grapes']
  },
  {
    id: 'spices-herbs',
    title: 'Spices & Herbs',
    description: 'Indian spices and herbs available for requirement-based sourcing and export discussions.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789376285/hero-spices.webp',
    products: ['Turmeric', 'Red Chilli', 'Black Pepper', 'Cumin', 'Coriander', 'Cardamom', 'Cloves', 'Ginger & Garlic']
  },
  {
    id: 'grains-pulses',
    title: 'Grains & Pulses',
    description: 'Staple food products sourced according to buyer specifications, quantity and destination requirements.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789376279/hero-grains.webp',
    products: ['Basmati Rice', 'Non-Basmati Rice', 'Toor Dal', 'Chana Dal', 'Moong Dal', 'Urad Dal', 'Millets', 'Maize']
  },
]
