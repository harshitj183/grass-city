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