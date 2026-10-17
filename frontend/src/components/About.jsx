import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Code2,
  GraduationCap,
  Rocket,
  Target,
  Users,
  Terminal,
  Activity,
  Layers3,
  Sparkles
} from "lucide-react";

import aboutData from "../data/aboutData.json";
import "../styles/about.css";


const iconMap = {
  graduation: GraduationCap,
  code: Code2,
  briefcase: BriefcaseBusiness,
  rocket: Rocket,
  target: Target,
  users: Users
};


function DynamicIcon({ name, size = 20 }) {
  const Icon = iconMap[name] || Sparkles;

  return (
    <Icon
      size={size}
      strokeWidth={1.8}
    />
  );
}


/* =========================================================
   ANIMATED BACKGROUND
========================================================= */

function AnimatedBackground() {

  const particles = [
    [90, 110],
    [190, 220],
    [315, 95],
    [440, 180],
    [560, 115],
    [680, 250],
    [810, 100],
    [930, 205],
    [1050, 125],
    [1190, 270],
    [1320, 150],
    [145, 570],
    [270, 690],
    [410, 590],
    [580, 720],
    [760, 610],
    [900, 720],
    [1080, 600],
    [1240, 700],
    [1360, 560]
  ];

  return (
    <svg
      className="animated-background"
      viewBox="0 0 1440 850"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      <defs>

        <linearGradient
          id="flowBlue"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="#2563EB"
            stopOpacity="0"
          />

          <stop
            offset="50%"
            stopColor="#06B6D4"
            stopOpacity="0.28"
          />

          <stop
            offset="100%"
            stopColor="#7C3AED"
            stopOpacity="0"
          />
        </linearGradient>


        <radialGradient id="ambientBlue">
          <stop
            stopColor="#2563EB"
            stopOpacity="0.15"
          />

          <stop
            offset="1"
            stopColor="#2563EB"
            stopOpacity="0"
          />
        </radialGradient>


        <radialGradient id="ambientCyan">
          <stop
            stopColor="#06B6D4"
            stopOpacity="0.13"
          />

          <stop
            offset="1"
            stopColor="#06B6D4"
            stopOpacity="0"
          />
        </radialGradient>


        <pattern
          id="techGrid"
          width="38"
          height="38"
          patternUnits="userSpaceOnUse"
        >

          <path
            d="M38 0H0V38"
            fill="none"
            stroke="#2563EB"
            strokeOpacity="0.045"
          />

        </pattern>


        <filter id="bigBlur">
          <feGaussianBlur stdDeviation="45" />
        </filter>


        <filter id="smallBlur">
          <feGaussianBlur stdDeviation="12" />
        </filter>

      </defs>


      {/* GRID */}

      <rect
        width="1440"
        height="850"
        fill="url(#techGrid)"
      />


      {/* LARGE GLOW */}

      <ellipse
        cx="1190"
        cy="150"
        rx="410"
        ry="290"
        fill="url(#ambientBlue)"
        filter="url(#bigBlur)"
      />

      <ellipse
        cx="210"
        cy="700"
        rx="390"
        ry="250"
        fill="url(#ambientCyan)"
        filter="url(#bigBlur)"
      />


      {/* MOVING FLOWING LINES */}

      <path
        className="flow-line flow-line-one"
        d="
          M-150 610
          C120 410 300 420 500 590
          C680 740 850 650 1010 450
          C1160 265 1330 290 1580 420
        "
        fill="none"
        stroke="url(#flowBlue)"
        strokeWidth="2"
      />

      <path
        className="flow-line flow-line-two"
        d="
          M-120 665
          C140 465 320 470 520 620
          C710 760 870 680 1035 490
          C1190 315 1350 335 1570 470
        "
        fill="none"
        stroke="url(#flowBlue)"
        strokeWidth="1.5"
      />

      <path
        className="flow-line flow-line-three"
        d="
          M-80 705
          C170 520 330 520 545 655
          C720 765 900 705 1060 535
          C1200 385 1350 380 1530 500
        "
        fill="none"
        stroke="#2563EB"
        strokeOpacity="0.07"
        strokeWidth="1"
      />


      {/* DIAGONAL TECHNOLOGY LINES */}

      <path
        d="M-100 720L480 -20"
        stroke="url(#flowBlue)"
        strokeWidth="1"
      />

      <path
        d="M120 850L700 -30"
        stroke="url(#flowBlue)"
        strokeWidth="1"
      />

      <path
        d="M820 900L1460 100"
        stroke="url(#flowBlue)"
        strokeWidth="1"
      />

      <path
        d="M1020 900L1510 310"
        stroke="url(#flowBlue)"
        strokeWidth="1"
      />


      {/* PARTICLES */}

      {particles.map(
        ([cx, cy], index) => (

          <g
            key={index}
            className={`background-particle particle-${index % 5}`}
          >

            <circle
              cx={cx}
              cy={cy}
              r={index % 3 === 0 ? 2.2 : 1.3}
              fill={
                index % 3 === 0
                  ? "#06B6D4"
                  : "#2563EB"
              }
            />

            {index % 4 === 0 && (
              <circle
                cx={cx}
                cy={cy}
                r="9"
                fill="none"
                stroke="#2563EB"
                strokeOpacity="0.12"
              />
            )}

          </g>

        )
      )}


      {/* TECH CORNERS */}

      <g className="corner-animation">

        <path
          d="M75 80H180"
          stroke="#2563EB"
          strokeOpacity="0.16"
        />

        <path
          d="M75 80V145"
          stroke="#2563EB"
          strokeOpacity="0.16"
        />

      </g>


      <g className="corner-animation corner-two">

        <path
          d="M1365 690H1260"
          stroke="#7C3AED"
          strokeOpacity="0.15"
        />

        <path
          d="M1365 690V625"
          stroke="#7C3AED"
          strokeOpacity="0.15"
        />

      </g>

    </svg>
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

function About() {

  const {
    hero,
    intro,
    features,
    visual,
    floatingCards,
    stats,
    why,
    cta
  } = aboutData;


  /* =======================================================
     CODE TYPING
  ======================================================= */

  const [typedLines, setTypedLines] = useState(
    visual.codeLines.map(() => "")
  );

  const [activeLine, setActiveLine] = useState(0);


  useEffect(() => {

    let cancelled = false;

    const runTyping = async () => {

      const result = visual.codeLines.map(() => "");

      for (
        let lineIndex = 0;
        lineIndex < visual.codeLines.length;
        lineIndex++
      ) {

        setActiveLine(lineIndex);

        const text = visual.codeLines[lineIndex];

        for (
          let charIndex = 0;
          charIndex <= text.length;
          charIndex++
        ) {

          if (cancelled) return;

          result[lineIndex] =
            text.slice(0, charIndex);

          setTypedLines([...result]);

          await new Promise(
            resolve =>
              setTimeout(resolve, 20)
          );

        }

        await new Promise(
          resolve =>
            setTimeout(resolve, 90)
        );
      }

      if (!cancelled) {
        setActiveLine(-1);
      }
    };


    runTyping();


    return () => {
      cancelled = true;
    };

  }, [visual.codeLines]);


  return (
    <section
      className="about-section"
      id="about"
    >

      {/* =================================================
          ANIMATED BACKGROUND
      ================================================= */}

      <div className="about-background">
        <AnimatedBackground />
      </div>


      {/* =================================================
          CONTAINER
      ================================================= */}

      <div className="about-container">


        {/* =================================================
            HERO
        ================================================= */}

        <header className="about-hero">

          <div className="about-eyebrow">

            <span className="eyebrow-pulse" />

            {hero.eyebrow}

          </div>


          <h1>

            {hero.title}

            <strong>
              {hero.highlight}
            </strong>

          </h1>


          <p>
            {hero.description}
          </p>

        </header>


        {/* =================================================
            MAIN SECTION
        ================================================= */}

        <div className="about-main">


          {/* =================================================
              LEFT
          ================================================= */}

          <div className="about-content">

            <span className="section-eyebrow">
              {intro.eyebrow}
            </span>


            <h2>

              {intro.title}

              <strong>
                {intro.highlight}
              </strong>

            </h2>


            {intro.paragraphs.map(
              (paragraph, index) => (

                <p
                  key={index}
                  className="intro-paragraph"
                >
                  {paragraph}
                </p>

              )
            )}


            {/* FEATURES */}

            <div className="feature-list">

              {features.map(
                (feature, index) => (

                  <div
                    className="feature"
                    key={index}
                    style={{
                      "--feature-delay":
                        `${index * 0.12}s`
                    }}
                  >

                    <div className="feature-icon">

                      <DynamicIcon
                        name={feature.icon}
                        size={18}
                      />

                    </div>


                    <div className="feature-content">

                      <h3>
                        {feature.title}
                      </h3>

                      <p>
                        {feature.description}
                      </p>

                    </div>

                  </div>

                )
              )}

            </div>


            {/* BUTTONS */}

            <div className="about-actions">

              <Link
                to="/courses"
                className="primary-button"
              >

                <span>
                  Explore Courses
                </span>

                <ArrowRight size={16} />

              </Link>


              <Link
                to="/contact"
                className="text-button"
              >

                Talk To Us

                <ArrowRight size={15} />

              </Link>

            </div>

          </div>


          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <div className="about-visual">


            {/* Decorative moving lines */}

            <div className="visual-lines">

              <svg
                viewBox="0 0 600 560"
                xmlns="http://www.w3.org/2000/svg"
              >

                <defs>

                  <linearGradient
                    id="visualFlow"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >

                    <stop
                      stopColor="#2563EB"
                      stopOpacity="0"
                    />

                    <stop
                      offset="0.5"
                      stopColor="#06B6D4"
                      stopOpacity="0.45"
                    />

                    <stop
                      offset="1"
                      stopColor="#7C3AED"
                      stopOpacity="0"
                    />

                  </linearGradient>

                </defs>


                <path
                  className="visual-wave"
                  d="
                    M10 450
                    C145 320
                    190 475
                    300 345
                    C415 210
                    460 315
                    590 100
                  "
                  fill="none"
                  stroke="url(#visualFlow)"
                  strokeWidth="2"
                />


                <path
                  className="visual-wave visual-wave-two"
                  d="
                    M0 495
                    C150 365
                    210 510
                    320 390
                    C435 265
                    475 350
                    600 155
                  "
                  fill="none"
                  stroke="url(#visualFlow)"
                  strokeWidth="1"
                />


                <circle
                  className="visual-node"
                  cx="300"
                  cy="345"
                  r="5"
                  fill="#06B6D4"
                />

                <circle
                  className="visual-node-ring"
                  cx="300"
                  cy="345"
                  r="18"
                  fill="none"
                  stroke="#06B6D4"
                  strokeOpacity="0.15"
                />

              </svg>

            </div>


            {/* =================================================
                FLOATING CARDS
            ================================================= */}

            {floatingCards.map(
              (card, index) => (

                <div
                  key={index}
                  className={`visual-float visual-float-${index + 1}`}
                >

                  <div className="float-icon">

                    <DynamicIcon
                      name={card.icon}
                      size={16}
                    />

                  </div>


                  <section>

                    <small>
                      {card.small}
                    </small>

                    <strong>
                      {card.title}
                    </strong>

                  </section>

                </div>

              )
            )}


            {/* =================================================
                MAIN COMMAND PANEL
            ================================================= */}

            <div className="command-panel">


              {/* TOP BAR */}

              <div className="command-top">

                <div className="window-dots">

                  <span />
                  <span />
                  <span />

                </div>


                <div className="command-title">

                  <Terminal size={12} />

                  {visual.miniLabel}

                </div>


                <div className="command-status">

                  <span className="status-light" />

                  SYSTEM ACTIVE

                </div>

              </div>


              {/* CODE */}

              <div className="code-area">

                <div className="line-numbers">

                  {visual.codeLines.map(
                    (_, index) => (

                      <span key={index}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    )
                  )}

                </div>


                <div className="code-lines">

                  {visual.codeLines.map(
                    (originalLine, index) => {

                      const line =
                        typedLines[index] ||
                        "";

                      let className = "";

                      if (
                        originalLine.includes("const")
                      ) {
                        className = "code-blue";
                      }

                      if (
                        originalLine.includes("student")
                      ) {
                        className = "code-cyan";
                      }

                      if (
                        originalLine.includes("career")
                      ) {
                        className = "code-purple";
                      }

                      return (

                        <div
                          key={index}
                          className={`${className} ${
                            activeLine === index
                              ? "typing-line"
                              : ""
                          }`}
                        >

                          {line || "\u00A0"}

                          {activeLine === index && (
                            <span className="typing-cursor">
                              |
                            </span>
                          )}

                        </div>

                      );
                    }
                  )}

                </div>

              </div>


              {/* SYSTEM TITLE */}

              <div className="system-title">

                <div>

                  <span>
                    LEARNING SYSTEM
                  </span>

                  <h3>
                    {visual.title}
                  </h3>

                </div>


                <div className="system-orbit">

                  <span />
                  <span />
                  <span />

                </div>

              </div>


              {/* PROGRESS */}

              <div className="progress-list">

                {visual.progress.map(
                  (item, index) => (

                    <div
                      className="progress-item"
                      key={index}
                      style={{
                        "--progress-delay":
                          `${index * 0.2}s`
                      }}
                    >

                      <div className="progress-label">

                        <span>
                          {item.label}
                        </span>

                        <strong>
                          {item.value}%
                        </strong>

                      </div>


                      <div className="progress-bar">

                        <span
                          style={{
                            "--progress-width":
                              `${item.value}%`
                          }}
                        />

                      </div>

                    </div>

                  )
                )}

              </div>


              {/* SKILLS */}

              <div className="skills">

                {visual.skills.map(
                  (skill, index) => (

                    <span
                      key={index}
                      style={{
                        "--skill-delay":
                          `${index * 0.08}s`
                      }}
                    >
                      {skill}
                    </span>

                  )
                )}

              </div>


              {/* FOOTER */}

              <div className="command-footer">

                <span className="status-dot" />

                <span>
                  Learn
                </span>

                <i>•</i>

                <span>
                  Build
                </span>

                <i>•</i>

                <span>
                  Grow
                </span>


                <div className="footer-icon">

                  <Activity size={12} />

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            STATS
        ================================================= */}

        <div className="stats">

          {stats.map(
            (stat, index) => (

              <div
                className="stat"
                key={index}
                style={{
                  "--stat-delay":
                    `${index * 0.12}s`
                }}
              >

                <strong>
                  {stat.value}
                </strong>

                <span>
                  {stat.label}
                </span>

              </div>

            )
          )}

        </div>


        {/* =================================================
            WHY
        ================================================= */}

        <section className="why">

          <div className="why-heading">

            <span className="section-eyebrow">
              {why.eyebrow}
            </span>

            <h2>

              {why.title}

              <strong>
                {why.highlight}
              </strong>

            </h2>

          </div>


          <div className="why-grid">

            {why.items.map(
              (item, index) => (

                <article
                  className="why-card"
                  key={index}
                  style={{
                    "--why-delay":
                      `${index * 0.1}s`
                  }}
                >

                  <span className="card-number">
                    {item.number}
                  </span>


                  <div className="why-icon">

                    <DynamicIcon
                      name={item.icon}
                      size={19}
                    />

                  </div>


                  <h3>
                    {item.title}
                  </h3>


                  <p>
                    {item.description}
                  </p>


                  <div className="why-check">

                    <Check size={12} />

                    {item.check}

                  </div>

                </article>

              )
            )}

          </div>

        </section>


        {/* =================================================
            CTA
        ================================================= */}

        <div className="about-cta">

          <div className="cta-content">

            <span>
              {cta.eyebrow}
            </span>

            <h2>
              {cta.title}
            </h2>

          </div>


          <Link
            to="/courses"
            className="cta-button"
          >

            <span>
              Explore Courses
            </span>

            <ArrowRight size={15} />

          </Link>

        </div>

      </div>

    </section>
  );
}


export default About;