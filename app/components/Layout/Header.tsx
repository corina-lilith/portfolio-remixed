import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <img src="/logo.svg" alt="logo of a coffee cup with my initials" className="w-16 h-16" />


      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/about" className="hover:text-gray-600 transition">About Me</Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-gray-600 transition">Education</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-600 transition">Projects</Link>
          </li>
          <li>
            <Link to="/work-history" className="hover:text-gray-600 transition">Work History</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

