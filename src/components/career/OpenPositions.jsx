import { Card } from "../ui/card";
import  Badge  from "../ui/badge";

const positions = [
  {
    title: "Medical Interpreter",
    type: "Full-time",
    location: "Remote",
    languages: ["English", "Pashto"],
    description: "Looking for certified medical interpreters with experience in healthcare settings."
  },
  {
    title: "Legal Interpreter",
    type: "Full-time",
    location: "Remote",
    languages: ["English", "Dari", "Persian"],
    description: "Seeking experienced legal interpreters for court proceedings and legal consultations."
  },
  {
    title: "Social Services Interpreter",
    type: "Part-time",
    location: "Remote",
    languages: ["English", "Urdu", "Hindi"],
    description: "Join our team of interpreters supporting social service programs and community outreach."
  }
];

export function OpenPositions() {
  return (
    <section className="py-16 px-6" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Open Positions</h2>
        <div className="space-y-6">
          {positions.map((position, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-blue-900" >{position.title}</h3>
                    <Badge  text={position.type}/>
                    <Badge  text={position.location}/>
                  </div>
                  <p className="text-gray-800 italic mb-3">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {position.languages.map((language) => (
                      <Badge key={language}  text={language}/>
                    ))}
                  </div>
                </div>
                <button className="lg:self-start bg-blue-900 text-white rounded-lg px-5 py-2">Apply Now</button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}