import Link from "next/link";
// import Image from "next/image";
import { Facebook, Mail } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full bg-gray-900 text-white py-2 px-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        {/* <Image src="/logo.png" alt="Eagle Contractor Agency" width={40} height={40} /> */}
        <span className="text-lg font-semibold">Eagle Contractor Agency</span>
      </Link>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 hover:text-blue-500 transition duration-300 cursor-pointer" />
        </Link>

        <Link href="mailto:contact@example.com">
          <Mail className="w-6 h-6 hover:text-red-500 transition duration-300 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
