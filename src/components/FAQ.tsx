import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "What is Apni Meal?",
    answer: "Apni Meal is your trusted platform for authentic, home-cooked meals delivered right to your PG or hostel. We partner with experienced local chefs to offer nutritious and delicious food that feels just like home."
  },
  {
    question: "How do I place an order?",
    answer: "Simply browse our menu, choose your favorite dishes, and use our intuitive scheduling interface to select your preferred delivery date and time. Once you're ready, proceed to checkout and confirm your order."
  },
  {
    question: "Is the food healthy and hygienic?",
    answer: "Absolutely! Our chefs adhere to strict hygiene standards and use fresh, locally sourced ingredients to ensure every meal is both safe and nutritious."
  },
  {
    question: "Can I customize my order?",
    answer: "Yes, we offer customization options for most meals. During the ordering process, you can add special instructions or request modifications to suit your dietary preferences."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We support a range of payment options including credit/debit cards, digital wallets, UPI, and net banking for a smooth and secure transaction process."
  },
  {
    question: "How does the delivery process work?",
    answer: "Once you place your order, you'll receive real-time updates on your delivery status. Our team ensures that your meal is delivered hot and fresh at your selected time."
  },
  {
    question: "What if I face an issue with my order?",
    answer: "Our customer support team is available 24/7 to assist you with any concerns. You can reach out through our live chat or contact us directly via email/phone."
  },
  {
    question: "Do you offer subscription plans or discounts for regular orders?",
    answer: "Yes, we have special subscription plans and student discounts designed to provide you with regular, hassle-free meal options at affordable prices."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left"
      >
        <span className="text-lg font-medium text-charcoal">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-gray-500 transition-transform",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <p className="pb-6 text-gray-600">{answer}</p>
      </div>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our service
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}