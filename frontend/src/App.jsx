
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import CourseDetails from "./pages/CourseDetails";
import Services from "./pages/Services";
import ServiceDetails from "./service-pages/ServiceDetails";
import Internship from "./pages/Internship";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import StudentRegister from "./pages/StudentRegister";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* COURSES */}
          <Route
            path="/courses/:slug"
            element={<CourseDetails />}
          />

          {/* SERVICES */}
          <Route path="/services" element={<Services />} />

          {/* SERVICE DETAILS */}
          <Route
            path="/services/:slug"
            element={<ServiceDetails />}
          />

          {/* INTERNSHIP */}
          <Route
            path="/internship"
            element={<Internship />}
          />

          {/* PROJECTS */}
          <Route
            path="/projects"
            element={<Projects />}
          />

          {/* GALLERY */}
          <Route
            path="/gallery"
            element={<Gallery />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* STUDENT REGISTRATION */}
          <Route
            path="/student-register"
            element={<StudentRegister />}
          />

          {/* 404 PAGE */}
          <Route
            path="*"
            element={
              <section className="not-found">
                <h1>404 - Page Not Found</h1>
                <p>
                  Sorry, the page you are looking for
                  does not exist.
                </p>
              </section>
            }
          />
        </Routes>
      </main>

      {/* COMMON FOOTER */}
      <Footer />

      {/* FLOATING BUTTONS */}
      <BackToTop />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
