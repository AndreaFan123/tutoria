import Image from "next/image";
import ContactForm from "../form/ContactForm";
import contact from "@/public/assets/landing/contact.svg";

export default function ContactSection() {
  return (
    <section className="flex flex-col justify-center px-5">
      <div className="flex flex-col w-full items-center gap-3 mb-5">
        <h5 className="text-4xl uppercase text-center font-black text-white bg-brand-fg p-2 w-fit">
          Contact Us
        </h5>
        <p className="text-lg text-center text-brand-fg font-medium w-full lg:w-1/2 text-balance">
          Reach out to us with any questions or inquiries you may have.
        </p>
      </div>
      <div className="bg-brand-primary py-8 mb-32 w-full max-w-[1000px] mx-auto relative border-brand-fg border-2 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        <div className="hidden md:block md:absolute md:-right-64 md:w-[550px]">
          <Image
            src={contact}
            width={0}
            height={0}
            alt="contact"
            className="max-w-full"
          />
        </div>
        <div className="flex flex-col gap-11 max-w-full md:max-w-[600px] px-5 lg:px-9">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
