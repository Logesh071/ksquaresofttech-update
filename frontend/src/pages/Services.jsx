import React from "react";

import ServicesComponent from "../components/Services";

import "../styles/Services.css";


const Services = () => {

  return (
    <main className="services-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="services-hero">

        <div className="services-hero-inner">

          <span className="services-eyebrow">
            OUR SERVICES
          </span>


          <h1>
            Digital solutions
            <br />

            <span>
              built for growth.
            </span>
          </h1>


          <p>
            We create modern digital solutions that help
            businesses build their brand, reach customers
            and grow online.
          </p>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-list-section">

        <div className="services-list-container">

          <ServicesComponent />

        </div>

      </section>

    </main>
  );
};


export default Services;