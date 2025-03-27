import Image from "next/image";
import Hero from "../components/Hero";
import AboutMe from "@/components/About";
import PortfolioShowcase from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import ContactPage from "@/components/Contact";
import FAQ from "@/components/Faq";
import Topbar from "@/components/TopBar";
import Footer from "@/components/Footer";
import Document from "@/components/Document";

export default function Home() {
  return (
    <div className="">
      <Topbar />
      <Hero />
      <AboutMe />
      <PortfolioShowcase />
      <Reviews />
      <ContactPage />
      <FAQ />
      <Document/>
      <Footer/>
    </div>
  );
}
