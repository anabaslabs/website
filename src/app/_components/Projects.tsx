import { Highlighter } from "@/components/ui/highlighter";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-background py-10 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto font-lexend mt-4">
        <div className="text-center mb-8 md:mb-10 ">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-2 md:mb-3 tracking-tight">
            <Highlighter
              action="underline"
              color="#ec4e0c"
              strokeWidth={2}
              iterations={2}
              isView
            >
              Projects
            </Highlighter>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Check out some of our recent work and case studies showcasing our
            expertise in building scalable, real-world systems for startups and
            enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              href={project.href}
              dates={project.dates}
              contributors={project.contributors}
              tags={project.tags}
              image={project.image}
              links={project.links}
              video={project.video}
              className="font-lexend"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
