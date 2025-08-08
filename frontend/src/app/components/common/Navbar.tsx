"use client";

import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Button } from "@/app/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/app/components/ui/sheet";
import { Menu } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 手機版選單項目
  const MobileMenuItems = () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Login</h3>
        <Link
          href="/auth/student/login"
          className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Student Login
        </Link>
        <Link
          href="/auth/teacher/login"
          className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Teacher Login
        </Link>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Sign In</h3>
        <Link
          href="/auth/student/register"
          className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Student Sign In
        </Link>
        <Link
          href="/auth/teacher/register"
          className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Teacher Sign In
        </Link>
      </div>
    </div>
  );

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

          {/* Desktop */}
          {!isMobile && (
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
          )}

          {/* Mobile */}
          {isMobile && (
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 p-0">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="text-xl font-bold mb-4">Menu</SheetTitle>
                <MobileMenuItems />
              </SheetContent>
            </Sheet>
          )}
        </div>
      </nav>
    </div>
  );
}
