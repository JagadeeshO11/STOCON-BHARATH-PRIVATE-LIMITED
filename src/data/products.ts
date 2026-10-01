import type { ProductCategory } from '../types/product'

export const productCategories: ProductCategory[] = [
  {
    id: 'fresh-vegetables',
    title: 'Fresh Vegetables',
    description: 'Export-quality Indian onions, green chillies, lemons, potatoes, tomatoes, ginger, and garlic sourced directly from verified farms across India.',
    image: 'https://res.cloudinary.com/dwmjz9csc/image/upload/v1789838380/b66d7612-89e6-4095-aba2-841d5589b533.png',
    products: ['Red Onion', 'Green Chilli', 'Lemon', 'Potato', 'Tomato', 'Ginger', 'Garlic', 'Seasonal Vegetables']
  },
  {
    id: 'fresh-fruits',
    title: 'Fresh Fruits',
    description: 'Premium Alphonso & Kesar mangoes, Bhagwa pomegranates, seedless grapes, bananas, and seasonal fruits graded and packed to international standards.',
    image: 'https://res.cloudinary.com/dwmjz9csc/image/upload/v1789837773/d6a404c1-aaa2-4d32-8f63-70b006a346db.png',
    products: ['Alphonso Mango', 'Kesar Mango', 'Bhagwa Pomegranate', 'Seedless Grapes', 'Banana', 'Watermelon', 'Muskmelon', 'Seasonal Fruits']
  },
  {
     id: 'spices-herbs-ground',
    title: 'Ground Spices & Herbs',
    description: 'Export-quality Indian ground spices and dried herbs, processed and packed for consistent aroma, colour, purity, and global buyer requirements.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789376285/hero-spices.webp',
    products: ['Turmeric Powder', 'Red Chilli Powder', 'Coriander Powder', 'Cumin Powder', 'Black Pepper Powder', 'Ginger Powder', 'Garlic Powder', 'Kasuri Methi & Dried Herbs']
  },
  {
    id: 'non-perishable',
    title: 'Food & Non-Perishable',
    description: 'Shelf-stable staple food products, Basmati & Non-Basmati rice, wheat flour, turmeric, dry red chillies, and sugar for bulk global shipping.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789389022/hero-dehydrated-products.jpg',
    products: ['Basmati Rice', 'Non-Basmati Rice', 'Wheat Flour (Atta)', 'Turmeric Finger', 'Dry Red Chilli (S17 & Teja)', 'Sugar', 'Raisins', 'Pulses']
  },
  {
    id: 'spices-herbs',
    title: 'Spices & Agri Products',
    description: 'Authentic Indian spices and herbs with strict phytosanitary quality grading and export compliance.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789376285/hero-spices.webp',
    products: ['Turmeric Powder & Finger', 'Stemless Red Chilli', 'Black Pepper', 'Cumin Seeds', 'Coriander Seeds', 'Green Cardamom', 'Cloves']
  },
  {
    id: 'grains-pulses',
    title: 'Grains & Pulses',
    description: 'Staple agricultural commodities sourced according to international buyer specifications and destination requirements.',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789376279/hero-grains.webp',
    products: ['Basmati Rice (1121 & PR11)', 'Non-Basmati Rice (IR64 & Sona Masoori)', 'Toor Dal', 'Chana Dal', 'Moong Dal', 'Urad Dal', 'Millets', 'Yellow Corn Maize']
  },
]
