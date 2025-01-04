import Carousal from '@/components/Carousal';
import Featuredcourses from '@/components/Featuredcourses';
import HeroSection from '@/components/HeroSection';
import MusicTestimonials from '@/components/MusicTestimonials';
import UpcomingWebinars from '@/components/UpcomingWebinars';
import Instructors from '@/components/Instructors';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='h-screen bg-grid-white/[0.02] bg-black/[0.96] antialiased'>
      <HeroSection />
      <Featuredcourses />
      <Carousal />
      <MusicTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
