'use client';

import dynamic from 'next/dynamic'
import Mainfooter from "@/component/Mainfooter.js";
import Recommendedforyou from "@/component/Recommendedforyou.js";
import Bestsellers from "@/component/Bestsellers.js";
import Topcontainer from '@/component/Topcontainer.js';
import Popularcategories from '@/component/Popularcategories.js';
import Costoneralsobought from '@/component/Costoneralsobought.js';
import Benift from '@/component/Benift.js';
import Aboutus from '@/component/Aboutus.js';
import Whychoose from '@/component/Whychoose.js';
import Link from "next/link";

const Header = dynamic(() => import('@/component/Header.js'), {
  ssr: false
})

export default function HomeContent() {
  const categories = [
    { name: 'Bongs', image: '/images/bongs.jpg' },
    { name: 'Dab Rigs', image: '/images/dab-rigs.jpg' },
    { name: 'Vaporizers', image: '/images/vaporizers.jpg' },
    { name: 'Herb Grinders', image: '/images/grinders.jpg' },
    { name: 'Glass Bubblers', image: '/images/bubblers.jpg' },
    { name: 'Smoking Pipes', image: '/images/pipes.jpg' },
    { name: 'Rolling Papers', image: '/images/papers.jpg' },
    { name: '420 Accessories', image: '/images/accessories.jpg' },
    { name: 'Munchies', image: '/images/munchies.jpg' },
  ];

  return (
    <>
      <Header />
      <Topcontainer />
       
      <Bestsellers />
      <Recommendedforyou />
      <Popularcategories />
      <Costoneralsobought />
      <Benift />
      <Aboutus />
      <Whychoose />
      <Mainfooter />
    </>
  );
} 