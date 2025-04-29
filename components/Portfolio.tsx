// export default function PortfolioShowcase() {
//     const projects = [
//       {
//         title: "High-Converting Pest Control Landing Page",
//         description: "Designed and developed a fully optimized landing page for lead generation.",
//         image: "/project1.jpg",
//       },
//       {
//         title: "SEO-Optimized Pest Control Website",
//         description: "Built an SEO-friendly website that ranks on Google and drives organic traffic.",
//         image: "/project2.jpg",
//       },
//       {
//         title: "Social Media Growth Strategy",
//         description: "Implemented a results-driven strategy that boosted engagement and conversions.",
//         image: "/project3.jpg",
//       },
//     ];
  
//     return (
//       <section className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-8">My Work</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//                 <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" />
//                 <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
//                 <p className="mt-2">{project.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }
  



import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>

      {/* Demo Website Showcase */}
      <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold mb-4">K.K. Ubani & Co.</h3>
        <div className="relative w-full h-60 md:h-80">
          <Image 
            src="/demo-website.jpg" 
            alt="K.K. Ubani & Co." 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />
        </div>
        <Link href="https://kkubaniandco.com/" target="_blank" rel="noopener noreferrer">
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            View Website
          </button>
        </Link>
      </div>

      {/* Before & After Showcase */}
      {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"> */}
        {/* Before Image */}
        {/* <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Before Redesign</h3>
          <div className="relative w-full h-60">
            <Image 
              src="/before.jpg" 
              alt="Before Website Redesign" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            The old website had poor navigation, outdated design, and low conversion rates.
          </p>
        </div> */}

        {/* After Image */}
        {/* <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">After Redesign</h3>
          <div className="relative w-full h-60">
            <Image 
              src="/after.jpg" 
              alt="After Website Redesign" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            The new design is mobile-friendly, SEO-optimized, and built for higher lead conversions.
          </p>
        </div>
      </div> */}
    </section>
  );
}
