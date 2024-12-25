import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, Option } from "@material-tailwind/react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function JobPostModal({ open, onOpenChange, onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    languages: "",
    description: "",
    requirements: "",
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Gather form data
    const payload = {
      positionTitle: formData.title, // Use correct field names
      employmentType: formData.type,
      requiredLanguages: formData.languages, // This should be an array
      description: formData.description,
      requirements: formData.requirements,
    };
  
    console.log("Payload:", payload); // Log the payload to confirm the structure
  
    try {
      const response = await fetch("https://mls-b.vercel.app/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Convert to JSON string
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Job posted successfully:", result);
        onSubmit(result); // Trigger callback with the result
        onOpenChange(false); 
toast.success('Job added Successfully!')
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.error("Failed to post job:", response.statusText);
        const error = await response.json();
        console.error("Error details:", error);
        toast.error('Failed to post job!')
      }
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };
  

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Post New Position</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-900">
                Position Title
              </label>
              <Input
                placeholder="e.g., Medical Interpreter"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-900">
                Employment Type
              </label>
              <Select
                color="blue"
                label="Select type"
                value={formData.type}
                onChange={(value) => handleChange("type", value)}
              >
                <Option value="full-time">Full-time</Option>
                <Option value="part-time">Part-time</Option>
                <Option value="contract">Contract</Option>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-900">
              Required Languages
            </label>
            <Select
              color="blue"
              label="Select languages"
              value={formData.languages}
              onChange={(value) => handleChange("languages", value)}
            >
              <Option value="english-pashto">English & Pashto</Option>
              <Option value="english-dari">English & Dari</Option>
              <Option value="english-urdu">English & Urdu</Option>
              <Option value="english-hindi">English & Hindi</Option>
              <Option value="english-persian">English & Persian/Farsi</Option>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-900">
              Description
            </label>
            <Textarea
              placeholder="Enter job description..."
              className="min-h-[150px]"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          <div className="space-y-2 text-blue-900">
            <label className="text-sm font-medium">Requirements</label>
            <Textarea
              placeholder="Enter job requirements..."
              className="min-h-[100px]"
              value={formData.requirements}
              onChange={(e) => handleChange("requirements", e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-50 bg-blue-900 text-white py-2 px-4 rounded-lg"
          >
            Post Position
          </button>
        </form>
      </DialogContent>
      <ToastContainer autoClose={1500} />
    </Dialog>
  );
}
