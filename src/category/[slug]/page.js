import dynamic from 'next/dynamic'
import Mainfooter from "@/component/Mainfooter.js";

const Header = dynamic(() => import('@/component/Header.js'), {
  ssr: false
})

export default function ProductPage({ params }) {
  const { slug } = params;

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold">Product: {slug}</h1>
        <p className="mt-4 text-gray-600">Details about the product {slug} will be displayed here.</p>
      </main>
      <Mainfooter />
    </>
  );
}
