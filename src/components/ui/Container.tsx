import type { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn('container-page', className)}>{children}</div>;
}
