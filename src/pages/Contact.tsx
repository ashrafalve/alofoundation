import { ArrowUpRight, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Button, Container, PageHeader, Reveal, Section, SectionHeading } from '@/src/components/ui';
import { site } from '@/src/lib/site';

const channels = [
  {
    icon: MapPin,
    label: 'Address',
    value: (
      <>
        {site.address.line1}
        <br />
        {site.address.line2}
      </>
    ),
    href: site.address.mapsUrl,
    external: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: site.phone.display,
    href: site.phone.href,
    external: false,
  },
  {
    icon: Mail,
    label: 'Email',
    value: site.email.display,
    href: site.email.href,
    external: false,
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            আমাদের সাথে <span className="text-primary-light">যোগাযোগ</span>
          </>
        }
        lede="আপনার যেকোনো প্রশ্ন, পরামর্শ বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করুন। আমাদের ফেসবুক গ্রুপে যুক্ত হয়ে আমাদের সাথে থাকুন।"
        image="/images/gallery-12.webp"
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Reach us"
                title={<span className="bn">যোগাযোগের তথ্য</span>}
              />

              <ul className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
                {channels.map((channel) => (
                  <li key={channel.label} className="py-6">
                    <span className="flex items-center gap-2 text-eyebrow font-semibold uppercase tracking-[0.18em] text-subtle">
                      <channel.icon size={14} className="text-primary" />
                      {channel.label}
                    </span>
                    {channel.external ? (
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-3 inline-flex items-start gap-2 text-body font-semibold text-ink transition-colors hover:text-primary"
                      >
                        <span className="bn">{channel.value}</span>
                        <ArrowUpRight
                          size={16}
                          className="mt-1 shrink-0 text-subtle transition-colors group-hover:text-primary"
                        />
                      </a>
                    ) : (
                      <a
                        href={channel.href}
                        className="mt-3 inline-block break-all text-body font-semibold text-ink transition-colors hover:text-primary"
                      >
                        {channel.value}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <Button
                href={site.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="mt-8"
                icon={<Facebook size={16} />}
              >
                Follow on Facebook
              </Button>
            </div>

            <Reveal>
              <div className="surface-card flex h-full flex-col justify-between gap-10 bg-primary-tint p-10">
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-md bg-primary-dark text-white">
                    <Facebook size={26} />
                  </span>

                  <h2 className="bn mt-8 text-h2 font-bold text-ink">
                    আমাদের ফেসবুক গ্রুপে যোগ দিন
                  </h2>
                  <p className="bn mt-4 text-lead text-slate-600">
                    আলো ফাউন্ডেশনের সকল আপডেট পেতে এবং আমাদের কমিউনিটির অংশ হতে আমাদের অফিসিয়াল
                    ফেসবুক গ্রুপে যুক্ত হন। কার্যক্রমের খবর, স্বেচ্ছাসেবী আবেদন ও সুযোগ সেখানেই
                    প্রকাশ করা হয়।
                  </p>
                </div>

                <Button
                  href={site.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="text-white"
                  icon={<Facebook size={18} />}
                >
                  ফেসবুক গ্রুপে যোগ দিন
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="white" tight className="pt-0">
        <Container>
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <iframe
              title="আলো ফাউন্ডেশনের অবস্থান — যশোদল, কিশোরগঞ্জ"
              src={site.address.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0 sm:h-[480px]"
            />
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="bn text-small text-slate-600">
              {site.address.line1}, {site.address.line2}
            </p>
            <Button
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              icon={<ArrowUpRight size={15} />}
            >
              View on Google Maps
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
