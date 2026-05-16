"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Tools" },
  { href: "/contact", label: "Consult Us" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-bright border-b border-outline-variant shadow-sm h-16">
      <div className="flex justify-between items-center h-full px-margin-desktop max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/logo.png"
            alt="NeoPeds logo"
            width={180}
            height={48}
            className="h-10 w-auto object-contain mix-blend-multiply"
            priority
          />
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-lg">
          {links.map(({ href, label }) => {
            const isActive =
              href.startsWith("/#")
                ? false
                : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`text-label-md font-sans transition-colors ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-md">
          <div className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
              search
            </span>
            <input
              className="pl-10 pr-4 py-2 rounded-full bg-surface-container border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20 w-48 text-body-sm text-on-surface placeholder:text-on-surface-variant"
              placeholder="Search..."
              type="text"
            />
          </div>
          <Link
            href="/contact"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-label-md font-bold hover:bg-primary-container transition-all active:scale-95 duration-100"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
