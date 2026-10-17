import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Database,
  BarChart3,
  Megaphone,
  Globe,
  Video,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const internshipPrograms = [
  {
    id: "01",
    title: "Full Stack Development",
    short: "FSD",
    duration: "45 Days",
    icon: Code2,
  },
  {
    id: "02",
    title: "Data Science",
    short: "DS",
    duration: "60 Days",
    icon: Database,
  },
  {
    id: "03",
    title: "Data Analytics",
    short: "DA",
    duration: "45 Days",
    icon: BarChart3,
  },
  {
    id: "04",
    title: "Digital Marketing",
    short: "DM",
    duration: "45 Days",
    icon: Megaphone,
  },
  {
    id: "05",
    title: "Web Development",
    short: "WEB",
    duration: "45 Days",
    icon: Globe,
  },
  {
    id: "06",
    title: "Video Editing",
    short: "VIDEO",
    duration: "30 Days",
    icon: Video,
  },
];

function InternshipPreview() {
  return (
    <section className="home-internship">
      <div className="home-internship-container">

        <div className="home-internship-header">
          <div>
            <span className="home-internship-eyebrow">
              INDUSTRY READY INTERNSHIP
            </span>

            <h2>
              Learn. Build. <span>Launch.</span>
            </h2>
          </div>

          <p>
            Gain practical industry experience through
            project-based internships designed to help
            you build real skills and become career ready.
          </p>
        </div>

        <div className="home-internship-info">
          <div>
            <strong>6+</strong>
            <span>Internship Programs</span>
          </div>

          <div>
            <strong>30+</strong>
            <span>Practical Projects</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Practical Learning</span>
          </div>

          <div>
            <strong>1:1</strong>
            <span>Mentor Support</span>
          </div>
        </div>

        <div className="home-internship-grid">
          {internshipPrograms.map((program) => {
            const Icon = program.icon;

            return (
              <article
                className="home-internship-card"
                key={program.id}
              >
                <div className="home-internship-card-top">
                  <div className="home-internship-icon">
                    <Icon size={22} />
                  </div>

                  <span>
                    {program.id}
                  </span>
                </div>

                <div className="home-internship-card-content">
                  <small>{program.short}</small>

                  <h3>{program.title}</h3>

                  <div className="home-internship-duration">
                    <Clock3 size={14} />
                    {program.duration}
                  </div>
                </div>

                <div className="home-internship-skills">
                  <span>
                    <CheckCircle2 size={13} />
                    Practical Training
                  </span>

                  <span>
                    <CheckCircle2 size={13} />
                    Real Projects
                  </span>

                  <span>
                    <CheckCircle2 size={13} />
                    Certificate
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="home-internship-apply"
                >
                  Apply Now
                  <ArrowRight size={15} />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="home-internship-bottom">
          <div>
            <span>START YOUR CAREER JOURNEY</span>

            <h3>
              Turn your skills into{" "}
              <em>real experience.</em>
            </h3>

            <p>
              Build projects, gain practical experience
              and become industry ready.
            </p>
          </div>

          <Link
            to="/internship"
            className="home-internship-view-btn"
          >
            View All Internships
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default InternshipPreview;