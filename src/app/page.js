import Header from "@/component/Header.js";
import Mainfooter from "@/component/Mainfooter.js";
import Recommendedforyou from "@/component/Recommendedforyou.js";
import Bestsellers from "@/component/Bestsellers.js";
import Topcontainer from '@/component/Topcontainer.js';
import Popularcategories from '@/component/Popularcategories.js';
import Costoneralsobought from '@/component/Costoneralsobought.js';
import Benift from '@/component/Benift.js';
import Aboutus from '@/component/Aboutus.js';
import Whychoose from '@/component/Whychoose.js';

export default function Home() {
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
