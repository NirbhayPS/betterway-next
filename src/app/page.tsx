import PageHeader from "@/library/components/shared/PageHeader";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Get Holistic Ayurvedic Care for Chronic Diseases | BetterWay",
  description: "At BetterWay, we blend Ayurvedic wisdom with innovation to ensure your complete well-being! ✔ 56+ Years in Medical Practice ✔ Personalised Treatment"
};

export default function Home() {
  return (
    <>
      <Script
        id="social"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'BetterWay',
          legalName: 'Perdurance Health Pvt. Ltd.',
          description: 'India\'s best Ayurvedic Clinic for Chronic ailments.',
          url: 'https://www.betterway.com/',
          logo: 'https://media.licdn.com/dms/image/D4D0BAQGhdZekWFF3lg/company-logo_200_200/0/1689660618805?e=1717632000&v=beta&t=586J3WVxUemmtBPbnL-O2grAlh9W_uFv-eWzyC9P02o',
          slogan:
            'Our mission is to serve millions with chronic disorders on a technology-driven platform, rooted in Ayurved.',
          founder: [
            {
              '@type': 'Person',
              name: 'Manu Gupt',
              '@id': 'https://www.linkedin.com/in/manugupt/',
            },
            {
              '@type': 'Person',
              name: 'Victor Choudhary',
              '@id': 'https://www.linkedin.com/in/victorchoudhary1/',
            },
          ],
          address: {
            streetAddress:
              'DM6, Dakshin Marg, DLF Phase 2, Sector 25, Gurugram, Sarhol',
            addressLocality: 'DLF Phase II',
            addressRegion: 'Gurgaon',
            addressCountry: 'IN',
            postalCode: '122002',
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+918800702659',
              contactType: 'customer service',
              areaServed: 'IN',
              availableLanguage: 'en',
            },
          ],
          sameAs: [
            'https://www.youtube.com/@BetterWay_Health',
            'https://www.linkedin.com/company/betterwayco',
            'https://www.instagram.com/betterway_health',
          ],
        })}
      </Script>
      <div>
        <PageHeader />
      </div>
    </>
  );
}
