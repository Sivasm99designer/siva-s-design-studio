import { Mail, Phone, Linkedin, FileText } from "lucide-react";
import { contact, RESUME_URL } from "@/data/site";

const links = [
  { icon: Mail, label: "Email", href: `mailto:${contact.email}`, value: contact.email },
  { icon: Phone, label: "Phone", href: `tel:${contact.phone.replace(/\s/g, "")}`, value: contact.phone },
  { icon: Linkedin, label: "LinkedIn", href: contact.linkedin, value: "LinkedIn" },
  { icon: FileText, label: "Resume", href: RESUME_URL, value: "View / download PDF" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">Get in touch</p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
              Let's build something <span className="text-brand">people enjoy</span>.
            </h2>
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:bg-brand hover:text-brand-foreground"
          >
            Say hello
          </a>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(({ icon: Icon, label, href, value }) => (
            <a
              key={label}
              href={href}
              target={label === "LinkedIn" || label === "Resume" ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 bg-background p-5 transition-colors hover:bg-surface"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-surface text-muted-foreground transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <Icon className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
                <span className="block truncate text-sm text-foreground">{value}</span>
              </span>
            </a>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Siva S M — Product & UI/UX Designer
        </p>
      </div>
    </footer>
  );
}
