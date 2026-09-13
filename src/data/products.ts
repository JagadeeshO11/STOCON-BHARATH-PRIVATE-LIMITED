import type { ProductCategory } from '../types/product'

export const productCategories: ProductCategory[] = [
  { id: 'fruits', title: 'Fresh Fruits', description: 'Naturally sourced fruits selected for export requirements.', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=85' },
  { id: 'vegetables', title: 'Fresh Vegetables', description: 'Farm-fresh vegetables for international buyers and supply partners.', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=900&q=85' },
  { id: 'spices', title: 'Indian Spices', description: 'Aromatic Indian spices and food ingredients for global markets.', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85' },
  { id: 'food', title: 'Food Products', description: 'Quality food products supplied according to customer requirements.', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85' },
]