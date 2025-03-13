import { Link } from "@remix-run/react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white overflow-hidden">
      <header className="flex items-center justify-between p-4 shadow-md bg-gray-900 text-white">
        <img src="/logo.svg" alt="logo of a coffee cup with my initials" className="w-16 h-16" />
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
              <Link to="/work-history" className="hover:text-gray-600 transition">Work</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 container mx-auto">{children}</main>
    </div>
  );
}