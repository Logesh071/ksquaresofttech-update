import React from "react";
import { Link } from "react-router-dom";

import {
  Globe,
  Smartphone,
  Megaphone,
  Video,
  ArrowRight,
} from "lucide-react";


const icons = {
  web: Globe,
  app: Smartphone,
  marketing: Megaphone,
  video: Video,
};


const ServiceCard = ({ service }) => {

  const Icon =
    icons[service.icon] || Globe;


  return (
    <article
      className={`service-card service-${service.color}`}
    >

      {/* TOP */}

      <div className="service-card-top">

        <div className="service-card-icon">

          <Icon
            size={24}
            strokeWidth={1.8}
          />

        </div>


        <span className="service-card-number">
          {String(service.id).padStart(2, "0")}
        </span>

      </div>


      {/* CONTENT */}

      <div className="service-card-content">

        <h2>
          {service.title}
        </h2>

        <p>
          {service.description}
        </p>

      </div>


      {/* FOOTER */}

      <div className="service-card-footer">

        <span>
          {service.packages?.length || 0} Packages
        </span>


        <Link
          to={`/services/${service.slug}`}
          className="service-card-link"
        >
          Explore

          <ArrowRight size={16} />

        </Link>

      </div>

    </article>
  );
};

export default ServiceCard;