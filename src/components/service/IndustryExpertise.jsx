import { Building2, Scale, Stethoscope } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function IndustryExpertise() {
  return (
    <section className="py-16 px-6 bg-accent" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Industry Expertise</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={Stethoscope}
            title="Medical Interpretation"
            description="Specialized interpreters for medical consultations, procedures, and healthcare settings, ensuring accurate communication between healthcare providers and patients."
            className="bg-background"
          />
          <ServiceCard
            icon={Scale}
            title="Legal Interpretation"
            description="Expert interpreters for legal proceedings, court hearings, depositions, and client consultations, maintaining precise legal terminology and confidentiality."
            className="bg-background"
          />
          <ServiceCard
            icon={Building2}
            title="Social Services"
            description="Professional interpretation for social service appointments, community programs, and public service interactions, facilitating clear communication in sensitive situations."
            className="bg-background"
          />
        </div>
      </div>
    </section>
  );
}