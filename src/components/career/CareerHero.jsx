import { GraduationCap } from 'lucide-react';

export function CareerHero() {
    const scrollToSection = () => {
        const nextSection = document.getElementById("next-section");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div className="relative bg-background py-24 md:mt-[10%]" data-aos="fade-right">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-blue-900/10 p-3">
              <GraduationCap className="h-8 w-8 text-blue-900" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-blue-900">
            Join Our Team
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700 italic">
            Be part of a dynamic team breaking language barriers and connecting cultures. We're always looking for talented interpreters and language professionals.
          </p>
          <div className="mt-20 flex items-center justify-center gap-6">
          <button className="animate-bounce bg-blue-900 text-white p-5 rounded-full flex gap-3" onClick={scrollToSection}>Explore More<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12.75L12 19.5l-7.5-6.75"
                />
              </svg></button>
          </div>
        </div>
      </div>
    </div>
  );
}