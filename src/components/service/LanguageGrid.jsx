import { Card } from "../ui/card";
import { Globe2 } from "lucide-react";

const languages = [
  "English",
  "Pashto (All Dialects)",
  "Dari",
  "Urdu",
  "Hindi",
  "Persian/Farsi"
];

export function LanguageGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {languages.map((language) => (
        <Card key={language} className="p-4 flex items-center gap-3 hover:bg-gray-200 transition-colors bg-white">
          <Globe2 className="h-5 w-5 text-blue-900" />
          <span className="font-medium text-gray-800">{language}</span>
        </Card>
      ))}
    </div>
  );
}