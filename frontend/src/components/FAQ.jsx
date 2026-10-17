
import React, { useState } from "react";
import "../styles/FAQ.css";

const faqData = [
  {
    category: "Services",
    question: "What services does KSquare Softtech provide?",
    answer:
      "KSquare Softtech provides website development, mobile app development, digital marketing, UI/UX design, video editing, software solutions, and IT training services."
  },
  {
    category: "Services",
    question: "Do you develop custom websites for businesses?",
    answer:
      "Yes! We develop responsive, modern, and SEO-friendly websites tailored to your business requirements, brand identity, and target audience."
  },
  {
    category: "Training",
    question: "What courses are available at KK Academy?",
    answer:
      "We offer Full Stack Development (MERN), Data Science, Data Analytics, Python, Digital Marketing, UI/UX Design, and other industry-focused IT courses."
  },
  {
    category: "Training",
    question: "Do you provide practical training and real-time projects?",
    answer:
      "Yes! Our training focuses on hands-on practice, assignments, mini projects, and real-world project experience to help students develop practical skills."
  },
  {
    category: "Internship",
    question: "Do you offer internship opportunities?",
    answer:
      "Yes! Internship opportunities are available in selected technical domains. Contact our team to learn about current openings, eligibility, duration, and fees."
  },
  {
    category: "Projects",
    question: "How can I start a project with KSquare Softtech?",
    answer:
      "Contact us through our website, phone, or WhatsApp. Share your project requirements, and our team will discuss the scope, timeline, and estimated cost with you."
  },
  {
    category: "Support",
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes! Website maintenance, bug fixes, content updates, performance improvements, and technical support can be arranged according to your project requirements."
  },
  {
    category: "Contact",
    question: "How can I contact your team?",
    answer:
      "You can reach our team through the Contact page on our website or through our official phone number and email address."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(faqData.map((item) => item.category))
  ];

  const filteredFAQs =
    activeCategory === "All"
      ? faqData
      : faqData.filter(
          (item) => item.category === activeCategory
        );

  const toggleFAQ = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-bg-orb faq-orb-one"></div>
      <div className="faq-bg-orb faq-orb-two"></div>

      <div className="faq-container">
        {/* Section Heading */}
        <div className="faq-heading">
          <span className="faq-eyebrow">
            <span className="faq-eyebrow-dot"></span>
            GOT QUESTIONS?
          </span>

          <h2>
            Frequently Asked
            <span className="faq-gradient-text"> Questions</span>
          </h2>

          <p>
            Everything you need to know about our services,
            training programs, internships, and projects.
          </p>
        </div>

        {/* Category Filters */}
        <div
          className="faq-filters"
          role="group"
          aria-label="Filter FAQs by category"
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`faq-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(category);
                setActiveIndex(0);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="faq-list">
          {filteredFAQs.map((item, index) => {
            const isOpen = activeIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="faq-question-text">
                    {item.question}
                  </span>

                  <span className="faq-toggle">
                    <span className="faq-toggle-line"></span>
                    <span className="faq-toggle-line vertical"></span>
                  </span>
                </button>

                <div
                  className="faq-answer-wrapper"
                  id={answerId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className="faq-answer-inner">
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="faq-cta">
          <div className="faq-cta-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="faq-cta-content">
            <h3>Still have questions?</h3>
            <p>
              Our team is ready to help you find the right solution.
            </p>
          </div>

          <a href="/contact" className="faq-contact-btn">
            Contact Us
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
