import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Resources",
  description:
    "Access curated neonatal and pediatric research, care protocols, downloadable guides, and expert clinical insights from NeoPeds.",
};

const articles = [
  {
    tag: "Family Guide",
    tagColor: "text-primary",
    date: "Oct 12, 2024",
    title: "Understanding Jaundice in Newborns",
    description:
      "A clear guide for parents on identifying symptoms and understanding treatment options like phototherapy.",
    author: "Dr. Sarah Mitchell",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBO4GfPHDPAX5KaaafJZ-Jgi79bt56H_9d2MVpfHI_cPGV9w0e0XTtYtcH8eiw8qbM1LSOS7U6YDGQbfu5QjzXy7W_AHg0fQj0WWnRSVqNkoZuC2Pjv0iK26e1ri-4b0JkWlhphLmsdMBKO2kQ934Z6SLR4qYGOFGEvutxnM-171ujQ_7VhUN8KniC7SN6QV-RQZPp99fD07X_CbCBURbnJC6-mIO9ZaFWJuWR_uNgRgj7aUAvYXb32INovYBiD6fiBbjBbeqRZXRZ2",
    imgAlt: "Stethoscope on medical desk",
  },
  {
    tag: "Clinical Study",
    tagColor: "text-tertiary",
    date: "Oct 05, 2024",
    title: "Telemedicine in Post-NICU Follow-up",
    description:
      "Evaluating the efficacy of virtual care models for developmental monitoring in rural pediatric populations.",
    author: "Dr. James Chen",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBggCf_kDvflJoF3MrsudTUlQIWwLRaFfoS1ITQH4yJW8AxD27pbLZitghsURAF9RMsFgZxiGkyqt2DAOFzlztZqkKgT3s_RG3oy65eOUNnUj9-e8kvuGv7aw0p-secUoxEp5k3iwiIIONde5V23AmKllESKVYQuBDpiduoR-TXYSh6E4ivri_29LHSBy-KGxmQAfCEr3HcF3sH_ub99L6W0JjUZwNk6QqE1GMB5EvizeAfonCq_64Vc00VPPvkThTtLnyxC5kYNCP0",
    imgAlt: "Pediatric doctor with patient",
  },
  {
    tag: "Policy",
    tagColor: "text-secondary",
    date: "Sep 28, 2024",
    title: "Update: Neo-Vaccination Protocols",
    description:
      "Reviewing the updated 2024 schedules for high-risk infants and immunocompromised pediatric patients.",
    author: "Admin Staff",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPY34B-pYkX7UTAOOrxZyeFBv2jdTwK4lAIsSWh-7QaLq-CsRrE0x3j0dMfrnlcEvVBjg97LDwR7PbUNgB9Cu8oUOCjjbgdCNXBhalBklUAc-8NCRtw3LWdQj1Eg-s8uW_8bElx6KvpB-PI8F6mZDCXwlhEPiCKMMdvHZlhq-UPtr_6nLIA0B502k8aa3mytIv-Q1gJu8se2FhdtfXUxyBHTH98yjhT-6GN-wNYlZhqctBJ2MYnRCsAjNHrJTOB5XZBy5XKc1RIWNw",
    imgAlt: "Modern hospital hallway",
  },
];

export default function ResourcesPage() {
  return (
    <main className="pb-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      {/* ── Hero ── */}
      <section className="mb-xl pt-xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-md mb-lg">
          <div className="max-w-[42rem]">
            <span className="text-tertiary text-label-md font-bold uppercase tracking-widest mb-base block">
              Knowledge Base
            </span>
            <h1 className="font-heading text-headline-lg font-semibold mb-sm text-on-background">
              Clinical Excellence &amp; Care Resources
            </h1>
            <p className="text-body-lg text-on-surface-variant">
              Access curated research, neonatal care protocols, and supportive
              guides for healthcare professionals and families.
            </p>
          </div>
          <div className="flex gap-sm">
            <button className="flex items-center gap-xs px-md py-sm bg-surface-container-high rounded-full text-primary text-label-md font-semibold border border-outline-variant hover:bg-surface-container-highest transition-all">
              <span className="material-symbols-outlined">filter_list</span>
              Filter All
            </button>
            <button className="flex items-center gap-xs px-md py-sm bg-surface-container-high rounded-full text-primary text-label-md font-semibold border border-outline-variant hover:bg-surface-container-highest transition-all">
              <span className="material-symbols-outlined">sort</span>
              Sort by Date
            </button>
          </div>
        </div>

        {/* ── Featured Resources Bento ── */}
        <div className="bento-grid">
          {/* Large featured card */}
          <div className="col-span-12 lg:col-span-8 group relative overflow-hidden rounded-xl bg-white border border-outline-variant shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNc82Eifv9VhKTwKRxwlmEvhRsWAZP4Pvy_va3wkTFz1l__0b7v0AkIImg9Y4fRyyjEiLRhXROxo5CPGzi25kasCQROW96QnpKSyQBgRcO6TBKtR1zeKaWNzs3GIMrUtLbdpX_HztNzxpHaAWxjgAdHAQxdhmyNECB_30uya41t7vDZ590NSRMwhMPmQy0QcsaVpKuv1627gupC-BmYkS2NeP3J7cYVLfiRzEPKKrKFsy5Ym929mQenXAVPamCcUgQ_gDunkFOfaMW"
                alt="Medical laboratory with microscope"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-1/2 p-lg flex flex-col justify-center">
              <div className="flex gap-xs mb-md">
                <span className="bg-primary-container/20 text-primary px-sm py-xs rounded-full text-label-md font-semibold">
                  Research
                </span>
                <span className="bg-tertiary-container/10 text-tertiary px-sm py-xs rounded-full text-label-md font-semibold">
                  Neo-Nutrition
                </span>
              </div>
              <h3 className="font-heading text-headline-md font-semibold text-on-background mb-sm">
                Advancements in Micro-Preemie Nutrition Strategies
              </h3>
              <p className="text-body-md text-on-surface-variant mb-md">
                A comprehensive review of the latest enteral and parenteral
                nutrition protocols for extremely low birth weight infants.
              </p>
              <a
                href="#"
                className="text-primary text-label-md font-bold flex items-center gap-xs hover:gap-sm transition-all"
              >
                Read Full Article{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Latest Journals — primary colored */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-primary text-on-primary p-lg rounded-xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-sm mb-lg">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    clinical_notes
                  </span>
                </div>
                <span className="font-heading text-headline-sm font-semibold">
                  Latest Journals
                </span>
              </div>
              <ul className="space-y-md">
                {[
                  {
                    date: "October 2024",
                    title: "Long-term Respiratory Outcomes in Infants with BPD",
                  },
                  {
                    date: "September 2024",
                    title: "Genomic Sequencing in the NICU: A Pilot Study",
                  },
                ].map((j) => (
                  <li key={j.title} className="border-b border-primary-container pb-md">
                    <span className="text-label-md opacity-70 block mb-xs">
                      {j.date}
                    </span>
                    <a href="#" className="text-body-md hover:underline block">
                      {j.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-md text-primary-fixed text-label-md font-bold flex items-center gap-xs hover:opacity-80 transition-opacity">
              View All Publications{" "}
              <span className="material-symbols-outlined">open_in_new</span>
            </button>
          </div>

          {/* NICU Discharge Guide */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white border border-outline-variant p-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-md">
            <div className="w-full h-40 bg-surface-container rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl">
                picture_as_pdf
              </span>
            </div>
            <div>
              <h4 className="font-heading text-headline-sm font-semibold text-on-background mb-xs">
                NICU Discharge Checklist
              </h4>
              <p className="text-body-sm text-on-surface-variant">
                Essential steps and documentation for families preparing for
                home transitions.
              </p>
            </div>
            <button className="w-full flex items-center justify-center gap-xs py-sm bg-secondary text-on-secondary rounded-lg text-label-md font-bold hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-[20px]">download</span>
              Download PDF (2.4 MB)
            </button>
          </div>

          {/* Dosage Guide */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white border border-outline-variant p-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-md">
            <div className="w-full h-40 bg-tertiary-fixed-dim/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary text-4xl">
                medication
              </span>
            </div>
            <div>
              <h4 className="font-heading text-headline-sm font-semibold text-on-background mb-xs">
                Pediatric Dosage Guide
              </h4>
              <p className="text-body-sm text-on-surface-variant">
                Reference guide for common neonatal medications and calculation
                protocols.
              </p>
            </div>
            <button className="w-full flex items-center justify-center gap-xs py-sm bg-secondary text-on-secondary rounded-lg text-label-md font-bold hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-[20px]">download</span>
              Download PDF (1.1 MB)
            </button>
          </div>

          {/* Contact Librarian */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-high p-lg rounded-xl border border-outline-variant/50">
            <span className="material-symbols-outlined text-primary mb-md">
              contact_support
            </span>
            <h4 className="font-heading text-headline-sm font-semibold mb-sm">
              Need Specific Data?
            </h4>
            <p className="text-body-md text-on-surface-variant mb-lg">
              Our clinical librarians can help source specific pediatric
              research papers or case studies for your team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white border border-primary text-primary text-label-md font-bold px-md py-sm rounded-lg hover:bg-primary hover:text-on-primary transition-all"
            >
              Contact Librarian
            </a>
          </div>
        </div>
      </section>

      {/* ── Article Feed ── */}
      <section className="mb-xl">
        <div className="flex justify-between items-center mb-lg">
          <h2 className="font-heading text-headline-lg font-semibold text-on-background">
            Expert Insights
          </h2>
          <a href="#" className="text-primary text-label-md font-bold hover:underline">
            See all articles
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {articles.map((a) => (
            <article
              key={a.title}
              className="bg-white rounded-xl border border-outline-variant overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.imgSrc}
                  alt={a.imgAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span
                  className={`absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-sm py-xs rounded text-label-md font-semibold ${a.tagColor}`}
                >
                  {a.tag}
                </span>
              </div>
              <div className="p-md">
                <time className="text-label-md text-outline font-semibold uppercase mb-xs block">
                  {a.date}
                </time>
                <h4 className="font-heading text-headline-sm font-semibold mb-sm leading-tight hover:text-primary transition-colors cursor-pointer">
                  {a.title}
                </h4>
                <p className="text-body-sm text-on-surface-variant mb-md">
                  {a.description}
                </p>
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">person</span>
                  </div>
                  <span className="text-label-md text-on-surface font-semibold">
                    {a.author}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-inverse-surface rounded-2xl p-lg flex flex-col md:flex-row items-center justify-between gap-lg">
        <div className="max-w-[36rem] text-center md:text-left">
          <h2 className="font-heading text-headline-lg font-semibold text-surface-bright mb-sm">
            Stay Updated on Neonatal Research
          </h2>
          <p className="text-body-md text-surface-variant">
            Get monthly digests of the latest clinical trials, care guides, and
            professional resources delivered to your inbox.
          </p>
        </div>
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-base">
          <input
            type="email"
            placeholder="Enter your work email"
            className="px-md py-sm rounded-lg bg-surface-container-lowest border-none focus:outline-none focus:ring-2 focus:ring-primary-fixed min-w-[300px] text-on-surface text-body-md"
          />
          <button className="bg-primary-fixed text-on-primary-fixed text-label-md font-bold px-lg py-sm rounded-lg hover:brightness-110 transition-all whitespace-nowrap">
            Subscribe Now
          </button>
        </div>
      </section>
    </main>
  );
}
