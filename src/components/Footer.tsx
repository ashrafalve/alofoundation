import { Link } from 'react-router-dom';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/src/components/ui';
import { navLinks, quickLinks, site } from '@/src/lib/site';

const programLinks = [
  { name: 'Education for All', path: '/programs' },
  { name: 'Healthcare & Blood Donation', path: '/programs' },
  { name: 'Food Security', path: '/programs' },
  { name: 'Disaster Relief', path: '/programs' },
  { name: 'Youth Empowerment', path: '/programs' },
];

const linkClass =
  'inline-block text-small text-white transition-colors hover:text-primary-light';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-slate-300">
      <Container>
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] lg:gap-10">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={site.logo}
                alt=""
                aria-hidden="true"
                className="h-12 w-auto rounded-md bg-white object-contain p-1"
              />
              <span className="flex flex-col leading-none">
                <span className="bn text-base font-bold text-white">{site.nameBn}</span>
                <span className="mt-1 text-eyebrow font-semibold uppercase tracking-[0.18em] text-primary-light">
                  {site.nameEn}
                </span>
              </span>
            </Link>

            <p className="bn mt-6 max-w-sm text-small leading-relaxed text-white">
              আলো ফাউন্ডেশন একটি সেচ্ছাসেবী জনকল্যাণমুলক ও অরাজনৈতিক প্রতিষ্ঠান। সমাজের
              পিছিয়ে পড়া মানুষের কল্যাণে আমাদের যাত্রা শুরু হয়েছে যশোদল, কিশোরগঞ্জ থেকে।
            </p>

            <a
              href={site.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-md border border-white/20 px-4 py-2.5 text-small font-semibold text-white transition-colors hover:border-white/45 hover:bg-ink/60"
            >
              <Facebook size={16} />
              Official Facebook Group
            </a>
          </div>

          <nav aria-label="Footer quick links">
            <h2 className="eyebrow text-white">Explore</h2>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer programs">
            <h2 className="eyebrow text-white">Programs</h2>
            <ul className="mt-6 space-y-3">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-white">Contact</h2>
            <ul className="mt-6 space-y-5 text-small">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary-light" />
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bn text-white transition-colors hover:text-primary-light"
                >
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary-light" />
                <a href={site.phone.href} className="tnum text-white transition-colors hover:text-primary-light">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-primary-light" />
                <a href={site.email.href} className="break-all text-white transition-colors hover:text-primary-light">
                  {site.email.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-small text-white sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.nameEn}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {navLinks.slice(1).map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition-colors hover:text-primary-light">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
