import Image from "next/image";

export default function TrustBadges() {
  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-900 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Trusted By Industry Leaders</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Google Partner Badge */}
        <div className="flex flex-col items-center">
          <Image src="/google-partner.png" alt="Google Partner" width={150} height={50} />
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Google Partner</p>
        </div>
        
        {/* SEO Badge */}
        <div className="flex flex-col items-center">
          <Image src="/seo-expert.png" alt="SEO Certified" width={150} height={50} />
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">SEO Certified</p>
        </div>
      </div>
    </section>
  );
}
