import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    // Add your API call or form submission logic here
    alert("Message sent successfully!");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[400px] bg-white shadow-md rounded-lg p-6 dark:bg-slate-950 dark:text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:text-white"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:text-white"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              placeholder="Enter your message"
              className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:text-white"
              rows="4"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <span className="text-sm text-red-500">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
