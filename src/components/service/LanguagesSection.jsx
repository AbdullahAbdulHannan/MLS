import { LanguageGrid } from './LanguageGrid';

export function LanguagesSection() {
  return (
    <section className="py-16 px-6 bg-gray-100" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Languages We Support</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-gray-800">
          Our team of professional interpreters covers a wide range of languages and dialects, ensuring we can meet your specific communication needs.
        </p>
        <LanguageGrid />
      </div>
    </section>
  );
}