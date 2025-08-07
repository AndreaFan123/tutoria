import { useTranslations } from "next-intl";
import HeroSection from "../components/landing/HeroSection";
import ServiceSection from "../components/landing/ServiceSection";
import ToolsSection from "../components/landing/ToolsSection";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main className="grid gap-60">
      <HeroSection />
      <ServiceSection />
      <ToolsSection />
    </main>
  );
}
