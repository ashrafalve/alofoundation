import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Facebook,
  Heart,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
} from 'lucide-react';
import {
  Button,
  Card,
  Container,
  CtaSection,
  Reveal,
  Section,
  SectionHeading,
  StatRow,
} from '@/src/components/ui';
import { featuredImages } from '@/src/lib/gallery';
import { impactStats, site } from '@/src/lib/site';
import { cn } from '@/src/lib/utils';

const pillars = [
  {
    title: 'Education Support',
    titleBn: 'শিক্ষা সহায়তা',
    desc: 'অসহায় ও মেধাবী শিক্ষার্থীদের শিক্ষা উপকরণ, বই ও বৃত্তি প্রদান। আমরা বিশ্বাস করি, প্রতিটি শিশুর শিক্ষার অধিকার রয়েছে।',
    image: '/images/gallery-28.webp',
    icon: BookOpen,
  },
  {
    title: 'Healthcare & Blood Donation',
    titleBn: 'স্বাস্থ্যসেবা ও রক্তদান',
    desc: 'বিনামূল্যে চিকিৎসা ক্যাম্প, চক্ষু শিবির এবং জরুরি ঔষধ সহায়তা। প্রান্তিক মানুষের কাছে স্বাস্থ্যসেবা পৌঁছে দেওয়াই আমাদের লক্ষ্য।',
    image: '/images/gallery-22.webp',
    icon: Heart,
  },
  {
    title: 'Relief & Plantation',
    titleBn: 'ত্রাণ ও বৃক্ষরোপণ',
    desc: 'বৃক্ষরোপণ কর্মসূচি ও দুর্যোগকালীন ত্রাণ সহায়তা। বিপদে মানুষের পাশে দাঁড়ানোই আমাদের ধর্ম।',
    image: '/images/gallery-18.webp',
    icon: Sprout,
  },
];

const values = [
  {
    title: 'Integrity',
    desc: 'আমরা আমাদের প্রতিটি কাজে সততা ও নৈতিকতা বজায় রাখি।',
    icon: ShieldCheck,
  },
  {
    title: 'Empathy',
    desc: 'মানুষের কষ্টের প্রতি সহানুভূতিশীল হওয়া আমাদের মূল শক্তি।',
    icon: Heart,
  },
  {
    title: 'Service',
    desc: 'নিঃস্বার্থভাবে সেবা করাই আমাদের পরম ধর্ম।',
    icon: Users,
  },
  {
    title: 'Unity',
    desc: 'একসাথে কাজ করার মাধ্যমেই বড় পরিবর্তন সম্ভব।',
    icon: Sparkles,
  },
];

const stories = [
  {
    title: 'সবার জন্য কুরবানি ২০২৬',
    desc: 'বিশেষ কৃতজ্ঞতা: GLOBAL TEXTILE SOURCING LIMITED-এর সহযোগিতায় সফলভাবে সম্পন্ন হয়েছে সবার জন্য কুরবানি কর্মসূচি।',
    image: '/images/gallery-29.webp',
    tag: 'Qurbani',
  },
  {
    title: 'বিনামূল্যে চিকিৎসা ক্যাম্প',
    desc: 'সাধারণ মানুষের জন্য বিনামূল্যে স্বাস্থ্যসেবা, বিশেষজ্ঞ পরামর্শ এবং জরুরি ঔষধ প্রদান।',
    image: '/images/gallery-24.webp',
    tag: 'Health',
  },
  {
    title: 'রক্ত দান ক্যাম্প',
    desc: 'মুমূর্ষু রোগীদের জীবন বাঁচাতে নিয়মিত রক্ত দান কর্মসূচি এবং জনসচেতনতা বৃদ্ধি।',
    image: '/images/gallery-15.webp',
    tag: 'Health',
  },
];

const faqs = [
  {
    q: 'আলো ফাউন্ডেশন কীভাবে পরিচালিত হয়?',
    a: 'আলো ফাউন্ডেশন একটি সম্পূর্ণ অরাজনৈতিক ও সেচ্ছাসেবী প্রতিষ্ঠান। এটি একটি কার্যনির্বাহী কমিটির মাধ্যমে পরিচালিত হয় এবং সকল সিদ্ধান্ত স্বচ্ছতার সাথে নেওয়া হয়।',
  },
  {
    q: 'আমি কীভাবে অনুদান দিতে পারি?',
    a: 'আপনি আমাদের Donate পেজে গিয়ে bKash, নগদ বা ব্যাংক ট্রান্সফারের মাধ্যমে সরাসরি অনুদান দিতে পারেন। আপনার প্রতিটি টাকা আর্তমানবতার সেবায় ব্যয় করা হয়।',
  },
  {
    q: 'স্বেচ্ছাসেবী হিসেবে যুক্ত হওয়ার প্রক্রিয়া কী?',
    a: 'আপনি আমাদের Contact পেজের মাধ্যমে বা সরাসরি আমাদের অফিসে এসে সদস্য পদের জন্য আবেদন করতে পারেন। আমরা সবসময় উদ্যমী তরুণদের স্বাগত জানাই।',
  },
  {
    q: 'আপনাদের প্রধান কার্যক্রমগুলো কী কী?',
    a: 'আমাদের প্রধান কার্যক্রমের মধ্যে রয়েছে শিক্ষা সহায়তা, বিনামূল্যে চিকিৎসা সেবা, বৃক্ষরোপণ কর্মসূচি এবং দুর্যোগকালীন ত্রাণ সহায়তা।',
  },
];

const commitments = [
  'অরাজনৈতিক ও জনকল্যাণমুলক প্রতিষ্ঠান',
  'স্বচ্ছ ও জবাবদিহিতামূলক কার্যক্রম',
  'যশোদল ও কিশোরগঞ্জ কেন্দ্রিক সেবা',
  'শিক্ষার আলো ছড়িয়ে দেওয়া',
  'জরুরি ত্রাণ সহায়তা প্রদান',
  'স্বাস্থ্য সচেতনতা বৃদ্ধি',
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-ink pb-16 pt-36 sm:pb-20 sm:pt-40">
        <img
          src="/images/gallery-1.webp"
          alt=""
          aria-hidden="true"
          className={cn(
            'absolute inset-0 -z-10 h-full w-full object-cover opacity-45',
            !reduceMotion && 'animate-drift',
          )}
          referrerPolicy="no-referrer"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/90 to-ink/60"
        />

        <Container>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="eyebrow flex items-center gap-3 text-primary-light">
              <span className="rule bg-primary-light" />
              {site.tagline}
            </span>

            <h1 className="mt-7 text-display font-bold text-white">
              Spreading light across humanity
            </h1>

            <p className="bn mt-7 max-w-2xl text-lead text-slate-300">
              কিশোরগঞ্জের যশোদল থেকে আমাদের যাত্রা শুরু হয়েছে সমাজের অন্ধকার দূর করে শিক্ষার
              আলো ও মানবিক সহায়তা পৌঁছে দিতে।
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/donate" size="lg" className="text-white" icon={<ArrowRight size={18} />}>
                Donate Now
              </Button>
              <Button to="/programs" size="lg" variant="ghostLight" className="text-white">
                Our Programs
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-16 border-t border-white/15 pt-8 sm:mt-20"
          >
            <StatRow stats={impactStats.map((s) => ({ value: s.value, label: s.label }))} tone="dark" />
          </motion.div>
        </Container>
      </section>

      <Section tone="white" id="mission">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Who we are"
                title={<span className="bn">আমাদের পরিচয় ও প্রতিশ্রুতি</span>}
              />

              <div className="bn mt-8 space-y-5 text-lead text-slate-600">
                <p>
                  যশোদল, কিশোরগঞ্জ সদর থেকে আমাদের যাত্রা শুরু হয়েছে সমাজের পিছিয়ে পড়া
                  মানুষের কল্যাণে। আমরা বিশ্বাস করি, সম্মিলিত প্রচেষ্টায় একটি সুন্দর সমাজ
                  গঠন সম্ভব।
                </p>
                <p>
                  অরাজনৈতিক হওয়ার কারণে আমরা সমাজের সকল স্তরের মানুষের সাথে মিলেমিশে কাজ
                  করতে সক্ষম। প্রতিটি সদস্য নিবেদিতপ্রাণ এবং সমাজের প্রতি দায়বদ্ধ।
                </p>
              </div>

              <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="bn text-small font-medium text-ink">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button to="/about" variant="outline" icon={<ArrowRight size={16} />}>
                  Read our full story
                </Button>
              </div>
            </div>

            <Reveal>
              <figure className="relative">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/images/gallery-6.webp"
                    alt="আলো ফাউন্ডেশনের স্বেচ্ছাসেবীদের একটি কর্মসূচি"
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <figcaption className="surface-card absolute -bottom-6 -left-4 max-w-[15rem] p-6 sm:-left-8">
                  <p className="text-h3 font-bold text-ink">
                    <span className="tnum">100%</span>
                  </p>
                  <p className="mt-1 text-eyebrow font-semibold uppercase tracking-[0.18em] text-primary">
                    Transparency
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="muted" id="programs">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our focus"
              title={<span className="bn">যেসব ক্ষেত্রে আমরা কাজ করি</span>}
              className="sm:max-w-2xl"
            />
            <Link
              to="/programs"
              className="group inline-flex shrink-0 items-center gap-2 text-small font-semibold text-primary"
            >
              All programs
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Card key={pillar.title} interactive delay={index * 0.08} className="overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.titleBn}
                    width={640}
                    height={400}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-md bg-white/95 text-primary">
                    <pillar.icon size={18} />
                  </span>
                </div>

                <div className="flex flex-col p-7">
                  <h3 className="text-h3 font-bold text-ink">{pillar.title}</h3>
                  <p className="bn mt-3 text-small leading-relaxed text-slate-600">{pillar.desc}</p>
                  <Link
                    to="/programs"
                    className="mt-7 inline-flex items-center gap-1.5 self-start border-b border-transparent text-eyebrow font-semibold uppercase tracking-[0.18em] text-primary transition-colors hover:border-primary"
                  >
                    Learn more
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="dark" id="stories">
        <Container>
          <SectionHeading
            eyebrow="Success stories"
            title={<span className="bn">আমাদের কাজের প্রভাব</span>}
            tone="dark"
            className="max-w-3xl"
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {stories.map((story, index) => (
              <Reveal key={story.title} delay={index * 0.08} y={12}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/12 bg-white/[0.04] transition-colors hover:border-white/25 hover:bg-white/[0.07]">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      width={640}
                      height={400}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="eyebrow self-start text-primary-light">{story.tag}</span>
                    <h3 className="bn mt-4 text-h3 font-bold text-white">{story.title}</h3>
                    <p className="bn mt-3 text-small leading-relaxed text-white">
                      {story.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Our core values"
            title={<span className="bn">যেসব আদর্শে আমরা বিশ্বাসী</span>}
            className="max-w-3xl"
          />

          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06} y={12}>
                <div className="border-t border-slate-200 pt-6">
                  <value.icon size={22} className="text-primary" />
                  <h3 className="mt-5 text-h3 font-bold text-ink">{value.title}</h3>
                  <p className="bn mt-3 text-small leading-relaxed text-slate-600">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted" id="gallery">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Visual stories"
              title={<span className="bn">আমাদের কার্যক্রমের কিছু মুহূর্ত</span>}
            />
            <Link
              to="/gallery"
              className="group inline-flex shrink-0 items-center gap-2 text-small font-semibold text-primary"
            >
              Full gallery
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-6">
            {featuredImages.map((src, index) => (
              <Reveal
                key={src}
                delay={index * 0.06}
                y={12}
                className={cn(
                  'overflow-hidden rounded-lg',
                  index === 0 && 'col-span-2 row-span-2 lg:col-span-2',
                )}
              >
                <Link to="/gallery" className="block h-full" tabIndex={-1} aria-hidden="true">
                  <img
                    src={src}
                    alt=""
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white" id="faq">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Common questions"
                title={<span className="bn">আপনার মনে কি কোনো প্রশ্ন আছে?</span>}
                lede={
                  <span className="bn">
                    আলো ফাউন্ডেশন সম্পর্কে সাধারণ কিছু প্রশ্নের উত্তর এখানে দেওয়া হলো। আরও
                    জানতে আমাদের সাথে সরাসরি যোগাযোগ করুন।
                  </span>
                }
              />

              <Button
                href={site.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="mt-10"
                icon={<Facebook size={16} />}
              >
                Join our community
              </Button>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.q}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      >
                        <span className="bn text-body font-semibold text-ink">{faq.q}</span>
                        <ChevronDown
                          size={18}
                          className={cn(
                            'shrink-0 text-primary transition-transform duration-300',
                            isOpen && 'rotate-180',
                          )}
                        />
                      </button>
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="bn pb-6 pr-10 text-small leading-relaxed text-slate-600">
                        {faq.a}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <CtaSection
        title="আপনিও হতে পারেন এই আলোর সারথি"
        lede="আপনার সামান্য অনুদান বা স্বেচ্ছাসেবা বদলে দিতে পারে একটি জীবন। আজই আমাদের সাথে যুক্ত হোন।"
      />
    </>
  );
}
