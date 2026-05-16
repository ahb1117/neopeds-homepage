import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeoPeds — Clinical Tools for Neonatology & Pediatrics",
  description:
    "Free, evidence-based clinical decision-support tools for neonatology and pediatrics. TPN calculator for neonates and a pediatric dosing reference.",
};

const tools = [
  {
    href: "https://tpn.neopeds.org",
    tag: "Neonatology",
    tagColor: "bg-primary/10 text-primary",
    title: "TPN Calculator",
    subtitle: "Total Parenteral Nutrition",
    description:
      "Weight-based TPN calculator tailored for neonates and NICU patients. Compute macronutrient, fluid, and electrolyte requirements with evidence-based dosing guidelines.",
    icon: "science",
    iconBg: "bg-primary/5",
    iconColor: "text-primary",
    accentBg: "bg-primary",
    accentText: "text-on-primary",
    borderHover: "hover:border-primary/30",
    features: [
      { icon: "water_drop", label: "Fluid & caloric targets by weight and gestational age" },
      { icon: "biotech", label: "Dextrose, amino acid & lipid calculations" },
      { icon: "monitor_heart", label: "Electrolyte and micronutrient dosing" },
      { icon: "print", label: "Printable & shareable output" },
    ],
    url: "tpn.neopeds.org",
  },
  {
    href: "https://peds.neopeds.org",
    tag: "Pediatrics",
    tagColor: "bg-secondary/10 text-secondary",
    title: "Peds Reference",
    subtitle: "Pediatric Clinical Reference",
    description:
      "Comprehensive pediatric dosing and reference tool. Weight-based drug dosing, vital sign norms by age, and growth chart references for general pediatric and neonatal practice.",
    icon: "stethoscope",
    iconBg: "bg-secondary/5",
    iconColor: "text-secondary",
    accentBg: "bg-secondary",
    accentText: "text-on-secondary",
    borderHover: "hover:border-secondary/30",
    features: [
      { icon: "medication", label: "Weight-based drug dosing by age and indication" },
      { icon: "favorite", label: "Age-stratified vital sign ranges" },
      { icon: "trending_up", label: "Growth & developmental milestones" },
      { icon: "emergency", label: "Quick-reference resuscitation data" },
    ],
    url: "peds.neopeds.org",
  },
];

const badges = [
  { icon: "verified", label: "Evidence-Based" },
  { icon: "emergency", label: "NICU-Ready" },
  { icon: "smartphone", label: "Mobile Friendly" },
  { icon: "lock_open", label: "No Login Required" },
  { icon: "volunteer_activism", label: "Free Forever" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-surface-container-low py-xl">
        <div className="max-w-[1440px] mx-auto px-margin-desktop">
          <div className="max-w-[48rem]">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-label-md font-bold mb-md uppercase tracking-wider">
              Clinical Decision Support
            </span>
            <h1 className="font-heading text-display-lg font-bold text-on-background mb-md leading-tight">
              Tools built for the{" "}
              <span className="text-gradient-brand">bedside.</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-[42rem] mb-lg">
              Free, evidence-based calculators and references designed for
              neonatal and pediatric care teams — available instantly, no
              account required.
            </p>

            {/* Badge strip */}
            <div className="flex flex-wrap gap-sm">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-xs bg-white border border-outline-variant text-on-surface-variant text-label-md font-semibold px-sm py-xs rounded-full"
                >
                  <span className="material-symbols-outlined text-primary text-[16px]">
                    {b.icon}
                  </span>
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl translate-x-1/2 -translate-y-1/4" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl translate-y-1/2" />
        </div>
      </section>

      {/* ── Tool Cards Bento ── */}
      <section className="max-w-[1440px] mx-auto px-margin-desktop py-xl">
        <div className="bento-grid">
          {tools.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`col-span-12 md:col-span-6 bg-surface-container-lowest border border-outline-variant ${tool.borderHover} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col cursor-pointer`}
            >
              {/* Card top accent bar */}
              <div className={`h-1 w-full ${tool.accentBg}`} />

              <div className="p-lg flex flex-col flex-1">
                {/* Icon + Tag */}
                <div className="flex items-start justify-between mb-lg">
                  <div className={`${tool.iconBg} p-md rounded-xl`}>
                    <span className={`material-symbols-outlined ${tool.iconColor} text-4xl`}>
                      {tool.icon}
                    </span>
                  </div>
                  <span className={`${tool.tagColor} text-label-md font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
                    {tool.tag}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-md">
                  <p className="text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">
                    {tool.subtitle}
                  </p>
                  <h2 className="font-heading text-headline-lg font-bold text-on-background">
                    {tool.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-body-md text-on-surface-variant mb-lg leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <ul className="space-y-sm mb-lg flex-1">
                  {tool.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-sm">
                      <div className={`${tool.iconBg} rounded-lg p-xs flex-shrink-0 mt-0.5`}>
                        <span className={`material-symbols-outlined ${tool.iconColor} text-[18px]`}>
                          {f.icon}
                        </span>
                      </div>
                      <span className="text-body-sm text-on-surface leading-snug">{f.label}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="border-t border-outline-variant pt-md flex items-center justify-between">
                  <span className="text-label-md text-on-surface-variant font-semibold">
                    {tool.url}
                  </span>
                  <span className={`${tool.accentBg} ${tool.accentText} px-lg py-sm rounded-full text-label-md font-bold flex items-center gap-xs`}>
                    Open Tool
                    <span className="material-symbols-outlined text-[18px]">
                      open_in_new
                    </span>
                  </span>
                </div>
              </div>
            </a>
          ))}

          {/* ── Stat Cards Row ── */}
          <div className="col-span-12 md:col-span-4 bg-primary p-lg rounded-xl text-on-primary flex flex-col justify-between">
            <span className="material-symbols-outlined text-4xl mb-md opacity-80">
              calculate
            </span>
            <div>
              <h3 className="font-heading text-headline-md font-semibold mb-xs">
                Weight-Based Dosing
              </h3>
              <p className="text-body-sm opacity-90">
                Every calculation accounts for gestational age, corrected age,
                and current weight — the way it should be done at the bedside.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex flex-col justify-between hover:shadow-sm transition-all">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-md">
              verified_user
            </span>
            <div>
              <h3 className="font-heading text-headline-md font-semibold text-on-background mb-xs">
                Evidence-Based Guidelines
              </h3>
              <p className="text-body-sm text-on-surface-variant">
                Built from peer-reviewed neonatal and pediatric literature.
                Regularly reviewed against current AAP and NICU best practices.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-secondary/5 border border-secondary/10 p-lg rounded-xl flex flex-col justify-between">
            <span className="material-symbols-outlined text-secondary text-4xl mb-md">
              devices
            </span>
            <div>
              <h3 className="font-heading text-headline-md font-semibold text-on-background mb-xs">
                Works on Any Device
              </h3>
              <p className="text-body-sm text-on-surface-variant">
                Optimized for tablets and phones used on ward rounds. Fast
                load, no app install required — just open and calculate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About the Author ── */}
      <section className="py-xl bg-surface-container-low" id="team">
        <div className="max-w-[1440px] mx-auto px-margin-desktop">
          <div className="mb-lg">
            <span className="text-tertiary text-label-md font-bold uppercase tracking-widest mb-base block">
              The Clinician Behind the Tools
            </span>
            <h2 className="font-heading text-headline-lg font-semibold text-on-background">
              Built by a neonatologist, for the NICU.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-lg bg-surface-container-lowest border border-outline-variant rounded-2xl p-lg items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-on-primary text-2xl font-bold font-heading shadow-lg">
                AHB
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-heading text-headline-md font-semibold text-on-background mb-sm">
                Ahmed Hussain Buzaid
              </h3>

              <div className="flex flex-wrap gap-sm mb-md">
                {["MD", "Neonatologist", "Saudi Fellowship Certified Neonatologist", "Saudi Board Certified Pediatrician"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-label-md font-semibold"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-body-md text-on-surface-variant max-w-[42rem] leading-relaxed mb-md">
                Dr. Buzaid is a board-certified pediatrician and
                fellowship-trained neonatologist dedicated to improving bedside
                care through accessible, evidence-based clinical tools. NeoPeds
                was built to give care teams fast, reliable references during
                critical moments in the NICU and pediatric ward.
              </p>

              <a
                href="mailto:ahb1117@gmail.com"
                className="inline-flex items-center gap-sm bg-white border border-outline-variant text-on-surface px-md py-sm rounded-full text-body-sm font-semibold hover:border-primary hover:text-primary transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                ahb1117@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-xl">
        <div className="max-w-[1200px] mx-auto px-margin-desktop">
          <div className="bg-inverse-surface rounded-3xl p-xl text-center relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            <h2 className="font-heading text-display-lg font-bold text-white mb-md relative z-10">
              Open a tool now.
            </h2>
            <p className="text-surface-variant text-body-lg mb-lg max-w-[32rem] mx-auto relative z-10">
              No account, no ads, no paywalls. Just the clinical data you need,
              exactly when you need it.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-md relative z-10">
              <a
                href="https://tpn.neopeds.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-fixed text-on-primary-fixed px-xl py-4 rounded-xl text-headline-sm font-heading font-semibold hover:bg-primary-fixed-dim transition-all flex items-center justify-center gap-sm"
              >
                <span className="material-symbols-outlined">science</span>
                TPN Calculator
              </a>
              <a
                href="https://peds.neopeds.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-surface-variant text-surface-variant px-xl py-4 rounded-xl text-headline-sm font-heading font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-sm"
              >
                <span className="material-symbols-outlined">stethoscope</span>
                Peds Reference
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
