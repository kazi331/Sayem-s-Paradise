import React from "react";
import useCourses from "../../hooks/useCourses";
import SingleCourse from "./SingleCourse";

const Courses = () => {
  const courses = useCourses("courseData.json");
  return (
    <div className="container py-4 mb-4 mx-auto">
      <h2 className="text-center py-4 m-4">
        Discover courses developed by Sayem Khan
      </h2>
      <div className="row gy-4">
        {courses.courses.map((course) => (
          <SingleCourse course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
