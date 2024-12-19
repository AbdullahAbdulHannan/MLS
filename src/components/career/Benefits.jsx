import { Award, Clock, Globe2, Laptop } from 'lucide-react';
import { Card } from "../ui/card";

const benefits = [
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Work on your terms with our flexible scheduling options"
  },
  {
    icon: Globe2,
    title: "Remote Work",
    description: "Opportunity to work remotely from anywhere in the world"
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Continuous learning and certification opportunities"
  },
  {
    icon: Laptop,
    title: "Modern Tools",
    description: "Access to cutting-edge interpretation technology"
  }
];

export function Benefits() {
  return (
    <section className="py-16 px-6 md:mt-[10%] bg-gray-100" data-aos="fade-up" id='next-section'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Why Join MLS?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-900/10 p-3 mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">{benefit.title}</h3>
                <p className="text-gray-700 italic">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}