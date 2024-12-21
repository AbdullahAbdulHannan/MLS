import { Card } from "../ui/card";
import Badge from "../ui/badge";
import { useEffect, useState } from "react";
import { JobApplicationModal } from "./JobApplicationModal";

export function OpenPositions() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://mls-b.vercel.app/jobs");
        if (response.ok) {
          const data = await response.json();
          setJobs(data); // Update the state with jobs
        } else {
          console.error("Failed to fetch jobs:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="py-16 px-6" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Open Positions
        </h2>
        {jobs.length === 0 ? (
  <p className="text-gray-600 text-center">No Open Positions yet</p>
) : (
        <div className="space-y-6">
          {jobs.map((position, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-blue-900">
                      {position.
positionTitle}
                    </h3>
                    <Badge text={position.employmentType} />
                    {/* <Badge>{position.location || "N/A"}</Badge> */}
                  </div>
                  <p className="text-gray-800 italic mb-3">
                    {position.description}
                  </p>
                    <h3 className="text-blue-900">Requirements:</h3>
                  <p className="">
                    {position.requirements}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(position.requiredLanguages).map((language, idx) => (
                      <Badge key={`${language}-${idx}`} text={language}/>
                    ))}
                  </div>
                </div>
                <button className="lg:self-start bg-blue-900 text-white rounded-lg px-5 py-2"  onClick={() => handleApply(position)}>
                  Apply Now
                </button>
              </div>
            </Card>
          ))}
        </div>
  )}
      </div>
      <JobApplicationModal
        job={selectedJob}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
}
