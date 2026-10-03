import Reveal from './Reveal';
import { cn } from '@/src/lib/utils';

export type Stat = {
  value: string;
  label: string;
};

type StatRowProps = {
  stats: readonly Stat[];
  tone?: 'light' | 'dark';
  className?: string;
};

export default function StatRow({ stats, tone = 'light', className }: StatRowProps) {
  const dark = tone === 'dark';

  return (
    <dl
      className={cn(
        'grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12 lg:grid-cols-4',
        className,
      )}
    >
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 0.08} y={12}>
          <div
            className={cn(
              'border-t pt-5',
              dark ? 'border-white/15' : 'border-slate-200',
            )}
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span
                className={cn(
                  'tnum block text-h1 font-bold leading-none',
                  dark ? 'text-white' : 'text-ink',
                )}
              >
                {stat.value}
              </span>
              <span
                className={cn(
                  'mt-3 block text-eyebrow font-semibold uppercase tracking-[0.18em]',
                  dark ? 'text-white' : 'text-subtle',
                )}
              >
                {stat.label}
              </span>
            </dd>
          </div>
        </Reveal>
      ))}
    </dl>
  );
}
