import React from "react";
import { Link } from "react-router-dom";
import useCourses from "../../hooks/useCourses";
import SingleCourse from "../courses/SingleCourse";
import "./home.css";

const Home = () => {
  const courses = useCourses("courseData.json");
  courses.courses.length = 4;
  // console.log(courses.courses);
  return (
    <>
      <div className="banner-bg bg-dark">
        <div className="banner bg-dark mx-auto">
          <div className="image bg-dark">
            <img
              src="https://html.thimpress.com/tutorx/assets/images/home/slide-home-2-1.png"
              alt=""
            />
          </div>
          <div className="text text-light">
            <h1 className="w-75">Private SAT tutoring industry leading SAT</h1>
            <p className="w-75 mt-4">
              High is a nationally recognized K-12 independent school situatedin
              the hills of Oakland, California. Our mission is to inspire a
              maplifelonglove of learning with a focus on scholarship. For 23
              years of existence.
            </p>
            <div className="cta mt-4">
              Call Us: <a href="tel:+8801612******">+8801612******</a>
            </div>
          </div>
        </div>
      </div>
      <section id="courses">
        <div className="courses row container mx-auto">
          <h2 className="text-center py-4 my-4">
            Discover courses developed
            <br />
            by Sayem Khan
          </h2>
          {courses.courses.map((course) => (
            <SingleCourse key={course.id} course={course} />
          ))}
          <div className="w-100 text-center my-4 mx-auto">
            <Link to="/courses" className="text-center btn btn-secondary m-4  ">
              See All
            </Link>
          </div>
        </div>
      </section>
      <div className="cta">
        <div className="py-5 service-32">
          <div className="container">
            <div className="row wrap-feature-32">
              <div className="col-md-6">
                {" "}
                <img
                  src="https://html.thimpress.com/tutorx/assets/images/home/single-png-03.png"
                  alt=""
                  className="img-fluid"
                  width="100%"
                />{" "}
              </div>
              <div className="col-md-6 align-self-center">
                <span className="badge badge-info rounded-pill px-3 py-1 font-weight-light">
                  English Course
                </span>
                <h3 className="my-3">
                  Become The English Speaker Everyone Is Jealous Of
                </h3>
                <p className="mt-3">
                  Join the 1,000s of students that have gotten HAPPY ENGLISH
                  Get the best English lessons FOR YOU!
                </p>
                <a
                  className="btn btn-info-gradiant btn-md rounded-pill mt-3"
                  href="/"
                >
                  <span>View Details</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
