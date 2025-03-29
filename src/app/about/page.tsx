import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FiHeart, FiPackage, FiStar } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* 頁面橫幅 */}
      <div className="relative h-80 bg-gray-100">
        <Image
          src="/images/about-banner.jpg"
          alt="關於藝術家"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white">
            關於我
          </h1>
        </div>
      </div>

      {/* 關於內容 */}
      <section className="py-16">
        <div className="art-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-4">
                藝術<span className="text-accent">故事</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                嗨，我是張藝心，一位充滿熱情的藝術創作者。我的創作之旅始於2010年，當時我剛從藝術學院畢業，
                充滿了對藝術的熱情和對未來的憧憬。過去十多年來，我的作品融合了東方與西方的美學元素，
                希望通過我的藝術作品、服裝設計和珠寶創作，為人們帶來獨特的美感體驗。
              </p>
              <p className="text-gray-600 leading-relaxed">
                我的創作靈感來源於自然、旅行和日常生活中的小確幸。每一件作品都灌注了我對生活的熱愛和對藝術的追求。
                我相信藝術不僅能美化環境，更能觸動人心，傳遞溫暖與力量。
              </p>
              <p className="text-gray-600 leading-relaxed">
                通過藝術，我希望能夠幫助更多人找到內心的平靜與喜悅，讓美麗的事物為生活增添色彩。
                這也是為什麼我創立了這個網站，希望能將我的藝術分享給更多的人，同時幫助那些尋找獨特藝術品的人們。
              </p>
            </div>
            <div className="relative h-[500px] rounded-md overflow-hidden shadow-lg">
              <Image
                src="/images/artist-full.jpg"
                alt="藝術家照片"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 創作理念 */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-8 text-center">
              創作<span className="text-accent">理念</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="art-card p-8 text-center">
                <div className="text-accent text-4xl mb-4 flex justify-center">
                  <FiHeart />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-4">熱情</h3>
                <p className="text-gray-600">
                  每一件作品都充滿熱情與真摯的情感，希望能夠觸動每個人的心靈。
                </p>
              </div>
              <div className="art-card p-8 text-center">
                <div className="text-accent text-4xl mb-4 flex justify-center">
                  <FiStar />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-4">獨特</h3>
                <p className="text-gray-600">
                  堅持原創設計，每件作品都是獨一無二的，展現個人特色與風格。
                </p>
              </div>
              <div className="art-card p-8 text-center">
                <div className="text-accent text-4xl mb-4 flex justify-center">
                  <FiPackage />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-4">品質</h3>
                <p className="text-gray-600">
                  注重細節與品質，精心挑選材料，確保每件作品都具有持久的價值。
                </p>
              </div>
            </div>
          </div>

          {/* 藝術家歷程 */}
          <div>
            <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-8 text-center">
              藝術<span className="text-accent">歷程</span>
            </h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 text-right">
                  <span className="text-accent font-bold">2010 - 2015</span>
                </div>
                <div className="md:w-3/4 border-l-2 border-accent-light pl-6 pb-8">
                  <h3 className="text-xl font-playfair font-semibold mb-2">藝術啟程</h3>
                  <p className="text-gray-600">
                    畢業於臺北藝術大學，開始在各地畫廊展出個人作品，創作以繪畫和素描為主。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 text-right">
                  <span className="text-accent font-bold">2015 - 2018</span>
                </div>
                <div className="md:w-3/4 border-l-2 border-accent-light pl-6 pb-8">
                  <h3 className="text-xl font-playfair font-semibold mb-2">拓展領域</h3>
                  <p className="text-gray-600">
                    開始嘗試服裝設計，將藝術元素融入服飾中，開設首個實體工作室。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 text-right">
                  <span className="text-accent font-bold">2018 - 至今</span>
                </div>
                <div className="md:w-3/4 border-l-2 border-accent-light pl-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2">全面發展</h3>
                  <p className="text-gray-600">
                    將創作延伸至珠寶設計，建立個人品牌，並通過線上平台將作品推廣至全球。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 