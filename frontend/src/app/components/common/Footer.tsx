import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-brand-fg py-4 w-full rounded-t-[20px] border-t-4 border-brand-fg">
      <div className="container px-4 mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="w-full flex flex-col justify-center text-brand-fg lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <Link href="/" className="text-2xl font-black text-center mb-2">
              Tutoria
            </Link>
            <p className="text-md text-center lg:text-left">
              A modern tutoring platform connecting teachers and students
              through collaborative learning tools and seamless content
              management.
            </p>
          </div>
          <div className="flex w-full justify-center gap-5 my-6 lg:gap-10">
            <Link href="/pricing" className="font-bold">
              Pricing
            </Link>
            <Link href="/contact" className="font-bold">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center block mt-7">
        &copy; {new Date().getFullYear()} Tutoria. All rights reserved.
      </p>
    </footer>
  );
}
