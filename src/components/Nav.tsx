import { Link } from "@tanstack/react-router";
import { RESUME_URL } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="size-2.5 rounded-full bg-brand transition-transform duration-300 group-hover:scale-125" />
          Siva S M
        </Link>

        <div className="flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-all duration-300 hover:bg-brand hover:text-brand-foreground"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
