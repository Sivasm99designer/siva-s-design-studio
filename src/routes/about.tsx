import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition, Reveal } from "@/components/PageTransition";
import { Thumb } from "@/components/ProjectCard";
import { certifications, education, experience, skillGroups, RESUME_URL } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Siva S M, Product Designer" },
      {
        name: "description",
        content:
          "Background, experience, skills, education and design philosophy of Siva S M — product designer at DesignPettai, previously Triffy Digital and Uishaper.",
      },
      { property: "og:title", content: "About — Siva S M, Product Designer" },
      {
        property: "og:description",
        content: "3.8+ years across dashboards, mobility and aquaculture products.",
      },
    ],
  }),
  component: About,
});

const philosophy = [
  {
    title: "Clarity over cleverness",
    body: "Complex domains already carry enough load. My job is to remove steps, not add personality where it isn't needed.",
  },
  {
    title: "Design with the field, not for it",
    body: "Driver feedback reshaped the Yaary ride-acceptance flow. Talking to the people who use the product daily beats assumption.",
  },
  {
    title: "Systems that survive the roadmap",
    body: "Tokens, components and patterns documented so the twentieth screen looks as intentional as the first.",
  },
];

function About() {
  return (
    <>
      <Nav />
      <PageTransition>
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">About</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              A product designer who likes the messy, data-heavy problems.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.1fr]">
              <Thumb label="Siva S M" className="aspect-square" />
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I've spent 3.8+ years designing web, mobile and dashboard experiences — from
                  transaction reconciliation for Chennai Metro to satellite-driven aquaculture
                  mapping and healthcare claims workflows.
                </p>
                <p>
                  Today I'm a Product Designer at <span className="text-foreground">DesignPettai</span>{" "}
                  in Chennai, working across Aquaconnect, AG Specialty Insurance and The OccuNet
                  Company. Before that,{" "}
                  <span className="text-foreground">Triffy Digital</span> in Bengaluru and{" "}
                  <span className="text-foreground">Uishaper</span> in Tirunelveli.
                </p>
                <p>
                  My work runs the full arc: user research and interviews, flows and wireframes,
                  high-fidelity UI, prototypes, usability testing and the design system that keeps
                  it all consistent.
                </p>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-brand hover:text-brand-foreground"
                >
                  View resume
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Reveal>
            <h2 className="border-b border-border/60 pb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Experience
            </h2>
          </Reveal>
          <div className="mt-10 space-y-14">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.06}>
                <div className="grid gap-6 md:grid-cols-[260px_1fr]">
                  <div>
                    <h3 className="text-lg font-medium">{e.role}</h3>
                    <p className="mt-1 text-brand">{e.company}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {e.location} · {e.period}
                    </p>
                  </div>
                  <ul className="space-y-4 text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="border-l border-border pl-5 leading-relaxed">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Reveal>
            <h2 className="border-b border-border/60 pb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Skills & tools
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g, i) => (
              <Reveal key={g.label} delay={i * 0.05}>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">{g.label}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <h2 className="border-b border-border/60 pb-6 text-2xl font-semibold tracking-tight">
                Education
              </h2>
              <div className="mt-8 space-y-8">
                {education.map((e) => (
                  <div key={e.title}>
                    <p className="font-medium">{e.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {e.org} · {e.period}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="border-b border-border/60 pb-6 text-2xl font-semibold tracking-tight">
                Certifications
              </h2>
              <div className="mt-8 space-y-8">
                {certifications.map((c) => (
                  <div key={c.title}>
                    <p className="font-medium">{c.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {c.org} · {c.period}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-28">
          <Reveal>
            <h2 className="border-b border-border/60 pb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Working philosophy
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-surface p-8 transition-transform duration-500 hover:-translate-y-1">
                  <p className="text-sm text-accent">0{i + 1}</p>
                  <h3 className="mt-4 text-xl font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </PageTransition>
      <Footer />
    </>
  );
}
