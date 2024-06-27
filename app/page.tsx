import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  title: 'Learnwell',
  description: 'Website for hosting educational videos',
  openGraph: {
    type: 'website'
  }
};

//landing page with special videos under pat_feng_homepage
export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Footer />
    </>
  );
}
