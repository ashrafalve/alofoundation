import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Container, CtaSection, PageHeader, Section } from '@/src/components/ui';
import { images } from '@/src/lib/gallery';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  const close = useCallback(() => setActiveIndex(null), []);

  const step = useCallback(
    (delta: number) => {
      setActiveIndex((current) =>
        current === null ? null : (current + delta + images.length) % images.length,
      );
    },
    [],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, close, step]);

  const active = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={
          <>
            আমাদের <span className="text-primary-light">গ্যালারি</span>
          </>
        }
        lede="আমাদের কার্যক্রমের কিছু স্থিরচিত্র। প্রতিটি ছবি একটি পরিবর্তনের গল্প বলে এবং আমাদের নিবেদিত প্রচেষ্টার সাক্ষী।"
        image="/images/gallery-3.webp"
      />

      <Section tone="white">
        <Container>
          <p className="tnum text-small text-subtle">
            {images.length} photos
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image, index) => (
              <li key={`${image.url}-${index}`}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group block w-full overflow-hidden rounded-md bg-slate-100"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    width={600}
                    height={600}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <AnimatePresence>
        {active ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-sm"
            onClick={close}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
              <p className="tnum text-small text-white">
                {(activeIndex ?? 0) + 1} / {images.length}
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                aria-label="Close image viewer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
              >
                <X size={22} />
              </button>
            </div>

            <div
              className="flex flex-1 items-center justify-center gap-4 px-4 pb-6 sm:px-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                <ChevronLeft size={22} />
              </button>

              <figure className="flex max-h-full min-w-0 flex-1 flex-col items-center gap-4">
                <img
                  src={active.url}
                  alt={active.title}
                  className="max-h-[70vh] w-auto max-w-full rounded-md object-contain"
                  referrerPolicy="no-referrer"
                />
                <figcaption className="bn text-center text-small text-slate-300">
                  {active.title}
                </figcaption>
              </figure>

              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <CtaSection
        title="আমাদের সাথে যুক্ত হোন"
        lede="আপনার তোলা ছবি বা আমাদের কার্যক্রমের কোনো মুহূর্ত শেয়ার করতে চাইলে আমাদের সাথে যোগাযোগ করুন।"
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Donate Now"
        secondaryTo="/donate"
      />
    </>
  );
}
