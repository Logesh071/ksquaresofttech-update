
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  UserRound,
} from "lucide-react";
import "../styles/student-register.css";

const API_URL = "http://localhost:5000/api";

const courseOptions = [
  "AI Enhanced Full Stack Development (MERN)",
  "Python Full Stack Development",
  "Python Programming",
  "Data Science",
  "Data Analytics",
  "AI / Machine Learning",
  "Digital Marketing",
  "UI/UX Design",
  "Other / Not Sure Yet",
];

const initialForm = {
  fullName: "",
  phone: "",
  whatsapp: "",
  email: "",
  college: "",
  department: "",
  year: "",
  interestType: "Course",
  course: "",
  learningMode: "Offline",
  joiningTimeline: "",
  contactConsent: false,
  marketingConsent: false,
};

function StudentRegistration() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [otpAccessToken, setOtpAccessToken] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load MSG91 widget script.
    if (document.querySelector("#msg91-otp-script")) return;

    const script = document.createElement("script");
    script.id = "msg91-otp-script";
    script.src = "https://verify.msg91.com/otp-provider.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Keep the script loaded for the page session.
    };
  }, []);

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "phone") {
      setOtpVerified(false);
      setOtpAccessToken("");
      setMessage("");
    }

    setError("");
  };

  const startPhoneVerification = () => {
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (typeof window.initSendOTP !== "function") {
      setError("MSG91 widget is loading. Wait a few seconds and try again.");
      return;
    }

    const configuration = {
      widgetId: "366a716e7162313834393938",

      // Replace with your newly generated MSG91 widget token.
      // Do not put your server Authkey here.
       tokenAuth: "582301TK8fyULse0wJ6ad38521P1",

      identifier: `91${form.phone.trim()}`,
      exposeMethods: true,

      success: (data) => {
        console.log("MSG91 success response:", data);

        // MSG91 widget versions may return the access token
        // using different response properties.
        const token =
          data?.["access-token"] ||
          data?.accessToken ||
          data?.access_token ||
          data?.token;

        if (!token) {
          setError(
            "OTP callback received, but the access token was not found. Check the MSG91 success response in the browser console."
          );
          return;
        }

        setOtpAccessToken(token);
        setOtpVerified(true);
        setMessage("Phone verification completed. You can submit your registration.");
        setError("");
      },

      failure: (err) => {
        console.error("MSG91 OTP error:", JSON.stringify(err, null, 2));
        setOtpVerified(false);
        setOtpAccessToken("");
        setError("OTP verification failed. Please try again.");
      },
    };

    try {
      window.initSendOTP(configuration);
      setMessage("MSG91 verification opened. Complete OTP verification.");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Unable to open MSG91 verification. Check the widget settings.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (
      form.whatsapp &&
      !/^[6-9]\d{9}$/.test(form.whatsapp.trim())
    ) {
      setError("Enter a valid 10-digit WhatsApp number, or leave it blank.");
      return;
    }

    if (!form.contactConsent) {
      setError("Please confirm that we may contact you about your selected interest.");
      return;
    }

    if (!otpVerified || !otpAccessToken) {
      setError("Please verify your mobile number using OTP first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/student/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          phone: form.phone.trim(),
          whatsapp: form.whatsapp.trim(),
          accessToken: otpAccessToken,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Registration failed. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Registration error:", err);
      setError(
        err.message ||
          "Unable to connect to the server. Make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setSubmitted(false);
    setError("");
    setMessage("");
    setOtpAccessToken("");
    setOtpVerified(false);
  };

  return (
    <main className="sr-page">
      <section className="sr-card" aria-labelledby="sr-title">
        <header className="sr-header">
          <div className="sr-brand-mark" aria-hidden="true">
            <GraduationCap size={25} strokeWidth={2.2} />
          </div>

          <p className="sr-eyebrow">
            KSQUARE SOFTTECH · STUDENT CONNECT
          </p>

          <h1 id="sr-title">Student Registration</h1>

          <p className="sr-intro">
            Tell us what you’re interested in. We’ll share relevant course,
            internship, and workshop details with you.
          </p>

          <div className="sr-meta">
            <span>
              <UserRound size={15} /> Student enquiry form
            </span>
            <span className="sr-meta-dot" aria-hidden="true">•</span>
            <span>About 2 minutes</span>
          </div>
        </header>

        {submitted ? (
          <div className="sr-success" role="status" aria-live="polite">
            <CheckCircle2 size={48} />
            <h2>Registration successful!</h2>
            <p>Your details have been submitted successfully.</p>

            <button
              className="sr-submit"
              type="button"
              onClick={resetForm}
            >
              Submit another response <ArrowRight size={17} />
            </button>
          </div>
        ) : (
          <form className="sr-form" onSubmit={handleSubmit}>
            <section className="sr-section">
              <div className="sr-section-heading">
                <span className="sr-step">01</span>
                <div>
                  <h2>Personal details</h2>
                  <p>How can we reach you?</p>
                </div>
              </div>

              <div className="sr-grid">
                <div className="sr-field sr-span-2">
                  <label htmlFor="sr-fullName">Full name <span>*</span></label>
                  <input
                    id="sr-fullName"
                    name="fullName"
                    value={form.fullName}
                    onChange={updateField}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </div>

                <div className="sr-field">
                  <label htmlFor="sr-phone">Mobile number <span>*</span></label>
                  <input
                    id="sr-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={updateField}
                    placeholder="10-digit number"
                    autoComplete="tel-national"
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    required
                  />

                  <button
                    className="sr-submit"
                    type="button"
                    onClick={startPhoneVerification}
                  >
                    {otpVerified ? "Phone verified ✓" : "Verify mobile with OTP"}
                  </button>
                </div>

                <div className="sr-field">
                  <label htmlFor="sr-whatsapp">WhatsApp number</label>
                  <input
                    id="sr-whatsapp"
                    name="whatsapp"
                    type="tel"
                    inputMode="numeric"
                    value={form.whatsapp}
                    onChange={updateField}
                    placeholder="If different"
                    maxLength={10}
                    pattern="[6-9][0-9]{9}"
                  />
                </div>

                <div className="sr-field sr-span-2">
                  <label htmlFor="sr-email">
                    Email address <small>Optional</small>
                  </label>
                  <input
                    id="sr-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>
            </section>

            <section className="sr-section">
              <div className="sr-section-heading">
                <span className="sr-step">02</span>
                <div>
                  <h2>College details</h2>
                  <p>Help us understand your current studies.</p>
                </div>
              </div>

              <div className="sr-grid">
                <div className="sr-field sr-span-2">
                  <label htmlFor="sr-college">College name <span>*</span></label>
                  <input
                    id="sr-college"
                    name="college"
                    value={form.college}
                    onChange={updateField}
                    placeholder="Enter your college name"
                    maxLength={150}
                    required
                  />
                </div>

                <div className="sr-field">
                  <label htmlFor="sr-department">
                    Department / Degree <span>*</span>
                  </label>
                  <input
                    id="sr-department"
                    name="department"
                    value={form.department}
                    onChange={updateField}
                    placeholder="e.g. B.Sc. Computer Science"
                    maxLength={100}
                    required
                  />
                </div>

                <div className="sr-field">
                  <label htmlFor="sr-year">Current year <span>*</span></label>
                  <select
                    id="sr-year"
                    name="year"
                    value={form.year}
                    onChange={updateField}
                    required
                  >
                    <option value="">Select year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="Final Year">Final Year</option>
                    <option value="Graduate">Graduated</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="sr-section">
              <div className="sr-section-heading">
                <span className="sr-step">03</span>
                <div>
                  <h2>Your interests</h2>
                  <p>Select what you’d like to know more about.</p>
                </div>
              </div>

              <div className="sr-grid">
                <div className="sr-field sr-span-2">
                  <label htmlFor="sr-interestType">Interested in <span>*</span></label>
                  <select
                    id="sr-interestType"
                    name="interestType"
                    value={form.interestType}
                    onChange={updateField}
                    required
                  >
                    <option value="Course">Course / Training</option>
                    <option value="Internship">Internship</option>
                    <option value="Workshop">College workshop</option>
                    <option value="Placement Training">Placement training</option>
                  </select>
                </div>

                <div className="sr-field sr-span-2">
                  <label htmlFor="sr-course">
                    Preferred course / topic <span>*</span>
                  </label>
                  <select
                    id="sr-course"
                    name="course"
                    value={form.course}
                    onChange={updateField}
                    required
                  >
                    <option value="">Choose an option</option>
                    {courseOptions.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sr-field">
                  <label htmlFor="sr-learningMode">Preferred mode</label>
                  <select
                    id="sr-learningMode"
                    name="learningMode"
                    value={form.learningMode}
                    onChange={updateField}
                  >
                    <option value="Offline">Offline</option>
                    <option value="Online">Online</option>
                    <option value="Either">Either</option>
                  </select>
                </div>

                <div className="sr-field">
                  <label htmlFor="sr-joiningTimeline">
                    When would you like to join?
                  </label>
                  <select
                    id="sr-joiningTimeline"
                    name="joiningTimeline"
                    value={form.joiningTimeline}
                    onChange={updateField}
                  >
                    <option value="">Select timeline</option>
                    <option value="Immediately">As soon as possible</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Later">Later</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="sr-consent-section">
              <label className="sr-check-row">
                <input
                  type="checkbox"
                  name="contactConsent"
                  checked={form.contactConsent}
                  onChange={updateField}
                  required
                />
                <span>
                  I agree that KSQUARE SOFTTECH may contact me about the course,
                  internship, workshop, or training I selected. <b>*</b>
                </span>
              </label>

              <label className="sr-check-row">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={form.marketingConsent}
                  onChange={updateField}
                />
                <span>
                  I would also like to receive future course updates and offers
                  through WhatsApp or email. <small>Optional</small>
                </span>
              </label>
            </section>

            {error && <p className="sr-error" role="alert">{error}</p>}
            {message && <p role="status">{message}</p>}

            <button className="sr-submit" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit registration"}
              <ArrowRight size={18} />
            </button>

            <p className="sr-privacy-note">
              Please provide accurate details. We only ask for information
              relevant to your enquiry.
            </p>
          </form>
        )}
      </section>

      <p className="sr-footer">
        KSQUARE SOFTTECH <span>·</span> Learn Skills. Build Careers.
      </p>
    </main>
  );
}

export default StudentRegistration;
