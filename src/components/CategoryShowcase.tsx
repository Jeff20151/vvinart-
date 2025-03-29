"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CategoryProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

const categories: CategoryProps[] = [
  {
    title: '藝術作品',
    description: '獨特的手繪藝術作品，為您的空間增添獨特氛圍',
    link: '/artwork',
    imageSrc: '/images/categories/artwork.jpg'
  },
  {
    title: '精美服飾',
    description: '手工製作的服飾，展現您的個人風格與品味',
    link: '/clothing',
    imageSrc: '/images/categories/clothing.jpg'
  },
  {
    title: '手工珠寶',
    description: '精心設計的珠寶首飾，讓您在任何場合都閃耀動人',
    link: '/jewelry',
    imageSrc: '/images/categories/jewelry.jpg'
  }
];

export default function CategoryShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="art-container">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-playfair font-bold text-gray-800 mb-4"
          >
            探索分類
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            從獨特的藝術作品到精美的服飾和珠寶，發現適合您的藝術品
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="art-card group"
            >
              <Link href={category.link}>
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={category.imageSrc}
                    alt={category.title}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-25 transition-opacity duration-500 group-hover:bg-opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-playfair font-bold">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{category.description}</p>
                  <p className="mt-4 text-accent font-medium group-hover:text-accent-dark transition-colors">
                    瀏覽分類 →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 