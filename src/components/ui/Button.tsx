import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export type ButtonVariant = 'primary' | 'outline' | 'solid' | 'ghostLight';
export type ButtonSize = 'sm' | 'md' | 'lg';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary-dark text-white hover:bg-primary-deep',
  outline: 'border border-slate-300 bg-white text-ink hover:border-primary hover:text-primary',
  solid: 'bg-ink text-white hover:bg-primary-dark',
  ghostLight:
    'border border-white/25 bg-ink/40 text-white backdrop-blur-md hover:border-white/45 hover:bg-ink/60',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-small',
  md: 'h-11 px-6 text-small',
  lg: 'h-13 px-8 text-body',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-tight transition-colors duration-200 whitespace-nowrap';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
  'aria-expanded'?: boolean;
  'aria-pressed'?: boolean;
  'aria-controls'?: string;
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  onClick,
  to,
  href,
  target,
  rel,
  type = 'button',
  disabled,
  ...aria
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (to !== undefined) {
    return (
      <Link to={to} className={classes} onClick={onClick} aria-label={aria['aria-label']}>
        {content}
      </Link>
    );
  }

  if (href !== undefined) {
    return (
      <a href={href} target={target} rel={rel} className={classes} onClick={onClick} aria-label={aria['aria-label']}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
      {...aria}
    >
      {content}
    </button>
  );
}
