import { Accordion, AccordionItem } from "@/components/ui/accordion";

const faqs = [
  { question: "What pest control services do you offer?", answer: "We provide residential and commercial pest control solutions for rodents, insects, termites, and more." },
  { question: "Are your treatments safe for pets and children?", answer: "Yes! Our eco-friendly pest control methods ensure safety for your family and pets while effectively eliminating pests." },
  { question: "How soon can I book a consultation?", answer: "You can book a free consultation at your convenience. Same-day appointments may be available." },
  { question: "Do you offer warranties on your services?", answer: "Yes, we stand by our work with service guarantees and warranties depending on the pest control treatment provided." }
];

export default function FAQ() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible> {/* Added type="single" */}
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`} title={faq.question}>
            <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
