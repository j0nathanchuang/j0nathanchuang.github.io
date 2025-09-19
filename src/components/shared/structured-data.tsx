export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jonathan Chuang',
    jobTitle: 'Full-Stack Software Engineer',
    description:
      'Full-stack software engineer at Greenlight with experience at Magical ($2M+ ARR growth), Capital One, and LeaseMagnets. University of Michigan graduate specializing in TypeScript, React, Next.js, and AI tools.',
    url: 'https://jonathanchuang.me',
    image: 'https://jonathanchuang.me/og-image.jpg',
    sameAs: [
      'https://www.linkedin.com/in/j0nathanchuang',
      'https://github.com/j0nathanchuang',
      'https://www.instagram.com/j0nathanchuang',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      addressCountry: 'US',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Michigan',
      description: 'Bachelor of Science, Computer Science',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Greenlight',
      url: 'https://greenlight.com',
    },
    knowsAbout: [
      'TypeScript',
      'React',
      'Next.js',
      'SQL',
      'Python',
      'Full-Stack Development',
      'Software Engineering',
      'AI Tools',
      'Startup Development',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Engineer',
      occupationLocation: {
        '@type': 'City',
        name: 'Chicago',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
