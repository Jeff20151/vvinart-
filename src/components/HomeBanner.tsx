"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeBanner() {
  return (
    <div className="relative overflow-hidden bg-background min-h-screen flex items-center">
      <div className="art-container py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-5xl md:text-7xl font-mingtc font-bold text-black leading-tight mb-8">
              <span className="block">Victoria</span>
              <span className="block mt-2">Spicer</span>
            </h1>
            <p className="text-lg text-black font-mingtc mb-8">
              精心挑選的藝術品、手工服飾與珠寶，每一件都訴說著一個故事，展現著藝術家的熱情與創意。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/artwork" className="art-button">
                探索藝術品
              </Link>
              <Link href="/about" className="border border-black px-6 py-2 transition-all hover:border-accent hover:text-accent">
                了解更多
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] order-1 md:order-2"
          >
            <Image
              src="/images/banner.jpg"
              alt="藝術風格作品展示"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
      
      {/* 左側垂直文字 */}
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-32">
        <div className="h-full flex items-center justify-center">
          <div className="transform rotate-90 origin-center whitespace-nowrap">
            <span className="text-6xl font-mingtc font-bold tracking-widest">SPICER</span>
          </div>
        </div>
      </div>
    </div>
  );
} 