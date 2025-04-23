import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Create and inject JSON-LD structured data into the document head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Shreevatsa TG",
      "alternateName": "Shreevatsatg",
      "url": "https://www.shreevatsatg.com",
      "image": "https://www.shreevatsatg.com/photo_2024-09-13_09-13-24.jpg",
      "description": "BCA student, web developer, and digital artist based in Bangalore, India.",
      "sameAs": [
        "https://twitter.com/shreevatsatg",
        "https://github.com/shreevatsatg",
        "https://www.instagram.com/shreevatsatg",
        "https://www.linkedin.com/in/shreevatsatg"
      ],
      "knowsAbout": [
        "Web Development",
        "Frontend Development",
        "UI/UX Design",
        "Digital Art",
        "Traditional Painting",
        "React",
        "Vite",
        "JavaScript",
        "TypeScript"
      ],
      "jobTitle": "Student & Web Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      }
    });

    document.head.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default StructuredData; 