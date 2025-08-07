import { useTranslations } from "next-intl";
import HeroSection from "@/app/components/landing/HeroSection";
import ServiceSection from "@/app/components/landing/ServiceSection";
import ToolsSection from "@/app/components/landing/ToolsSection";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main className="grid gap-44 lg:gap-60">
      <HeroSection />
      <ServiceSection />
      <ToolsSection />
    </main>
  );
}
