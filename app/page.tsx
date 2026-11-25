import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { PartnerLogos } from "@/components/partner-logos";
import { PhotoCluster } from "@/components/photo-cluster";

const description =
  "Dé plek voor de Kop van Noord-Holland en omstreken waar ambitieuze tech-professionals zich presenteren voor uitdagende vacatures.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tech-talent.nu",
  url: "https://tech-talent.nu",
  description,
  inLanguage: "nl-NL",
};

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col overflow-x-clip px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8 sm:py-5 lg:h-dvh lg:min-h-[44rem] lg:px-12 lg:py-6">
      <a
        href="#inhoud"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-navy"
      >
        Naar de inhoud
      </a>

      <header className="shrink-0">
        <Link href="/" className="inline-flex">
          {/* The wordmark is an SVG; the image optimizer does not process it. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Tech-talent.nu"
            width={3732}
            height={808}
            className="h-[1.375rem] w-auto min-[360px]:h-[1.546875rem] sm:h-[1.71875rem] lg:h-[2.40625rem]"
          />
        </Link>
      </header>

      <main id="inhoud" className="mt-8 flex min-h-0 flex-1 flex-col sm:mt-5 lg:mt-6">
        <div className="flex min-h-0 flex-1 flex-col justify-between gap-6 lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:grid-rows-[minmax(0,1fr)] lg:gap-x-10">
          <div className="max-w-xl shrink-0 lg:max-w-none lg:self-center">
            <h1 className="text-4xl leading-[1.08] font-bold tracking-tight text-mint sm:text-5xl lg:text-[3.15rem]">
              Welkom bij <span className="whitespace-nowrap">Tech-talent.nu</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed font-medium text-white sm:text-xl lg:mt-5">
              {description}
            </p>

            <div className="mt-6 grid max-w-lg gap-3 min-[400px]:grid-cols-2 lg:mt-7">
              <CtaLink
                href="https://app.talentshare.nl/tech-talent/werknemers"
                audience="Voor werknemers"
                label="Presenteer jezelf"
                tone="solid"
              />
              <CtaLink
                href="https://app.talentshare.nl/tech-talent/werkgevers"
                audience="Voor werkgevers"
                label="Vind tech-talent"
                tone="outline"
              />
            </div>

            <div className="mt-3 flex max-w-lg items-center gap-3">
              <Image
                src="/partners/talent-share.png"
                alt="Talent Share"
                width={400}
                height={85}
                sizes="80px"
                className="h-auto w-20 shrink-0 opacity-60 brightness-0 invert"
              />
              <p id="talent-share-note" className="text-[0.6875rem] leading-relaxed font-normal text-white/60">
                Als je op een van de knoppen hierboven klikt, ga je naar de
                applicatie van Talent Share, partner van Tech-talent.nu.
              </p>
            </div>
          </div>

          <div className="h-60 shrink-0 sm:h-80 lg:h-full lg:min-h-0">
            <PhotoCluster />
          </div>
        </div>

        <PartnerLogos />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
