import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import robot from "@/assets/hero-robot.jpg";
import chatbot from "@/assets/chatbot.jpg";
import dashboard from "@/assets/dashboard.jpg";
import portfolio from "@/assets/portfolio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radhika Lohra — AI, ML & thoughtful technology" },
      { name: "description", content: "The portfolio of Radhika Lohra, a computer science graduate working across AI, NLP, data, and Linux systems." },
      { property: "og:title", content: "Radhika Lohra — AI, ML & thoughtful technology" },
      { property: "og:description", content: "Explore Radhika's projects, experience, and work in AI, NLP, data, and Linux systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    number: "01", title: "Educational Chatbot", category: "AI & LANGUAGE", image: chatbot,
    alt: "Pastel clay speech bubbles representing a conversational assistant",
    description: "An NLP-powered assistant that understands student questions, recognizes intent, and generates relevant responses.",
    tags: ["Python", "NLP", "Intent recognition"], tint: "bg-peach/25",
  },
  {
    number: "02", title: "Cloud Security Dashboard", category: "CLOUD & SECURITY", image: dashboard,
    alt: "Pastel clay security dashboard with a shield and simple charts",
    description: "A clearer view of cloud security compliance, with functionality tested and refined to help track policy adherence.",
    tags: ["Cloud security", "Dashboard", "Testing"], tint: "bg-sky/25",
  },
  {
    number: "03", title: "Personal Portfolio", category: "WEB & DESIGN", image: portfolio,
    alt: "Pastel clay laptop showing a simple colorful website layout",
    description: "A responsive website built to bring projects and technical skills together in one thoughtful experience.",
    tags: ["HTML", "CSS", "JavaScript"], tint: "bg-lilac/25",
  },
];

const skills = [
  { label: "Python", color: "bg-surface" }, { label: "SQL", color: "bg-mint/45" },
  { label: "Power BI", color: "bg-sky/45" }, { label: "NLP", color: "bg-lilac/45" },
  { label: "Machine Learning", color: "bg-butter/55" }, { label: "Linux", color: "bg-peach/45" },
  { label: "HTML / CSS / JS", color: "bg-surface" }, { label: "Apache / Nginx", color: "bg-mint/45" },
  { label: "Data analysis", color: "bg-sky/45" },
];

function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-6 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3 font-display text-lg font-semibold text-foreground" aria-label="Radhika Lohra, back to top">
          <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-peach text-foreground peach-shadow">R</span>
          <span>Radhika Lohra<span className="text-peach">.</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold text-muted-foreground md:flex" aria-label="Main navigation">
          <a className="transition-colors hover:text-foreground" href="#work">Work</a>
          <a className="transition-colors hover:text-foreground" href="#experience">Experience</a>
          <a className="transition-colors hover:text-foreground" href="#skills">Skills</a>
          <a className="transition-colors hover:text-foreground" href="#about">About</a>
        </nav>
        <Button asChild variant="portfolioDark" size="portfolio" className="hidden sm:inline-flex"><a href="mailto:radhikalohra21@gmail.com">Get in touch <ArrowUpRight /></a></Button>
        <a href="#work" className="font-bold text-sm text-foreground sm:hidden">Explore <ArrowDownRight className="ml-1 inline size-4" /></a>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-14 pt-10 sm:px-8 md:grid-cols-12 md:pt-16 lg:gap-12 lg:px-12 lg:pb-24">
          <div className="reveal-in md:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-mint/45 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-foreground">
              <span className="size-2 rounded-full bg-foreground" /> AI & ML · Jodhpur, India
            </div>
            <h1 className="max-w-[10ch] font-display text-6xl font-semibold leading-[0.98] text-foreground sm:text-7xl lg:text-[5.9rem] xl:text-[6.7rem]">
              Hi, I’m <span className="text-foreground">Radhika</span><span className="text-peach">.</span>
            </h1>
            <p className="mt-7 max-w-xl font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              Making intelligent systems feel a little more human.
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              I’m a computer science graduate exploring the space between AI, language, data and reliable infrastructure. I like solving real problems with thoughtful technology.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild variant="portfolioPeach" size="portfolio"><a href="#work">Explore my work <ArrowRight /></a></Button>
              <Button asChild variant="portfolioLight" size="portfolio"><a href="mailto:radhikalohra21@gmail.com"><Mail /> Say hello</a></Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md md:col-span-5 md:max-w-none">
            <div className="hero-float relative overflow-hidden rounded-[2rem] border-[12px] border-surface bg-surface soft-shadow sm:border-[16px]">
              <img src={robot} alt="A friendly pastel clay robot" width={1024} height={1024} className="aspect-square w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-bold text-foreground soft-shadow sm:flex"><span className="size-2 rounded-full bg-mint" /> Curious by nature</div>
          </div>
        </section>

        <section aria-label="At a glance" className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 pb-20 sm:gap-5 sm:px-8 md:grid-cols-4 lg:px-12">
          {[
            ["02", "Industry internships", "bg-mint/45"], ["03", "Featured projects", "bg-sky/45"],
            ["20", "Volunteers led", "bg-lilac/45"], ["500+", "Event attendees", "bg-butter/55"],
          ].map(([value, label, color]) => (
            <div key={label} className={`${color} min-h-32 rounded-2xl px-5 py-6 sm:px-7`}>
              <p className="font-display text-4xl font-semibold text-foreground sm:text-5xl">{value}</p>
              <p className="mt-1 text-sm font-bold text-muted-foreground">{label}</p>
            </div>
          ))}
        </section>

        <section id="work" className="scroll-mt-10 bg-surface/60 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div><p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">A LITTLE OF WHAT I DO</p><h2 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">Selected work<span className="text-peach">.</span></h2></div>
              <span className="hidden text-sm font-bold text-muted-foreground sm:block">01 — 03</span>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {projects.map((project) => (
                <article key={project.number} className="group overflow-hidden rounded-2xl border border-border/60 bg-surface soft-shadow transition-transform duration-300 hover:-translate-y-1">
                  <div className={`${project.tint} overflow-hidden`}><img src={project.image} alt={project.alt} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" /></div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between text-[11px] font-extrabold tracking-[0.14em] text-muted-foreground"><span>{project.category}</span><span>{project.number} / 03</span></div>
                    <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-foreground">{project.title}</h3>
                    <p className="mt-3 min-h-20 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-muted px-3 py-1.5 text-xs font-bold text-foreground">{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-start lg:gap-16">
            <div><p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">THE TOOLKIT</p><h2 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">Things I work with<span className="text-peach">.</span></h2><p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">From making sense of data to keeping systems running, I enjoy working across the whole stack of a problem.</p></div>
            <div className="flex flex-wrap gap-3 lg:pt-6">{skills.map((skill) => <span key={skill.label} className={`${skill.color} rounded-full border border-border/40 px-5 py-3 text-sm font-extrabold text-foreground soft-shadow sm:text-base`}>{skill.label}</span>)}</div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-10 bg-mint/20 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">THE JOURNEY SO FAR</p>
            <h2 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">Experience<span className="text-peach">.</span></h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <article className="border-t border-border pt-6"><div className="flex flex-wrap items-start justify-between gap-2"><span className="rounded-full bg-sky/50 px-3 py-1 text-xs font-extrabold text-foreground">SYSTEMS</span><span className="text-sm font-bold text-muted-foreground">May — Jul 2025</span></div><h3 className="mt-5 font-display text-2xl font-semibold text-foreground">Linux Administration Intern</h3><p className="mt-1 font-bold text-foreground">Cloud Minister</p><p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">Managed Linux server users and permissions, supported Apache and Nginx hosting environments, and troubleshot configuration and access issues through SSH and WHM/cPanel.</p></article>
              <article className="border-t border-border pt-6"><div className="flex flex-wrap items-start justify-between gap-2"><span className="rounded-full bg-peach/50 px-3 py-1 text-xs font-extrabold text-foreground">AI & LANGUAGE</span><span className="text-sm font-bold text-muted-foreground">May — Jun 2024</span></div><h3 className="mt-5 font-display text-2xl font-semibold text-foreground">AI Intern</h3><p className="mt-1 font-bold text-foreground">DreamTeam Technologies</p><p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">Helped create a client-facing chatbot for student queries, applying intent recognition, query classification and NLP to improve how it understood and answered academic questions.</p></article>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-10 mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div><p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">BEYOND THE SCREEN</p><h2 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">A bit about me<span className="text-peach">.</span></h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">I studied Computer Science & Engineering with a focus on AI and Machine Learning at JIET Group of Institutes. I’m as interested in how technology works as I am in how people experience it.</p><p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">Outside of code, I led a team of 20 volunteers to bring a freshers’ program to life for over 500 students, and helped organize campus events as a student council member.</p></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:items-start lg:pt-10">
            <div className="rounded-2xl bg-lilac/35 p-6"><span className="text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">EDUCATION</span><h3 className="mt-5 font-display text-xl font-semibold text-foreground">B.Tech, Computer Science & Engineering</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">AI & ML · JIET Group of Institutes<br />2022 — 2026</p></div>
            <div className="rounded-2xl bg-butter/40 p-6"><span className="text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">ROOTED IN</span><MapPin className="mt-5 size-6 text-foreground" /><h3 className="mt-3 font-display text-xl font-semibold text-foreground">Jodhpur, India</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Curious about ideas and opportunities everywhere.</p></div>
          </div>
        </section>

        <section id="contact" className="bg-primary py-20 text-primary-foreground sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-foreground/60">LET’S CONNECT</p><h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">Good ideas start with a conversation<span className="text-peach">.</span></h2><p className="mt-5 max-w-xl text-lg text-primary-foreground/70">Have an opportunity, a question, or just want to say hello? I’d love to hear from you.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="portfolioPeach" size="portfolio"><a href="mailto:radhikalohra21@gmail.com"><Mail /> Email me <ArrowUpRight /></a></Button><Button asChild variant="portfolioInverse" size="portfolio"><a href="https://www.linkedin.com/in/radhika-lohra" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a></Button></div></div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground/55"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 border-t border-primary-foreground/15 px-5 py-6 text-xs font-bold sm:flex-row sm:px-8 lg:px-12"><span>© {new Date().getFullYear()} Radhika Lohra</span><span>Made with curiosity · Jodhpur, India</span></div></footer>
    </div>
  );
}
