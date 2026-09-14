import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition, Reveal } from "@/components/PageTransition";
import { Thumb } from "@/components/ProjectCard";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects â€” Siva S M, Product Designer" },
      {
        name: "description",
        content:
          "Case studies by Siva S M: Recon for CMRL, AquaSat, AquaPartner, AquaFarmer, Yaary Auto, Yaary Driver and Yaary Marketing.",
      },
      { property: "og:title", content: "Projects â€” Siva S M, Product Designer" },
      {
        property: "og:description",
        content: "Dashboards, mobility apps and aquaculture platforms â€” full case studies.",
      },
    ],
  }),
  component: ProjectsÂ,
});

function ProjectsÂ() {
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
          <div className="border-t border-border/60">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid items-center gap-6 border-b border-border/60 py-8 md:grid-cols-[120px_1fr_auto]"
                >
                  <Thumb
                    label={String(i + 1).padStart(2, "0")}
                    className="aspect-square w-[120px] transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div>
                    <h2 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-brand sm:text-3xl">
                      {p.title}
                    </h2>
                    <p className="mt-1 text-muted-foreground">{p.subtitle}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:justify-end">
                    <span className="text-sm text-muted-foreground">{p.year}</span>
                    <span className="flex size-11 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      </PageTransition>
      <Footer />
    </>
  );
}
