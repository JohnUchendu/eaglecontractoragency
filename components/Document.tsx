'use client'

import { useState } from "react";
import Image from "next/image";

const documents = [
  {
    title: "Website Blueprint",
    description: "A complete step-by-step guide for structuring pest control websites.",
    image: "/documents/website-blueprint.png",
  },
  {
    title: "SEO Strategy Sheet",
    description: "Detailed SEO plan to rank pest control businesses on Google.",
    image: "/documents/seo-strategy.png",
  },
  {
    title: "Social Media Growth Plan",
    description: "Proven strategies to grow and engage pest control audiences online.",
    image: "/documents/social-media-plan.png",
  },
  {
    title: "Brand Identity Guide",
    description: "Typography, colors, and brand elements for a pest control business.",
    image: "/documents/brand-identity.png",
  },
];

export default function Document() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Documents That Work</h2>
      <p className="text-center text-gray-600 mb-12">
        These are the key documents I use to build high-converting pest control websites and brands.
      </p>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {documents.map((doc, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={doc.image}
              alt={doc.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => setSelectedImage(doc.image)}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{doc.title}</h3>
              <p className="text-gray-600">{doc.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50" onClick={() => setSelectedImage(null)}>
          <Image src={selectedImage} alt="Document" width={800} height={600} className="rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  );
}
