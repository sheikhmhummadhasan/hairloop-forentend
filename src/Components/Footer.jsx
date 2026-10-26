import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Job discovery", href: "/browse" },
        { name: "Worker AI", href: "/worker-ai" },
        { name: "Companies", href: "/company" },
        { name: "Salary data", href: "/salary-data" },
      ],
    },
    {
      title: "Navigations",
      links: [
        { name: "Help center", href: "/help" },
        { name: "Career library", href: "/career-library" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Brand Guideline", href: "/brand-guideline" },
        { name: "Newsroom", href: "/newsroom" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,rgba(92,83,254,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1320px] px-6 pb-7 pt-14 sm:px-8 sm:pt-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_0.55fr_0.55fr_0.55fr] lg:gap-12">
          <div className="max-w-[310px]">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo.png"
                alt="HireLoop"
                width={145}
                height={48}
                className="h-auto w-[140px] object-contain"
              />
            </Link>

            <p className="mt-6 text-sm leading-7 text-neutral-500">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-7 text-sm font-medium text-[#5c53fe]">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 transition-colors duration-200 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-7 border-t border-white/[0.06] pt-7 sm:mt-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111] text-neutral-400 transition hover:bg-[#5c53fe] hover:text-white"
            >
              <FaFacebookF size={19} />
            </a>

            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#30258e] text-white transition hover:bg-[#5c53fe]"
            >
              <FaPinterestP size={19} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111] text-neutral-400 transition hover:bg-[#5c53fe] hover:text-white"
            >
              <FaLinkedinIn size={19} />
            </a>
          </div>

          <div className="flex flex-col gap-4 text-sm text-neutral-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 lg:justify-end">
            <p>Copyright 2024 — Programming Hero</p>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms &amp; Policy
              </Link>

              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;