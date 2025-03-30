import Image from "next/image";
import { TrendingUp, Users, ShoppingCart, ShieldCheck } from "lucide-react"; // Import icons

export default function AboutMe() {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <Image
          src="/eaglejohn.png"
          alt="John At Eagle Contractor Agency"
          width={500}
          height={500}
          className="object-contain shadow-lg"
        />

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-4 text-lg">
            Welcome to Eagle Contractor Agency! Hi, I’m John, the founder of
            Eagle Contractor Agency. I don’t just build websites—I help pest
            control businesses make more money through a proven system that
            drives more traffic, improves lead quality, and increases sales.
            This system, backed by expert website design, SEO, and social media
            strategies, ensures consistent growth and profitability for my
            clients.
          </p>

          {/* Offers Section */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-blue-500 w-6 h-6" />
              <span className="text-lg">Get more traffic</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-blue-500 w-6 h-6" />
              <span className="text-lg">Better lead quality</span>
            </div>
            <div className="flex items-center gap-3">
              <ShoppingCart className="text-blue-500 w-6 h-6" />
              <span className="text-lg">Sell more pest control services</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-500 w-6 h-6" />
              <span className="text-lg">100% Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
