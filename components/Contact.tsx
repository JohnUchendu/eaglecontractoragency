'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add API call or email integration here
  };

  return (
    <section className="max-w-2xl mx-auto py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Book a Free Consultation</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Fill out the form below and we’ll get in touch with you soon.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        <Input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        <Input type="tel" name="phone" placeholder="Your Phone" required value={formData.phone} onChange={handleChange} />
        <Input type="date" name="date" required value={formData.date} onChange={handleChange} />
        <Textarea name="message" placeholder="Your Message" rows={4} value={formData.message} onChange={handleChange} />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </section>
  );
}
