import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-20 w-full bg-[#F82173]">
      <div className="Adorn-Engraved-Expanded relative mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        {/* Left navigation links */}
        <ul className="hidden list-none gap-8 text-lg text-white md:flex">
          <li>
            <Link to="/" className="font-medium hover:text-gray-900">
              My Work
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>

        {/* Centered name */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-xl text-white hover:text-gray-900"
        >
          Maelle CHAIZE
        </Link>
      </div>
    </nav>
  );
}
