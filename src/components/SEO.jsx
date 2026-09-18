import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, canonical, schema, image, keywords }) => {
  const siteUrl = 'https://naveenautocomponents.com';
  const fullTitle = title
    ? `${title}`
    : 'Naveen Auto Components | Heavy Engineering & Fabrication Chennai Cuddalore';
  const metaDescription =
    description ||
    'Naveen Auto Components (naveenautocomponents.com) - ISO 9001:2015 certified heavy engineering fabrication company in Chennai & Cuddalore. Storage tanks, steam pipeline ducts, PEB structural fabrication, rail/bus coach parts, and air blowers.';
  
  const defaultKeywords = 'Naveen Auto Components, naveenautocomponents.com, NAC Chennai, heavy engineering fabrication Chennai, heavy fabrication Cuddalore, storage tank manufacturer Tamil Nadu, PEB structural fabrication, steam distribution duct, pressure vessels India, ISO 9001:2015 metal fabrication';
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  const currentCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/images/logos/nac-logo-white-chennai.webp`;

  // Global Organization / LocalBusiness + Manufacturer Schema
  const defaultOrgSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer"],
    "name": "Naveen Auto Components (NAC)",
    "legalName": "Naveen Auto Components",
    "alternateName": "NAC",
    "image": `${siteUrl}/images/logos/nac-logo-white-chennai.webp`,
    "url": "https://naveenautocomponents.com/",
    "hasMap": "https://share.google/U57zAGwxO9ujDK0uy",
    "sameAs": [
      "https://share.google/U57zAGwxO9ujDK0uy",
      "https://www.linkedin.com/company/naveen-auto-components/",
      "https://www.facebook.com/naveenautocomponents",
      "https://twitter.com/naveenauto",
      "https://www.instagram.com/naveenautocomponents"
    ],
    "telephone": "+91-44-26360415",
    "email": "naveenauto2017@gmail.com",
    "priceRange": "$$$",
    "description": "One-Stop Manufacturing Industry for Ferrous and Non-Ferrous Metal Fabrication. Specializing in Storage Tanks, Steam Distribution Ducts, Header Pipelines, PEB Structural Fabrication, Rail & Bus Coach Components, Air Ducts & Material Handling Bins. ISO 9001:2015 Certified.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No-2c/5, SP-64, 3rd Main Road, Ambattur Ind Estate",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600058",
      "addressCountry": "IN"
    },
    "department": [
      {
        "@type": ["LocalBusiness", "Manufacturer"],
        "name": "Naveen Auto Components - Factory 1 (Chennai Unit)",
        "description": "High-speed CNC Laser cutting, Press Brake, Shearing, Rolling & Closed Shed with 10 MT EOT Crane",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No-T93, Sidco Women Industrial Park, Kattur, Thirumullaivoyal",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600062",
          "addressCountry": "IN"
        }
      },
      {
        "@type": ["LocalBusiness", "Manufacturer"],
        "name": "Naveen Auto Components - Factory 2 (Cuddalore Unit - 2.5 Acres)",
        "description": "2.5 Acres Heavy Structural & Large Diameter Pipe Rolling Facility with Expansive Open Yard",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No-94/2D, Cuddalore-Chidambaram Road, NH-32, Kotthattai Village",
          "addressLocality": "Chidambaram",
          "addressRegion": "Tamil Nadu",
          "postalCode": "608501",
          "addressCountry": "IN"
        }
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.1026,
      "longitude": 80.1584
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const schemaToRender = schema
    ? Array.isArray(schema)
      ? [defaultOrgSchema, ...schema]
      : [defaultOrgSchema, schema]
    : defaultOrgSchema;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={currentCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:site_name" content="Naveen Auto Components" />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaToRender)}
      </script>
    </Helmet>
  );
};
