
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
  Code2,
  Layers3,
  Megaphone,
  Palette,
  Braces,
  Brain,
  Database,
  BarChart3,
  Globe,
  Smartphone,
  Video,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

import "../styles/navbar.css";

const courses = [
  { name: "AI Enhanced Full Stack Development", href: "/courses/ai-enhanced-full-stack-development", icon: Code2 },
  { name: "Python Full Stack Development", href: "/courses/python-full-stack-development", icon: Layers3 },
  { name: "Digital Marketing", href: "/courses/digital-marketing", icon: Megaphone },
  { name: "UI/UX Design", href: "/courses/ui-ux-design", icon: Palette },
  { name: "Python Programming", href: "/courses/python-programming", icon: Braces },
  { name: "AI / ML", href: "/courses/ai-ml", icon: Brain },
  { name: "Data Science", href: "/courses/data-science", icon: Database },
  { name: "Data Analytics", href: "/courses/data-analytics", icon: BarChart3 },
];

const services = [
  { name: "Web Development", href: "/services/web-development", icon: Globe },
  { name: "App Development", href: "/services/app-development", icon: Smartphone },
  { name: "Digital Marketing", href: "/services/digital-marketing", icon: Megaphone },
  { name: "Video Editing", href: "/services/video-editing", icon: Video },
];

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    let timer;

    if (mobileMenu) {
      setMenuMounted(true);
    } else {
      timer = setTimeout(() => setMenuMounted(false), 450);
    }

    return () => clearTimeout(timer);
  }, [mobileMenu]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setCoursesOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const closeAllMenus = () => {
    setMobileMenu(false);
    setCoursesOpen(false);
    setServicesOpen(false);
  };

  const toggleCourses = () => {
    setCoursesOpen((prev) => !prev);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
    setCoursesOpen(false);
  };

  const toggleMobile = () => {
    setMobileMenu((prev) => !prev);
    setCoursesOpen(false);
    setServicesOpen(false);
  };

  const renderDropdownItems = (items) =>
    items.map((item) => {
      const Icon = item.icon;

      return (
        <Link
          key={item.name}
          to={item.href}
          className="ks-dropdown-item"
          onClick={closeAllMenus}
        >
          <div className="ks-dropdown-icon">
            <Icon size={18} />
          </div>

          <span className="ks-dropdown-text">{item.name}</span>
          <ArrowRight size={15} className="ks-dropdown-arrow" />
        </Link>
      );
    });

  const renderMobileItems = (items) =>
    items.map((item) => {
      const Icon = item.icon;

      return (
        <Link
          key={item.name}
          to={item.href}
          className="ks-mobile-course-item"
          onClick={closeAllMenus}
        >
          <Icon size={17} />
          <span>{item.name}</span>
        </Link>
      );
    });

  return (
    <header className="ks-navbar" ref={navbarRef}>
      <div className="container">
        <div className="ks-navbar-container">
          {/* LOGO */}
          <Link to="/" className="ks-brand" onClick={closeAllMenus}>
            <div className="ks-brand-content">
              <span className="ks-brand-name">KSQUARE</span>
              <span className="ks-brand-subtitle">SOFTTECH</span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="ks-desktop-nav">
            <Link to="/" className="ks-nav-link" onClick={closeAllMenus}>
              Home
            </Link>

            <Link to="/about" className="ks-nav-link" onClick={closeAllMenus}>
              About
            </Link>

            {/* COURSES */}
            <div className="ks-dropdown-wrapper">
              <button
                type="button"
                className={`ks-dropdown-button ${
                  coursesOpen ? "ks-dropdown-active" : ""
                }`}
                onClick={toggleCourses}
                aria-expanded={coursesOpen}
              >
                Courses
                <ChevronDown
                  size={16}
                  className={coursesOpen ? "ks-chevron-open" : ""}
                />
              </button>

              {coursesOpen && (
                <div className="ks-dropdown-menu ks-courses-menu">
                  <div className="ks-dropdown-header">
                    <div>
                      <span className="ks-dropdown-title">OUR COURSES</span>
                      <p className="ks-dropdown-description">
                        Learn skills. Build your career.
                      </p>
                    </div>

                    <span className="ks-course-count">
                      {courses.length} Courses
                    </span>
                  </div>

                  <div className="ks-course-grid">
                    {renderDropdownItems(courses)}
                  </div>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div className="ks-dropdown-wrapper">
              <button
                type="button"
                className={`ks-dropdown-button ${
                  servicesOpen ? "ks-dropdown-active" : ""
                }`}
                onClick={toggleServices}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  size={16}
                  className={servicesOpen ? "ks-chevron-open" : ""}
                />
              </button>

              {servicesOpen && (
                <div className="ks-dropdown-menu ks-services-menu">
                  <div className="ks-dropdown-header">
                    <div>
                      <span className="ks-dropdown-title">OUR SERVICES</span>
                      <p className="ks-dropdown-description">
                        Digital solutions for your business.
                      </p>
                    </div>
                  </div>

                  <div className="ks-dropdown-list">
                    {renderDropdownItems(services)}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/internship"
              className="ks-nav-link"
              onClick={closeAllMenus}
            >
              Internship
            </Link>

            <Link
              to="/projects"
              className="ks-nav-link"
              onClick={closeAllMenus}
            >
              Projects
            </Link>

            <Link
              to="/gallery"
              className="ks-nav-link"
              onClick={closeAllMenus}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="ks-nav-link"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="ks-navbar-actions">
            <Link
              to="/student-register"
              className="ks-register-cta"
              onClick={closeAllMenus}
            >
              <GraduationCap size={17} />
              <span>Register</span>
            </Link>

            <Link
              to="/contact"
              className="ks-desktop-cta"
              onClick={closeAllMenus}
            >
              Enquire Now <ArrowRight size={16} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className={`ks-mobile-menu-button ${
              mobileMenu ? "is-open" : ""
            }`}
            onClick={toggleMobile}
            aria-label={
              mobileMenu ? "Close navigation" : "Open navigation"
            }
            aria-expanded={mobileMenu}
          >
            <Menu className="ks-menu-icon" size={24} />
            <X className="ks-close-icon" size={24} />
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuMounted && (
          <nav
            className={`ks-mobile-menu ${
              mobileMenu ? "is-open" : "is-closing"
            }`}
            aria-hidden={!mobileMenu}
            inert={!mobileMenu}
          >
            <Link to="/" className="ks-mobile-link" onClick={closeAllMenus}>
              Home
            </Link>

            <Link
              to="/about"
              className="ks-mobile-link"
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* MOBILE COURSES */}
            <div className="ks-mobile-dropdown">
              <button
                type="button"
                className="ks-mobile-dropdown-button"
                onClick={toggleCourses}
                aria-expanded={coursesOpen}
              >
                Courses
                <ChevronDown
                  size={18}
                  className={coursesOpen ? "ks-chevron-open" : ""}
                />
              </button>

              <div
                className={`ks-mobile-submenu ${
                  coursesOpen ? "submenu-open" : ""
                }`}
              >
                {renderMobileItems(courses)}
              </div>
            </div>

            {/* MOBILE SERVICES */}
            <div className="ks-mobile-dropdown">
              <button
                type="button"
                className="ks-mobile-dropdown-button"
                onClick={toggleServices}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  size={18}
                  className={servicesOpen ? "ks-chevron-open" : ""}
                />
              </button>

              <div
                className={`ks-mobile-submenu ${
                  servicesOpen ? "submenu-open" : ""
                }`}
              >
                {renderMobileItems(services)}
              </div>
            </div>

            <Link
              to="/internship"
              className="ks-mobile-link"
              onClick={closeAllMenus}
            >
              Internship
            </Link>

            <Link
              to="/projects"
              className="ks-mobile-link"
              onClick={closeAllMenus}
            >
              Projects
            </Link>

            <Link
              to="/gallery"
              className="ks-mobile-link"
              onClick={closeAllMenus}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="ks-mobile-link"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* MOBILE REGISTER */}
            <Link
              to="/student-register"
              className="ks-mobile-register"
              onClick={closeAllMenus}
            >
              <GraduationCap size={18} />
              Student Register
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="ks-mobile-cta"
              onClick={closeAllMenus}
            >
              Enquire Now <ArrowRight size={16} />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
