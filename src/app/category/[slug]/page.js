import CategoryContent from './CategoryContent';

export default function CategoryPage({ params }) {
  return <CategoryContent slug={params.slug} />;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} - Grass City`,
    description: `Shop our selection of ${params.slug} at Grass City - the world's best online headshop.`
  }
}

export async function generateStaticParams() {
  // Example if you need to fetch categories from an API
  // const categories = await fetch('...').then(res => res.json())
  
  // For now, using hardcoded categories from HomeContent.js
  const categories = [
    { name: 'Bongs' },
    { name: 'Dab Rigs' },
    { name: 'Vaporizers' },
    { name: 'Herb Grinders' },
    { name: 'Glass Bubblers' },
    { name: 'Smoking Pipes' },
    { name: 'Rolling Papers' },
    { name: '420 Accessories' },
    { name: 'Munchies' }
  ];

  return categories.map((category) => ({
    slug: category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  }));
} 