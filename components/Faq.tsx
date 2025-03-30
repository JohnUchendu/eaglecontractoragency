import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Ensure this import path is correct

const faqs = [
  {
    question: "How can you help me scale my pest control business?",
    answer:
      "I can help scale your business using my Ultimate Marketing Growth Document, which is specifically designed for pest control companies. This system ensures long-term growth and consistent lead generation.",
  },
  {
    question: "Will your system guarantee more leads for my business?",
    answer:
      "es! I guarantee more leads because my system has been proven to work, and I am an expert in this field. My strategies are tailored to attract high-quality leads that convert into paying customers.",
  },
  {
    question: "How does your process differ from other marketing agencies?",
    answer:
      "Unlike generic agencies, I focus exclusively on pest control businesses and use a proven system that generates real revenue, not just website clicks. My system is designed to help you make more money, not just get traffic.",
  },
  {
    question: "What kind of ROI can I expect from working with you?",
    answer:
      "My system is built to maximize your return on investment (ROI) by improving your Google rankings, SEO performance, and ad conversion rates—leading to more paying customers.",
  },
  {
    question: "Do you offer a money-back guarantee if I don’t see results?",
    answer:
      "Yes! I stand by my system with a 100% money-back guarantee. If you don’t see results, you don’t pay.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! I don’t just build systems and leave. I offer continuous support to ensure your business keeps growing and improving.",
  },
  {
    question: "How do I get started with Eagle Contractor Agency?",
    answer:
      "You can get started with Eagle Contractor Agency by filling out a form. From there, I’ll analyze your business and show you how we can scale it together.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
