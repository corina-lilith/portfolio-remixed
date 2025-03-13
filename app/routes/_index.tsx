import type { MetaFunction } from "@remix-run/node";
import Layout from "../components/Layout";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Corina Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-center md:p-16 bg-gray-900 text-white gap-y-4 md:gap-x-8">
        {/* Image Section */}
        <div className="flex-shrink-0 flex justify-center md:justify-end">
          <img
            src="/avatar-remixed.png"
            alt="An avatar of me"
            className="w-24 md:w-32 lg:w-80 h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-md md:max-w-lg text-center md:text-left">
          <h1 className="text-5xl font-bold">Hey, I&apos;m Corina.</h1>
          <p className="mt-6 text-lg md:text-xl font-light text-gray-300">
            A frontend developer with a passion for crafting beautiful, functional, and user-friendly applications.
          </p>
          <p className="mt-4 mb-4 text-lg md:text-xl text-gray-400">
            With a background in teaching and software engineering, I bring a unique mix of problem-solving, creativity, and technical expertise to every project.
          </p>
          <Link to="/projects" className="primary px-4 py-2 bg-[#A713E3] text-white rounded-md shadow-md hover:bg-purple-900 transition">
            My Projects
          </Link>
        </div>
      </div>
    </Layout>
  );
}
