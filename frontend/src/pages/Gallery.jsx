
import React, { useEffect, useState } from "react";
import galleryData from "../data/gallery.json";
import "../styles/Gallery.css";

const categories = ["All", "Projects", "Workshops", "Team", "Events"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === activeCategory
        );

  const visibleImages = showAll
    ? filteredImages
    : filteredImages.slice(0, 6);

  function changeCategory(category) {
    setActiveCategory(category);
    setShowAll(false);
  }

  function navigateImage(direction) {
    const index = filteredImages.findIndex(
      (item) => item.id === selectedImage?.id
    );

    if (index === -1 || filteredImages.length === 0) return;

    const nextIndex =
      (index + direction + filteredImages.length) %
      filteredImages.length;

    setSelectedImage(filteredImages[nextIndex]);
  }

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowRight") navigateImage(1);
      if (event.key === "ArrowLeft") navigateImage(-1);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, filteredImages]);

  return (
    <main className="ks-gallery">
      {/* HERO */}
      <section className="gallery-hero">
        <svg
          className="gallery-hero-art"
          viewBox="0 0 700 500"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="390" cy="250" r="110" />
          <circle cx="390" cy="250" r="160" />
          <circle cx="390" cy="250" r="210" />
          <path d="M100 390L300 100L500 390L650 150" />
          <path d="M70 440L270 150L470 440L620 200" />
        </svg>

        <div className="gallery-hero-inner">
          <div className="gallery-hero-copy">
            <span className="gallery-eyebrow">
              <i /> LIFE AT KSQUARE SOFTTECH
            </span>

            <h1>
              Innovation in
              <br />
              <span>Every Frame.</span>
            </h1>

            <p>
              Explore our digital projects, creative collaborations,
              technology workshops and moments that move us forward.
            </p>

            <a href="#gallery-showcase" className="gallery-primary-btn">
              Explore Gallery <span>↘</span>
            </a>

            <div className="gallery-mini-stats">
              <div>
                <strong>24+</strong>
                <span>Gallery Moments</span>
              </div>
              <div>
                <strong>05</strong>
                <span>Collections</span>
              </div>
            </div>
          </div>

          <div className="gallery-hero-visual" aria-hidden="true">
            <div className="gallery-visual-orbit orbit-one" />
            <div className="gallery-visual-orbit orbit-two" />
            <div className="gallery-visual-core">
              <span>K</span>
              <small>KSQUARE</small>
              <small>SOFTTECH</small>
            </div>
            <span className="gallery-float-icon float-one">✦</span>
            <span className="gallery-float-icon float-two">⌘</span>
            <span className="gallery-float-icon float-three">↗</span>
          </div>
        </div>

        <div className="gallery-hero-bottom">
          <span>DESIGN</span>
          <span>DEVELOP</span>
          <span>INNOVATE</span>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="gallery-showcase" id="gallery-showcase">
        <div className="gallery-heading">
          <div>
            <span className="gallery-section-label">
              OUR WORLD IN PICTURES
            </span>
            <h2>
              Explore Our <span>Gallery.</span>
            </h2>
            <p>
              A closer look at the work, people and ideas behind
              KSquare Softtech.
            </p>
          </div>

          <div className="gallery-total">
            <strong>{filteredImages.length.toString().padStart(2, "0")}</strong>
            <span>PHOTOS</span>
          </div>
        </div>

        {/* FILTERS */}
        <div className="gallery-filter-list" aria-label="Gallery categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "gallery-filter active"
                  : "gallery-filter"
              }
              onClick={() => changeCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
              {category === "All" && (
                <span>{galleryData.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* IMAGES */}
        <div className="gallery-grid">
          {visibleImages.map((item, index) => (
            <article
              key={item.id}
              className="gallery-card"
              style={{ "--card-index": index }}
            >
              <button
                className="gallery-card-button"
                type="button"
                onClick={() => setSelectedImage(item)}
                aria-label={`Preview ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />

                <span className="gallery-image-shade" />

                <span className="gallery-image-top">
                  <span className="gallery-category-tag">
                    {item.category}
                  </span>
                  <span className="gallery-zoom">↗</span>
                </span>

                <span className="gallery-card-copy">
                  <span className="gallery-card-index">
                    {String(item.id).padStart(2, "0")} / 24
                  </span>
                  <span className="gallery-card-title">
                    {item.title}
                  </span>
                  <span className="gallery-card-description">
                    {item.description}
                  </span>
                </span>
              </button>
            </article>
          ))}
        </div>

        {/* VIEW ALL */}
        {filteredImages.length > 6 && (
          <div className="gallery-view-wrap">
            <button
              className="gallery-view-button"
              type="button"
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? "Show Less" : "View All Photos"}
              <span>{showAll ? "↑" : "→"}</span>
            </button>
            <p>
              Showing {visibleImages.length} of {filteredImages.length} photos
            </p>
          </div>
        )}

        {filteredImages.length === 0 && (
          <p className="gallery-empty">No photos in this category yet.</p>
        )}
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <div className="gallery-cta-ring" />
        <div className="gallery-cta-content">
          <span>LET'S BUILD SOMETHING GREAT</span>
          <h2>
            Your Vision.
            <br />
            <span>Our Innovation.</span>
          </h2>
          <p>
            Looking for website development, app development or
            digital solutions? Let's bring your next idea to life.
          </p>
          <a href="/contact" className="gallery-cta-button">
            Start a Conversation <span>↗</span>
          </a>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gallery-lightbox-close"
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close preview"
          >
            ×
          </button>

          <button
            className="gallery-lightbox-arrow"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              navigateImage(-1);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="gallery-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="gallery-lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>

          <button
            className="gallery-lightbox-arrow"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              navigateImage(1);
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
