import Carousal from '@/components/Carousal';
import Featuredcourses from '@/components/Featuredcourses';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className='h-screen bg-grid-white/[0.02] bg-black/[0.96] antialiased'>
      <HeroSection />
      <Featuredcourses />
      <Carousal />
    </main>
  );
}
