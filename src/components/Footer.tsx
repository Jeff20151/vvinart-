"use client";

import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="art-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-mingtc font-bold text-black tracking-wider">
              Victoria <span className="block">Spicer</span>
            </Link>
            <p className="text-gray-600 text-sm mt-4 font-mingtc">
              展示與銷售獨特藝術作品、手工服裝與珠寶的個人藝術電商網站
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-mingtc font-semibold text-black mb-4">快速連結</h3>
            <ul className="space-y-2 font-mingtc">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-accent transition-colors">
                  關於我
                </Link>
              </li>
              <li>
                <Link href="/artwork" className="text-gray-600 hover:text-accent transition-colors">
                  藝術作品
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-accent transition-colors">
                  聯絡方式
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="text-right">
            <h3 className="font-mingtc font-semibold text-black mb-4">關注我們</h3>
            <div className="flex space-x-4 mb-4 justify-end">
              <a href="https://instagram.com" className="text-black hover:text-accent transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-black hover:text-accent transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-black hover:text-accent transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-black hover:text-accent transition-colors">
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-6 text-center text-gray-500 text-sm font-mingtc">
          &copy; {new Date().getFullYear()} Victoria Spicer. 保留所有權利.
        </div>
      </div>
    </footer>
  );
} 