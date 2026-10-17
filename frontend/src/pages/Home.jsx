
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Services from "../components/Services";
import Statistics from "../components/Statistics";
import InternshipPreview from "../components/InternshipPreview";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

import "../styles/HomeServices.css";
import "../styles/HomeInternship.css";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <About />

      {/* COURSES SECTION */}
      <Courses />

      {/* HOME SERVICES SECTION */}
      <section className="home-services-section">
        <div className="home-section-container">

          <div className="home-section-heading">
            <div className="home-heading-content">
              <span className="home-section-label">
                WHAT WE DO
              </span>

              <h2>
                Digital solutions
                <br />
                <em>built for growth.</em>
              </h2>
            </div>

            <p>
              From websites and mobile applications to digital
              marketing and creative content, we help businesses
              build a strong digital presence.
            </p>
          </div>

          <Services />

        </div>
      </section>

      {/* STATISTICS SECTION */}
      <Statistics />

      {/* INTERNSHIP SECTION */}
      <InternshipPreview />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* FAQ SECTION */}
      <FAQ />
    </>
  );
}

export default Home;
