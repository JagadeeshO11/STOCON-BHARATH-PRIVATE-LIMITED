import type { ProductCategory } from '../types/product'

export const productCategories: ProductCategory[] = [
  {
    id: 'spices-herbs',
    title: 'Spices & Herbs',
    description: 'Aromatic Indian spices and carefully selected herbs for global markets.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789376285/hero-spices.webp',
    products: ['Turmeric', 'Red Chilli', 'Black Pepper', 'Cumin', 'Coriander', 'Cardamom', 'Cloves', 'Ginger & Garlic']
  },
  {
    id: 'grains-pulses',
    title: 'Grains & Pulses',
    description: 'Quality grains, pulses and staples sourced for international supply.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789376279/hero-grains.webp',
    products: ['Basmati Rice', 'Non-Basmati Rice', 'Toor Dal', 'Chana Dal', 'Moong Dal', 'Urad Dal', 'Millets', 'Maize']
  },
  {
    id: 'oil-seeds',
    title: 'Oil Seeds',
    description: 'Premium oil seeds selected to meet export and buyer requirements.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789376292/hero-oil-seeds.jpg',
    products: ['Sesame Seeds', 'Groundnut', 'Sunflower Seeds', 'Mustard Seeds', 'Soybean', 'Castor Seeds', 'Flax Seeds', 'Other Seeds on Requirement']
  },
  {
    id: 'fruits-vegetables',
    title: 'Fruits & Vegetables',
    description: 'Fresh produce sourced with care for dependable global distribution.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789389015/hero-fresh-fruits-vegetables.png',
    products: ['Mango', 'Pomegranate', 'Banana', 'Grapes', 'Onion', 'Potato', 'Tomato', 'Seasonal Produce']
  },
  {
    id: 'dehydrated-products',
    title: 'Dehydrated Products',
    description: 'Convenient, quality dehydrated ingredients and food products.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789389022/hero-dehydrated-products.jpg',
    products: ['Dehydrated Onion', 'Dehydrated Garlic', 'Dehydrated Vegetables', 'Fruit Powders', 'Dried Herbs', 'Dried Chilli', 'Dried Mango', 'Custom Requirements']
  },
  {
    id: 'processed-foods',
    title: 'Processed Foods',
    description: 'Export-ready processed food products for international partners.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789389031/hero-processed-foods.jpg',
    products: ['Pickles', 'Sauces & Chutneys', 'Ready-to-Cook Foods', 'Snacks', 'Papad', 'Traditional Sweets', 'Packaged Foods', 'Requirement-Based Products']
  },
]
