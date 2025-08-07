"use client";

import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

import { Link } from "@/i18n/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-[##2D3047]">
      <nav
        role="navigation"
        className={`mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/10 backdrop-blur-lg shadow-lg"
            : "bg-white/10 backdrop-blur-sm"
        }`}
      >
        <div className="flex w-full justify-between p-5 container mx-auto">
          <div>
            <Link href="/" className="text-3xl font-black">
              Tutoria
            </Link>
          </div>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 text-md font-semibold rounded-md hover:bg-gray-100/50 transition-colors">
                Login
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col p-3 gap-3 bg-white/30 backdrop-blur-lg ">
                <Link
                  href="/auth/student/login"
                  className="hover:text-blue-600 transition-colors"
                >
                  Student Login
                </Link>
                <Link
                  href="/auth/teacher/login"
                  className="hover:text-blue-600 transition-colors"
                >
                  Teacher Login
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 text-md font-semibold  rounded-md hover:bg-gray-100/50 transition-colors">
                Sign In
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col p-3 gap-3 bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-lg">
                <Link
                  href="/auth/student/register"
                  className="hover:text-blue-600 transition-colors"
                >
                  Student Sign In
                </Link>
                <Link
                  href="/auth/teacher/register"
                  className="hover:text-blue-600 transition-colors"
                >
                  Teacher Sign In
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </div>
  );
}
