
import React from "react";
import "../styles/WhyChoose.css";

const features = [
  {
    icon: "💻",
    title: "Web Development",
    desc: "Modern, responsive websites designed to strengthen your digital presence."
  },
  {
    icon: "📱",
    title: "App Development",
    desc: "User-friendly mobile applications tailored to your business requirements."
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    desc: "Digital strategies to improve brand visibility and reach your target audience."
  },
  {
    icon: "⚡",
    title: "Technology Training",
    desc: "Practical IT training to develop technical skills and project experience."
  }
];

export default function WhyChoose() {
  return (
    <section className="ks-why">
      <div className="ks-why-container">
        <div className="ks-why-heading">
          <span className="ks-why-tag">WHY KSQUARE SOFTTECH?</span>
          <h2>
            Your Vision.
            <br />
            <span>Our Technology.</span>
          </h2>
          <p>
            We combine technology, creativity and strategy
            to deliver digital solutions that support business growth.
          </p>
        </div>

        <div className="ks-why-grid">
          {features.map((item, index) => (
            <article className="ks-why-card" key={item.title}>
              <div className="ks-why-card-top">
                <div className="ks-why-icon">{item.icon}</div>
                <span>0{index + 1}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div className="ks-why-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
