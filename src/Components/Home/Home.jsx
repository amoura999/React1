import React from "react";
import "./Home.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <>
      <div className="home d-flex justify-content-center align-items-center text-dark">
        <div className="text-center text-white">
          <img src="/Gallery/avataaars (1).svg" alt="Avatar" className="mb-4" />
          <div className="content">
            <h1 className="fw-bold fs-1 ">start Framework</h1>
            <div class="d-flex align-items-center justify-content-center mb-3">
              <div class="line me-3"></div>
              <i class="fa-solid fa-star"></i>
              <div class="line ms-3"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  );
}
