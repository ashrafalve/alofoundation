import type { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';
import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
  children?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'light',
  className,
  children,
}: SectionHeadingProps) {
  const dark = tone === 'dark';

  return (
    <Reveal
      className={cn(
        'flex flex-col gap-6',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn('flex items-center gap-3', align === 'center' && 'justify-center')}>
          <span className={cn('rule', dark && 'bg-primary-light')} />
          <span className={cn('eyebrow', dark ? 'text-primary-light' : 'text-primary')}>
            {eyebrow}
          </span>
        </span>
      ) : null}

      <h2
        className={cn(
          'text-h2 font-bold',
          dark && 'text-white',
          align === 'center' ? 'max-w-3xl' : 'max-w-2xl',
        )}
      >
        {title}
      </h2>

      {lede ? (
        <p
          className={cn(
            'text-lead max-w-2xl',
            dark ? 'text-slate-400' : 'text-slate-600',
            align === 'center' && 'mx-auto',
          )}
        >
          {lede}
        </p>
      ) : null}

      {children}
    </Reveal>
  );
}
