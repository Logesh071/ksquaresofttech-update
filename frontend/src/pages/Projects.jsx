
import React, { useState } from "react";
import "../styles/projects.css";

const projectsData = [
  {
    id: 1,
    title: "Sun Naturals",
    category: "Web Development",
    description:
      "A modern website showcasing natural oils, food products, product sizes and a premium shopping experience.",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80",
    technologies: ["React", "Bootstrap", "GSAP"],
    link: "https://sunnaturals.in/",
  },
  {
    id: 2,
    title: "KK Academy",
    category: "Web Development",
    description:
      "An educational platform featuring IT courses, professional training, internships and career opportunities.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://kkacademyindia.com/",
  },
  {
    id: 3,
    title: "GK Vidyalayam",
    category: "Web Development",
    description:
      "An educational website to showcase school information, academic activities and facilities.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "",
  },
  {
    id: 4,
    title: "KRK Earth Movers",
    category: "Web Development",
    description:
      "A business website presenting earth-moving services, equipment and company information.",
    image:
      "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=900&q=80",
    technologies: ["React", "Bootstrap", "JavaScript"],
    link: "",
  },
  {
    id: 5,
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    description:
      "A marketing project focused on brand awareness, social media campaigns and online lead generation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    technologies: ["SEO", "Meta Ads", "Analytics"],
    link: "",
  },
  {
    id: 6,
    title: "Business Dashboard",
    category: "App Development",
    description:
      "A dashboard concept for presenting business data, monitoring performance and viewing analytics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    technologies: ["React", "REST API", "Charts"],
    link: "",
  },
];

const categories = [
  "All Projects",
  "Web Development",
  "App Development",
  "Digital Marketing",
];

function Projects() {
  const [activeCategory, setActiveCategory] =
    useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="projects-page">
      {/* HERO SECTION */}
      <section className="projects-hero">
        <div className="projects-container">
          <div className="projects-hero-content">
            <span className="projects-eyebrow">
              <span className="projects-eyebrow-dot" />
              OUR WORK & PORTFOLIO
            </span>

            <h1>
              Turning Ideas Into
              <span className="projects-gradient-text">
                Digital Experiences.
              </span>
            </h1>

            <p className="projects-hero-description">
              Explore our work in web development, applications
              and digital marketing. We create modern digital
              experiences that help businesses grow.
            </p>

            <a
              href="#project-gallery"
              className="projects-primary-btn"
            >
              Explore Projects
              <span aria-hidden="true">↗</span>
            </a>

            <div className="projects-hero-stats">
              <div className="projects-stat">
                <strong>Creative</strong>
                <span>Design Approach</span>
              </div>

              <div className="projects-stat">
                <strong>Modern</strong>
                <span>Technology Stack</span>
              </div>

              <div className="projects-stat">
                <strong>Responsive</strong>
                <span>Across Devices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        className="projects-gallery"
        id="project-gallery"
      >
        <div className="projects-container">
          <div className="projects-heading-row">
            <div className="projects-heading-content">
              <span className="projects-section-label">
                SELECTED PROJECTS
              </span>

              <h2>
                Work That Speaks<span>.</span>
              </h2>

              <p>
                Discover our projects, creative ideas and digital
                solutions.
              </p>
            </div>

            <span className="projects-count">
              {filteredProjects.length} Projects
            </span>
          </div>

          {/* CATEGORY FILTERS */}
          <div
            className="projects-filters"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`projects-filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PROJECT CARDS */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article
                className="projects-card"
                key={project.id}
              >
                <div className="projects-card-image">
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                  />

                  <span className="projects-number">
                    {String(project.id).padStart(2, "0")}
                  </span>

                  <span className="projects-category">
                    {project.category}
                  </span>
                </div>

                <div className="projects-card-body">
                  <h3>{project.title}</h3>

                  <p className="projects-description">
                    {project.description}
                  </p>

                  <div className="projects-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="projects-card-footer">
                    <span className="projects-project-type">
                      Portfolio Project
                    </span>

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-view-link"
                      >
                        Visit Website
                        <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="projects-view-link projects-preview">
                        Preview
                        <span aria-hidden="true">↗</span>
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="projects-empty">
              No projects available in this category.
            </p>
          )}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="projects-cta-section">
        <div className="projects-container">
          <div className="projects-cta-card">
            <span className="projects-section-label">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let&apos;s Build Something
              <span>Amazing.</span>
            </h2>

            <p>
              Have an idea for your business? Let&apos;s turn it
              into a powerful digital experience.
            </p>

            <a
              href="/contact"
              className="projects-cta-btn"
            >
              Start a Conversation
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
