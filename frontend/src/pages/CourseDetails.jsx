import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Layers3,
  Monitor,
  Sparkles,
  Wrench,
} from "lucide-react";

import coursesData from "../data/courses.json";
import "../styles/course-details.css";

function CourseDetails() {
  const { slug } = useParams();

  const course = coursesData?.courses?.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return (
      <section className="course-not-found">
        <div>
          <span>404</span>

          <h1>Course Not Found</h1>

          <p>
            The course you are looking for does not exist.
          </p>

          <Link to="/" className="course-back-btn">
            <ArrowLeft size={17} />
            Back Home
          </Link>
        </div>
      </section>
    );
  }

  const theme = {
    color: "#2563EB",
    light: "#EFF6FF",
    border: "#BFDBFE",
    glow: "rgba(37, 99, 235, 0.25)",
    dark: "#172554",
    ...(course.theme || {}),
  };

  const topics = Array.isArray(course.topics)
    ? course.topics
    : [];

  const tools = Array.isArray(course.tools)
    ? course.tools
    : [];

  const projects = Array.isArray(course.projects)
    ? course.projects
    : [];

  const outcomes = Array.isArray(course.outcomes)
    ? course.outcomes
    : [];

  return (
    <main
      className="course-details"
      style={{
        "--course-color": theme.color,
        "--course-light": theme.light,
        "--course-border": theme.border,
        "--course-glow": theme.glow,
        "--course-dark": theme.dark,
      }}
    >

      <div className="course-page-bg">

        <div className="course-page-grid" />

        <span className="course-page-orb course-page-orb-one" />

        <span className="course-page-orb course-page-orb-two" />

      </div>


      {/* HERO */}

      <section className="course-hero">

        <div className="container">

          <Link to="/" className="course-back">
            <ArrowLeft size={15} />
            Back to Courses
          </Link>

          <div className="course-hero-layout">

            <div className="course-hero-content">

              <div className="course-label">
                <Sparkles size={13} />
                {course.short}
              </div>

              <h1>
                {course.title}
              </h1>

              <p className="course-hero-text">
                {course.heroText}
              </p>

              <div className="course-meta">

                <div className="course-meta-item">
                  <Clock3 size={17} />

                  <div>
                    <span>Duration</span>
                    <strong>{course.duration}</strong>
                  </div>
                </div>

                <div className="course-meta-item">
                  <Layers3 size={17} />

                  <div>
                    <span>Level</span>
                    <strong>{course.level}</strong>
                  </div>
                </div>

                <div className="course-meta-item">
                  <Monitor size={17} />

                  <div>
                    <span>Mode</span>
                    <strong>{course.mode}</strong>
                  </div>
                </div>

              </div>

              <div className="course-hero-actions">

                <Link
                  to="/contact"
                  className="course-primary-btn"
                >
                  Enquire Now
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="#curriculum"
                  className="course-secondary-btn"
                >
                  View Curriculum
                </a>

              </div>

            </div>


            <div className="course-hero-visual">

              <div className="course-visual-glow" />

              <div className="course-visual-card">

                <div className="course-visual-top">
                  <span>COURSE</span>

                  <span className="course-visual-dot">
                    ●
                  </span>
                </div>

                <div className="course-visual-icon">
                  <span>
                    {course.short?.charAt(0)}
                  </span>
                </div>

                <div className="course-visual-line line-one" />

                <div className="course-visual-line line-two" />

                <div className="course-visual-line line-three" />

                <div className="course-visual-code">
                  {"<"}learn /{" "}
                  <span>{course.short}</span>
                  {">"}
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* OVERVIEW */}

      <section className="course-overview">

        <div className="container">

          <div className="course-section-heading">

            <span>COURSE OVERVIEW</span>

            <h2>
              Everything you need to
              <strong> build your skills.</strong>
            </h2>

            <p>
              {course.description}
            </p>

          </div>


          <div className="course-tools">

            <div className="course-tools-heading">
              <Wrench size={17} />
              Tools & Technologies
            </div>

            <div className="course-tools-list">

              {tools.map((tool) => (
                <span key={tool}>
                  {tool}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* CURRICULUM */}

      <section
        className="course-curriculum"
        id="curriculum"
      >

        <div className="container">

          <div className="course-section-heading curriculum-heading">

            <span>CURRICULUM</span>

            <h2>
              What you will
              <strong> learn.</strong>
            </h2>

            <p>
              A practical curriculum designed around
              real-world skills and projects.
            </p>

          </div>


          <div className="course-topic-grid">

            {topics.map((topic, index) => (

              <article
                className="course-topic-card"
                key={topic.title}
              >

                <div className="topic-top">

                  <span className="topic-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="topic-icon">
                    <CheckCircle2 size={15} />
                  </span>

                </div>

                <h3>
                  {topic.title}
                </h3>

                <p>
                  {topic.description}
                </p>

                <ul>

                  {Array.isArray(topic.items) &&
                    topic.items.map((item) => (
                      <li key={item}>

                        <span className="topic-check">
                          <CheckCircle2 size={13} />
                        </span>

                        {item}

                      </li>
                    ))}

                </ul>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* PROJECTS */}

      <section className="course-projects">

        <div className="container">

          <div className="course-project-box">

            <div className="project-content">

              <span>
                PRACTICAL PROJECTS
              </span>

              <h2>
                Learn by building
                <strong> real projects.</strong>
              </h2>

              <p>
                Apply your learning through practical
                projects designed to strengthen your portfolio.
              </p>

            </div>


            <div className="project-list">

              {projects.map((project, index) => (

                <div
                  className="project-item"
                  key={project}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{project}</p>

                  <ArrowRight size={15} />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* OUTCOMES */}

      <section className="course-outcomes">

        <div className="container">

          <div className="course-outcomes-box">

            <div>

              <span>COURSE OUTCOMES</span>

              <h2>
                By the end of this course,
                <strong> you can.</strong>
              </h2>

            </div>


            <div className="outcomes-grid">

              {outcomes.map((outcome) => (

                <div
                  className="outcome-item"
                  key={outcome}
                >

                  <CheckCircle2 size={17} />

                  <span>{outcome}</span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="course-final">

        <div className="container">

          <div className="course-final-box">

            <div>

              <span>READY TO START?</span>

              <h2>
                Start learning
                <strong> {course.short}.</strong>
              </h2>

            </div>

            <Link
              to="/contact"
              className="course-final-btn"
            >
              Talk To Us
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default CourseDetails;