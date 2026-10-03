import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Container from './Container';

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  image?: string;
};

export default function PageHeader({ eyebrow, title, lede, image }: PageHeaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <header className="relative isolate overflow-hidden bg-ink pt-32 pb-20 sm:pt-40 sm:pb-24">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/85 to-ink/60"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(60%_100%_at_50%_0%,var(--color-primary-dark),transparent)] opacity-40"
        />
      )}

      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {eyebrow ? (
            <span className="mb-6 flex items-center gap-3">
              <span className="rule bg-primary-light" />
              <span className="eyebrow text-primary-light">{eyebrow}</span>
            </span>
          ) : null}

          <h1 className="text-h1 font-bold text-white">{title}</h1>

          {lede ? <p className="mt-6 text-lead text-slate-400">{lede}</p> : null}
        </motion.div>
      </Container>
    </header>
  );
}
