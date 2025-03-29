import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { FiFilter, FiChevronDown } from 'react-icons/fi';

// 假設的藝術作品數據
const artworks = [
  {
    id: 'art-1',
    title: '彩虹山脈',
    price: 1280,
    imageSrc: '/images/products/art1.jpg',
    category: 'artwork' as const,
  },
  {
    id: 'art-2',
    title: '水墨夢境',
    price: 1480,
    imageSrc: '/images/products/art2.jpg',
    category: 'artwork' as const,
  },
  {
    id: 'art-3',
    title: '秋日森林',
    price: 1680,
    imageSrc: '/images/products/art3.jpg',
    category: 'artwork' as const,
  },
  {
    id: 'art-4',
    title: '城市印象',
    price: 1880,
    imageSrc: '/images/products/art4.jpg',
    category: 'artwork' as const,
  },
  {
    id: 'art-5',
    title: '花間小憩',
    price: 1380,
    imageSrc: '/images/products/art5.jpg',
    category: 'artwork' as const,
  },
  {
    id: 'art-6',
    title: '海洋之歌',
    price: 1580,
    imageSrc: '/images/products/art6.jpg',
    category: 'artwork' as const,
  },
];

export default function ArtworkPage() {
  return (
    <main>
      <Navbar />

      {/* 頁面標題 */}
      <div className="bg-accent-light py-16">
        <div className="art-container text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            藝術作品
          </h1>
          <p className="text-white max-w-2xl mx-auto">
            每一幅藝術作品都是獨特的創作，融合了藝術家的情感和對生活的熱愛
          </p>
        </div>
      </div>

      {/* 藝術作品列表 */}
      <section className="py-16">
        <div className="art-container">
          {/* 過濾選項 */}
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <p className="text-gray-600">顯示 {artworks.length} 個藝術作品</p>
            
            <div className="flex gap-4 flex-wrap">
              <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-sm hover:border-accent transition-colors">
                  <FiFilter size={16} />
                  <span>風格</span>
                  <FiChevronDown size={16} />
                </button>
              </div>
              
              <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-sm hover:border-accent transition-colors">
                  <span>排序方式</span>
                  <FiChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>
          
          {/* 產品網格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <ProductCard key={artwork.id} {...artwork} />
            ))}
          </div>
          
          {/* 分頁 */}
          <div className="flex justify-center mt-12">
            <div className="flex border border-gray-300 rounded-sm overflow-hidden">
              <button className="px-4 py-2 bg-accent text-white">1</button>
              <button className="px-4 py-2 hover:bg-gray-100">2</button>
              <button className="px-4 py-2 hover:bg-gray-100">3</button>
              <button className="px-4 py-2 hover:bg-gray-100">
                下一頁 &raquo;
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 