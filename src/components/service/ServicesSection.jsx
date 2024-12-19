import { Headphones, Video } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function ServicesSection() {
  return (
    <section className="py-16 px-6 bg-gray-100" data-aos="fade-up" id='next-section'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Interpretation Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            icon={Headphones}
            title="Over the Phone Interpretation (OPI)"
            description="Professional phone interpretation services available 24/7. Our experienced interpreters provide real-time consecutive interpretation for all your communication needs, ensuring clear and accurate translation across multiple languages."
          />
          <ServiceCard
            icon={Video}
            title="Video Remote Interpretation (VRI)"
            description="High-quality video interpretation services that combine the benefits of face-to-face interpretation with the convenience of remote access. Perfect for situations requiring visual communication and personal connection."
          />
        </div>
      </div>
    </section>
  );
}