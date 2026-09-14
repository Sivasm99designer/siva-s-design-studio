import { contact, RESUME_URL } from "@/data/site";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.25em] text-accent">Get in touch</p>
        <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Let's build something{" "}
          <span className="text-brand">people actually enjoy</span> using.
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-2 block text-base hover:text-brand"
            >
              {contact.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-2 block text-base hover:text-brand">
              {contact.phone}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Social</p>
            <div className="mt-2 flex flex-col gap-1">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand">
                LinkedIn
              </a>
              <a href={contact.behance} target="_blank" rel="noreferrer" className="hover:text-brand">
                Behance
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Resume</p>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="mt-2 block hover:text-brand">
              View / download PDF
            </a>
          </div>
        </div>

        <p className="mt-16 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Siva S M — Product & UI/UX Designer
        </p>
      </div>
    </footer>
  );
}
