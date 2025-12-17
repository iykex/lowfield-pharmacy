import DownloadAppSection from "@/components/home/download-app-section";
import KeyBenefits from "@/components/home/key-benefits";
import Banner from "@/components/home/landing-page-banner";
import Menu from "@/components/navigation/navigation-menu";
import NewsletterSection from "@/components/home/newsletter";
import { OurProcessSection } from "@/components/home/our-process-section";
import { NHSPharmacyFirstSection } from "@/components/home/pharmacy-first-services-section";
import PharmacyServicesMarquee from "@/components/home/pharmacy-services-marquee-section";
import Testimonials from "@/components/home/testimonials-section";

export default function LandingPage() {
  return (
    <div className="overflow-hidden space-y-20 sm:space-y-30 pb-30 w-full">
      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>
      <Banner />
      <PharmacyServicesMarquee />
      <NHSPharmacyFirstSection />
      <KeyBenefits />
      <OurProcessSection />
      <Testimonials />
      <div className="space-y-20 sm:space-y-30 w-full dashed-grid-bg">
        <DownloadAppSection />
        <NewsletterSection />
      </div>
    </div>
  );
}
