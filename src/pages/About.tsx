import { Globe, Heart, ShieldCheck } from 'lucide-react';
import {
  Card,
  Container,
  CtaSection,
  PageHeader,
  Reveal,
  Section,
  SectionHeading,
  StatRow,
} from '@/src/components/ui';
import { teamMembers } from '@/src/lib/team';

const milestones = [
  { value: '2025', label: 'Established', labelBn: 'প্রতিষ্ঠিত' },
  { value: '30+', label: 'Volunteers', labelBn: 'স্বেচ্ছাসেবক' },
  { value: '400+', label: 'People reached', labelBn: 'উপকৃত মানুষ' },
  { value: '5+', label: 'Districts of focus', labelBn: 'কর্মক্ষেত্র' },
];

const values = [
  {
    title: 'স্বচ্ছতা',
    titleEn: 'Transparency',
    desc: 'আমাদের প্রতিটি কার্যক্রম এবং তহবিলের হিসাব সম্পূর্ণ স্বচ্ছ ও জবাবদিহিতামূলক।',
    icon: ShieldCheck,
  },
  {
    title: 'নিঃস্বার্থ সেবা',
    titleEn: 'Selfless service',
    desc: 'কোনো ব্যক্তিগত বা রাজনৈতিক স্বার্থ ছাড়াই আমরা আর্তমানবতার সেবায় নিয়োজিত।',
    icon: Heart,
  },
  {
    title: 'সামাজিক ঐক্য',
    titleEn: 'Social unity',
    desc: 'সমাজের সকল স্তরের মানুষকে সাথে নিয়ে আমরা একটি সুন্দর ও স্বনির্ভর সমাজ গঠন করতে চাই।',
    icon: Globe,
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            আমাদের <span className="text-primary-light">গল্প</span>
          </>
        }
        lede="যশোদল থেকে শুরু হওয়া এক মানবিক অভিযাত্রা। আলো ফাউন্ডেশন সমাজের অন্ধকার দূর করে শিক্ষার আলো ও মানবিক সহায়তা পৌঁছে দিতে প্রতিশ্রুতিবদ্ধ।"
        image="/images/gallery-5.webp"
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Our journey"
                title={
                  <span className="bn">যশোদল থেকে শুরু হওয়া এক মানবিক অভিযাত্রা</span>
                }
              />

              <div className="bn mt-8 space-y-5 text-lead text-slate-600">
                <p>
                  আলো ফাউন্ডেশন ২০২৫ সালে প্রতিষ্ঠিত একটি সেচ্ছাসেবী জনকল্যাণমুলক ও
                  অরাজনৈতিক প্রতিষ্ঠান। আমাদের মূল ভিত্তি হলো নিঃস্বার্থ সেবা এবং সামাজিক উন্নয়ন।
                  কিশোরগঞ্জ সদর উপজেলার যশোদল ইউনিয়ন থেকে আমাদের কার্যক্রম শুরু হলেও আমাদের
                  স্বপ্ন সারা দেশে মানবতার আলো ছড়িয়ে দেওয়া।
                </p>
                <p>
                  আমরা বিশ্বাস করি, ছোট ছোট প্রচেষ্টাই বড় পরিবর্তন আনতে পারে। শিক্ষা, স্বাস্থ্য
                  এবং দারিদ্র্য বিমোচনে আমরা নিরলসভাবে কাজ করে যাচ্ছি। অরাজনৈতিক হওয়ার কারণে
                  আমরা সমাজের সকল স্তরের মানুষের সাথে মিলেমিশে কাজ করতে সক্ষম।
                </p>
                <p>আমাদের প্রতিটি সদস্য নিবেদিতপ্রাণ এবং সমাজের প্রতি দায়বদ্ধ।</p>
              </div>

              <blockquote className="mt-10 border-l-2 border-primary pl-6">
                <p className="bn text-lead italic leading-relaxed text-ink">
                  &ldquo;মানুষের সেবা করাই আমাদের মূল লক্ষ্য। আমরা চাই প্রতিটি ঘরে শিক্ষার আলো
                  পৌঁছে দিতে।&rdquo;
                </p>
                <footer className="bn mt-3 text-small font-semibold text-subtle">
                  — প্রতিষ্ঠাতা, আলো ফাউন্ডেশন
                </footer>
              </blockquote>
            </div>

            <Reveal>
              <img
                src="/images/gallery-6.webp"
                alt="আলো ফাউন্ডেশনের কর্মসূচি"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full rounded-lg object-cover"
                referrerPolicy="no-referrer"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="muted" tight>
        <Container>
          <StatRow stats={milestones} />
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Our core values"
            title={<span className="bn">যে আদর্শে আমরা বিশ্বাসী</span>}
            align="center"
            className="mx-auto max-w-3xl"
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <Card key={value.title} interactive delay={index * 0.08} className="p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-tint text-primary">
                  <value.icon size={22} />
                </span>
                <h3 className="bn mt-6 text-h3 font-bold text-ink">{value.title}</h3>
                <p className="mt-1 text-eyebrow font-semibold uppercase tracking-[0.18em] text-primary">
                  {value.titleEn}
                </p>
                <p className="bn mt-4 text-small leading-relaxed text-slate-600">{value.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted" id="team">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our team"
              title={<span className="bn">আমাদের নিবেদিতপ্রাণ টিম</span>}
            />
            <p className="bn max-w-sm text-small leading-relaxed text-slate-600">
              একদল উদ্যমী ও মানবিক মানুষের সমন্বয়ে গঠিত আমাদের এই টিম, যারা নিরলসভাবে কাজ করে
              যাচ্ছে।
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
            {teamMembers.map((member, index) => (
              <li key={member.src}>
                <Reveal delay={(index % 5) * 0.05} y={12}>
                  <img
                    src={member.src}
                    alt={`আলো ফাউন্ডেশনের সদস্য ${index + 1}`}
                    width={400}
                    height={533}
                    loading="lazy"
                    className="aspect-[3/4] w-full rounded-md object-cover transition-opacity duration-300 hover:opacity-90"
                    referrerPolicy="no-referrer"
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaSection
        title="আমাদের সাথে যুক্ত হতে চান?"
        lede="স্বেচ্ছাসেবী হিসেবে বা অনুদান দিয়ে আপনিও আমাদের এই মানবিক অভিযাত্রার অংশ হতে পারেন।"
        primaryLabel="Donate Now"
        secondaryLabel="Become a Volunteer"
      />
    </>
  );
}
