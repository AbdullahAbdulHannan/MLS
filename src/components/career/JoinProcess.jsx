import { Card } from "../ui/card";
import { FileText, MessageSquare, Send, UserCheck } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Fill out our online application form with your experience and qualifications"
  },
  {
    icon: MessageSquare,
    title: "Initial Interview",
    description: "Virtual meeting to discuss your background and interpretation skills"
  },
  {
    icon: UserCheck,
    title: "Skills Assessment",
    description: "Complete a language proficiency test and interpretation scenarios"
  },
  {
    icon: Send,
    title: "Final Onboarding",
    description: "Join our team and start your journey with MLS"
  }
];

export function JoinProcess() {
  return (
    <section className="py-16 px-6 bg-gray-100" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">How to Join Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 relative bg-white">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-900/10 p-3 mb-4">
                  <step.icon className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">{step.title}</h3>
                <p className="text-gray-700 italic">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}