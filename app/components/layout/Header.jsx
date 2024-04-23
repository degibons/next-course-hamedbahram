import Link from "next/link";
import NavLink from "@/components/ui/NavLink";
import ContactButton from "@/components/ui/ContactButton";

const Header = () => {
  return (
    <header className="bg-slate-100 py-4">
      <nav className="container">
        <ul className="flex gap-4">
          <li>
            <NavLink href="/" className="text-blue-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/about" className="text-blue-600">
              About
            </NavLink>
          </li>
          <ContactButton />
        </ul>
      </nav>
    </header>
  );
};
export default Header;
