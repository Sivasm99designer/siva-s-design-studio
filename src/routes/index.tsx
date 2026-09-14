import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition, Reveal } from "@/components/PageTransition";
import { ProjectCard, Thumb } from "@/components/ProjectCard";
import { projects, stats, skillGroups } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siva S M — Product & UI/UX Designer" },
      {
        name: "description",
        content:
          "Portfolio of Siva S M, a product and UI/UX designer with 3.8+ years designing dashboards, mobile apps and design systems.",
      },
      { property: "og:title", content: "Siva S M — Product & UI/UX Designer" },
      {
        property: "og:description",
        content: "Dashboards, mobile products and design systems, designed end to end.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Nav />
      <PageTransition>
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
          <Reveal>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="size-2 animate-pulse rounded-full bg-accent" />
              Available for product design work
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-8 text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              Designing calm
              <br />
              interfaces for
              <br />
              <span className="text-brand">complex products.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-12 grid gap-10 border-t border-border/60 pt-10 md:grid-cols-[1.2fr_1fr]">
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                I'm <span className="text-foreground">Siva S M</span>, a product and UI/UX designer
                with 3.8+ years of experience turning dense workflows — reconciliation dashboards,
                aquaculture operations, mobility apps — into interfaces people move through without
                thinking. Research, flows, high-fidelity UI and design systems, end to end.
              </p>
              <div className="flex flex-wrap items-start gap-3 md:justify-end">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-brand hover:text-brand-foreground"
                >
                  View projects <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
                >
                  About me
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              <Thumb label="Selected work" className="aspect-square sm:col-span-1" />
              <Thumb label="Product design" className="aspect-square" />
              <Thumb label="Design systems" className="aspect-square" />
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Reveal>
            <div className="flex items-end justify-between border-b border-border/60 pb-6">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Featured work</h2>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-brand">
                All projects →
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Reveal>
            <div className="grid gap-6 rounded-3xl bg-surface p-10 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-4xl font-semibold tracking-tight text-brand">{s.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

      </PageTransition>
      <Footer />
    </>
  );
}
