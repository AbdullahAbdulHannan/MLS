import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function JobApplicationModal({ job, open, onOpenChange }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const uploadResponse = await fetch("https://file.io", {
        method: "POST",
        body: formData,
      });
      const { link } = await uploadResponse.json();

      if (!link) {
        throw new Error("Failed to upload the file.");
      }

      emailjs
        .send(
          "service_bzuwy6i",
          "template_8ubte72",
          {
            ...data,
            jobTitle: job.title,
            cvLink: link,
          },
          "BbK90qeOjOYAilmKA"
        )
        .then(() => {
          toast.success("Application submitted successfully!");
          onOpenChange(false);
          reset();
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          toast.error("Failed to submit the application. Please try again.");
        });
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Failed to upload the file. Please try again.");
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply for {job?.title || "this job"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  {...register("firstName", { required: "First name is required" })}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  {...register("lastName", { required: "Last name is required" })}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?\d{10,15}$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Relevant Experience</Label>
              <Textarea
                id="experience"
                placeholder="Please describe your relevant experience..."
                className="min-h-[100px]"
                {...register("experience", { required: "Experience is required" })}
              />
              {errors.experience && (
                <p className="text-red-500 text-sm">{errors.experience.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cv">Upload CV</Label>
              <Input
                id="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="cursor-pointer"
                required
              />
              <p className="text-sm text-gray-700">
                Accepted formats: PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </>
  );
}