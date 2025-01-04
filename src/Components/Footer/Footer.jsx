import React from "react";
import "./Footer.css"
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-white">LOCATION</h4>
              <p className="text-white">2215 John Daniel Drive</p>
              <p className="text-white">Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h4 className="text-white">AROUND THE WEB</h4>
              <i className="fab amr fa-facebook-f text-white me-3"></i>
              <i className="fab amr fa-twitter text-white me-3"></i>
              <i className="fab amr fa-linkedin text-white me-3"></i>
              <i className="fab amr fa-chrome text-white"></i>
            </div>
            <div className="col-md-4">
              <h4 className="text-white">ABOUT FREELANCER</h4>
              <p className="text-white">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <p className="text-white text-center">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
