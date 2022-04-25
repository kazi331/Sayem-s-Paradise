import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Blogs from "./components/blogs/Blogs";
import Checkout from "./components/checkout/Checkout";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Locked from "./components/locked/Locked";
import Login from "./components/login/Login";
import CurrentUser from "./components/Nav/CurrentUser";
import Header from "./components/Nav/Header";
import NotFound from "./components/NotFound";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="main-wrapper">
      {/* <Nav /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout/:id"
          element={
            <Locked>
              <Checkout />
            </Locked>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/current-user" element={<CurrentUser/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
