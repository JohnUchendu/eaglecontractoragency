export default function PortfolioShowcase() {
    const projects = [
      {
        title: "High-Converting Pest Control Landing Page",
        description: "Designed and developed a fully optimized landing page for lead generation.",
        image: "/project1.jpg",
      },
      {
        title: "SEO-Optimized Pest Control Website",
        description: "Built an SEO-friendly website that ranks on Google and drives organic traffic.",
        image: "/project2.jpg",
      },
      {
        title: "Social Media Growth Strategy",
        description: "Implemented a results-driven strategy that boosted engagement and conversions.",
        image: "/project3.jpg",
      },
    ];
  
    return (
      <section className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">My Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" />
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  