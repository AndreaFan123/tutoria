import Image from "next/image";

import landing from "@/public/assets/landing/welcome.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section>
      <div className="flex flex-col container mx-auto items-start gap-7 justify-center xl:flex-row">
        <div className="mx-auto p-5 flex flex-col gap-7 md:max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-balance">
            Modern tutoring platform for
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-brand-primary font-black text-balance uppercase">
            collaborative learning
          </h2>
          <p className="text-brand-fg md:max-w-3xl text-xl">
            Connect teachers and students through an intuitive platform designed
            for seamless content sharing, real-time collaboration, and effective
            learning management.
          </p>
          <div>
            <Button className="bg-brand-primary w-[130px] h-[60px] text-lg font-bold uppercase">
              Try it!
            </Button>
          </div>
        </div>
        <div>
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
