"use client";

import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  imageSrc: string;
  category: 'artwork' | 'clothing' | 'jewelry';
}

export default function ProductCard({ id, title, price, imageSrc, category }: ProductCardProps) {
  const categoryPath = category === 'artwork' ? 'artwork' : category === 'clothing' ? 'clothing' : 'jewelry';
  
  return (
    <div className="group bg-white hover:shadow-md transition-shadow">
      <Link href={`/${categoryPath}/${id}`}>
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-mingtc text-lg font-bold text-black mb-1">{title}</h3>
          <p className="text-accent font-mingtc">NT$ {price.toLocaleString()}</p>
        </div>
      </Link>
    </div>
  );
} 