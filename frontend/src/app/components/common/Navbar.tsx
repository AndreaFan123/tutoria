import { Link } from "@/i18n/navigation";

export default function Navbar() {
  return (
    <div className="container">
      <nav role="navigation">
        <div>
          <Link href="/login">Login</Link>
          <Link href="/signin">Sign In</Link>
        </div>
      </nav>
    </div>
  );
}
