import { useState } from "react";
import Layout from "../components/Layout";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import Projects from "../data/Projects.json";

// Define TypeScript type for a project
type Project = {
  id: number;
  projectName: string;
  business: string;
  tools: string[];
  description: string;
  image: string;
  alt: string;
};

export default function ProjectDetails() {
  // Explicitly type hoveredProject as Project or null
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>

        {/* Flex container for side-by-side layout */}
        <div className="flex gap-4 w-full max-w-3xl justify-center">
          {/* Card 1 - Displays Image of Hovered Project (Hidden on Mobile) */}
          <Card className="flex-1 p-6 bg-transparent border-none text-center transition-opacity duration-300 hidden md:block">
            {hoveredProject && (
              <div className="flex flex-col items-center pt-10">
                {/* Image */}
                <img
                  src={hoveredProject.image}
                  alt={hoveredProject.alt}
                  className="w-full h-78 object-cover rounded-lg mb-4"
                />

                {/* Tools List */}
                <ul className="text-gray-300 text-sm text-center">
                  {hoveredProject.tools.map((tool, index) => (
                    <li key={index} className="bg-gray-700 px-2 py-1 rounded-md inline-block m-1">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>

          {/* Card 2 - Displays name of the project in a list */}
          <Card className="flex-1 p-6 cursor-pointer bg-transparent">
            {Projects.map((project) => (
              <div
                key={project.id}
                className="p-4 hover:bg-purple-200 transition-colors group"
                onMouseEnter={() => setHoveredProject(project)} // Set hovered project
                onMouseLeave={() => setHoveredProject(null)} // Reset when mouse leaves
              >
                <p className="text-gray-200 text-md transition-colors group-hover:text-[#A713E3]">
                  {project.projectName}
                </p>
                <Separator />
              </div>
            ))}
          </Card>
        </div>
      </div>
    </Layout>
  );
}
