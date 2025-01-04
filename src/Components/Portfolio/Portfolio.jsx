import React, { useState } from "react";
import "./Portfolio.scss";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/Gallery/poert1.png", alt: "Portfolio Image 1" },
    { src: "/Gallery/port2.png", alt: "Portfolio Image 2" },
    { src: "/Gallery/port3.png", alt: "Portfolio Image 3" },
    { src: "/Gallery/poert1.png", alt: "Portfolio Image 4" },
    { src: "/Gallery/port2.png", alt: "Portfolio Image 5" },
    { src: "/Gallery/port3.png", alt: "Portfolio Image 6" },
  ];

  return (
    <>
      <div className="portfolio">
        <h1 className="text-center my-4 fw-bold">PORTFOLIO COMPONENT</h1>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="linee me-3"></div>
          <i className="fa-solid fa-star"></i>
          <div className="linee ms-3"></div>
        </div>
        <div className="container">
          <div className="row g-5">
            {images.map((img, index) => (
              <div
                key={index}
                className="col-sm-12 col-md-6 col-lg-4"
                onClick={() => setSelectedImage(img)}
              >
                <div className="card rounded-3 card-container">
                  <img src={img.src} className="card-img-top" alt={img.alt} />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                    <i className="fas fa-plus icon-add"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="image-modal position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="modal-image"
          />
        </div>
      )}
    </>
  );
}
