import Footer from "@/components/footer";
import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full">

      <LandingHero />
      <LandingContent />
      <Footer />
    </div>
  );
};

export default LandingPage;
