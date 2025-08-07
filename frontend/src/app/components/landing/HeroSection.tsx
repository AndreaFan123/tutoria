import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="flex items-center mt-36">
      <div className="flex flex-col container mx-auto items-start gap-7 justify-center xl:flex-row">
        <div className="mx-auto p-5 flex flex-col items-center gap-7 md:max-w-4xl lg:max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-black text-balance text-center text-gray-800">
            Modern tutoring platform for
          </h1>
          <h2 className="text-3xl text-center md:text-4xl lg:text-7xl text-brand-primary font-black text-balance uppercase">
            collaborative learning
          </h2>
          <p className="text-gray-700 md:max-w-3xl lg:max-w-4xl text-xl text-center">
            Connect teachers and students through an intuitive platform designed
            for seamless content sharing, real-time collaboration, and effective
            learning management.
          </p>
          <div>
            <Button className="bg-brand-primary hover:bg-brand-primary/90 w-[130px] h-[60px] text-lg font-bold uppercase text-white shadow-lg">
              Try it!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
