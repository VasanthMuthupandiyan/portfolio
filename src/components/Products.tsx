import React, { useState } from 'react';
import { ShoppingCart, Star, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'equipment', name: 'Exercise Equipment' },
    { id: 'supports', name: 'Supports & Braces' },
    { id: 'therapy', name: 'Therapy Tools' },
    { id: 'wellness', name: 'Wellness Products' }
  ];

  const products = [
    {
      id: 1,
      name: 'Resistance Bands Set',
      category: 'equipment',
      description: 'Professional-grade resistance bands for strength training and rehabilitation',
      price: '$34.99',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true
    },
    {
      id: 2,
      name: 'Knee Support Brace',
      category: 'supports',
      description: 'Adjustable knee brace for injury prevention and recovery support',
      price: '$45.99',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true
    },
    {
      id: 3,
      name: 'Foam Roller',
      category: 'therapy',
      description: 'High-density foam roller for muscle recovery and myofascial release',
      price: '$28.99',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true
    },
    {
      id: 4,
      name: 'Balance Board',
      category: 'equipment',
      description: 'Wooden balance board for proprioception training and core strengthening',
      price: '$52.99',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true
    },
    {
      id: 5,
      name: 'Hot/Cold Therapy Pack',
      category: 'wellness',
      description: 'Reusable gel pack for hot and cold therapy treatments',
      price: '$19.99',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/6975468/pexels-photo-6975468.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true
    },
    {
      id: 6,
      name: 'Posture Corrector',
      category: 'supports',
      description: 'Ergonomic posture support for back pain relief and spinal alignment',
      price: '$39.99',
      rating: 4.4,
      image: 'https://images.pexels.com/photos/6975473/pexels-photo-6975473.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: false
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Therapy Equipment & Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional-grade equipment and therapeutic products to support your recovery and maintain your progress at home.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Out of Stock
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>
                  <span className="text-2xl font-bold text-sky-600">{product.price}</span>
                </div>
                
                <button
                  disabled={!product.inStock}
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 ${
                    product.inStock
                      ? 'bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-sky-50 to-emerald-50 p-8 rounded-2xl border border-gray-100"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Equipment Recommendations?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our therapists can recommend the best equipment for your specific condition and recovery goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Get Equipment Consultation
              </button>
              <button className="border-2 border-gray-300 hover:border-sky-600 text-gray-700 hover:text-sky-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                View Exercise Programs
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;