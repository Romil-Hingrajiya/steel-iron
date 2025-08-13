import HeroSection from '@/components/sections/HeroSection';
import BusinessSegmentsSection from '@/components/sections/BusinessSegmentsSection';
import AboutSection from '@/components/sections/AboutSection';
import OurOrganizationSection from '@/components/sections/OurOrganizationSection';
import ProductsGrid from '@/components/sections/ProductsGrid';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessSegmentsSection />
      <AboutSection />
      <OurOrganizationSection />
      <ProductsGrid />
      <ContactSection />
    </>
  );
}
