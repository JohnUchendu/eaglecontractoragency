import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-[#0A2647] text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold md:text-5xl">
          Helping Pest Control Companies Dominate Online
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Custom Websites, Social Media Management & SEO for Pest Control Businesses in America.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-[#F76C22] hover:bg-[#d85a1d] text-white px-6 py-3 text-lg font-medium">
            Get a Free Consultation
          </Button>
          <Button variant="outline" className="border-white text-white px-6 py-3 text-lg font-medium">
            See Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
    