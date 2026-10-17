import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Check,
  Code2,
  Database,
  Globe,
  Smartphone,
  BarChart3,
  Megaphone,
  Video,
  BriefcaseBusiness,
  Rocket,
  Award,
  Clock3,
  Laptop,
  GitBranch,
  Terminal,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import "../styles/Internship.css";

/* =========================================================
   INTERNSHIP PROGRAMS
========================================================= */

const internshipPrograms = [
  {
    id: "01",
    title: "Full Stack Development",
    short: "FSD",
    duration: "45 Days",
    color: "blue",
    icon: Code2,
    description:
      "Build real-world web applications using modern frontend and backend technologies.",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "MongoDB",
      "REST API",
    ],
  },

  {
    id: "02",
    title: "Data Science",
    short: "DS",
    duration: "60 Days",
    color: "purple",
    icon: Database,
    description:
      "Learn data analysis, Python, machine learning and real-world data projects.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Visualization",
      "Machine Learning",
      "Projects",
    ],
  },

  {
    id: "03",
    title: "Data Analytics",
    short: "DA",
    duration: "45 Days",
    color: "cyan",
    icon: BarChart3,
    description:
      "Transform business data into meaningful dashboards, insights and reports.",
    skills: [
      "Excel",
      "SQL",
      "Power BI",
      "Data Cleaning",
      "Dashboards",
      "Reports",
    ],
  },

  {
    id: "04",
    title: "Digital Marketing",
    short: "DM",
    duration: "45 Days",
    color: "orange",
    icon: Megaphone,
    description:
      "Work on practical marketing campaigns, SEO, social media and paid advertising.",
    skills: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Content",
      "Analytics",
      "Social Media",
    ],
  },

  {
    id: "05",
    title: "Web Development",
    short: "WEB",
    duration: "45 Days",
    color: "green",
    icon: Globe,
    description:
      "Create responsive websites and learn professional development workflows.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Responsive Design",
      "Git",
    ],
  },

  {
    id: "06",
    title: "Video Editing",
    short: "VIDEO",
    duration: "30 Days",
    color: "pink",
    icon: Video,
    description:
      "Create engaging social media videos, reels, promotional content and edits.",
    skills: [
      "Video Editing",
      "Reels",
      "Transitions",
      "Motion Graphics",
      "Color Grading",
      "Social Content",
    ],
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    icon: Laptop,
    title: "Hands-on Training",
    text:
      "Learn by building practical projects instead of only watching tutorials.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Real-time Projects",
    text:
      "Work on projects that simulate real company development workflows.",
  },
  {
    icon: GitBranch,
    title: "Git & GitHub",
    text:
      "Learn professional version control and project collaboration.",
  },
  {
    icon: Award,
    title: "Internship Certificate",
    text:
      "Receive a professional internship certificate after successful completion.",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Choose Program",
    text:
      "Select the internship program based on your career goal.",
  },
  {
    number: "02",
    title: "Learn Skills",
    text:
      "Attend practical sessions and complete weekly assignments.",
  },
  {
    number: "03",
    title: "Build Projects",
    text:
      "Apply your knowledge by developing real-world projects.",
  },
  {
    number: "04",
    title: "Get Certified",
    text:
      "Complete the internship and receive your certificate.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const Internship = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".internship-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("internship-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="internship-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="internship-hero">

        <div className="internship-hero-grid" />

        <div className="internship-orb internship-orb-one" />
        <div className="internship-orb internship-orb-two" />

        <div className="internship-container">

          <div className="internship-hero-layout">

            {/* LEFT */}

            <div className="internship-hero-content">

              <div className="internship-eyebrow internship-reveal">
                <span />
                INDUSTRY READY INTERNSHIP
              </div>

              <h1 className="internship-title internship-reveal">
                Learn.
                <span>Build.</span>
                Launch.
              </h1>

              <p className="internship-description internship-reveal">
                Gain practical industry experience through
                project-based internships designed to help
                you build real skills and become career ready.
              </p>

              <div className="internship-actions internship-reveal">

                <a
                  href="#programs"
                  className="internship-primary-btn"
                >
                  Explore Internships
                  <ArrowRight size={16} />
                </a>

                <Link
                  to="/contact"
                  className="internship-outline-btn"
                >
                  Enquire Now
                </Link>

              </div>

              <div className="internship-mini-stats internship-reveal">

                <div>
                  <strong>30+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>6+</strong>
                  <span>Programs</span>
                </div>

                <div>
                  <strong>100%</strong>
                  <span>Practical</span>
                </div>

              </div>

            </div>

            {/* RIGHT VISUAL */}

            <div className="internship-hero-visual internship-reveal">

              <div className="internship-code-window">

                <div className="internship-window-header">

                  <div className="internship-window-dots">
                    <i />
                    <i />
                    <i />
                  </div>

                  <span>internship.jsx</span>

                  <div className="internship-window-live">
                    LIVE
                  </div>

                </div>

                <div className="internship-code-body">

                  <div className="code-line">
                    <span>01</span>
                    <b>const</b>
                    <em>intern</em>
                    <small>=</small>
                    <strong>"career"</strong>
                  </div>

                  <div className="code-line">
                    <span>02</span>
                    <b>const</b>
                    <em>skills</em>
                    <small>=</small>
                    <strong>[</strong>
                  </div>

                  <div className="code-line code-indent">
                    <span>03</span>
                    <i>"React JS"</i>
                    <small>,</small>
                  </div>

                  <div className="code-line code-indent">
                    <span>04</span>
                    <i>"Node JS"</i>
                    <small>,</small>
                  </div>

                  <div className="code-line code-indent">
                    <span>05</span>
                    <i>"Projects"</i>
                  </div>

                  <div className="code-line">
                    <span>06</span>
                    <strong>]</strong>
                  </div>

                  <div className="code-line">
                    <span>07</span>
                    <b>return</b>
                    <em>success</em>
                  </div>

                </div>

                <div className="internship-code-footer">

                  <div>
                    <Terminal size={12} />
                    <span>Building skills...</span>
                  </div>

                  <span>100%</span>

                </div>

              </div>

              {/* FLOATING CARD */}

              <div className="internship-floating-card internship-floating-top">

                <div className="floating-icon">
                  <Rocket size={16} />
                </div>

                <div>
                  <strong>Career Ready</strong>
                  <span>Build real projects</span>
                </div>

              </div>

              <div className="internship-floating-card internship-floating-bottom">

                <div className="floating-check">
                  <Check size={15} />
                </div>

                <div>
                  <strong>Certificate</strong>
                  <span>Successfully completed</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="internship-intro">

        <div className="internship-container">

          <div className="internship-intro-grid internship-reveal">

            <div className="intro-number">
              01
            </div>

            <div>
              <span>WHY INTERNSHIP?</span>

              <h2>
                Don't just learn the skill.
                <em> Build with it.</em>
              </h2>
            </div>

            <p>
              Our internship programs combine structured
              learning, assignments, practical projects and
              professional workflows so students can move
              from classroom knowledge to real-world skills.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROGRAMS
      ===================================================== */}

      <section
        id="programs"
        className="internship-programs"
      >

        <div className="internship-container">

          <div className="internship-section-heading internship-reveal">

            <div>

              <span>INTERNSHIP PROGRAMS</span>

              <h2>
                Pick your
                <em> path.</em>
              </h2>

            </div>

            <p>
              Choose a practical internship program
              aligned with your career goals.
            </p>

          </div>


          <div className="internship-program-grid">

            {internshipPrograms.map((program) => {

              const Icon = program.icon;

              return (
                <article
                  className={`
                    internship-program-card
                    internship-${program.color}
                    internship-reveal
                  `}
                  key={program.id}
                >

                  <div className="program-card-top">

                    <div className="program-icon">
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className="program-number">
                      {program.id}
                    </span>

                  </div>


                  <div className="program-content">

                    <span className="program-short">
                      {program.short}
                    </span>

                    <h3>
                      {program.title}
                    </h3>

                    <p>
                      {program.description}
                    </p>

                  </div>


                  <div className="program-duration">

                    <Clock3 size={14} />

                    <span>
                      {program.duration}
                    </span>

                  </div>


                  <div className="program-skills">

                    {program.skills.map(
                      (skill, index) => (
                        <span key={index}>
                          {skill}
                        </span>
                      )
                    )}

                  </div>


                  <Link
                    to="/contact"
                    className="program-btn"
                  >
                    Apply Now
                    <ArrowRight size={15} />
                  </Link>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="internship-benefits">

        <div className="internship-container">

          <div className="internship-benefits-heading internship-reveal">

            <span>WHAT YOU GET</span>

            <h2>
              More than a
              <em> certificate.</em>
            </h2>

          </div>


          <div className="internship-benefits-grid">

            {benefits.map((benefit, index) => {

              const Icon = benefit.icon;

              return (
                <div
                  className="benefit-card internship-reveal"
                  style={{
                    "--benefit-delay": `${index * 90}ms`,
                  }}
                  key={benefit.title}
                >

                  <div className="benefit-number">
                    0{index + 1}
                  </div>

                  <div className="benefit-icon">
                    <Icon size={21} />
                  </div>

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="internship-process">

        <div className="internship-container">

          <div className="process-layout">

            <div className="process-left internship-reveal">

              <span>HOW IT WORKS</span>

              <h2>
                From
                <em> learning</em>
                to
                <em> launching.</em>
              </h2>

              <p>
                Follow a simple step-by-step journey
                designed to turn your learning into
                practical experience.
              </p>


              <div className="process-visual">

                <div className="process-circle process-circle-one">
                  <Code2 size={22} />
                </div>

                <div className="process-circle process-circle-two">
                  <GitBranch size={20} />
                </div>

                <div className="process-circle process-circle-three">
                  <Rocket size={21} />
                </div>

                <div className="process-center">
                  <Sparkles size={25} />
                </div>

                <div className="process-orbit" />

              </div>

            </div>


            <div className="process-steps">

              {processSteps.map((step, index) => (

                <div
                  className="process-step internship-reveal"
                  style={{
                    "--step-delay": `${index * 100}ms`,
                  }}
                  key={step.number}
                >

                  <div className="process-step-number">
                    {step.number}
                  </div>

                  <div className="process-step-content">

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.text}
                    </p>

                  </div>

                  <ChevronRight
                    size={17}
                    className="process-arrow"
                  />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="internship-cta">

        <div className="internship-container">

          <div className="internship-cta-box internship-reveal">

            <div className="cta-grid" />
            <div className="cta-glow" />

            <div className="internship-cta-content">

              <span>START YOUR JOURNEY</span>

              <h2>
                Your career starts
                <em> with one project.</em>
              </h2>

              <p>
                Join a practical internship program,
                build real projects and take your next
                step towards your career.
              </p>


              <div className="cta-actions">

                <Link
                  to="/contact"
                  className="internship-primary-btn"
                >
                  Apply for Internship
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="#programs"
                  className="cta-link"
                >
                  Explore Programs
                  <ArrowRight size={14} />
                </a>

              </div>

            </div>


            <div className="cta-code-card">

              <div className="cta-code-top">
                <span>KSQUARE</span>
                <span>INTERNSHIP</span>
              </div>

              <div className="cta-code-main">
                <span>&lt;</span>
                <strong>future</strong>
                <span>/&gt;</span>
              </div>

              <small>
                build.skills.career()
              </small>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Internship;