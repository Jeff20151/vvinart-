import HomeBanner from '@/components/HomeBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutArtist from '@/components/AboutArtist';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HomeBanner />
      <AboutArtist />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
