import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe,
  Smartphone,
  Megaphone,
  Video,
} from "lucide-react";

import services from "../data/services.json";
import "../styles/ServiceDetails.css";

const icons = {
  web: Globe,
  app: Smartphone,
  marketing: Megaphone,
  video: Video,
};

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  /* -------------------------------------------------------
     SERVICE NOT FOUND
  ------------------------------------------------------- */

  if (!service) {
    return (
      <main className="service-details-page">
        <section className="service-details-hero">
          <div className="service-details-hero-inner">

            <h1>Service Not Found</h1>

            <p className="service-details-description">
              The service you are looking for does not exist.
            </p>

            <Link
              to="/services"
              className="service-back-link"
            >
              <ArrowLeft size={16} />
              Back to Services
            </Link>

          </div>
        </section>
      </main>
    );
  }

  const Icon = icons[service.icon] || Globe;

  return (
    <main
      className={`service-details-page detail-${service.color}`}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="service-details-hero">

        <div className="service-details-hero-inner">

          {/* BACK */}
          <Link
            to="/services"
            className="service-back-link"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          {/* ICON */}
          <div className="service-details-icon">
            <Icon
              size={30}
              strokeWidth={1.8}
            />
          </div>

          {/* TITLE */}
          <h1>
            {service.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="service-details-description">
            {service.description}
          </p>

        </div>

      </section>


      {/* =====================================================
          PACKAGES
      ===================================================== */}

      <section className="service-packages-section">

        <div className="service-packages-container">

          {/* HEADER */}

          <div className="service-packages-header">

            <div className="service-packages-heading">

              <span className="service-packages-eyebrow">
                PACKAGES
              </span>

              <h2>
                Choose the right plan
                <br />
                for your business.
              </h2>

              <p>
                Flexible packages designed for startups,
                growing businesses and professional brands.
              </p>

            </div>

          </div>


          {/* PACKAGE GRID */}

          <div className="service-packages-grid">

            {service.packages?.map((pkg, index) => (

              <article
                key={pkg.name}
                className={`service-package-card ${
                  pkg.name === "Standard"
                    ? "popular"
                    : ""
                }`}
              >

                {/* BADGE */}

                {pkg.badge && (
                  <span className="package-badge">
                    {pkg.badge}
                  </span>
                )}


                {/* PACKAGE NAME */}

                <h3>
                  {pkg.name}
                </h3>


                {/* DESCRIPTION */}

                <p className="package-description">
                  {pkg.description}
                </p>


                {/* PRICE */}

                <div className="package-price-area">

                  <span className="package-price">
                    {pkg.price}
                  </span>

                  {pkg.oldPrice && (
                    <span className="package-old-price">
                      {pkg.oldPrice}
                    </span>
                  )}

                </div>


                {/* DIVIDER */}

                <div className="package-divider" />


                {/* FEATURES */}

                <ul className="package-features">

                  {pkg.features?.map(
                    (feature, featureIndex) => (

                      <li key={featureIndex}>

                        <Check
                          size={16}
                          strokeWidth={2.5}
                        />

                        <span>
                          {feature}
                        </span>

                      </li>

                    )
                  )}

                </ul>


                {/* BUTTON */}

                <Link
                  to="/contact"
                  className="package-button"
                >
                  Choose {pkg.name}
                  <ArrowRight size={16} />

                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="service-details-cta">

        <div className="service-details-cta-inner">

          <div className="service-details-cta-content">

            <div className="service-details-cta-text">

              <h2>
                Ready to start
                your project?
              </h2>

              <p>
                Let's discuss your requirements and
                create the right digital solution for
                your business.
              </p>

            </div>


            <Link
              to="/contact"
              className="service-details-cta-button"
            >
              Get Started
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ServiceDetails;