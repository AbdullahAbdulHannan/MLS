import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import Badge from "../ui/badge";
import { FadeLoader } from "react-spinners";

export function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading,setLoading]=useState(false)
  // Fetch jobs from the backend (GET request)
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true)
      try {
        const response = await fetch("https://mls-b.vercel.app/jobs");
        if (response.ok) {
          const data = await response.json();
          setJobs(data); // Update the state with jobs
        } else {
          console.error("Failed to fetch jobs:", response.statusText);
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);
  // Delete a job by ID (DELETE request)
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://mls-b.vercel.app/jobs/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Update state to remove the deleted job
        setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
        console.log(`Job with ID ${id} deleted successfully`);
      } else {
        console.error("Failed to delete job:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <div className="space-y-4">
      {loading ?<div className="ms-[50%]"><FadeLoader
  color="#2e64b5"
  height={20}
  margin={2}
  speedMultiplier={2}
  width={6}
/> </div>
      :
      jobs.map((job) => (
        <Card key={job._id} className="p-6">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold text-blue-900">
                  {job.positionTitle} {/* Use 'positionTitle' from the API */}
                </h3>
                <Badge text={job.employmentType}/>
              </div>
              <Badge text={job.requiredLanguages.join(", ")}/>
              <p className="text-muted-foreground">{job.description}</p>
            </div>
            <button
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={() => handleDelete(job._id)}
            >
              <Trash2 className="h-5 w-5 text-red-900" />
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}
