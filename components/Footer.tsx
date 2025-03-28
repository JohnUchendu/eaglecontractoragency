import Link from "next/link";
import { Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Let's Work Together Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Let's Work Together</h3>
          <p className="text-gray-400">
            More Traffic, Better lead quality, Sell more services
          </p>

          <section className="py-2 flex   dark:bg-gray-900">
            <a
              href="https://t.me/yourtelegramusername" // Replace with your Telegram username
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-500 text-white text-lg font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 animate-pulse hover:animate-none hover:bg-blue-600"
            >
              <Send className="w-6 h-6" />
              Book a Call with John
            </a>
          </section>
        </div>

        {/* Quick Links */}
        {/* <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div> */}

        {/* Social Media & Copyright */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white transition duration-300" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white transition duration-300" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition duration-300" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white transition duration-300" />
            </Link>
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            © {new Date().getFullYear()} Eagle Contractor Agency. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
