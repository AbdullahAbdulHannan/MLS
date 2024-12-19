import { Headphones, Video } from "lucide-react";

export function Hero() {
  const scrollToSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative overflow-hidden bg-background py-24" data-aos="fade-right">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 italic">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="!text-5xl font-bold tracking-tight sm:text-6xl text-blue-900 ">
            Professional Interpretation Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            {/* Bridging language barriers with expert consecutive interpretation services through OPI and VRI solutions. */}
            At MLS (Multinational Language Services), we specialize in breaking down language barriers with our expert consecutive interpretation services. Our innovative solutions, including Over-the-Phone Interpretation (OPI) and Video Remote Interpretation (VRI), empower individuals and businesses to communicate seamlessly across diverse cultures and languages.
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

{/*
            <span className="gap-2 flex">
              <Headphones className="h-4 w-4 mt-1" />
              Phone Interpretation
            </span>
            <span  className="gap-2 flex">
              <Video className="h-4 w-4 mt-1" />
              Video Interpretation
            </span>
          </div> */}