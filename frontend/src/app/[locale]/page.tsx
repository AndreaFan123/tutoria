import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

import landing from "../../../public/assets/landing/welcome.png";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <section>
      <div className="flex flex-col container mx-auto items-start gap-7 justify-center lg:flex-row">
        <div className="mx-auto p-5 flex flex-col gap-4 items-center text-left md:max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-balance">
            Modern tutoring platform for
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-brand-primary font-black text-balance">
            collaborative learning
          </h2>
          <p className="text-brand-fg md:max-w-3xl text-xl">
            Connect teachers and students through an intuitive platform designed
            for seamless content sharing, real-time collaboration, and effective
            learning management.
          </p>
        </div>
        <div className="w-full justify-center">
          <Image
            src={landing}
            width={0}
            height={0}
            alt="landing image"
            loading="lazy"
            className="max-w-[500px] lg:max-w-[700px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
