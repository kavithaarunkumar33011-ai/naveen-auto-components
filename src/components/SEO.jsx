import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, canonical, schema, image }) => {
  const siteUrl = 'https://www.naveenauto.com';
  const fullTitle = title
    ? `${title}`
    : 'Naveen Auto Components | Heavy Engineering & Fabrication Chennai';
  const metaDescription =
    description ||
    'ISO 9001:2015 certified heavy engineering fabrication company in Chennai & Cuddalore. Storage tanks, steam pipeline ducts, PEB structural fabrication, rail/bus coach parts, and air blowers.';
  const currentCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/images/logos/logo-white-cropped.jpeg`;

  // Global Organization / LocalBusiness Schema
  const defaultOrgSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Naveen Auto Components",
    "image": `${siteUrl}/images/logos/logo-white-cropped.jpeg`,
    "url": "https://www.naveenauto.com",
    "telephone": "+91-44-26360415",
    "email": "naveenauto2017@gmail.com",
    "priceRange": "$$$",
    "description": "One-stop manufacturing company for Ferrous and Non-Ferrous metal fabrication, industrial process equipment, PEB structural fabrication, industrial pipeline ducts, and storage tanks.",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "No. 2C/5, SP-64, 3rd Main Road, Ambattur Industrial Estate",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600058",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "No. T93, SIDCO Women's Industrial Park, Thirumullaivoyal",
        "addressLocality": "Tiruvallur District",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600062",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "No. 94/2D, Cuddalore-Chidambaram Road (NH-32), Kotthattai Village",
        "addressLocality": "Chidambaram",
        "addressRegion": "Tamil Nadu",
        "postalCode": "608501",
        "addressCountry": "IN"
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
