import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { Button, Container, Section } from '@/src/components/ui';
import { navLinks } from '@/src/lib/site';

export default function NotFound() {
  return (
    <Section tone="white" className="min-h-[80vh] pt-40 sm:pt-48">
      <Container>
        <div className="max-w-2xl">
          <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-tint text-primary">
            <Compass size={22} />
          </span>

          <p className="tnum mt-8 text-display font-bold leading-none text-primary">404</p>

          <h1 className="bn mt-6 text-h1 font-bold text-ink">পেজটি খুঁজে পাওয়া যায়নি</h1>

          <p className="bn mt-5 text-lead text-slate-600">
            আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে বা ঠিকানাটি ভুল হয়েছে। নিচের লিংকগুলো দিয়ে
            শুরু করুন।
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/" size="lg" className="text-white" icon={<ArrowRight size={18} />}>
              Back to home
            </Button>
            <Button to="/contact" size="lg" variant="outline">
              Contact us
            </Button>
          </div>

          <nav aria-label="Site sections" className="mt-14 border-t border-slate-200 pt-8">
            <p className="eyebrow text-subtle">Or visit</p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-small font-medium text-slate-600 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </Section>
  );
}
