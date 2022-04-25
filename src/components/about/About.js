import React from "react";
import "./about.css";
import me from "./me-with-nice-bg.jpg";

const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-6 d-flex flex-column justify-content-center my-4 rounded">
              <div className="content">
                <h3>Kazi Shariful Islam </h3>
                <h2>A passionate web developer</h2>
                <p>
                  I'm Kazi Shariful Islam, a passionate programmer who loves to
                  explore the web for the betterment of the future technology. I
                  always try to learn and explore new programming languages. I'm
                  just stuck on programming.
                </p>
                <div className="text-center text-lg-start">
                  <a
                    href="/"
                    className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            <div className="me col-lg-6 d-flex align-items-center py-lg-4 my-lg-4">
              <img src={me} alt="hello" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
