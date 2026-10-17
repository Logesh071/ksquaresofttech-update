import React from "react";
import {
  ArrowRight,
  Code2,
  Database,
  Brain,
  BarChart3,
  Megaphone,
  Palette,
  Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";

import coursesData from "../data/courses.json";
import "../styles/courses.css";

const iconMap = {
  code: Code2,
  database: Database,
  brain: Brain,
  chart: BarChart3,
  megaphone: Megaphone,
  palette: Palette,
  layers: Layers3,
};

const defaultTheme = {
  color: "#2563EB",
  light: "#EFF6FF",
  border: "#DBEAFE",
  glow: "rgba(37, 99, 235, 0.14)",
};

function Courses() {
  const section = coursesData?.section || {
    badge: "OUR COURSES",
    title: "Learn Skills That",
    highlight: "Build Careers.",
    description:
      "Industry-focused courses designed to help you learn practical skills, build real projects and become career ready.",
    ctaQuestion: "NOT SURE WHICH COURSE TO CHOOSE?",
    ctaText: "Let's find the right path for you.",
    ctaLabel: "Talk To Us",
  };

  const courses = Array.isArray(coursesData?.courses)
    ? coursesData.courses
    : [];

  return (
    <section className="ks-courses" id="courses">

      <div className="ks-courses-bg">
        <div className="ks-bg-grid" />

        <span className="ks-bg-orb ks-bg-orb-one" />
        <span className="ks-bg-orb ks-bg-orb-two" />
      </div>

      <div className="container ks-courses-container">

        <header className="ks-courses-header">

          <div className="ks-courses-badge">
            <span className="ks-badge-dot" />
            {section.badge}
          </div>

          <h2 className="ks-courses-title">
            {section.title}
            <span>{section.highlight}</span>
          </h2>

          <p className="ks-courses-description">
            {section.description}
          </p>

        </header>

        <div className="ks-course-grid">

          {courses.map((course, index) => {

            const Icon = iconMap[course.icon] || Code2;

            const theme = {
              ...defaultTheme,
              ...(course.theme || {}),
            };

            return (
              <Link
                key={course.id || course.slug}
                to={`/courses/${course.slug}`}
                className="ks-course-link"
                style={{
                  "--course-color": theme.color,
                  "--course-light": theme.light,
                  "--course-border": theme.border,
                  "--course-glow": theme.glow,
                }}
              >

                <article className="ks-course-card">

                  <span className="ks-card-glow" />

                  <div className="ks-course-card-top">

                    <div className="ks-course-icon">
                      <Icon size={21} strokeWidth={2} />
                    </div>

                    <span className="ks-course-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <div className="ks-course-content">

                    <span className="ks-course-category">
                      {course.short}
                    </span>

                    <h3>{course.title}</h3>

                    <p>{course.description}</p>

                  </div>

                  <div className="ks-course-tags">

                    {course.tags?.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}

                  </div>

                  <div className="ks-course-footer">

                    <span className="ks-course-learn">
                      Explore Course
                    </span>

                    <span className="ks-course-arrow">
                      <ArrowRight size={15} />
                    </span>

                  </div>

                </article>

              </Link>
            );
          })}

        </div>

        <div className="ks-courses-bottom">

          <div className="ks-courses-bottom-content">

            <span>{section.ctaQuestion}</span>

            <h3>{section.ctaText}</h3>

          </div>

          <Link
            to="/contact"
            className="ks-courses-cta"
          >
            {section.ctaLabel}
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Courses;