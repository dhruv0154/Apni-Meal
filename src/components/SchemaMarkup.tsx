import React from 'react';

export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://apnimeal.com",
        "name": "Apni Meal",
        "description": "Home-cooked meals delivered to hostels and PGs",
        "image": "https://apnimeal.com/logo.png",
        "priceRange": "₹₹",
        "servesCuisine": ["Indian", "Home-style", "Regional"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Student Hub, University Road",
          "addressLocality": "Bangalore",
          "postalCode": "560001",
          "addressCountry": "IN"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1250"
        },
        "menu": {
          "@type": "Menu",
          "hasMenuSection": [
            {
              "@type": "MenuSection",
              "name": "Today's Special",
              "hasMenuItem": [
                {
                  "@type": "MenuItem",
                  "name": "Maa's Special Thali",
                  "description": "A complete meal with 3 rotis, dal, rice, 2 sabzi, raita, and dessert",
                  "offers": {
                    "@type": "Offer",
                    "price": "149",
                    "priceCurrency": "INR"
                  }
                }
              ]
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}