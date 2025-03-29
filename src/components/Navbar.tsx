"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-none py-6">
      <div className="art-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/" className="text-2xl font-mingtc font-bold text-black tracking-wider">
              <span className="block text-4xl">Victoria</span>
              <span className="block text-4xl">Spicer</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 flex-1 justify-center">
            <Link href="/artwork" className="font-mingtc text-black hover:text-accent transition-colors">
              藝術作品
            </Link>
            <Link href="/about" className="font-mingtc text-black hover:text-accent transition-colors">
              關於我
            </Link>
            <Link href="/contact" className="font-mingtc text-black hover:text-accent transition-colors">
              聯絡方式
            </Link>
          </nav>

          {/* Cart and User Icons */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <Link href="/cart" className="text-black hover:text-accent">
              <FiShoppingCart size={20} />
            </Link>
            <Link href="/account" className="text-black hover:text-accent">
              <FiUser size={20} />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-black hover:text-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3">
            <Link href="/artwork" 
              className="block font-mingtc text-black hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              藝術作品
            </Link>
            <Link href="/about" 
              className="block font-mingtc text-black hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              關於我
            </Link>
            <Link href="/contact" 
              className="block font-mingtc text-black hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              聯絡方式
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
} 