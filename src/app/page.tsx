import type { JSX } from "react";
import Image from "next/image";

/* ── Icon primitives ── */
function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden="true">
      <path d="M12 21s-9-6.5-9-12.5C3 5.42 5.42 3 8.5 3c1.74 0 3.31.81 3.5 1 .19-.19 1.76-1 3.5-1C18.58 3 21 5.42 21 8.5 21 14.5 12 21 12 21z" />
    </svg>
  );
}

function IVIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 stroke-blue-600"
      role="img"
      aria-label="IV drip representing total parenteral nutrition"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="6" y="4" width="12" height="4" rx="1" />
      <path d="M12 8v5" />
      <path d="M9 13h6" />
      <path d="M10.5 13c0 3.5-2.5 5-2.5 8" />
      <path d="M13.5 13c0 3.5 2.5 5 2.5 8" />
    </svg>
  );
}

function StethoscopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 stroke-teal-600"
      role="img"
      aria-label="Stethoscope representing pediatric clinical reference"
    >
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

/* ── Project card data ── */
interface Project {
  href: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  url: string;
  variant: "tpn" | "peds";
  icon: JSX.Element;
}

const projects: Project[] = [
  {
    href: "https://tpn.neopeds.org",
    tag: "Neonatology",
    title: "TPN Calculator",
    description:
      "Total parenteral nutrition calculator tailored for neonates. Compute macronutrient, fluid, and electrolyte requirements with weight-based dosing and NICU-specific guidelines.",
    features: [
      "Fluid & caloric targets by weight and age",
      "Dextrose, amino acid & lipid calculations",
      "Electrolyte and micronutrient dosing",
      "Printable / shareable output",
    ],
    url: "tpn.neopeds.org",
    variant: "tpn",
    icon: <IVIcon />,
  },
  {
    href: "https://peds.neopeds.org",
    tag: "Pediatrics",
    title: "Peds Reference",
    description:
      "Pediatric clinical reference and dosing tool. Weight-based drug dosing, vital sign norms by age, and growth chart references for general pediatric and neonatal practice.",
    features: [
      "Weight-based drug dosing by age",
      "Age-stratified vital sign ranges",
      "Growth & developmental milestones",
      "Quick-reference resuscitation data",
    ],
    url: "peds.neopeds.org",
    variant: "peds",
    icon: <StethoscopeIcon />,
  },
];

/* ── Variant style maps ── */
const variantStyles = {
  tpn: {
    tag: "bg-blue-50 text-blue-600 border border-blue-200",
    iconBg: "bg-blue-50",
    topBar: "from-blue-500 to-blue-400",
    dot: "bg-blue-400",
    arrowBg: "bg-blue-50 group-hover:bg-blue-100",
    arrowStroke: "stroke-blue-600",
    hoverBorder: "hover:border-blue-200",
  },
  peds: {
    tag: "bg-teal-50 text-teal-700 border border-teal-200",
    iconBg: "bg-teal-50",
    topBar: "from-teal-500 to-teal-400",
    dot: "bg-teal-400",
    arrowBg: "bg-teal-50 group-hover:bg-teal-100",
    arrowStroke: "stroke-teal-600",
    hoverBorder: "hover:border-teal-200",
  },
};

/* ── Project Card ── */
function ProjectCard({ project }: { project: Project }) {
  const s = variantStyles[project.variant];
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-8 no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/60 ${s.hoverBorder}`}
    >
      {/* Coloured top accent bar */}
      <span
        className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${s.topBar} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
      />

      {/* Icon + Tag row */}
      <div className="flex items-start justify-between gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.iconBg} p-2.5`}>
          {project.icon}
        </div>
        <span className={`rounded-full px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase ${s.tag}`}>
          {project.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
        {project.title}
      </h3>

      {/* Description */}
      <p className="flex-1 text-[0.92rem] leading-relaxed text-slate-500">
        {project.description}
      </p>

      {/* Feature list */}
      <ul className="flex flex-col gap-2">
        {project.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-[0.83rem] text-slate-600">
            <span className={`inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full ${s.dot}`} />
            {f}
          </li>
        ))}
      </ul>

      {/* Footer row */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-[0.78rem] font-semibold text-slate-400">{project.url}</span>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] ${s.arrowBg}`}
        >
          <ArrowUpRightIcon className={`h-3.5 w-3.5 ${s.arrowStroke}`} />
        </div>
      </div>
    </a>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-2.5 no-underline">
            <Image
              src="/logo.png"
              alt="NeoPeds logo — sleeping neonate in a neon heart"
              width={36}
              height={36}
              className="rounded-xl"
              priority
            />
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Neo<span className="text-blue-600">Peds</span>
            </span>
          </a>
          <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-widest text-blue-600">
            Clinical Tools
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mt-16 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-sky-100 px-6 py-24 text-center">
        {/* Radial glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute right-[10%] bottom-[15%] h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-widest text-blue-600">
            <span className="h-px w-7 bg-blue-400" />
            Neonatology &amp; Pediatrics
            <span className="h-px w-7 bg-blue-400" />
          </p>

          <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
            Clinical tools built for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Neonate &amp; Pediatric patients
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-md text-lg leading-relaxed text-slate-500">
            Evidence-based calculators and references designed for neonatal and
            pediatric care teams.
          </p>
        </div>
      </section>

      {/* Tools directory */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-widest text-teal-600">
            Projects
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Available Tools
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.href} project={p} />
          ))}
        </div>
      </section>

      {/* About the Author */}
      <section className="border-t border-slate-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-widest text-teal-600">
              About the Author
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              The clinician behind the tools
            </h2>
          </div>

          <div className="flex flex-col items-center gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:flex-row sm:items-start sm:gap-10">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-2xl font-bold text-white shadow-lg">
                AHB
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Ahmed Hussain Buzaid
              </h3>

              <div className="mt-2 flex flex-wrap justify-center gap-2 sm:justify-start">
                {[
                  "MD",
                  "Neonatologist",
                  "Saudi Fellowship Certified Neonatologist",
                  "Saudi Board Certified Pediatrician",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[0.72rem] font-semibold text-blue-700"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <p className="mt-4 max-w-xl text-[0.94rem] leading-relaxed text-slate-500">
                Dr. Buzaid is a board-certified pediatrician and fellowship-trained
                neonatologist dedicated to improving bedside care through
                accessible, evidence-based clinical tools. NeoPeds was built to
                give care teams fast, reliable references during critical moments
                in the NICU and pediatric ward.
              </p>

              <a
                href="mailto:ahb1117@gmail.com"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-[0.85rem] font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                ahb1117@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="bg-gradient-to-br from-blue-900 to-[#0f3057] px-6 py-16 text-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-10">
          <div className="min-w-[260px] flex-1">
            <h2 className="mb-3 text-2xl font-semibold tracking-tight">
              Built for clinicians, by clinicians
            </h2>
            <p className="max-w-md text-[0.94rem] leading-relaxed text-white/70">
              NeoPeds is a growing suite of free, open clinical decision-support
              tools focused on neonatology and pediatrics. Every tool is built
              with evidence-based guidelines and designed for fast bedside use.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Evidence-Based",
              "NICU-Ready",
              "Mobile Friendly",
              "No Login Required",
              "Free Forever",
              "neopeds.org",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[0.8rem] font-medium text-white/85"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-6 text-center">
        <p className="flex items-center justify-center gap-2 text-[0.82rem] text-slate-400">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-green-500" />
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://neopeds.org"
            className="font-semibold text-blue-600 hover:underline"
          >
            NeoPeds
          </a>
          &nbsp;&mdash; Clinical tools for neonatology &amp; pediatrics. For
          educational and clinical support use only.
        </p>
      </footer>
    </>
  );
}
