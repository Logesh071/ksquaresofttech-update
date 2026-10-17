
import { Link } from "react-router-dom";

const defaultFeatures = [
  "Practical Training",
  "Real Projects",
  "Certificate",
];

function CourseCard({ course, index = 0 }) {
  const title = course.title || course.name || "IT Course";
  const duration = course.duration || "Flexible Duration";

  const features =
    Array.isArray(course.features) && course.features.length
      ? course.features
      : defaultFeatures;

  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="course-card">
      <div className="course-card-top">
        <div className="course-icon" aria-hidden="true">
          {course.icon || "✦"}
        </div>

        <span className="course-number">{number}</span>
      </div>

      {course.category && (
        <span className="course-category">
          {course.category}
        </span>
      )}

      <div className="course-card-content">
        <h3>{title}</h3>

        <p className="course-duration">
          <span aria-hidden="true">◷</span>
          {duration}
        </p>

        <div className="course-features">
          {features.map((feature, featureIndex) => (
            <span
              className="course-feature"
              key={`${feature}-${featureIndex}`}
            >
              <span aria-hidden="true">✓</span>
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="course-card-footer">
        <Link
          to="/contact"
          className="course-apply-btn"
          aria-label={`Apply for ${title}`}
        >
          <span>Apply Now</span>
          <span className="course-apply-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export default CourseCard;
