
import React, { useEffect, useRef, useState } from "react";
import "../styles/Statistics.css";

const stats = [
  {
    number: 50,
    suffix: "+",
    title: "Projects Delivered",
    description: "Creative digital solutions",
    icon: "💻",
  },
  {
    number: 20,
    suffix: "+",
    title: "Happy Clients",
    description: "Businesses growing with us",
    icon: "🤝",
  },
  {
    number: 100,
    suffix: "+",
    title: "Students Trained",
    description: "Skills for future careers",
    icon: "🎓",
  },
  {
    number: 10,
    suffix: "+",
    title: "Digital Solutions",
    description: "Technology meets innovation",
    icon: "🚀",
  },
];

function StatCard({ item, index, animate }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let frame;
    const duration = 1400;
    let startTime;

    const updateCount = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(item.number * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(updateCount);
      }
    };

    frame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(frame);
  }, [animate, item.number]);

  return (
    <article
      className="ks-stat-card"
      style={{ "--stat-index": index }}
    >
      <div className="ks-stat-card-top">
        <div className="ks-stat-icon" aria-hidden="true">
          {item.icon}
        </div>

        <span className="ks-stat-index">
          0{index + 1}
        </span>
      </div>

      <div className="ks-stat-number">
        {count}
        {item.suffix}
      </div>

      <h3 className="ks-stat-title">{item.title}</h3>

      <p className="ks-stat-description">
        {item.description}
      </p>

      <div className="ks-stat-bottom">
        <span className="ks-stat-bottom-line" />
        <span className="ks-stat-bottom-dot" />
      </div>
    </article>
  );
}

export default function Statistics() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setAnimate(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="ks-statistics"
      ref={sectionRef}
      aria-labelledby="ks-statistics-title"
    >
      <div className="ks-statistics-container">

        <div className="ks-statistics-heading">
          <span className="ks-statistics-label">
            <span className="ks-status-dot" />
            OUR IMPACT
          </span>

          <h2 id="ks-statistics-title">
            Small steps.
            <br />
            <span>Big achievements.</span>
          </h2>

          <p>
            We combine technology, creativity, and practical
            learning to help businesses and aspiring professionals
            move forward.
          </p>
        </div>

        <div className="ks-statistics-grid">
          {stats.map((item, index) => (
            <StatCard
              key={item.title}
              item={item}
              index={index}
              animate={animate}
            />
          ))}
        </div>

        <div className="ks-statistics-footer">
          <span className="ks-footer-line" />

          <p>
            <strong>K</strong>
            <span>KSquare Softtech</span>
            <span className="ks-footer-divider">/</span>
            Learn Skills. Build Careers.
          </p>

          <span className="ks-footer-line" />
        </div>

      </div>
    </section>
  );
}
