import type { MetaFunction } from "@remix-run/node";
import Layout from "../components/Layout/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Corina Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen md:p-16 bg-gray-900 text-white ">
        {/* Text Section */}
        <div className="max-w-lg text-center md:text-left flex-1">
          <h1 className="text-5xl font-bold">Hey, I&apos;m Corina.</h1>
          <p className="mt-6 text-lg md:text-xl font-light text-gray-300">
            A frontend developer with a passion for crafting beautiful, functional, and user-friendly applications.
          </p>
          <p className="mt-4 text-lg md:text-xl text-gray-400">
            With a background in teaching and software engineering, I bring a unique mix of problem-solving, creativity, and technical expertise to every project.
          </p>
          <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition">
            My Projects
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 flex justify-center md:justify-end">
          <img
            src="/avatar-remixed.png"
            alt="An avatar of me"
            className="w-24 md:w-32 lg:w-80 h-auto object-contain"
          />
        </div>
      </div>
    </Layout>
  );
}
