import { useTranslations } from "next-intl";
import HeroSection from "@/app/components/landing/HeroSection";
import ServiceSection from "@/app/components/landing/ServiceSection";
import ToolsSection from "@/app/components/landing/ToolsSection";
import PricingSection from "../components/landing/PricingSection";
import ContactSection from "../components/landing/ContactSection";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main className="grid gap-44 lg:gap-52">
      <HeroSection />
      <ServiceSection />
      <ToolsSection />
      {/* TODO: TBD Dashboard showcase */}
      <PricingSection />
      <ContactSection />
    </main>
  );
}
