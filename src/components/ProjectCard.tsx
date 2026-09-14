import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";
import { cn } from "@/lib/utils";

export function Thumb({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl bg-surface",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,color-mix(in_oklab,var(--color-foreground)_6%,transparent),transparent_60%)]" />
      <span className="relative text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group block"
      aria-label={`${project.title} case study`}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Thumb
          label={project.title}
          className="aspect-square transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute right-4 top-4 flex size-9 translate-y-2 items-center justify-center rounded-full bg-brand text-brand-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-brand">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
        </div>
        <span className="text-xs text-muted-foreground">{project.year}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
