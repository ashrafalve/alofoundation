import { ArrowRight, Copy, Heart, ShieldCheck, Wallet } from 'lucide-react';
import {
  Button,
  Container,
  PageHeader,
  Reveal,
  Section,
  SectionHeading,
} from '@/src/components/ui';
import { site } from '@/src/lib/site';

const impacts = [
  {
    title: 'Education',
    desc: 'একজন শিক্ষার্থীর শিক্ষা উপকরণ নিশ্চিত করুন।',
    icon: Wallet,
  },
  {
    title: 'Healthcare',
    desc: 'একটি পরিবারের প্রাথমিক স্বাস্থ্যসেবা নিশ্চিত করুন।',
    icon: Heart,
  },
  {
    title: 'Relief',
    desc: 'একটি দুস্থ পরিবারের খাবার ও ত্রাণ নিশ্চিত করুন।',
    icon: ShieldCheck,
  },
];

export default function Donate() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title={
          <>
            আপনার <span className="text-primary-light">অনুদান</span>
          </>
        }
        lede="আপনার সামান্য অনুদান বদলে দিতে পারে একটি জীবন। আলো ফাউন্ডেশন আপনার প্রতিটি টাকার সঠিক ব্যবহার নিশ্চিত করে।"
        image="/images/gallery-9.webp"
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Why donate"
                title={<span className="bn">কেন অনুদান দেবেন?</span>}
              />

              <p className="bn mt-8 text-lead text-slate-600">
                আলো ফাউন্ডেশন একটি অরাজনৈতিক ও সেচ্ছাসেবী প্রতিষ্ঠান। আমরা কিশোরগঞ্জের
                পিছিয়ে পড়া মানুষের কল্যাণে কাজ করছি। আপনার প্রতিটি অনুদান সরাসরি মানুষের উপকারে
                আসে।
              </p>

              <ul className="mt-12 grid gap-6 sm:grid-cols-3">
                {impacts.map((impact) => (
                  <li
                    key={impact.title}
                    className="border-t border-slate-200 pt-6"
                  >
                    <impact.icon size={20} className="text-primary" />
                    <h3 className="mt-4 text-h3 font-bold text-ink">{impact.title}</h3>
                    <p className="bn mt-2 text-small leading-relaxed text-slate-600">
                      {impact.desc}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-16">
                <h2 className="text-h3 font-bold text-ink">পেমেন্ট মেথড</h2>

                <div className="mt-6 flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 p-7 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-primary shadow-card">
                      <Wallet size={20} />
                    </span>
                    <div>
                      <p className="text-small font-semibold text-ink">bKash — Personal</p>
                      <p className="text-small text-subtle">{site.phone.display}</p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Copy size={14} />}
                    onClick={() => navigator.clipboard?.writeText(site.phone.display)}
                  >
                    Copy number
                  </Button>
                </div>

                <p className="mt-4 text-small text-subtle">
                  Send to the number above, then let us know so we can record your contribution.
                </p>
              </div>
            </div>

            <Reveal>
              <div className="surface-card sticky top-28 overflow-hidden">
                <div className="flex items-center gap-4 border-b border-slate-200 bg-primary-tint px-8 py-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-dark text-white">
                    <Heart size={20} fill="currentColor" />
                  </span>
                  <div>
                    <h2 className="text-small font-bold text-ink">অনুদান দিতে যোগাযোগ করুন</h2>
                    <p className="text-eyebrow font-semibold uppercase tracking-[0.18em] text-primary">
                      Contact for donation
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="bn text-small leading-relaxed text-slate-600">
                    অনুদান সংক্রান্ত যেকোনো তথ্যের জন্য বা অনুদান দিতে সরাসরি আমাদের সাথে যোগাযোগ
                    করুন। আমরা আপনার সহায়তায় কৃতজ্ঞ।
                  </p>

                  <dl className="mt-8 space-y-6 border-t border-slate-200 pt-8">
                    <div>
                      <dt className="text-eyebrow font-semibold uppercase tracking-[0.18em] text-subtle">
                        Phone
                      </dt>
                      <dd className="tnum mt-1.5 text-body font-semibold text-ink">
                        <a href={site.phone.href} className="transition-colors hover:text-primary">
                          {site.phone.display}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-eyebrow font-semibold uppercase tracking-[0.18em] text-subtle">
                        Email
                      </dt>
                      <dd className="mt-1.5 break-all text-body font-semibold text-ink">
                        <a href={site.email.href} className="transition-colors hover:text-primary">
                          {site.email.display}
                        </a>
                      </dd>
                    </div>
                  </dl>

                  <Button
                    to="/contact"
                    className="mt-8 w-full text-white"
                    size="lg"
                    icon={<ArrowRight size={18} />}
                  >
                    Contact Us Now
                  </Button>

                  <p className="mt-6 flex items-center justify-center gap-2 text-eyebrow font-semibold uppercase tracking-[0.18em] text-subtle">
                    <ShieldCheck size={15} className="text-primary" />
                    Transparent &amp; accountable
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
