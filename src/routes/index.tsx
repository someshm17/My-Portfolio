import { createFileRoute } from "@tanstack/react-router";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageSquareMore,
  Phone,
  X,
  Award,
  FileBadge,
  Users,
} from "lucide-react";

import portrait from "@/assets/somesh.png";
import resume from "@/assets/Resume.pdf";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Somesh Muttinkantimath — Software Developer",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
      {
        name: "description",
        content:
          "Portfolio of Somesh Muttinkantimath, a 2026 CSE graduate and full-stack, Java and AI-focused software developer based in Bengaluru.",
      },
      {
        property: "og:title",
        content: "Somesh Muttinkantimath — Software Developer",
      },
      {
        property: "og:description",
        content:
          "Full-stack, Java and AI-focused software developer based in Bengaluru, India.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: Index,
});

const EMAIL = "somesh.muttin@gmail.com";

const LINKEDIN =
  "https://www.linkedin.com/in/somesh-muttinkantimath/";

const GITHUB = "https://github.com/someshm17";

/* =========================
   EMAILJS CONFIGURATION
   ========================= */

const EMAILJS_SERVICE_ID = "service_okm7yat";
const EMAILJS_TEMPLATE_ID = "template_124gib1";
const EMAILJS_PUBLIC_KEY = "ZleVuKoBND3Z2BWZ2";

const NAV = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Work", "#work"],
  ["Services", "#services"],
  ["Achievements", "#achievements"],
  ["Contact", "#contact"],
];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting &&
            entry.target.classList.add("in")
        ),
      { threshold: 0.12 }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((element) => io.observe(element));

    return () => io.disconnect();
  }, []);
}

function Socials({ vertical }: { vertical?: boolean }) {
  const cls =
    "text-muted-foreground transition hover:-translate-y-0.5 hover:text-primary";

  return (
    <div
      className={`flex ${
        vertical ? "flex-col gap-6" : "gap-5"
      }`}
    >
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className={cls}
      >
        <Linkedin size={22} strokeWidth={1.5} />
      </a>

      <a
        href={GITHUB}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className={cls}
      >
        <Github size={22} strokeWidth={1.5} />
      </a>

      <a
        href="https://mail.google.com/mail/u/0/#inbox?compose=new"
        target="_blank"
        rel="noreferrer"
        aria-label="Email"
        className={cls}
      >
        <Mail size={22} strokeWidth={1.5} />
      </a>
    </div>
  );
}

function SectionRule() {
  return (
    <div className="relative">
      <div className="h-px w-full bg-gradient-to-r from-primary/70 via-border to-transparent" />

      <span className="absolute -left-0.5 -top-[3.5px] h-2 w-2 rotate-45 bg-primary" />
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  className,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl px-6 pb-16 pt-4 md:px-10 md:pb-24 ${
        className ?? ""
      }`}
    >
      <SectionRule />

      <div className="reveal mb-10 mt-12 md:mb-12 md:mt-14">
        <p className="mb-3 text-sm text-primary">{eyebrow}</p>

        <h2 className="font-display text-4xl md:text-5xl">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}

function Index() {
  useReveal();

  /* =========================
     CONTACT FORM STATE
     ========================= */

  const formRef = useRef<HTMLFormElement>(null);

  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  /* =========================
     EMAILJS FORM SUBMISSION
     ========================= */

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setSending(true);
    setSent(false);
    setError(false);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setSent(true);
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="bg-background text-foreground">
      {/* =========================
          HEADER
          ========================= */}

      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-8 md:px-16">
          <a
            href="#"
            className="relative text-2xl font-medium tracking-wide"
          >
            Somesh
            <span className="text-primary">.</span>

            <span className="absolute -bottom-2 right-0 h-1.5 w-1.5 rotate-45 bg-primary" />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noreferrer"
            className="ml-16 hidden text-sm hover:text-primary md:block"
          >
            {EMAIL}
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="group ml-auto flex flex-col items-end gap-1.5 p-2"
          >
            <span className="h-0.5 w-8 bg-foreground" />
            <span className="h-0.5 w-6 bg-foreground transition-all group-hover:w-8" />
            <span className="h-0.5 w-7 bg-foreground" />
          </button>
        </div>
      </header>

      {/* =========================
          MOBILE MENU
          ========================= */}

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/95 px-6 py-8 backdrop-blur md:px-16">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="ml-auto p-2 hover:text-primary"
          >
            <X size={30} />
          </button>

          <nav className="mx-auto mt-10 flex flex-col items-center gap-6">
            {NAV.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  animationDelay: `${index * 60}ms`,
                }}
                className="animate-rise font-display text-4xl hover:text-primary md:text-6xl"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* =========================
          HERO
          ========================= */}

      <section className="relative min-h-screen overflow-hidden">
        {/* Desktop portrait */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-8 hidden justify-center md:-top-12 md:flex md:translate-x-[11%] lg:translate-x-[5%] xl:translate-x-[2%]">
          <img
            src={portrait}
            alt="Portrait of Somesh Muttinkantimath"
            className="animate-portrait portrait-mask h-full max-h-[1000px] w-auto max-w-none object-cover object-top md:opacity-100"
          />
        </div>

        {/* Bottom fade */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        {/* Decorative elements */}

        <div className="animate-float absolute right-[22%] top-[10%] hidden lg:block">
          <div className="h-16 w-16 rounded-full border-[3px] border-accent" />

          <div className="absolute -right-2 -top-1 h-7 w-7 rounded-full border-[3px] border-primary" />
        </div>

        <div className="animate-float absolute right-[7%] top-[17%] hidden h-9 w-9 rounded-full bg-accent [animation-delay:1.5s] lg:block" />

        <div className="animate-float absolute left-[4%] top-[72%] hidden h-2 w-2 rotate-45 bg-primary [animation-delay:3s] xl:block" />

        {/* Hero content */}

       <div className="relative z-10 mx-auto grid min-h-0 w-full max-w-7xl grid-cols-1 items-start gap-10 overflow-x-hidden px-6 pb-20 pt-28 md:min-h-screen md:overflow-visible md:pt-[11vh] md:grid-cols-[1fr_1fr_1fr] md:px-16 md:pb-[14vh] lg:pt-[10vh]">
          {/* Left */}

          <div className="animate-rise">
            <h1 className="max-w-full break-words font-display text-[clamp(3rem,11.5vw,4.5rem)] font-bold leading-[0.98] md:text-4xl md:leading-[1.15] lg:text-5xl xl:text-6xl">
              Hi,
              <br />
              I’m <span className="text-primary">Somesh</span>
              <br />
              <span className="text-primary">
                Muttinkantimath
              </span>
            </h1>

            <p className="mt-4 text-xl md:mt-5 md:text-2xl">
              Software Developer
            </p>

            <a
              href="#work"
              className="group mt-8 inline-flex max-w-full items-center gap-4 rounded-md bg-primary py-1.5 pl-5 pr-1.5 text-primary-foreground shadow-[0_10px_30px_-10px_var(--primary)] transition hover:-translate-y-0.5 md:mt-12"
            >
              View My Work

              <span className="rounded bg-primary-foreground/25 px-3 py-2 transition group-hover:translate-x-0.5">
                <ArrowRight size={18} />
              </span>
            </a>
          </div>

          {/* Mobile portrait */}

          <div className="relative z-0 -my-2 flex h-[420px] items-center justify-center md:hidden">
            <img
              src={portrait}
              alt="Portrait of Somesh Muttinkantimath"
              className="animate-portrait portrait-mask h-full w-auto max-w-[94vw] object-contain object-top opacity-55"
            />
          </div>

          {/* Center spacing for portrait */}

          <div className="hidden md:block" />

          {/* Right */}

          <div className="animate-rise [animation-delay:250ms]">
            <p className="text-primary">Expert on</p>

            <p className="mt-3 max-w-md text-xl font-medium leading-snug md:max-w-none md:text-xl lg:text-2xl xl:text-[1.7rem]">
              Based in Bengaluru, India — I’m a full-stack &amp;
              Java developer.
            </p>

            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground md:mt-7 md:max-w-none">
              A Computer Science graduate and Software Developer
              focused on building practical, responsive applications
              and solving problems with clean, efficient solutions.
            </p>

            <a
              href={resume}
              download="Somesh_Muttinkantimath_Resume.pdf"
              className="mt-9 inline-flex items-center gap-1.5 border-b border-primary pb-1 text-primary transition hover:gap-2.5"
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>
        </div>

        {/* Hero bottom social links */}

        <div className="relative z-10 mt-10 flex items-end gap-6 px-0 pb-2 md:absolute md:bottom-10 md:left-16 md:mt-0 md:gap-16 md:px-0 md:pb-0">
          <div className="hidden md:block">
            <Socials vertical />
          </div>

          <div className="md:hidden">
            <Socials />
          </div>

          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-3 text-sm hover:text-primary lg:flex"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary">
              <Github size={14} />
            </span>

            github.com/someshm17
          </a>
        </div>

        {/* Let's Chat */}

        <a
          href="#contact"
          className="relative z-10 mx-6 mt-6 flex items-center gap-3 self-end text-sm hover:text-primary md:absolute md:bottom-10 md:right-16 md:mx-0 md:mt-0"
        >
          Let’s Chat

          <span className="relative">
            <MessageSquareMore size={30} />

            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-signal" />
          </span>
        </a>
      </section>

      {/* =========================
          ABOUT
          ========================= */}

      <Section
        id="about"
        eyebrow="Who I am"
        title="About Me"
        className="pt-10 md:pt-12"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div className="reveal space-y-6 border-l border-primary pl-6">
            <div>
              <p className="font-display text-3xl">
                B.Tech CSE
              </p>

              <p className="text-sm text-muted-foreground">
                Presidency University, Bangalore
              </p>
            </div>

            <div>
              <p className="font-display text-3xl">
                2022 – 2026
              </p>

              <p className="text-sm text-primary">
                2026 Graduate
              </p>
            </div>
          </div>

          <div className="reveal space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="text-foreground">
                I’m Somesh Muttinkantimath
              </span>
              , a Computer Science graduate and Software Developer
              with a strong foundation in Java, DSA, OOP, and
              full-stack web development. I enjoy building
              responsive, practical applications.
            </p>

            <p>
              With experience in React, Node.js, Express, MongoDB,
              and SQL, along with AI integration, I’m passionate
              about learning, creating, and turning ideas into
              impactful technology.
            </p>
          </div>
        </div>
      </Section>

      {/* =========================
          SKILLS
          ========================= */}

      <Section id="skills" eyebrow="Toolkit" title="Skills">
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Programming & CS",
              ["Java", "JavaScript", "DSA", "OOP"],
            ],
            ["Frontend", ["HTML", "CSS", "React.js"]],
            ["Backend", ["Node.js", "Express.js"]],
            ["Database", ["MongoDB", "MySQL", "SQL"]],
            ["Tools", ["Git", "GitHub"]],
            [
              "Development",
              ["Full-Stack Development", "AI Integration"],
            ],
          ].map(([group, items], index) => (
            <div
              key={group as string}
              className="reveal group bg-background p-8 transition hover:bg-card"
            >
              <p className="mb-5 text-xs tracking-[0.2em] text-muted-foreground">
                0{index + 1} —{" "}
                {(group as string).toUpperCase()}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {(items as string[]).map((skill) => (
                  <span
                    key={skill}
                    className="font-display text-2xl transition group-hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================
          WORK
          ========================= */}

      <Section
        id="work"
        eyebrow="Projects"
        title="Selected Work"
      >
        <div className="space-y-6">
          {[
            {
              n: "GENAI — Generative AI Chatbot",
              s: "Full-Stack AI Chatbot",
              d: "A conversational AI interface with full-stack architecture, OpenAI integration and persistent chat history in a database.",
              t: "React.js · Node.js · Express.js · MongoDB · OpenAI API",
            },
            {
              n: "Digital-Legal Marketplace",
              s: "Full-Stack Legal Services Platform",
              d: "A full-stack platform connecting clients with lawyers through legal service discovery, lawyer matching, KYC, appointment scheduling, document management, verification, and payment workflows.",
              t: "React.js · Node.js · Express.js · REST APIs · Multer",
            },
            {
              n: "Patient Care System",
              s: "Healthcare Management Platform",
              d: "Manages health records, appointments and treatment tracking, with location-aware features.",
              t: "Java · React.js · MySQL · Geolocation API",
            },
          ].map((project, index) => (
            <article
              key={project.n}
              className="reveal group relative overflow-hidden rounded-lg border border-border p-8 transition hover:-translate-y-1 hover:border-primary/40 md:p-12"
            >
              <div className="relative grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start">
                <span className="font-display text-5xl text-muted-foreground/40">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="font-display text-3xl md:text-4xl">
                    {project.n}
                  </h3>

                  <p className="mt-1 text-primary">
                    {project.s}
                  </p>

                  <p className="mt-4 max-w-2xl text-muted-foreground">
                    {project.d}
                  </p>

                  <p className="mt-5 text-sm tracking-wide text-foreground/80">
                    {project.t}
                  </p>
                </div>

                <ArrowRight
                  className="hidden -rotate-45 text-muted-foreground transition group-hover:rotate-0 group-hover:text-primary md:block"
                  size={28}
                />
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* =========================
          SERVICES
          ========================= */}

      <Section
        id="services"
        eyebrow="Services"
        title="What I Do"
      >
        <div className="divide-y divide-border border-y border-border">
          {[
            [
              "Full-Stack Web Development",
              "Building complete web applications across frontend, backend, APIs, and databases.",
            ],
            [
              "Frontend Development",
              "Responsive and interactive interfaces using React.js and modern web technologies.",
            ],
            [
              "Backend Development",
              "Server-side applications and APIs using Node.js, Express.js, and Java.",
            ],
            [
              "AI-Powered Applications",
              "Integrating AI APIs and intelligent functionality into practical applications.",
            ],
            [
              "Java Software Development",
              "Building reliable software using Java, OOP, and strong problem-solving fundamentals.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="reveal group grid gap-3 py-8 transition hover:pl-4 md:grid-cols-2"
            >
              <h3 className="font-display text-2xl transition group-hover:text-primary md:text-3xl">
                {title}
              </h3>

              <p className="text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================
          ACHIEVEMENTS
          ========================= */}

      <Section
        id="achievements"
        eyebrow="Recognition & Leadership"
        title="Achievements"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              i: FileBadge,
              k: "Patent",
              t: "Automated Billing System",
              d: "Patent Application No. 202441075454",
            },
            {
              i: Award,
              k: "Competition",
              t: "Runners-Up — Anveshana 2025–26",
              d: "For JALSETU Smart Irrigation System",
            },
            {
              i: Users,
              k: "Leadership",
              t: "Social Media Head",
              d: "AeroDrone Club, Presidency University — content strategy, social media management, digital communication and team collaboration.",
            },
          ].map(({ i: Icon, k, t, d }) => (
            <div
              key={k}
              className="reveal rounded-lg border border-border p-8 transition hover:border-primary/50"
            >
              <Icon
                className="text-accent"
                size={26}
                strokeWidth={1.5}
              />

              <p className="mt-6 text-sm text-primary">
                {k}
              </p>

              <h3 className="mt-2 font-display text-2xl">
                {t}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================
          CONTACT
          ========================= */}

      <section id="contact" className="relative overflow-hidden">
        <div className="animate-float absolute right-[8%] top-24 h-24 w-24 rounded-full border-[3px] border-accent/60" />

        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <SectionRule />
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-12 md:grid-cols-2 md:px-10 md:pb-24 md:pt-14">
          {/* Contact information */}

          <div className="reveal">
            <p className="mb-3 text-sm text-primary">
              Contact
            </p>

            <h2 className="font-display text-5xl leading-tight md:text-6xl">
              Let’s Build Something{" "}
              <span className="text-primary">
                Together.
              </span>
            </h2>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex min-w-0 items-start gap-3 text-lg hover:text-primary"
              >
                <Mail size={20} className="mt-1 shrink-0" />
                <span className="break-all md:break-normal">
                  {EMAIL}
                </span>
              </a>

              <a
                href="tel:+918867074560"
                className="flex items-center gap-3 text-lg hover:text-primary"
              >
                <Phone size={20} />
                +91 8867074560
              </a>
            </div>

            <div className="mt-10">
              <Socials />
            </div>
          </div>

          {/* Contact form */}

          <form
            ref={formRef}
            onSubmit={submit}
            className="reveal space-y-6"
          >
            {[
              ["name", "Name", "text"],
              ["email", "Email", "email"],
            ].map(([name, label, type]) => (
              <label
                key={name}
                className="block"
              >
                <span className="text-sm text-muted-foreground">
                  {label}
                </span>

                <input
                  required
                  name={name}
                  type={type}
                  maxLength={120}
                  className="mt-2 w-full border-b border-input bg-transparent py-3 outline-none transition focus:border-primary"
                />
              </label>
            ))}

            <label className="block">
              <span className="text-sm text-muted-foreground">
                Message
              </span>

              <textarea
                required
                name="message"
                rows={4}
                maxLength={2000}
                className="mt-2 w-full resize-none border-b border-input bg-transparent py-3 outline-none transition focus:border-primary"
              />
            </label>

            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center gap-4 rounded-md bg-primary py-1.5 pl-5 pr-1.5 text-primary-foreground transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}

              <span className="rounded bg-primary-foreground/25 px-3 py-2">
                <ArrowRight size={18} />
              </span>
            </button>

            {/* Success message */}

            {sent && (
              <p className="text-sm text-accent">
                Message sent successfully! I’ll get back to you soon.
              </p>
            )}

            {/* Error message */}

            {error && (
              <p className="text-sm text-destructive">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* =========================
          FOOTER
          ========================= */}

      <footer>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <SectionRule />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-10">
          <div>
            <p className="font-medium">
              Somesh Muttinkantimath
            </p>

            <p className="text-sm text-muted-foreground">
              Software Developer · Full-Stack Developer · AI Enthusiast
            </p>
          </div>

          <Socials />
        </div>
      </footer>
    </main>
  );
}