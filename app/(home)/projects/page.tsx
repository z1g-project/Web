import type { Metadata } from "next";
import Image from "next/image";
import projects from "@/app/projects.json";

export const metadata: Metadata = {
  title: "Projects",
  description: "The z1g Project - Projects",
};

export default function ProjectsPage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-3xl font-bold">Projects</h1>

      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => {
          return (
            <div key={project.url}>
              <Image
                src={project.img}
                height={200}
                width={500}
              <h1>{project.title}</h1>
            </div>
          );
        })}
      </div>
    </main>
  );
}
