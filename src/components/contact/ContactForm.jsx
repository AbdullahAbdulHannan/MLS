import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function ContactForm() {
  const [isLoad, setIsLoad] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (data) => {
    setIsLoad(true);

    emailjs
      .send(
        "service_uonfc3o", // Replace with your EmailJS service ID
        "template_jevjyxs", // Replace with your EmailJS template ID
        data,
        "BbK90qeOjOYAilmKA" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setIsLoad(false);
          toast.success(
            "Thank you for messaging us!\nYour message has been submitted, and we will respond to you soon."
          );
          reset(); // Reset the form after submission
        },
        (error) => {
          setIsLoad(false);
          console.error("Failed to send email:", error);
          toast.error("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <section className="py-16 px-6 -mt-8 bg-gray-50" data-aos="fade-right">
      <div className="max-w-3xl mx-auto">
        <Card className="p-6 sm:p-8 !shadow-2xl !shadow-blue-gray-200">
          <h2 className="text-2xl font-semibold text-center text-blue-900 mb-6">Contact Us</h2>
          <form className="space-y-8" onSubmit={handleSubmit(sendEmail)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
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
                  name="lastName"
                  placeholder="Last Name"
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
                placeholder="email@example.com"
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
                placeholder="+1 (555) 000-0000"
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
              <Label htmlFor="service">Service Required</Label>
              <Select
                color="blue"
                label="Select Service"
                aria-label="services"
                onChange={(value) => setValue("service", value, { shouldValidate: true })}
              >
                <Option value="opi">Over the Phone Interpretation (OPI)</Option>
                <Option value="vri">Video Remote Interpretation (VRI)</Option>
                <Option value="medical">Medical Interpretation</Option>
                <Option value="legal">Legal Interpretation</Option>
                <Option value="social">Social Services Interpretation</Option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Required Language</Label>
              <Select
                color="blue"
                label="Select Language"
                aria-label="languages"
                onChange={(value) => setValue("language", value, { shouldValidate: true })}
              >
                <Option value="english">English</Option>
                <Option value="pashto">Pashto (All Dialects)</Option>
                <Option value="dari">Dari</Option>
                <Option value="urdu">Urdu</Option>
                <Option value="hindi">Hindi</Option>
                <Option value="persian">Persian/Farsi</Option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Please provide details about your interpretation needs..."
                className="min-h-[150px]"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-900 hover:bg-blue-700 rounded-lg text-lg font-medium transition duration-300"
            >
              {isLoad ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Card>
      </div>
      <ToastContainer/>
    </section>
  );
}
