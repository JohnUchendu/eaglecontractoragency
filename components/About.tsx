import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/profile.jpg"
          alt="About Me"
          width={200}
          height={200}
          className="rounded-full border-4 border-primary shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-lg">
            I specialize in website design, development, social media, and SEO for
            pest control companies in America. With a focus on high-converting
            landing pages, I help businesses generate leads and grow their online
            presence. Let's build something great together!
          </p>
        </div>
      </div>
    </section>
  );
}