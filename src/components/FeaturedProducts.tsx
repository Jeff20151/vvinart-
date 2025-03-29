"use client";

import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

// 假數據，實際應用中應該從資料庫或API獲取
const featuredProducts = [
  {
    id: 'art-1',
    title: '彩虹山脈',
    price: 1280,
    imageSrc: '/images/products/art1.jpg',
    category: 'artwork' as const,
  },
  {
    id: 'clothing-1',
    title: '印花亞麻連衣裙',
    price: 880,
    imageSrc: '/images/products/clothing1.jpg',
    category: 'clothing' as const,
  },
  {
    id: 'jewelry-1',
    title: '手工銀質項鍊',
    price: 580,
    imageSrc: '/images/products/jewelry1.jpg',
    category: 'jewelry' as const,
  },
  {
    id: 'art-2',
    title: '水墨夢境',
    price: 1480,
    imageSrc: '/images/products/art2.jpg', 
    category: 'artwork' as const,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="art-container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-mingtc font-bold text-black mb-4"
          >
            精選作品
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-black max-w-2xl mx-auto font-mingtc"
          >
            每一件作品皆由創作者親手製作，帶給您獨一無二的藝術體驗
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 