import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface pt-lg pb-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-[1440px] mx-auto text-surface-bright">
        {/* Brand */}
        <div className="col-span-1">
          <div className="flex items-center gap-base mb-md">
            <Image
              src="/logo.png"
              alt="NeoPeds logo"
              width={28}
              height={28}
              className="rounded-lg brightness-200"
            />
            <span className="text-headline-sm font-heading font-bold text-primary-fixed tracking-tight">
              NeoPeds
            </span>
          </div>
          <p className="text-body-sm text-surface-variant leading-relaxed">
            Setting the standard for neonatal and pediatric clinical tools
            through evidence-based medicine and technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-headline-sm font-heading text-primary-fixed mb-md">Quick Links</h4>
          <ul className="space-y-sm">
            {["Privacy Policy", "Terms of Service", "Patient Portal", "Accessibility"].map((l) => (
              <li key={l}>
                <Link
                  href="#"
                  className="text-body-sm text-surface-variant hover:text-primary-fixed transition-colors"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-headline-sm font-heading text-primary-fixed mb-md">Contact</h4>
          <p className="text-body-sm text-surface-variant mb-base">Medical Resource Center</p>
          <p className="text-body-sm text-surface-variant mb-base">contact@neopeds.medical</p>
          <p className="text-body-sm text-surface-variant">+1 (800) NEO-PEDS</p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-headline-sm font-heading text-primary-fixed mb-md">Newsletter</h4>
          <p className="text-body-sm text-surface-variant mb-md">
            Get clinical updates and neonatal news delivered to your inbox.
          </p>
          <div className="flex flex-col gap-sm">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white/10 border border-outline-variant text-white p-2 rounded-lg text-body-sm placeholder:text-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-fixed/30"
            />
            <button className="bg-primary-fixed text-on-primary-fixed py-2 rounded-lg text-label-md font-bold hover:bg-primary-fixed-dim transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-margin-desktop mt-lg pt-md border-t border-outline/20">
        <p className="text-body-sm text-surface-variant opacity-60">
          © {new Date().getFullYear()} NeoPeds Medical Resource. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
