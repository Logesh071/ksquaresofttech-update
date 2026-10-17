import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe,
  Smartphone,
  Megaphone,
  Video,
  Code2,
  Monitor,
  Zap,
  Layers3,
  Search,
  BarChart3,
  MousePointer2,
  TrendingUp,
  Film,
  Scissors,
  Clapperboard,
  Sparkles,
  ShoppingCart,
  Database,
  Server,
  Play,
  CloudUpload,
  Rocket,
  Smartphone as MobileIcon,
  CheckCircle2,
  Wifi,
} from "lucide-react";

import services from "../data/services.json";

import "../styles/ServiceDetails.css";

/* =========================================================
   SERVICE ICONS
========================================================= */

const serviceIcons = {
  web: Globe,
  app: Smartphone,
  marketing: Megaphone,
  video: Video,
};

/* =========================================================
   SERVICE VISUAL DATA
========================================================= */

const visualData = {
  web: {
    label: "WEB DEVELOPMENT",

    headline:
      "Build a digital experience that works as hard as your business.",

    description:
      "Modern websites built with clean architecture, responsive interfaces, powerful performance and scalable technology.",

    stats: [
      ["100%", "Responsive"],
      ["SEO", "Optimized"],
      ["FAST", "Performance"],
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
    ],

    features: [
      {
        icon: Code2,
        title: "Clean Code",
        text: "Scalable architecture",
      },
      {
        icon: Monitor,
        title: "Responsive",
        text: "Every screen size",
      },
      {
        icon: Zap,
        title: "Fast",
        text: "Optimized performance",
      },
    ],
  },

  app: {
    label: "APP DEVELOPMENT",

    headline:
      "Turn your idea into a powerful mobile experience.",

    description:
      "Modern mobile applications designed with smooth interactions, scalable backend systems and intuitive user experiences.",

    stats: [
      ["iOS", "Ready"],
      ["ANDROID", "Ready"],
      ["API", "Integrated"],
    ],

    technologies: [
      "React Native",
      "Flutter",
      "Firebase",
      "Node.js",
      "REST API",
      "MongoDB",
    ],

    features: [
      {
        icon: Smartphone,
        title: "Mobile First",
        text: "Built for users",
      },
      {
        icon: Layers3,
        title: "Scalable",
        text: "Ready to grow",
      },
      {
        icon: Zap,
        title: "Smooth UX",
        text: "Fast interactions",
      },
    ],
  },

  marketing: {
    label: "DIGITAL MARKETING",

    headline:
      "Turn attention into measurable business growth.",

    description:
      "Data-driven digital marketing strategies focused on visibility, engagement, leads, conversions and sustainable growth.",

    stats: [
      ["SEO", "Growth"],
      ["ADS", "Campaigns"],
      ["ROI", "Focused"],
    ],

    technologies: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Social Media",
      "Analytics",
      "Content",
    ],

    features: [
      {
        icon: Search,
        title: "SEO Growth",
        text: "Better visibility",
      },
      {
        icon: BarChart3,
        title: "Analytics",
        text: "Track results",
      },
      {
        icon: MousePointer2,
        title: "Social Media",
        text: "Build awareness",
      },
    ],
  },

  video: {
    label: "VIDEO EDITING",

    headline:
      "Make every frame impossible to ignore.",

    description:
      "Professional editing for reels, advertisements, YouTube, business videos, product videos and social media campaigns.",

    stats: [
      ["4K", "Quality"],
      ["REELS", "Ready"],
      ["PRO", "Editing"],
    ],

    technologies: [
      "Reels",
      "YouTube",
      "Motion Graphics",
      "Transitions",
      "Color Grade",
      "Shorts",
    ],

    features: [
      {
        icon: Film,
        title: "Professional Edit",
        text: "Visual storytelling",
      },
      {
        icon: Clapperboard,
        title: "Motion Graphics",
        text: "Dynamic visuals",
      },
      {
        icon: Scissors,
        title: "Social Content",
        text: "Reels & Shorts",
      },
    ],
  },
};

/* =========================================================
   APP DEPLOYMENT VISUAL
========================================================= */

const AppDeploymentVisual = () => {
  return (
    <div className="app-deployment-visual">

      {/* Background glow */}
      <div className="deployment-glow deployment-glow-one" />
      <div className="deployment-glow deployment-glow-two" />

      {/* Floating deployment badge */}
      <div className="deployment-floating deployment-floating-top">

        <div className="deployment-floating-icon">
          <CloudUpload size={15} />
        </div>

        <div>
          <strong>Deploying</strong>
          <span>Production build</span>
        </div>

      </div>

      {/* Main application dashboard */}
      <div className="deployment-dashboard">

        {/* Dashboard header */}

        <div className="deployment-header">

          <div className="deployment-brand">

            <div className="deployment-logo">
              KS
            </div>

            <div>
              <strong>
                Mobile App
              </strong>

              <span>
                Production
              </span>
            </div>

          </div>

          <div className="deployment-live">
            <i />
            LIVE
          </div>

        </div>

        {/* Main deployment content */}

        <div className="deployment-main">

          {/* Left side */}

          <div className="deployment-info">

            <div className="deployment-label">
              APP DEPLOYMENT
            </div>

            <h3>
              Your app is
              <span>
                live.
              </span>
            </h3>

            <p>
              Successfully deployed to
              production.
            </p>

            <div className="deployment-progress">

              <div className="deployment-progress-top">

                <span>
                  Deployment
                </span>

                <strong>
                  100%
                </strong>

              </div>

              <div className="deployment-progress-bar">
                <span />
              </div>

            </div>

            <div className="deployment-steps">

              <div className="deployment-step completed">

                <div>
                  <CheckCircle2 size={14} />
                </div>

                <span>
                  Build completed
                </span>

              </div>

              <div className="deployment-step completed">

                <div>
                  <CheckCircle2 size={14} />
                </div>

                <span>
                  API connected
                </span>

              </div>

              <div className="deployment-step completed">

                <div>
                  <CheckCircle2 size={14} />
                </div>

                <span>
                  App deployed
                </span>

              </div>

            </div>

          </div>

          {/* Phone */}

          <div className="deployment-phone-wrap">

            <div className="deployment-phone-glow" />

            <div className="deployment-phone">

              <div className="deployment-phone-notch" />

              <div className="deployment-phone-screen">

                <div className="phone-status">

                  <span>
                    10:43
                  </span>

                  <div>
                    <Wifi size={9} />
                    <span />
                    <span />
                  </div>

                </div>

                <div className="phone-app-header">

                  <div className="phone-app-logo">
                    KS
                  </div>

                  <div className="phone-menu">
                    <span />
                    <span />
                    <span />
                  </div>

                </div>

                <div className="phone-welcome">

                  <small>
                    Welcome back
                  </small>

                  <strong>
                    KSQUARE
                  </strong>

                  <span>
                    Your business app
                  </span>

                </div>

                <div className="phone-stat-card">

                  <div>

                    <small>
                      PERFORMANCE
                    </small>

                    <strong>
                      94.8%
                    </strong>

                  </div>

                  <TrendingUp size={17} />

                </div>

                <div className="phone-mini-grid">

                  <div>
                    <BarChart3 size={13} />
                    <span />
                  </div>

                  <div>
                    <ShoppingCart size={13} />
                    <span />
                  </div>

                  <div>
                    <Database size={13} />
                    <span />
                  </div>

                </div>

                <div className="phone-list">

                  <span />
                  <span />
                  <span />

                </div>

                <div className="phone-bottom-nav">

                  <i className="active" />
                  <i />
                  <i />
                  <i />

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Deployment bottom */}

        <div className="deployment-footer">

          <div>

            <Rocket size={14} />

            <span>
              Production deployment
            </span>

          </div>

          <strong>
            v2.4.0
          </strong>

        </div>

      </div>

      {/* Floating status */}

      <div className="deployment-floating deployment-floating-bottom">

        <div className="deployment-check">
          <Check size={14} />
        </div>

        <div>
          <strong>
            Deployment successful
          </strong>

          <span>
            Just now
          </span>
        </div>

      </div>

    </div>
  );
};

/* =========================================================
   SERVICE DETAILS
========================================================= */

const ServiceDetails = () => {

  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  useEffect(() => {

    if (!service) return;

    const elements =
      document.querySelectorAll(".sd-reveal");

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "sd-visible"
              );

            }

          });

        },
        {
          threshold: 0.08,
        }
      );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };

  }, [service]);

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!service) {

    return (
      <main className="service-details-page">

        <section className="sd-not-found">

          <div>

            <span className="sd-404">
              404
            </span>

            <h1>
              Service Not Found
            </h1>

            <p>
              The service you are looking for
              does not exist.
            </p>

            <Link
              to="/services"
              className="sd-primary-btn"
            >

              <ArrowLeft size={16} />

              Back to Services

            </Link>

          </div>

        </section>

      </main>
    );
  }

  const Icon =
    serviceIcons[service.icon] || Globe;

  const visual =
    visualData[service.icon] ||
    visualData.web;

  return (

    <main
      className={`service-details-page detail-${service.color}`}
    >

      {/* =================================================
          HERO
      ================================================= */}

      <section className="sd-hero">

        <div className="sd-grid-bg" />

        <div className="sd-orb sd-orb-one" />

        <div className="sd-orb sd-orb-two" />

        <div className="sd-container">

          <Link
            to="/services"
            className="sd-back"
          >

            <ArrowLeft size={15} />

            All Services

          </Link>

          <div className="sd-hero-grid">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="sd-hero-content">

              <div className="sd-eyebrow sd-reveal">

                <span />

                {visual.label}

              </div>

              <div className="sd-icon-box sd-reveal">

                <Icon
                  size={30}
                  strokeWidth={1.6}
                />

              </div>

              <h1 className="sd-title sd-reveal">

                {service.title}

                <span>
                  {visual.headline}
                </span>

              </h1>

              <p className="sd-description sd-reveal">
                {visual.description}
              </p>

              {/* STATS */}

              <div className="sd-stats sd-reveal">

                {visual.stats.map(
                  ([value, label], index) => (

                    <div
                      className="sd-stat"
                      key={index}
                    >

                      <strong>
                        {value}
                      </strong>

                      <span>
                        {label}
                      </span>

                    </div>

                  )
                )}

              </div>

              {/* BUTTONS */}

              <div className="sd-actions sd-reveal">

                <Link
                  to="/contact"
                  className="sd-primary-btn"
                >

                  Start Your Project

                  <ArrowRight size={16} />

                </Link>

                <a
                  href="#packages"
                  className="sd-outline-btn"
                >
                  View Packages
                </a>

              </div>

            </div>

            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

            <div className="sd-visual sd-reveal">

              {service.icon === "app" ? (

                <AppDeploymentVisual />

              ) : (

                <div className="sd-window">

                  <div className="sd-window-top">

                    <div className="sd-window-dots">
                      <i />
                      <i />
                      <i />
                    </div>

                    <span>
                      ksquare.softtech
                    </span>

                    <div className="sd-window-status">
                      LIVE
                    </div>

                  </div>

                  {/* WEB */}

                  {service.icon === "web" && (

                    <div className="sd-web-ui">

                      <div className="sd-web-nav">

                        <div className="sd-mini-logo">
                          KS
                        </div>

                        <div className="sd-nav-lines">
                          <span />
                          <span />
                          <span />
                        </div>

                        <div className="sd-nav-button" />

                      </div>

                      <div className="sd-web-body">

                        <div className="sd-web-side">
                          <span className="active" />
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>

                        <div className="sd-web-main">

                          <div className="sd-code-label">
                            &lt; DEVELOPMENT /&gt;
                          </div>

                          <div className="sd-code-heading">
                            <span />
                            <span />
                            <span />
                          </div>

                          <div className="sd-code-cards">

                            <div>
                              <Code2 size={18} />
                              <span />
                              <small />
                            </div>

                            <div>
                              <Database size={18} />
                              <span />
                              <small />
                            </div>

                            <div>
                              <Server size={18} />
                              <span />
                              <small />
                            </div>

                          </div>

                          <div className="sd-code-chart">

                            <div className="sd-chart-bars">
                              <i />
                              <i />
                              <i />
                              <i />
                              <i />
                              <i />
                              <i />
                            </div>

                            <div className="sd-chart-line" />

                          </div>

                        </div>

                      </div>

                    </div>

                  )}

                  {/* MARKETING */}

                  {service.icon === "marketing" && (

                    <div className="sd-marketing-ui">

                      <div className="sd-marketing-header">

                        <div>

                          <small>
                            Campaign Overview
                          </small>

                          <strong>
                            Growth Analytics
                          </strong>

                        </div>

                        <TrendingUp size={23} />

                      </div>

                      <div className="sd-growth-number">
                        +84.6%
                      </div>

                      <div className="sd-growth-label">
                        MONTHLY GROWTH
                      </div>

                      <div className="sd-marketing-chart">

                        <svg
                          viewBox="0 0 600 200"
                          preserveAspectRatio="none"
                        >

                          <path
                            className="chart-area"
                            d="
                              M0 165
                              C60 145 80 150 120 130
                              S180 120 220 135
                              S270 90 310 105
                              S360 70 400 82
                              S470 35 520 55
                              S560 30 600 15
                              L600 200
                              L0 200 Z
                            "
                          />

                          <path
                            className="chart-stroke"
                            d="
                              M0 165
                              C60 145 80 150 120 130
                              S180 120 220 135
                              S270 90 310 105
                              S360 70 400 82
                              S470 35 520 55
                              S560 30 600 15
                            "
                          />

                        </svg>

                      </div>

                      <div className="sd-marketing-stats">

                        <div>
                          <small>REACH</small>
                          <strong>128K</strong>
                        </div>

                        <div>
                          <small>LEADS</small>
                          <strong>2.8K</strong>
                        </div>

                        <div>
                          <small>CTR</small>
                          <strong>6.4%</strong>
                        </div>

                      </div>

                    </div>

                  )}

                  {/* VIDEO */}

                  {service.icon === "video" && (

                    <div className="sd-video-ui">

                      <div className="sd-video-preview">

                        <div className="sd-video-overlay" />

                        <div className="sd-play">

                          <Play
                            size={21}
                            fill="currentColor"
                          />

                        </div>

                        <span>
                          00:14 / 00:30
                        </span>

                      </div>

                      <div className="sd-video-tools">

                        <Scissors size={15} />

                        <i />
                        <i />
                        <i />
                        <i />

                      </div>

                      <div className="sd-timeline">

                        <div className="sd-track">

                          <small>
                            VIDEO
                          </small>

                          <span className="track-one" />
                          <span className="track-two" />
                          <span className="track-three" />

                        </div>

                        <div className="sd-track audio">

                          <small>
                            AUDIO
                          </small>

                          <div className="sd-wave">

                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />

                          </div>

                        </div>

                      </div>

                    </div>

                  )}

                </div>

              )}

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          TECHNOLOGY
      ================================================= */}

      <section className="sd-tech-section sd-reveal">

        <div className="sd-container">

          <div className="sd-tech-header">

            <div>

              <span>
                TECHNOLOGY STACK
              </span>

              <h2>
                Built with modern tools.
              </h2>

            </div>

            <p>
              Technologies selected for
              performance, flexibility and
              long-term scalability.
            </p>

          </div>

          <div className="sd-tech-grid">

            {visual.technologies.map(
              (tech, index) => (

                <div
                  className="sd-tech-item"
                  key={index}
                >

                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <strong>
                    {tech}
                  </strong>

                  <ArrowRight size={14} />

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* =================================================
          PACKAGES
      ================================================= */}

      <section
        id="packages"
        className="sd-packages-section"
      >

        <div className="sd-container">

          <div className="sd-section-heading sd-reveal">

            <div>

              <span>
                PACKAGES
              </span>

              <h2>
                Choose your{" "}
                <em>
                  perfect plan.
                </em>
              </h2>

            </div>

            <p>
              Simple packages designed for
              different business stages.
            </p>

          </div>

          <div className="sd-package-grid">

            {service.packages?.map(
              (pkg, index) => {

                const isSpecial =
                  pkg.name === "Standard";

                return (

                  <article
                    key={pkg.name}
                    className={`sd-package-card sd-reveal ${
                      isSpecial
                        ? "is-popular"
                        : ""
                    }`}
                    style={{
                      "--delay":
                        `${index * 100}ms`,
                    }}
                  >

                    {isSpecial && (
                      <span className="sd-package-badge">
                        SPECIAL OFFER
                      </span>
                    )}

                    <div className="sd-package-number">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <h3>
                      {pkg.name}
                    </h3>

                    <p className="sd-package-description">
                      {pkg.description}
                    </p>

                    <div className="sd-price">

                      <strong>
                        {pkg.price}
                      </strong>

                      {pkg.oldPrice && (
                        <span>
                          {pkg.oldPrice}
                        </span>
                      )}

                    </div>

                    <div className="sd-package-line" />

                    <ul>

                      {pkg.features?.map(
                        (
                          feature,
                          featureIndex
                        ) => (

                          <li
                            key={featureIndex}
                          >

                            <Check
                              size={15}
                              strokeWidth={2.6}
                            />

                            <span>
                              {feature}
                            </span>

                          </li>

                        )
                      )}

                    </ul>

                    <Link
                      to="/contact"
                      className="sd-package-btn"
                    >

                      Choose {pkg.name}

                      <ArrowRight size={15} />

                    </Link>

                  </article>

                );
              }
            )}

          </div>

        </div>

      </section>

      {/* =================================================
          CTA
      ================================================= */}

      <section className="sd-cta-section">

        <div className="sd-container">

          <div className="sd-cta sd-reveal">

            <div className="sd-cta-orb" />

            <div className="sd-cta-content">

              <span>
                READY WHEN YOU ARE
              </span>

              <h2>
                Let's build something{" "}
                <em>
                  remarkable.
                </em>
              </h2>

              <p>
                Have an idea? Let's turn it into
                a digital experience that people
                remember.
              </p>

              <Link
                to="/contact"
                className="sd-primary-btn"
              >

                Start a Conversation

                <ArrowRight size={16} />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ServiceDetails;