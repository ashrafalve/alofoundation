import type { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';
import Reveal from './Reveal';

type CardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  interactive?: boolean;
};

export default function Card({ children, className, delay = 0, interactive = false }: CardProps) {
  return (
    <Reveal delay={delay} y={12}>
      <div
        className={cn(
          'surface-card h-full',
          interactive &&
            'transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift',
          className,
        )}
      >
        {children}
      </div>
    </Reveal>
  );
}
