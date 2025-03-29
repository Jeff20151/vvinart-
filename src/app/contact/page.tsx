import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* 頁面標題 */}
      <div className="bg-accent-light py-16">
        <div className="art-container text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            聯絡我
          </h1>
          <p className="text-white max-w-2xl mx-auto">
            有任何疑問或建議，歡迎隨時與我聯絡，我會盡快回覆您的訊息。
          </p>
        </div>
      </div>

      {/* 聯絡資訊與表單 */}
      <section className="py-16">
        <div className="art-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 聯絡資訊 */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-8">
                聯絡<span className="text-accent">資訊</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-accent text-xl p-2">
                    <FiMapPin />
                  </div>
                  <div>
                    <h3 className="font-playfair font-medium text-gray-800 mb-1">工作室地址</h3>
                    <p className="text-gray-600">
                      臺北市信義區松仁路100號，5樓
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-accent text-xl p-2">
                    <FiMail />
                  </div>
                  <div>
                    <h3 className="font-playfair font-medium text-gray-800 mb-1">電子郵件</h3>
                    <p className="text-gray-600">
                      contact@artshop.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-accent text-xl p-2">
                    <FiPhone />
                  </div>
                  <div>
                    <h3 className="font-playfair font-medium text-gray-800 mb-1">聯絡電話</h3>
                    <p className="text-gray-600">
                      +886 2 1234 5678
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-playfair font-medium text-gray-800 mb-4">營業時間</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">週一至週五</span>
                    <span className="text-gray-800">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">週六</span>
                    <span className="text-gray-800">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">週日</span>
                    <span className="text-gray-800">休息</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 聯絡表單 */}
            <div className="art-card p-8">
              <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-6">
                發送<span className="text-accent">訊息</span>
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                    您的姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                    電子郵件
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                    placeholder="請輸入您的電子郵件"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-600 mb-2">
                    主旨
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                    placeholder="請輸入主旨"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                    訊息內容
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                    placeholder="請輸入您的訊息"
                  ></textarea>
                </div>
                
                <button type="submit" className="art-button w-full">
                  發送訊息
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 