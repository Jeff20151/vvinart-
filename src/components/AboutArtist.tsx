"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutArtist() {
  return (
    <section className="py-24 bg-background">
      <div className="art-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] overflow-hidden"
          >
            <Image
              src="/images/artist.jpg"
              alt="藝術家照片"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-mingtc font-bold text-black mb-6">
              關於<span className="text-accent">藝術家</span>
            </h2>
            <p className="text-black leading-relaxed font-mingtc">
              嗨，我是Victoria Spicer，一位充滿熱情的藝術創作者。我的作品融合了東方與西方的美學元素，
              希望通過我的藝術作品、服裝設計和珠寶創作，為人們帶來獨特的美感體驗。
            </p>
            <p className="text-black leading-relaxed font-mingtc">
              每一件作品都灌注了我對生活的熱愛和對藝術的追求。我相信藝術不僅能美化環境，
              更能觸動人心，傳遞溫暖與力量。
            </p>
            <p className="text-black leading-relaxed font-mingtc">
              通過藝術，我希望能夠幫助更多人找到內心的平靜與喜悅，讓美麗的事物為生活增添色彩。
            </p>
            <div className="pt-4">
              <Link href="/about" className="art-button">
                了解更多
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 