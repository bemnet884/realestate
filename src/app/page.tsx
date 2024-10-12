// src/app/page.tsx
import HeroSection from './(components)/hero-section';
import FeaturedListings from './(components)/featured-listings';
import InteractiveMap from './(components)/interactive-map';
import AboutUs from './(components)/about-us';
import ServicesOffered from './(components)/services-offered';
import LatestListings from './(components)/latest-listings';
import Testimonials from './(components)/testimonials';
import CTASections from './(components)/cta-sections';
import MarketInsights from './(components)/market-insights';

export default function HomePage() {
  return (
    <div>

      <HeroSection />
      <FeaturedListings />
     <InteractiveMap />
      <AboutUs />
      <ServicesOffered />
      <LatestListings />
      <MarketInsights />
      <Testimonials />
      <CTASections />

    </div>
  );
}
