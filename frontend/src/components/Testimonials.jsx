
import React, { useState } from "react";
import data from "../data/testimonials.json";
import "../styles/Testimonials.css";

const INITIAL_COUNT = 5;
const reviews = data.reviews;

function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState([]);

  const visibleReviews = showAll
    ? reviews
    : reviews.slice(0, INITIAL_COUNT);

  const toggleReview = (id) => {
    setExpanded((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  return (
    <section className="ks-reviews" aria-labelledby="ks-reviews-title">
      {/* Decorative SVG background */}
      <svg
        className="ks-reviews-background"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ksReviewGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <pattern
            id="ksReviewPattern"
            width="26"
            height="26"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill="#2563eb" opacity=".16" />
          </pattern>
        </defs>

        <rect width="1440" height="700" fill="url(#ksReviewPattern)" />

        <circle
          cx="100"
          cy="50"
          r="220"
          fill="url(#ksReviewGradient)"
          opacity=".07"
        />

        <circle
          cx="1380"
          cy="570"
          r="250"
          fill="url(#ksReviewGradient)"
          opacity=".08"
        />

        <circle
          cx="1270"
          cy="130"
          r="80"
          fill="none"
          stroke="#2563eb"
          strokeWidth="1.5"
          opacity=".18"
        />

        <circle
          cx="1270"
          cy="130"
          r="110"
          fill="none"
          stroke="#7c3aed"
          strokeWidth="1"
          opacity=".12"
        />

        <path
          d="M0 560 C260 460 430 660 720 540 S1150 430 1440 550"
          fill="none"
          stroke="url(#ksReviewGradient)"
          strokeWidth="2"
          opacity=".18"
        />
      </svg>

      <div className="ks-reviews-container">
        {/* Heading */}
        <header className="ks-reviews-heading">
          <span className="ks-reviews-eyebrow">
            <span className="ks-reviews-live-dot" />
            {data.section.eyebrow}
          </span>

          <h2 id="ks-reviews-title">{data.section.title}</h2>

          <p>{data.section.description}</p>
        </header>

        {/* Review cards */}
        <div className="ks-reviews-grid">
          {visibleReviews.map((item, index) => {
            const isExpanded = expanded.includes(item.id);

            const rating = Math.max(
              0,
              Math.min(5, Number(item.rating) || 0)
            );

            const initials = item.name
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();

            return (
              <article
                className="ks-review-card"
                key={item.id}
                style={{ "--review-index": index % 5 }}
              >
                <div className="ks-review-card-top">
                  <span className="ks-review-quote" aria-hidden="true">
                    “
                  </span>

                  <span className="ks-review-course">
                    {item.course}
                  </span>
                </div>

                <div
                  className="ks-review-stars"
                  aria-label={`${rating} out of 5 stars`}
                >
                  <span>{"★".repeat(rating)}</span>
                  <span className="ks-review-empty-stars">
                    {"★".repeat(5 - rating)}
                  </span>
                  <span className="ks-review-rating-number">
                    {rating}.0
                  </span>
                </div>

                <p
                  className={`ks-review-text ${
                    isExpanded ? "is-expanded" : ""
                  }`}
                >
                  {item.review}
                </p>

                {item.review.length > 120 && (
                  <button
                    type="button"
                    className="ks-review-read-more"
                    onClick={() => toggleReview(item.id)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Read less −" : "Read more +"}
                  </button>
                )}

                <div className="ks-review-divider" />

                <div className="ks-review-person">
                  <div className="ks-review-avatar">{initials}</div>

                  <div className="ks-review-person-info">
                    <h3>{item.name}</h3>
                    <p>{item.course}</p>
                  </div>

                  {item.approved && (
                    <span
                      className="ks-review-verified"
                      title="Approved review"
                      aria-label="Approved review"
                    >
                      ✓
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* View all / Show less */}
        {reviews.length > INITIAL_COUNT && (
          <div className="ks-reviews-actions">
            <button
              type="button"
              className="ks-reviews-toggle"
              onClick={() => {
                setShowAll((previous) => !previous);
                setExpanded([]);
              }}
              aria-expanded={showAll}
            >
              {showAll ? "Show Less" : "View All Reviews"}

              <span aria-hidden="true">
                {showAll ? "↑" : "→"}
              </span>
            </button>

            <p>
              {showAll
                ? `Showing all ${reviews.length} reviews`
                : `Showing ${visibleReviews.length} of ${reviews.length} reviews`}
            </p>
          </div>
        )}

        <footer className="ks-reviews-footer">
          <span />
          <p>{data.section.footer}</p>
          <span />
        </footer>
      </div>
    </section>
  );
}

export default Testimonials;
