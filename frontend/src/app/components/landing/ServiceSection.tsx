import ServiceCard from "@/components/landing/ServiceCard";
import { services } from "@/constants/services";

export default function ServiceSection() {
  return (
    <section>
      <div className="container mx-auto flex flex-col gap-11 px-5">
        <article className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <h3 className="text-4xl uppercase font-black text-white bg-brand-fg p-2">
            Our goal
          </h3>
          {/* TODO: Amend later */}
          <p className="text-lg text-brand-fg font-medium lg:w-1/2 text-balance">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include...
          </p>
        </article>
        <div className="flex flex-col gap-8 lg:flex-row">
          {services.map((service) => (
            <ServiceCard
              key={service.role}
              role={service.role}
              des={service.description}
              imgSrc={service.image}
              imgAlt={service.imageDes}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
