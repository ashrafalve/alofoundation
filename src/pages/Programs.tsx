import {
  BookOpen,
  Check,
  GraduationCap,
  HandHelping,
  HeartPulse,
  Soup,
  Trophy,
  Trees,
  Users2,
} from 'lucide-react';
import {
  Button,
  Card,
  Container,
  CtaSection,
  PageHeader,
  Section,
  SectionHeading,
  StatRow,
} from '@/src/components/ui';

const programs = [
  {
    title: 'Education for All',
    titleBn: 'শিক্ষা সহায়তা',
    desc: 'অসহায় ও মেধাবী শিক্ষার্থীদের স্কুল ফি, বই এবং শিক্ষা উপকরণ প্রদান। আমরা বিশ্বাস করি শিক্ষাই জাতির মেরুদণ্ড এবং প্রতিটি শিশুর শিক্ষার অধিকার রয়েছে।',
    icon: GraduationCap,
    features: ['Scholarships', 'School supplies', 'Literacy programs'],
  },
  {
    title: 'Healthcare & Blood Donation',
    titleBn: 'স্বাস্থ্যসেবা ও রক্তদান',
    desc: 'বিনামূল্যে স্বাস্থ্য পরীক্ষা, চক্ষু শিবির এবং জরুরি ঔষধ বিতরণ কার্যক্রম। প্রান্তিক মানুষের কাছে আধুনিক স্বাস্থ্যসেবা পৌঁছে দেওয়াই আমাদের লক্ষ্য।',
    icon: HeartPulse,
    features: ['Free medical camps', 'Medicine support', 'Health awareness'],
  },
  {
    title: 'Food Security',
    titleBn: 'খাদ্য নিরাপত্তা',
    desc: 'দুস্থ ও অসহায় পরিবারের মাঝে নিয়মিত খাদ্য সামগ্রী বিতরণ এবং পুষ্টি সচেতনতা বৃদ্ধি। ক্ষুধার্ত মানুষের মুখে হাসি ফোটানোই আমাদের সার্থকতা।',
    icon: Soup,
    features: ['Food packages', 'Nutrition education', 'Emergency relief'],
  },
  {
    title: 'Youth Empowerment',
    titleBn: 'যুব উন্নয়ন',
    desc: 'তরুণদের কারিগরি ও দক্ষতা উন্নয়নমূলক প্রশিক্ষণ প্রদান। আমরা চাই তরুণরা স্বাবলম্বী হয়ে দেশের উন্নয়নে অবদান রাখুক।',
    icon: Users2,
    features: ['Skill training', 'Leadership workshops', 'Job placement'],
  },
  {
    title: 'Disaster Relief',
    titleBn: 'দুর্যোগে সহায়তা',
    desc: 'বন্যা, ঘূর্ণিঝড় বা যেকোনো প্রাকৃতিক দুর্যোগে ক্ষতিগ্রস্তদের পাশে দাঁড়ানো। জরুরি ত্রাণ ও পুনর্বাসন কার্যক্রম আমাদের অগ্রাধিকার।',
    icon: HandHelping,
    features: ['Emergency rescue', 'Relief distribution', 'Rehabilitation'],
  },
  {
    title: 'Social Awareness',
    titleBn: 'সামাজিক সচেতনতা',
    desc: 'বাল্যবিবাহ রোধ, মাদক বিরোধী প্রচারণা এবং সামাজিক সচেতনতা বৃদ্ধিতে নিয়মিত ক্যাম্পেইন ও সেমিনার আয়োজন।',
    icon: BookOpen,
    features: ['Anti-drug campaign', 'Child marriage prevention', 'Rights awareness'],
  },
  {
    title: 'Sports Events',
    titleBn: 'ক্রীড়া প্রতিযোগিতা',
    desc: 'তরুণদের শারীরিক ও মানসিক বিকাশে নিয়মিত ক্রীড়া প্রতিযোগিতার আয়োজন। খেলাধুলার মাধ্যমে আমরা যুবসমাজকে মাদক ও অপসংস্কৃতি থেকে দূরে রাখতে চাই।',
    icon: Trophy,
    features: ['Annual sports day', 'Cricket tournaments', 'Football matches'],
  },
  {
    title: 'Plantation Program',
    titleBn: 'বৃক্ষরোপণ কর্মসূচি',
    desc: 'পরিবেশ রক্ষায় ও জলবায়ু পরিবর্তনের ঝুঁকি কমাতে আমরা নিয়মিত বৃক্ষরোপণ কর্মসূচি পালন করি। সবুজ পৃথিবী গড়তে আমাদের এই ক্ষুদ্র প্রয়াস।',
    icon: Trees,
    features: ['Tree distribution', 'Reforestation', 'Environmental awareness'],
  },
];

const outcomes = [
  { value: '50+', label: 'Students helped', labelBn: 'শিক্ষার্থী উপকৃত' },
  { value: '2+', label: 'Medical camps', labelBn: 'চিকিৎসা ক্যাম্প' },
  { value: '1,000+', label: 'Food packages', labelBn: 'খাদ্য প্যাকেজ' },
  { value: '5+', label: 'Villages covered', labelBn: 'গ্রাম অন্তর্ভুক্ত' },
];

export default function Programs() {
  return (
    <>
      <PageHeader
        eyebrow="Our programs"
        title={
          <>
            আমাদের <span className="text-primary-light">কার্যক্রম</span>
          </>
        }
        lede="আলো ফাউন্ডেশন বহুমুখী সামাজিক উন্নয়নমূলক কাজ করে থাকে। আমাদের প্রতিটি কার্যক্রম পরিচালিত হয় স্বচ্ছতা ও নিষ্ঠার সাথে।"
        image="/images/gallery-4.webp"
      />

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title={<span className="bn">আমরা যেসব ক্ষেত্রে কাজ করি</span>}
            lede="আটটি মূল কর্মক্ষেত্র — প্রতিটি স্বচ্ছ হিসাব ও জবাবদিহিতার সাথে পরিচালিত।"
          />

          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
{programs.map((program, index) => (
              <li key={program.title}>
                <Card interactive delay={(index % 3) * 0.08} className="flex flex-col p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-tint text-primary">
                    <program.icon size={22} />
                  </span>

                  <h2 className="bn mt-6 text-h3 font-bold text-ink">{program.titleBn}</h2>
                  <p className="mt-1 text-eyebrow font-semibold uppercase tracking-[0.18em] text-primary">
                    {program.title}
                  </p>

                  <p className="bn mt-4 text-small leading-relaxed text-slate-600">
                    {program.desc}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-slate-200 pt-6">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check size={14} strokeWidth={3} className="mt-1 shrink-0 text-primary" />
                        <span className="text-small text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <Button to="/contact" size="sm" variant="outline">
                      Get involved
                    </Button>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="muted" tight>
        <Container>
          <StatRow stats={outcomes} />
        </Container>
      </Section>

      <CtaSection
        title="আমাদের কার্যক্রমে অংশ নিন"
        lede="আপনার একটি ছোট অবদান আমাদের কার্যক্রমকে আরও গতিশীল করতে পারে। আজই আমাদের সাথে যুক্ত হোন।"
      />
    </>
  );
}
