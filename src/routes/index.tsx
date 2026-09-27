import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/editorial-hero.jpg";
import chatbot from "@/assets/editorial-chatbot.jpg";
import dashboard from "@/assets/editorial-dashboard.jpg";
import portfolio from "@/assets/editorial-portfolio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radhika Lohra — AI, data & thoughtful systems" },
      { name: "description", content: "The portfolio of Radhika Lohra. Explore selected work in AI, NLP, cloud systems, and web design." },
      { property: "og:title", content: "Radhika Lohra — AI, data & thoughtful systems" },
      { property: "og:description", content: "Selected work and experience in AI, NLP, data, and cloud systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    number: "01", title: "Educational Chatbot", category: "AI & LANGUAGE", image: chatbot,
    alt: "Amber and ivory glass forms evoking conversation",
    description: "An NLP-powered assistant that understands student questions, recognizes intent, and generates relevant responses.",
    tags: ["Python", "NLP", "Intent recognition"],
  },
  {
    number: "02", title: "Cloud Security Dashboard", category: "CLOUD & SECURITY", image: dashboard,
    alt: "Layered metal and frosted glass forms evoking secure systems",
    description: "A clearer view of cloud security compliance, with functionality tested and refined to help track policy adherence.",
    tags: ["Cloud security", "Dashboard", "Testing"],
  },
  {
    number: "03", title: "Personal Portfolio", category: "WEB & DESIGN", image: portfolio,
    alt: "Layered paper frames and translucent glass evoking web design",
    description: "A responsive website built to bring projects and technical skills together in one thoughtful experience.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const skills = ["Python", "SQL", "Power BI", "NLP", "Machine Learning", "Linux", "HTML / CSS / JS", "Apache / Nginx", "Data analysis"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative z-10 border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="font-display text-2xl leading-none text-foreground" aria-label="Radhika Lohra, back to top">Radhika Lohra<span className="text-accent-foreground">.</span></a>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-foreground" href="#work">Work</a>
            <a className="transition-colors hover:text-foreground" href="#experience">Experience</a>
            <a className="transition-colors hover:text-foreground" href="#about">About</a>
          </nav>
          <Button asChild variant="portfolioDark" size="portfolio"><a href="mailto:radhikalohra21@gmail.com">Let’s talk <ArrowUpRight /></a></Button>
        </div>
      </header>

      <main id="top">
        <section className="editorial-hero relative isolate flex min-h-[570px] items-end overflow-hidden sm:min-h-[620px] lg:min-h-[660px]">
          <img src={hero} alt="Amber glass sculpture and paper in warm afternoon light" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[64%_center]" />
          <div className="editorial-hero-wash absolute inset-0 -z-10" />
          <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-24 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-foreground sm:mb-8">AI & ML · Jodhpur, India</p>
            <h1 className="max-w-[760px] font-display text-6xl leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">Radhika<br /><em className="font-normal">Lohra.</em></h1>
            <div className="mt-8 flex max-w-xl flex-col gap-7 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-sm text-base leading-relaxed text-foreground sm:text-lg">Making intelligent systems feel a little more human.</p>
              <Button asChild variant="portfolioDark" size="portfolio"><a href="#work">Explore work <ArrowDown /></a></Button>
            </div>
          </div>
          <span className="absolute bottom-7 right-5 hidden text-xs font-semibold uppercase tracking-widest text-foreground/75 sm:right-8 lg:block">01 / A portfolio of ideas</span>
        </section>

        <section aria-label="At a glance" className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
            {[["02", "Industry internships"], ["03", "Featured projects"], ["20", "Volunteers led"], ["500+", "Event attendees"]].map(([value, label]) => (
              <div key={label} className="border-r border-border px-4 py-7 first:pl-0 even:border-r-0 sm:py-9 lg:even:border-r lg:last:border-r-0 lg:px-8 lg:first:pl-0">
                <p className="font-display text-4xl leading-none text-foreground sm:text-5xl">{value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-10 flex items-end justify-between border-b border-border pb-6 sm:mb-14">
              <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">01 / Selected work</p><h2 className="font-display text-5xl text-foreground sm:text-7xl">Work, <em>considered.</em></h2></div>
              <span className="hidden text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:block">2024 — 2026</span>
            </div>
            <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
              {projects.map((project, i) => (
                <article key={project.number} className={i === 0 ? "md:col-span-2" : ""}>
                  <div className="overflow-hidden bg-muted"><img src={project.image} alt={project.alt} loading="lazy" width={1024} height={768} className={`w-full object-cover transition-transform duration-700 hover:scale-[1.025] ${i === 0 ? "aspect-[16/9] max-h-[620px]" : "aspect-[4/3]"}`} /></div>
                  <div className="mt-5 flex gap-5 border-t border-border pt-5 sm:gap-8">
                    <span className="pt-1 text-xs font-semibold text-muted-foreground">{project.number} / 03</span>
                    <div className="min-w-0 flex-1"><p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{project.category}</p><h3 className="font-display text-3xl text-foreground sm:text-4xl">{project.title}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{project.description}</p><div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-accent-foreground">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-8 bg-primary py-20 text-primary-foreground sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/65">02 / Experience</p><h2 className="font-display text-5xl leading-none sm:text-7xl">The work<br /><em>behind the work.</em></h2><p className="mt-7 max-w-sm leading-relaxed text-primary-foreground/70">From language models to Linux systems, I’m drawn to useful technology and the details that make it work.</p></div>
              <div className="space-y-10 lg:pt-3">
                <article className="border-t border-primary-foreground/30 pt-5"><div className="flex flex-wrap justify-between gap-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground/65"><span>Cloud Minister</span><span>May — Jul 2025</span></div><h3 className="mt-5 font-display text-3xl sm:text-4xl">Linux Administration Intern</h3><p className="mt-4 max-w-xl leading-relaxed text-primary-foreground/75">Managed Linux server users and permissions, supported Apache and Nginx hosting environments, and troubleshot configuration and access issues through SSH and WHM/cPanel.</p></article>
                <article className="border-t border-primary-foreground/30 pt-5"><div className="flex flex-wrap justify-between gap-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground/65"><span>DreamTeam Technologies</span><span>May — Jun 2024</span></div><h3 className="mt-5 font-display text-3xl sm:text-4xl">AI Intern</h3><p className="mt-4 max-w-xl leading-relaxed text-primary-foreground/75">Helped create a client-facing chatbot for student queries, applying intent recognition, query classification and NLP to improve how it understood and answered academic questions.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-12">
            <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">03 / About</p><h2 className="font-display text-5xl sm:text-7xl">Curiosity, <em>in practice.</em></h2><p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">I studied Computer Science & Engineering with a focus on AI and Machine Learning at JIET Group of Institutes. I’m as interested in how technology works as I am in how people experience it.</p><p className="mt-5 max-w-md leading-relaxed text-muted-foreground">Outside of code, I led a team of 20 volunteers to bring a freshers’ program to life for over 500 students, and helped organize campus events as a student council member.</p></div>
            <div className="space-y-10 lg:pt-6">
              <div className="border-t border-border pt-5"><p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">Education / 2022 — 2026</p><h3 className="mt-4 font-display text-3xl">B.Tech, Computer Science & Engineering</h3><p className="mt-2 text-muted-foreground">AI & ML · JIET Group of Institutes · Jodhpur, India</p></div>
              <div id="skills" className="scroll-mt-8 border-t border-border pt-5"><p className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">What I work with</p><div className="flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="border border-border bg-surface px-3 py-2 text-sm text-foreground">{skill}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-foreground/70">04 / Get in touch</p><h2 className="max-w-4xl font-display text-5xl leading-none text-secondary-foreground sm:text-7xl lg:text-8xl">Let’s make something <em>matter.</em></h2><p className="mt-7 max-w-lg leading-relaxed text-secondary-foreground/80">Have an opportunity, a question, or just want to say hello? I’d love to hear from you.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="portfolioDark" size="portfolio"><a href="mailto:radhikalohra21@gmail.com"><Mail /> Email me <ArrowUpRight /></a></Button><Button asChild variant="portfolioLight" size="portfolio"><a href="https://www.linkedin.com/in/radhika-lohra" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a></Button></div></div>
        </section>
      </main>
      <footer className="border-t border-border bg-background"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:px-8 lg:px-12"><span>© {new Date().getFullYear()} Radhika Lohra</span><span>Jodhpur, India</span></div></footer>
    </div>
  );
}
