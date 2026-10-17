
import React, { useState } from "react";
import "../styles/contact.css";

const API_URL = "http://localhost:5000/api/enquiry";

const contactDetails = [
  {
    icon: "☎",
    title: "Call Us",
    value: "+91 8807 754 570",
    description: "Talk to our team",
    href: "tel:+918807754570",
  },
  {
    icon: "⌖",
    title: "Visit Our Office",
    value: "Coimbatore, Tamil Nadu",
    description: "Sri Krishna Building, Chinthamanipudur",
    href: "https://www.google.com/maps/search/?api=1&query=Sri+Krishna+Building+80%2F2+Chinthamanipudur+Coimbatore+641402",
  },
  {
    icon: "◷",
    title: "Working Hours",
    value: "Monday – Saturday",
    description: "Contact us for availability",
    href: null,
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          course: formData.service,
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      setSuccessMessage(
        result.autoReplySent === false
          ? "Your enquiry reached our team, but the confirmation email could not be sent. Our team will follow up."
          : "Thank you! Your enquiry has been received. Please check your email for confirmation."
      );

      setFormData(initialForm);
    } catch (error) {
      console.error("Enquiry submission error:", error);

      setErrorMessage(
        error.message ||
          "Unable to connect to the server. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="ks-contact">
      {/* HERO */}
      <section className="ks-contact-hero">
        <div className="ks-contact-hero-glow ks-glow-one" />
        <div className="ks-contact-hero-glow ks-glow-two" />

        <div className="ks-contact-container">
          <div className="ks-contact-hero-content">
            <span className="ks-contact-eyebrow">
              <span className="ks-contact-eyebrow-dot" />
              LET'S CONNECT
            </span>

            <h1>
              Let's Talk About
              <span>Your Next Big Idea.</span>
            </h1>

            <p>
              Have a project, need a website, or want to learn more
              about our services? Tell us what you need. Our team
              is ready to help you take the next step.
            </p>

            <a
              href="#contact-form"
              className="ks-contact-primary-btn"
            >
              Send an Enquiry
              <span aria-hidden="true">↗</span>
            </a>

            <div className="ks-contact-trust">
              <span className="ks-contact-trust-icon">✓</span>
              Let's build something meaningful together.
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="ks-contact-info-section">
        <div className="ks-contact-container">
          <div className="ks-contact-info-grid">
            {contactDetails.map((item) => {
              const Content = (
                <>
                  <span className="ks-contact-info-icon">
                    {item.icon}
                  </span>

                  <span className="ks-contact-info-text">
                    <strong>{item.title}</strong>

                    <span className="ks-contact-info-value">
                      {item.value}
                    </span>

                    <span className="ks-contact-info-description">
                      {item.description}
                    </span>
                  </span>

                  {item.href && (
                    <span className="ks-contact-info-arrow">
                      ↗
                    </span>
                  )}
                </>
              );

              return (
                <div
                  className="ks-contact-info-card"
                  key={item.title}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("https://")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("https://")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="ks-contact-info-link"
                    >
                      {Content}
                    </a>
                  ) : (
                    <div className="ks-contact-info-link">
                      {Content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + LOCATION */}
      <section className="ks-contact-main-section">
        <div className="ks-contact-container">
          <div className="ks-contact-main-grid">
            {/* LEFT CONTENT */}
            <aside className="ks-contact-sidebar">
              <span className="ks-contact-section-label">
                CONTACT KSquare
              </span>

              <h2>
                We're Here to
                <span>Help You Grow.</span>
              </h2>

              <p>
                Whether you need a business website, application,
                digital marketing support or IT training, share your
                requirements with us.
              </p>

              <div className="ks-contact-sidebar-points">
                <div className="ks-contact-point">
                  <span>01</span>
                  <div>
                    <strong>Tell Us Your Idea</strong>
                    <p>
                      Explain your requirements and goals.
                    </p>
                  </div>
                </div>

                <div className="ks-contact-point">
                  <span>02</span>
                  <div>
                    <strong>Discuss Your Needs</strong>
                    <p>
                      Choose a suitable solution for your business.
                    </p>
                  </div>
                </div>

                <div className="ks-contact-point">
                  <span>03</span>
                  <div>
                    <strong>Plan the Next Step</strong>
                    <p>
                      Move forward with a clear project plan.
                    </p>
                  </div>
                </div>
              </div>

              <a
                className="ks-contact-whatsapp"
                href="https://wa.me/918807754570"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ks-contact-whatsapp-icon">
                  ◉
                </span>
                Chat with us on WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
            </aside>

            {/* ENQUIRY FORM */}
            <div
              className="ks-contact-form-card"
              id="contact-form"
            >
              <div className="ks-contact-form-heading">
                <span className="ks-contact-section-label">
                  SEND A MESSAGE
                </span>

                <h2>Tell Us About Your Project</h2>

                <p>
                  Fill in the details below to get started.
                </p>
              </div>

              {/* SUCCESS MESSAGE */}
              {successMessage && (
                <div
                  className="ks-contact-success"
                  role="status"
                  aria-live="polite"
                >
                  <strong>Enquiry Submitted Successfully!</strong>
                  <span>{successMessage}</span>
                </div>
              )}

              {/* ERROR MESSAGE */}
              {errorMessage && (
                <div
                  className="ks-contact-error"
                  role="alert"
                  aria-live="assertive"
                >
                  <strong>Enquiry Not Submitted</strong>
                  <span>{errorMessage}</span>
                </div>
              )}

              <form
                className="ks-contact-form"
                onSubmit={handleSubmit}
              >
                {/* NAME + EMAIL */}
                <div className="ks-contact-form-row">
                  <div className="ks-contact-field">
                    <label htmlFor="contact-name">
                      Full Name <span>*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                      maxLength={100}
                      disabled={submitting}
                    />
                  </div>

                  <div className="ks-contact-field">
                    <label htmlFor="contact-email">
                      Email Address <span>*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      maxLength={254}
                      disabled={submitting}
                    />
                  </div>
                </div>

                {/* PHONE + COURSE */}
                <div className="ks-contact-form-row">
                  <div className="ks-contact-field">
                    <label htmlFor="contact-phone">
                      Phone Number <span>*</span>
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[0-9+() -]{8,20}"
                      title="Enter a valid phone number"
                      required
                      maxLength={25}
                      disabled={submitting}
                    />
                  </div>

                  <div className="ks-contact-field">
                    <label htmlFor="contact-service">
                      Interested Course / Service <span>*</span>
                    </label>

                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                    >
                      <option value="">
                        Select a course or service
                      </option>

                      <optgroup label="IT Training Courses">
                        <option value="Full Stack Development">
                          Full Stack Development (MERN)
                        </option>

                        <option value="Data Science">
                          Data Science
                        </option>

                        <option value="Data Analytics">
                          Data Analytics
                        </option>

                        <option value="Python">
                          Python Programming
                        </option>

                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                      </optgroup>

                      <optgroup label="Business Services">
                        <option value="Website Development">
                          Website Development
                        </option>

                        <option value="App Development">
                          App Development
                        </option>

                        <option value="Internship">
                          Internship
                        </option>

                        <option value="Other">
                          Other Enquiry
                        </option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="ks-contact-field">
                  <label htmlFor="contact-message">
                    Your Message <span>*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    maxLength={2000}
                    disabled={submitting}
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="ks-contact-submit"
                  disabled={submitting}
                >
                  {submitting
                    ? "Sending Enquiry..."
                    : "Submit Enquiry"}

                  {!submitting && (
                    <span aria-hidden="true">↗</span>
                  )}
                </button>

                <p className="ks-contact-form-note">
                  Your information will be used to respond to
                  your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE LOCATION */}
      <section className="ks-contact-location-section">
        <div className="ks-contact-container">
          <div className="ks-contact-location-heading">
            <span className="ks-contact-section-label">
              FIND OUR OFFICE
            </span>

            <h2>Visit KSquare Softtech</h2>

            <p>
              Sri Krishna Building, 80/2, Chinthamanipudur,
              Trichy Main Road, Coimbatore – 641402, Tamil Nadu.
            </p>
          </div>

          <div className="ks-contact-map">
            <iframe
              title="KSquare Softtech office location in Coimbatore"
              src="https://maps.google.com/maps?q=Sri%20Krishna%20Building%2080%2F2%20Chinthamanipudur%20Coimbatore%20641402&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="ks-contact-location-footer">
            <span>
              <strong>KSquare Softtech</strong>
              <span>Coimbatore, Tamil Nadu, India</span>
            </span>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sri+Krishna+Building+80%2F2+Chinthamanipudur+Coimbatore+641402"
              target="_blank"
              rel="noopener noreferrer"
              className="ks-contact-map-link"
            >
              Get Directions ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
