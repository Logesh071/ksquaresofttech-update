import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const ServicePackageCard = ({
  packageData,
  popular = false,
}) => {
  return (
    <article
      className={`service-package-card ${
        popular ? "popular" : ""
      }`}
    >

      {/* BADGE */}

      {packageData.badge && (
        <span className="package-badge">
          {packageData.badge}
        </span>
      )}


      {/* PACKAGE NAME */}

      <h3>
        {packageData.name}
      </h3>


      {/* DESCRIPTION */}

      <p className="package-description">
        {packageData.description}
      </p>


      {/* PRICE */}

      <div className="package-price-area">

        <span className="package-price">
          {packageData.price}
        </span>

        {packageData.oldPrice && (
          <span className="package-old-price">
            {packageData.oldPrice}
          </span>
        )}

      </div>


      {/* DIVIDER */}

      <div className="package-divider" />


      {/* FEATURES */}

      <ul className="package-features">

        {packageData.features?.map(
          (feature, index) => (

            <li key={index}>

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
        Choose {packageData.name}

        <ArrowRight size={16} />

      </Link>

    </article>
  );
};

export default ServicePackageCard;