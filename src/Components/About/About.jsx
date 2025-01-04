import React from "react";
import "./About.css";
export default function About() {
  return (
    <>
      <div className="about d-flex justify-content-center align-items-center text-dark">
        <div className="container">
          <div className="text-center text-white">
            <h1 className="fw-bold fs-1 ">ABOUT COMPONENT</h1>
            <div className="lines">
              <div class="d-flex align-items-center justify-content-center mb-3">
                <div class="line me-3"></div>
                <i class="fa-solid fa-star"></i>
                <div class="line ms-3"></div>
              </div>
              <div className="content d-flex justify-content-between gap-4">
                <div className="left">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
                <div className="right">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
