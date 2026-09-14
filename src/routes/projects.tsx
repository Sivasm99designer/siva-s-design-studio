import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition, Reveal } from "@/components/PageTransition";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects - Siva S M, Product Designer" },
      {
        name: "description",
        content:
          "Case studies by Siva S M: Recon for CMRL, AquaSat, AquaPartner, AquaFarmer, Yaary Auto, Yaary Driver and Yaary Marketing.",
      },
      { property: "og:title", content: "Projects - Siva S M, Product Designer" },
      {
        property: "og:description",
        content: "Dashboards, mobility apps and aquaculture platforms - full case studies.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <Nav />
      <PageTransition>
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">Projects</p>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              Selected work, <span className="text-brand">start to ship.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Each project opens the full case study on designpettai.com.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-28">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>
      </PageTransition>
      <Footer />
    </>
  );
}
