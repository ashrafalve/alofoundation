import type { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

export type SectionTone = 'white' | 'muted' | 'dark' | 'tint';

const tones: Record<SectionTone, string> = {
  white: 'bg-white text-slate-600',
  muted: 'bg-slate-50 text-slate-600',
  tint: 'bg-primary-tint text-slate-600',
  dark: 'bg-ink text-slate-300',
};

type SectionProps = {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
  id?: string;
  tight?: boolean;
  as?: 'section' | 'div' | 'footer';
};

export default function Section({
  children,
  tone = 'white',
  className,
  id,
  tight = false,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        tones[tone],
        tight ? 'py-16 sm:py-20' : 'py-20 sm:py-28',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
