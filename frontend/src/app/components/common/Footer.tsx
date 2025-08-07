import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-brand-fg py-4 w-full rounded-t-[40px] border-t-4 border-brand-fg">
      <div className="container mx-auto lg:flex lg:justify-between">
        <div className="lg:w-[40%]">
          <p className="text-2xl font-black">Tutoria</p>
          <p>
            A modern tutoring platform connecting teachers and students through
            collaborative learning tools and seamless content management.
          </p>
          <p>&copy; {new Date().getFullYear()} Tutoria. All rights reserved.</p>
        </div>
        <div className="self-start">
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
        {/* <p>
          <a href="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
        </p> */}
      </div>
    </footer>
  );
}
