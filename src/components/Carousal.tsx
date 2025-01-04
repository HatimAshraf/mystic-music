'use client';
import Image from 'next/image';
import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-card-carousel';

export default function Carousal() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={{
        ...card,
        content: <DummyContent content={card.content} />,
      }}
      index={index}
    />
  ));

  return (
    <div className='w-full h-full py-20'>
      <h2 className='max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans'>
        Get to know your Inner Musician.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: 'Music Theory',
    title: 'Understanding Music Theory Basics',
    src: '/inner/music-theory.webp',
    content: [
      {
        text: 'Learn the fundamentals of music theory, including scales, chords, and intervals.',
        image: '/inner/images/scales-chords.webp',
      },
      {
        text: 'Explore the circle of fifths to understand key signatures and harmony.',
        image: '/inner/images/circle-of-fifths.webp',
      },
      {
        text: 'Master time signatures and rhythm to enhance your musical timing.',
        image: '/inner/images/rhythm-timing.webp',
      },
    ],
  },
  {
    category: 'Instrument Learning',
    title: 'Mastering Guitar Techniques',
    src: '/inner/instrument-learning.webp',
    content: [
      {
        text: 'Discover essential guitar techniques like strumming, fingerpicking, and hammer-ons.',
        image: '/inner/images/guitar-strumming.webp',
      },
      {
        text: 'Understand chord progressions and how to use them in songwriting.',
        image: '/inner/images/guitar-chords.webp',
      },
      {
        text: 'Improve your speed and accuracy with advanced picking exercises.',
        image: '/inner/images/guitar-picking.webp',
      },
    ],
  },
  {
    category: 'Music Composition',
    title: 'Create Your First Song',
    src: '/inner/music-composition.webp',
    content: [
      {
        text: 'Learn how to compose melodies that are memorable and emotionally impactful.',
        image: '/inner/images/song-melody.webp',
      },
      {
        text: 'Understand how to structure a song with verses, choruses, and bridges.',
        image: '/inner/images/song-structure.webp',
      },
      {
        text: 'Experiment with harmonies and counterpoints to add depth to your compositions.',
        image: '/inner/images/song-harmony.webp',
      },
    ],
  },
  {
    category: 'Piano Mastery',
    title: 'Become a Piano Virtuoso',
    src: '/inner/piano-mastery.webp',
    content: [
      {
        text: 'Start with the basics of piano playing, including scales and hand positioning.',
        image: '/inner/images/piano-basics.webp',
      },
      {
        text: 'Advance to arpeggios and sight-reading to develop your skills further.',
        image: '/inner/images/piano-arpeggios.webp',
      },
      {
        text: 'Master classical pieces from composers like Beethoven and Mozart.',
        image: '/inner/images/piano-classical.webp',
      },
    ],
  },
  {
    category: 'Music Production',
    title: 'Produce Your Own Music',
    src: '/inner/music-production.webp',
    content: [
      {
        text: 'Learn how to use DAWs (Digital Audio Workstations) like Ableton Live and Logic Pro.',
        image: '/inner/images/music-daw.webp',
      },
      {
        text: 'Understand the basics of mixing and mastering to create professional-sounding tracks.',
        image: '/inner/images/music-mixing.webp',
      },
      {
        text: 'Discover how to use MIDI and virtual instruments for electronic music production.',
        image: '/inner/images/music-midi.webp',
      },
    ],
  },
  {
    category: 'Singing and Vocal Training',
    title: 'Develop Your Singing Voice',
    src: '/inner/singing.webp',
    content: [
      {
        text: 'Learn vocal warm-ups and exercises to improve your range and pitch.',
        image: '/inner/images/vocal-warmup.webp',
      },
      {
        text: 'Understand breathing techniques that enhance your vocal stamina.',
        image: '/inner/images/vocal-breathing.webp',
      },
      {
        text: 'Explore different singing styles, from classical to contemporary.',
        image: '/inner/images/vocal-styles.webp',
      },
    ],
  },
];

const DummyContent = ({
  content,
}: {
  content: { text: string; image: string }[];
}) => {
  return (
    <>
      {content.map((item, index) => (
        <div
          key={index}
          className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'
        >
          <p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
            <span className='font-bold text-neutral-700 dark:text-neutral-200'>
              {item.text.split('.')[0]}.
            </span>{' '}
            {item.text.split('.').slice(1).join('.')}
          </p>
          <Image
            src={item.image}
            alt='Macbook mockup from Aceternity UI'
            height='500'
            width='500'
            className='md:w-1/2 md:h-1/2 h-full w-full mx-auto mt-4 rounded-md object-contain'
          />
        </div>
      ))}
    </>
  );
};
