import { ArrowRight, Facebook } from 'lucide-react';
import Button from './Button';
import Container from './Container';
import Section from './Section';
import { site } from '@/src/lib/site';

type CtaSectionProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export default function CtaSection({
  eyebrow = 'Get involved',
  title,
  lede,
  primaryLabel = 'Donate Now',
  primaryTo = '/donate',
  secondaryLabel = 'Join as Volunteer',
  secondaryTo = '/contact',
}: CtaSectionProps) {
  return (
    <Section tone="dark" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_80%_at_15%_0%,var(--color-primary-dark),transparent)]"
      />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <span className="mb-6 flex items-center gap-3">
              <span className="rule bg-primary-light" />
              <span className="eyebrow text-primary-light">{eyebrow}</span>
            </span>
            <h2 className="max-w-2xl text-h2 font-bold text-white">{title}</h2>
            {lede ? <p className="mt-6 max-w-xl text-lead text-slate-400">{lede}</p> : null}
          </div>

          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Button to={primaryTo} size="lg" className="text-white" icon={<ArrowRight size={18} />}>
              {primaryLabel}
            </Button>
            <Button to={secondaryTo} size="lg" variant="ghostLight" className="text-white">
              {secondaryLabel}
            </Button>
            <Button
              href={site.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="ghostLight"
              className="text-white"
              icon={<Facebook size={18} />}
            >
              Community
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
