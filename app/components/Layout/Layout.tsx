import { Link } from "@remix-run/react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="flex items-center justify-between p-4 shadow-md bg-gray-900 text-white">
        <Link to="/">
          <img src="/logo.svg" alt="logo of a coffee cup with my initials" className="w-16 h-16" />
        </Link>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/about" className="hover:text-[#A713E3] transition">About Me</Link>
            </li>
            <li>
              <Link to="/education" className="hover:text-[#A713E3] transition">Education</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-[#A713E3] transition">Projects</Link>
            </li>
            <li>
              <Link to="/work" className="hover:text-[#A713E3] transition">Work</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 container mx-auto">{children}</main>
    </div>
  );
}