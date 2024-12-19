// import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-16 px-6 bg-blue-900 text-primary-foreground" data-aos="fade-up">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-white font-bold mb-4">Ready to Break Language Barriers?</h2>
        <p className="mb-8 text-white max-w-2xl mx-auto">
          Contact us today to learn more about our interpretation services and how we can help you communicate effectively across languages.
        </p>
     <Link to={'/contact'}>
       <button className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300">
          Contact Now!
        </button>
     </Link> 
      </div>
    </section>
  );
}