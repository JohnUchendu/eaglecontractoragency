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
import TrustBadges from "@/components/TrustBadges";

export default function Home() {
  return (
    <div className="">
      <Topbar />
      <Hero />
      <TrustBadges/>
      <AboutMe />
      {/* <PortfolioShowcase /> */}
      {/* <Reviews /> */}
      <ContactPage />
      <FAQ />
      <Document/>
      <Footer/>
    </div>
  );
}
