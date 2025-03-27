import { useState } from "react";
import '../styles/FAQ.css';

const faqs = [
  {
    question: "What is your company's mission?",
    answer: "Our mission is to provide high-quality products and services that meet our customers' needs.",
  },
  {
    question: "How do I contact your company?",
    answer: "You can contact us through our website, by phone, or by email.",
  },
  {
    question: "What are the benefits of using your product/service?",
    answer: "Our product/service offers many benefits, including [list specific benefits].",
  },
  {
    question: "What are the system requirements for using your product/service?",
    answer: "Our product/service requires [list specific system requirements].",
  },
  {
    question: "How do I troubleshoot common issues with your product/service?",
    answer: "You can find troubleshooting tips on our website or by contacting our customer support team.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">General FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </button>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
