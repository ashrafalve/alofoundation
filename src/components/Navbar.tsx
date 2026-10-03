import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button, Container } from '@/src/components/ui';
import { navLinks, site } from '@/src/lib/site';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        isScrolled || isOpen
          ? 'border-slate-200 bg-white/95 backdrop-blur-md'
          : 'border-transparent bg-white',
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-8">
          <Link to="/" className="flex shrink-0 items-center gap-3" aria-label={site.nameEn}>
            <img
              src={site.logo}
              alt=""
              aria-hidden="true"
              className="h-11 w-auto object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="bn text-[15px] font-bold text-ink">{site.nameBn}</span>
              <span className="mt-1 text-eyebrow font-semibold uppercase tracking-[0.18em] text-primary">
                {site.nameEn}
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                    className={cn(
                      'relative py-2 text-small font-medium transition-colors',
                      isActive(link.path)
                        ? 'text-primary'
                        : 'text-slate-600 hover:text-ink',
                    )}
                  >
                    {link.name}
                    {isActive(link.path) ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-0.5 h-px bg-primary"
                      />
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button to="/donate" size="sm" className="text-white">
              Donate Now
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors hover:bg-slate-100 lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-20 border-b border-slate-200 bg-white lg:hidden"
          >
            <Container>
              <nav aria-label="Mobile" className="py-6">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.path} className="border-b border-slate-100 last:border-0">
                      <Link
                        to={link.path}
                        aria-current={isActive(link.path) ? 'page' : undefined}
                        className={cn(
                          'block py-4 text-body font-medium transition-colors',
                          isActive(link.path) ? 'text-primary' : 'text-ink hover:text-primary',
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  <Button
                    to="/donate"
                    size="lg"
                    className="text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Donate Now
                  </Button>
                  <Button
                    to="/contact"
                    size="lg"
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                  >
                    Become a Volunteer
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
