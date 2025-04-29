// 'use client'

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted", formData);
//     // Add API call or email integration here
//   };

//   return (
//     <section className="max-w-2xl mx-auto py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold text-center mb-6">Book a Free Consultation</h2>
//       <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Fill out the form below and we’ll get in touch with you soon.</p>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <Input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
//         <Input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
//         <Input type="tel" name="phone" placeholder="Your Phone" required value={formData.phone} onChange={handleChange} />
//         <Input type="date" name="date" required value={formData.date} onChange={handleChange} />
//         <Textarea name="message" placeholder="Your Message" rows={4} value={formData.message} onChange={handleChange} />
//         <Button type="submit" className="w-full">Submit</Button>
//       </form>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Message sent! We'll get back to you soon.");
//   };

//   return (
//     <section className="max-w-2xl mx-auto py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//         >
//           Send Message
//         </button>
//       </form>

//       {/* Telegram Contact Button */}
//       <div className="text-center mt-6">
//         <a
//           href="https://t.me/yourusername" // Replace with your actual Telegram username
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 inline-flex items-center gap-2"
//         >
//           📩 Contact Us on Telegram
//         </a>
//       </div>
//     </section>
//   );
// }
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 px-6 flex justify-center items-center dark:bg-gray-900">
      <a
        href="tel:+2347036580994" // Replace with your Telegram username
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-green-500 text-white text-lg font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 animate-pulse hover:animate-none hover:bg-blue-600"
      >
        <Send className="w-6 h-6" />
        I want to boost credibility
      </a>
    </section>
  );
}
