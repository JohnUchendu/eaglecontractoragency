import Image from "next/image";
import Hero from "../components/Hero";
import AboutMe from "@/components/About";
import PortfolioShowcase from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import ContactPage from "@/components/Contact";
import FAQ from "@/components/Faq";

export default function Home() {
  return (
    <div className="">
     <Hero/>
     <AboutMe/>
     <PortfolioShowcase/>
     <Reviews/>
     <ContactPage/>
     <FAQ/>
     </div>
  );
}
