import { Mail, Phone, Video } from 'lucide-react';

export function ContactHero() {
  return (
    <div className="relative bg-background py-24 mt-12" data-aos="fade-right">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="!text-5xl font-bold tracking-tight sm:text-6xl text-blue-900">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Ready to break language barriers? Our team is here to help you with your interpretation needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-900">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-900" />
              <span>OPI Services</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-blue-900" />
              <span>VRI Services</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-900" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}