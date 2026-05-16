import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NeoPeds. Book a consultation, reach our clinical specialists, or visit one of our medical centers.",
};

const contactDetails = [
  {
    icon: "call",
    label: "Emergency Phone",
    value: "1-800-NEOPEDS",
    isHeadline: true,
  },
  {
    icon: "mail",
    label: "General Inquiries",
    value: "care@neopeds.medical",
    isHeadline: false,
  },
  {
    icon: "support_agent",
    label: "Patient Portal Support",
    value: "portal-help@neopeds.medical",
    isHeadline: false,
  },
];

const locations = [
  {
    name: "NeoPeds Central",
    address: "125 Medical Plaza Dr.\nBoston, MA 02118",
    phone: "(617) 555-0123",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4p5esUnRXsg2-142AO1yFIcHpqtInaSKTY6cVhuqcBXWWaQ0-taetjziumlQZPLkBK95zS3kVlVTbs3ipQDZvwONgMCv8EFJp-OpOU_-dK2Jk-c0HZzMCBWG9Z1hy-7S2QDmzRKckwtnPHEreWOssnTSKQ7K_gHjl5flnE5dOEsCET7E31n5RwxhkgRGpOUz9wVAvPn_o-Lnhrg4DZSl_i78XkTzkLnLe6WDB8geSXEy7qc0Z7hSK2UXEAJUTQ-WkpAIWx6klSlRz",
    imgAlt: "Boston medical district",
  },
  {
    name: "Cambridge Research Hub",
    address: "440 Innovation Way\nCambridge, MA 02139",
    phone: "(617) 555-0199",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASL_JgK_luPnRCPdK_5r3jn6AI88TUSxqO6OKouA4wHkZa3h7otKF_zqldK0gyNcVVntBz1ikia_GsziO89x-LPyOmGaincURdwqX9xpCJNm2LhyfchlP85FtPh5Unk1eqUtFD_0KD2QPdQ_QbUHY_e78W8rz4zv_LxsRyoNxg-bnaDsbIxhTP2D8xL_W_RSZ0sVQwE1JHLv9poboWpjQ_qTvpMCN9SWvJoi8Cd3LHEwCSSK0EqdVdjDeeTzciWK1pr4gj5BTufKs6",
    imgAlt: "Cambridge research corridor",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <header className="relative bg-surface-container-low py-xl px-margin-desktop overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative z-10">
          <div>
            <span className="inline-block py-xs px-sm bg-tertiary-container/10 text-primary text-label-md font-bold rounded-full mb-md uppercase tracking-wider">
              Supportive Care
            </span>
            <h1 className="font-heading text-display-lg font-bold text-on-background mb-md leading-tight">
              Let&apos;s prioritize your child&apos;s health together.
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-[36rem]">
              Our clinical specialists are ready to provide the compassionate,
              expert care your little ones deserve. Reach out via our booking
              form or visit one of our local offices.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPk_2FlhOO0dSQ5NB79UA-WxvbppOVp12BsVTtm5UrAmOAXBubfxwJW1YAjEG5ZZJWRqp2HgDWO3kZcwtdRlQRQ7j-7WeqxQykhSlbVBTSZqKZ16P-gmswuVXtUyH7mUmLkIcuvXxZEUx0jxe7NAWsCM2qKdhXbpeS118q-3gO5EKoR0DnSKpCx60RJl8yU6NtaQMTlhy8aSe7v06dxbcnWv6e9euv8-tEqRc2DrrQhFCsPecxsbIJZgusqTtS1ZW-_0Ah6E0Z4Ad8"
              alt="Modern pediatric examination room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* ── Bento Grid: Contact + Form ── */}
      <section className="max-w-[1440px] mx-auto px-margin-desktop mt-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Contact details column */}
          <div className="lg:col-span-4 space-y-gutter">
            <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl">
              <h2 className="font-heading text-headline-sm font-semibold mb-md text-primary">
                Direct Contact
              </h2>
              <ul className="space-y-md">
                {contactDetails.map((c) => (
                  <li key={c.label} className="flex items-start gap-md">
                    <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined">{c.icon}</span>
                    </div>
                    <div>
                      <p className="text-label-md text-on-surface-variant">{c.label}</p>
                      {c.isHeadline ? (
                        <p className="font-heading text-headline-sm font-semibold text-on-background">
                          {c.value}
                        </p>
                      ) : (
                        <p className="text-body-md text-on-background">{c.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary text-on-primary p-md rounded-xl">
              <h3 className="font-heading text-headline-sm font-semibold mb-sm">
                24/7 Neonatal Helpline
              </h3>
              <p className="text-body-sm opacity-90 mb-md">
                Immediate consultation for critical care cases and neonatal
                emergencies. We are always here when it matters most.
              </p>
              <button className="w-full bg-on-primary text-primary py-sm rounded-lg font-bold text-label-md hover:opacity-90 transition-opacity">
                Start Chat Now
              </button>
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
              <div className="bg-primary/5 p-md border-b border-outline-variant">
                <h2 className="font-heading text-headline-md font-semibold text-primary">
                  Book a Consultation
                </h2>
                <p className="text-body-sm text-on-surface-variant">
                  Please provide the necessary details for your pediatric
                  appointment.
                </p>
              </div>
              <div className="p-md">
                <form className="space-y-md" action="#" method="post">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div className="space-y-xs">
                      <label className="text-label-md font-semibold text-on-surface block">
                        Patient Name
                      </label>
                      <input
                        type="text"
                        placeholder="Legal name of patient"
                        className="w-full h-11 px-3 border border-outline-variant rounded-lg bg-white text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                      />
                    </div>
                    <div className="space-y-xs">
                      <label className="text-label-md font-semibold text-on-surface block">
                        Service Type
                      </label>
                      <select className="w-full h-11 px-3 border border-outline-variant rounded-lg bg-white text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md">
                        <option>General Neonatal Checkup</option>
                        <option>Pediatric Consultation</option>
                        <option>Immunization Services</option>
                        <option>Developmental Screening</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div className="space-y-xs">
                      <label className="text-label-md font-semibold text-on-surface block">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        className="w-full h-11 px-3 border border-outline-variant rounded-lg bg-white text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                      />
                    </div>
                    <div className="space-y-xs">
                      <label className="text-label-md font-semibold text-on-surface block">
                        Preferred Time
                      </label>
                      <select className="w-full h-11 px-3 border border-outline-variant rounded-lg bg-white text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md">
                        <option>Morning (8AM – 12PM)</option>
                        <option>Afternoon (12PM – 4PM)</option>
                        <option>Late Afternoon (4PM – 6PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-xs">
                    <label className="text-label-md font-semibold text-on-surface block">
                      Additional Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Any specific symptoms or history our doctors should know?"
                      className="w-full px-3 py-2 border border-outline-variant rounded-lg bg-white text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-sm">
                    <input
                      type="checkbox"
                      id="terms"
                      className="rounded text-primary focus:ring-primary focus:ring-2"
                    />
                    <label htmlFor="terms" className="text-body-sm text-on-surface-variant">
                      I agree to the privacy policy regarding clinical data
                      handling.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 bg-primary text-on-primary rounded-lg font-bold text-label-md hover:bg-primary-container transition-all active:scale-[0.99]"
                  >
                    Request Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="max-w-[1440px] mx-auto px-margin-desktop mt-xl mb-xl">
        <div className="text-center mb-lg">
          <h2 className="font-heading text-headline-lg font-semibold text-on-background">
            Our Medical Centers
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-sm">
            State-of-the-art facilities designed for comfort and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={loc.imgSrc}
                  alt={loc.imgAlt}
                  className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 p-md flex flex-col justify-center">
                <h3 className="font-heading text-headline-sm font-semibold text-primary mb-sm">
                  {loc.name}
                </h3>
                <p className="text-body-sm text-on-surface-variant mb-md leading-relaxed whitespace-pre-line">
                  {loc.address}
                  {"\n"}
                  {loc.phone}
                </p>
                <div className="flex gap-sm items-center">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <a
                    href="#"
                    className="text-primary font-bold text-label-md underline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
