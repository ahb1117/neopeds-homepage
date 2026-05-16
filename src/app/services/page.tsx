import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "NeoPeds provides comprehensive neonatology and pediatric services, combining advanced clinical protocols with empathetic family-centered care.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-margin-desktop max-w-[1440px] mx-auto mt-xl mb-xl">
        <div className="flex flex-col md:flex-row gap-lg items-center">
          <div className="flex-1">
            <span className="inline-block bg-primary/10 text-primary px-sm py-1 rounded-full text-label-md font-bold mb-md uppercase tracking-wider">
              Clinical Excellence
            </span>
            <h1 className="font-heading text-headline-lg font-semibold text-on-background mb-md">
              Specialized Medical Care for our Smallest Patients
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-[42rem] mb-lg">
              NeoPeds provides a comprehensive range of neonatology and
              pediatric services, combining advanced clinical protocols with
              empathetic family-centered care.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEW9e7GjcFU20Y0WCJe52Rp5UJoFXE69OTNUEj6qmWsJLgbBZMu0pOa9fL4JqSMGj-MgzCYtJuRziBD9FO87IsyUwJHZxlR_bkpHpQarlQ-jvnMmT6tgbeGha0_sJS2qo2NcnwkK3DipRWLwr1O1zXHXbIRgtaVeArvLEJ7u2kl8GxO3u3a2VmDRDbwyY9R8jswtQ7_Tn6pZ7Xw5SnaGA4y49-sAq40or4pN7q_S3_h436aZPXy6Ec_F-K-MmXBtrUQoeNegoVxY9T"
                alt="Modern pediatric consultation room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Bento Grid ── */}
      <section className="px-margin-desktop max-w-[1440px] mx-auto py-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* NICU — 8 col */}
          <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg hover:shadow-lg transition-all">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-lg">
                <div className="p-md bg-primary/5 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-[32px]">
                    emergency
                  </span>
                </div>
                <span className="text-label-md text-primary font-bold uppercase tracking-wider">
                  High Intensity
                </span>
              </div>
              <h3 className="font-heading text-headline-md font-semibold text-on-background mb-md">
                Neonatal Intensive Care (NICU)
              </h3>
              <p className="text-body-md text-on-surface-variant mb-lg flex-grow">
                Our Level III-equivalent NICU support services provide
                specialized management for premature infants and newborns with
                critical health challenges. We utilize state-of-the-art
                monitoring and therapeutic interventions.
              </p>
              <div className="grid grid-cols-2 gap-md pt-md border-t border-outline-variant">
                <div>
                  <h4 className="text-label-md text-on-surface-variant mb-xs">Capability</h4>
                  <p className="text-body-sm font-semibold text-primary">24/7 Monitoring</p>
                </div>
                <div>
                  <h4 className="text-label-md text-on-surface-variant mb-xs">Support</h4>
                  <p className="text-body-sm font-semibold text-primary">Respiratory Therapy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dosage Calculator — 4 col */}
          <div className="md:col-span-4 bg-surface-container-low border border-outline-variant rounded-xl p-lg flex flex-col justify-center">
            <h4 className="text-label-md text-secondary mb-sm uppercase font-bold tracking-wider">
              Quick Tool
            </h4>
            <h3 className="font-heading text-headline-sm font-semibold text-on-background mb-md">
              Weight-Based Dosage
            </h3>
            <div className="space-y-md">
              <div className="bg-white p-md rounded-lg border border-outline-variant">
                <label className="block text-label-md text-on-surface-variant mb-xs">
                  Patient Weight (kg)
                </label>
                <div className="font-heading text-display-lg font-bold text-primary">
                  3.2
                </div>
              </div>
              <div className="bg-primary p-md rounded-lg shadow-md">
                <label className="block text-label-md text-white opacity-80 mb-xs">
                  Recommended Dose
                </label>
                <div className="font-heading text-headline-md font-semibold text-white">
                  1.6 mL{" "}
                  <span className="text-body-sm font-normal">q8h</span>
                </div>
              </div>
            </div>
            <Link
              href="https://tpn.neopeds.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-md text-primary text-label-md font-bold flex items-center gap-xs hover:underline"
            >
              Open TPN Calculator{" "}
              <span className="material-symbols-outlined text-sm">
                open_in_new
              </span>
            </Link>
          </div>

          {/* Developmental Follow-up — 6 col */}
          <div className="md:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg hover:shadow-lg transition-all">
            <div className="flex flex-col h-full">
              <div className="p-md bg-secondary/5 rounded-lg w-fit mb-lg">
                <span className="material-symbols-outlined text-secondary text-[32px]">
                  trending_up
                </span>
              </div>
              <h3 className="font-heading text-headline-md font-semibold text-on-background mb-md">
                Developmental Follow-up
              </h3>
              <p className="text-body-md text-on-surface-variant mb-lg">
                Comprehensive assessment programs designed to monitor the growth
                and cognitive milestones of NICU graduates. Our multidisciplinary
                team ensures early intervention for any developmental delays.
              </p>
              <ul className="space-y-sm">
                {[
                  "Motor Skills Assessment",
                  "Cognitive Milestone Tracking",
                  "Nutritional Consultation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-sm text-body-sm text-on-surface"
                  >
                    <span
                      className="material-symbols-outlined text-primary text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pediatric Consultation — 6 col */}
          <div className="md:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg hover:shadow-lg transition-all">
            <div className="flex flex-col h-full">
              <div className="p-md bg-tertiary/5 rounded-lg w-fit mb-lg">
                <span className="material-symbols-outlined text-tertiary text-[32px]">
                  stethoscope
                </span>
              </div>
              <h3 className="font-heading text-headline-md font-semibold text-on-background mb-md">
                Pediatric Consultation
              </h3>
              <p className="text-body-md text-on-surface-variant mb-lg flex-grow">
                Specialized outpatient consultations for complex pediatric
                cases. We collaborate with primary care physicians to provide
                advanced diagnostic insight and chronic condition management.
              </p>
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="flex items-center gap-xs text-label-md text-primary font-bold hover:underline"
                >
                  Learn more about referrals{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clinical Philosophy Banner ── */}
      <section className="px-margin-desktop max-w-[1440px] mx-auto py-xl">
        <div className="bg-inverse-surface rounded-xl overflow-hidden flex flex-col md:flex-row items-stretch">
          <div className="flex-1 p-lg md:p-xl text-surface-bright">
            <h2 className="font-heading text-headline-lg font-semibold mb-md">
              Our Clinical Philosophy
            </h2>
            <p className="text-body-lg opacity-90 mb-lg">
              We believe that the best medical outcomes are achieved when
              clinical data meets human intuition. Every treatment plan is
              uniquely tailored to the physiological and emotional needs of the
              child and their family.
            </p>
            <div className="flex flex-wrap gap-md">
              {[
                "Evidence-Based Protocols",
                "Family-Centered Care",
                "Multidisciplinary Team",
              ].map((tag) => (
                <div key={tag} className="flex items-center gap-sm">
                  <div className="w-2 h-2 rounded-full bg-primary-fixed" />
                  <span className="text-label-md font-semibold">{tag}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 min-h-[300px] relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvm7bLcvicUmk49nk3B-I2bv-GyxmsJltaiKMwzt5UIWYi1bwS8F4I2Tj01yz7uj8HJlGH8nXCImDdoa2MtBDtEWQVRFARdfdkydK4lSl-C9uiHzp8e8QGj3HpiLfDLhW8leJDdagPLko6Y-vU-DkIbH5a7A7Cju40WkqtOggEymgawiAPWDiY9O5Ty4SEs3W3Nxme_zy8YSBgZi5jf1YIbfxhJocwAR-UWYViV2PCCM8sCVMGIxyujcyOTp2F5gw66qeZhTzxtFQz"
              alt="Caregiver holding newborn hand"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
