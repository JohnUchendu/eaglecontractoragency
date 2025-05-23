import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#0A2647] text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold md:text-5xl">
        Helping Law Firms Succeed with a Professional and Trustworthy Online Image
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Custom Websites, Social Media Management & SEO for Law Firms in Nigeria
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <section className="py-16 px-6 flex justify-center items-center  dark:bg-gray-900">
            <a
              href="tel:+2347036580994" // Replace with your Telegram username
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 text-white text-lg font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 animate-pulse hover:animate-none hover:bg-blue-600"
            >
              <Send className="w-6 h-6" />
             Start 7 days  free trial
            </a>
          </section>
        </div>
      </div>
    </section>
  );
}
