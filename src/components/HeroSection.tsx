import Link from 'next/link';
import { Spotlight } from '@/components/ui/Spotlight';
import { Button } from '@/components/ui/moving-border';

const HeroSection = () => {
  return (
    <div className='relative overflow-hidden mx-auto h-screen md:h-[40rem] w-full bg-grid-white/[0.02] rounded-md flex flex-col justify-center items-center py-10 md:py-0'>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20 animate-spotlight'
        fill='white'
      />
      <div className='p-4 relative z-10 w-full text-center'>
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-700'>
          Master the art of music
        </h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
          Dive into our comprehensive music theory courses and elevate your
          skills today. Weather you&apos;re beginner or advanced, we have
          something for you. Join us to unlock your full potential in music.
        </p>
        <div className='mt-4'>
          <Link href='/courses'>
            <Button
              borderRadius='1.75rem'
              className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-neutral-800'
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
