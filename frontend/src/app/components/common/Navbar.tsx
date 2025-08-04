"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Link } from "@/i18n/navigation";

export default function Navbar() {
  return (
    <div className=" bg-gray-800 text-white">
      <nav
        role="navigation"
        className="flex w-full justify-between p-5 container mx-auto"
      >
        <div>
          <span>Tutoria</span>
        </div>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger>Login</DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col p-3 gap-3">
              <Link href="/auth/student/login">Student Login</Link>
              <Link href="/auth/teacher/login">Teacher Login</Link>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>Sign In</DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col p-3 gap-3">
              <Link href="/auth/student/register">Student Sign In</Link>
              <Link href="/auth/teacher/register">Teacher Sign In</Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
