import { useState } from "react";
// import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { JobList } from "./JobList";
import { JobPostModal } from "./JobPostModal";
import { LoginForm } from "./LoginForm";

export function JobManagement({setIsAuth}) {
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddJob = (job) => {
    setJobs((prev) => [...prev, job]);
    setIsModalOpen(false)
  };
const handleLogOut=()=>{
  localStorage.removeItem("isAuth")
  setIsAuth(false)

}
  const handleDeleteJob = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  return (
    <div className="space-y-6">
      <button onClick={handleLogOut} className=" bg-red-900 text-white rounded-lg py-3 px-3">
          Logout
        </button>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-blue-900">Job Listings</h2>
        <button onClick={() => setIsModalOpen(true)} className="gap-2 bg-blue-900 text-white flex justify-between rounded-lg py-3 px-3">
          <Plus className="h-4 w-4" />
          Add Position
        </button>
      </div>

      <JobList jobs={jobs} onDelete={handleDeleteJob} />
      
      <JobPostModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmit={handleAddJob}
      />
    </div>
  );
}
