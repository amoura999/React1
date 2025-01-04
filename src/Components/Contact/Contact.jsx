import React from "react";
import "./Contact.css";
export default function About() {
  return (
    <>
      <div className="portfolio">
        <h1 className="text-center my-4 fw-bold">CONTACT SETION</h1>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="linee me-3"></div>
        <i className="fa-solid fa-star"></i>
        <div className="linee ms-3"></div>
      </div>
      <form
  noValidate
  action
  className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched"
>
  <label htmlFor="userName" className="position-relative top-0 __top">
    userName :{" "}
  </label>
  <input
    id="userName"
    type="text"
    placeholder="userName"
    name="userName"
    className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
  />
  
  <label htmlFor="userAge" className="position-relative top-0 __top">
    userAge :{" "}
  </label>
  <input
    id="userAge"
    type="text"
    placeholder="userAge"
    name="userAge"  
    className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
  />
  
  <label htmlFor="userEmail" className="position-relative top-0 __top">
    userEmail :{" "}
  </label>
  <input
    id="userEmail"
    type="text"
    placeholder="userEmail"
    name="userEmail"  
    className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
  />
  
  <label htmlFor="userPassword" className="position-relative top-0 __top">
    userPassword :{" "}
  </label>
  <input
    id="userPassword"
    type="text"
    placeholder="userPassword"
    name="userPassword" 
    className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
  />
  
  <button
    className="btn mt-4 text-white"
    style={{ backgroundColor: "#1abc9c" }}
  >
    {" "}
    send Message{" "}
  </button>
</form>

      </div>
    </>
  );
}
