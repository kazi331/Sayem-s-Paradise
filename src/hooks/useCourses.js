import { useEffect, useState } from "react";

const useCourses = (url) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [url]);
  return { courses };
};

export default useCourses;
