export default function StructuredData() {
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shreevatsa TG',
    alternateName: ['Shreevatsatg', 'Shreevatsa'],
    url: 'https://www.shreevatsatg.com',
    image: 'https://www.shreevatsatg.com/photo_2024-09-13_09-13-24.jpg',
    sameAs: [
      'https://github.com/Shreevatsatg',
      'https://www.linkedin.com/in/shreevatsa-t-g-7b6509314',
      'https://www.instagram.com/shreevatsa_tg'
    ],
    jobTitle: 'Student & Web Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'BCA Program'
    },
    description: 'BCA student, web developer, and digital artist based in Bangalore, India.'
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Shreevatsa TG | Shreevatsatg',
    alternateName: ['Shreevatsa TG Portfolio', 'Shreevatsatg Portfolio', 'Shreevatsa Portfolio'],
    url: 'https://www.shreevatsatg.com',
    description: 'Personal website of Shreevatsa TG (Shreevatsatg) - BCA student, web developer, and digital artist',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.shreevatsatg.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
} 