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

export function generateStaticParams() {
  // Define all possible category slugs that should be pre-rendered
  return [
    { slug: 'bongs' },
    { slug: 'dab-rigs' },
    { slug: 'vaporizers' },
    { slug: 'herb-grinders' },
    { slug: 'glass-bubblers' },
    { slug: 'smoking-pipes' },
    { slug: 'rolling-papers' },
    { slug: '420-accessories' },
    { slug: 'munchies' }
  ];
} 