import React, { useState } from "react";

const faqs = [
    {
      question: "Who is this course for?",
      answer:
        "This course is perfect for beginners, hobbyists, and aspiring digital artists who want to learn digital illustration from scratch. No prior experience required!",
    },
    {
      question: "What tools do I need to take this course?",
      answer: (
        <ul>
          <li>✔ A tablet (iPad, Wacom, or any drawing tablet)</li>
          <li>✔ Digital art software (Procreate, Photoshop, or Krita)</li>
          <li>✔ A passion for creativity</li>
        </ul>
      ),
    },
    {
      question: "How long is the course?",
      answer:
        "The course runs for 4 weeks, with step-by-step lessons covering everything from sketching to advanced digital painting techniques.",
    },
    {
      question: "Is this a live or recorded course?",
      answer:
        "The course includes both pre-recorded lessons and live Q&A sessions with industry experts for better interaction and support.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes! After completing the course, you'll receive a Certificate of Completion, which can boost your portfolio and career opportunities.",
    },

    {
      question: "Can I monetize my digital art after this course?",
      answer:
        "Absolutely! The course includes a bonus session on freelancing & selling your art so you can start earning right away.",
    },
    {
      question: "What happens if I miss a live session?",
      answer:
        "No worries! All live sessions will be recorded and uploaded to your student dashboard for later viewing.",
    },
    {
      question: "How do I apply the coupon code?",
      answer:
        "Once you sign up, you’ll get 15 minutes to enter a valid coupon code to unlock exclusive bonuses.",
    },
    {
      question: "What if I don’t have a tablet?",
      answer:
        "You can still take the course using a mouse & free digital art software (like Krita). However, a tablet is recommended for better results.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "The ₹79 booking fee is non-refundable, but we’re confident you’ll love the course!",
    },
    {
      question: "How do I enroll?",
      answer:
        'Click the "Enroll Now" button, make the payment, and get instant access to the course materials!',
    },
    {
      question: "Do I need an internet connection for this course?",
      answer:
        "Yes, you will need a stable internet connection to access the video lessons and live Q&A sessions.",
    },
    {
      question: "Will I get lifetime access to the course content?",
      answer:
        "Yes! Once you enroll, you'll have lifetime access to all the lessons and resources.",
    },
    {
      question: "Do I need prior drawing experience?",
      answer:
        "Not at all! This course is designed for beginners and includes step-by-step guidance to help you improve your skills.",
    },
    {
      question: "Can I access the course on my mobile device?",
      answer:
        "Yes, you can watch the lessons on your mobile device, tablet, or computer as long as you have an internet connection.",
    },
  ];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>Q: {faq.question}</span>
            <span className={`arrow ${openIndex === index ? "open" : ""}`}>&#9662;</span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
