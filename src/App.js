import React, { useEffect, useState } from "react";
import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/UI/Navbar";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/UI/Footer";

import Construction from "./Components/UI/Construction";
import ScrollTop from "./Components/UI/ScrollTop";
import Marketplace from "./Components/MarketPlace/Marketplace";
import SingleAnimatedCategory from "./Components/MarketPlace/SingleAnimatedCategory";
import PostJob from "./Components/MarketPlace/PostJob";
import SingleJob from "./Components/MarketPlace/SingleJob";
import ClientProfile from "./Components/MarketPlace/ClientProfile";
import TalentProfile from "./Components/MarketPlace/TalentProfile";
import TalentDashboard from "./Components/MarketPlace/TalentDashboard";
import AllJobs from "./Components/MarketPlace/AllJobs";
import CourseDetaisPage from "./Components/Home/CourseDetaisPage";
import Courselist from "./Components/Home/Courselist";
import vedioapi from "./app/vedioapi";
import CourseStart from "./Components/Home/CourseStart";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    vedioapi.getCourses().then(resp => {
      setCourses(resp.courses);
    });
  };

  return (
    <div className="app">
      <Router>
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Homepage darkTheme={darkTheme} />} />
          {/* MarketPlace */}

          <Route
            path="/marketplace"
            element={<Marketplace darkTheme={darkTheme} />}
          />
          <Route path="/post-job" element={<PostJob darkTheme={darkTheme} />} />
          <Route
            path="/marketplace/animated"
            element={<SingleAnimatedCategory darkTheme={darkTheme} />}
          />
          <Route
            path="/all-jobs"
            element={<AllJobs darkTheme={darkTheme} />}
          />
          <Route
            path="/single-job"
            element={<SingleJob darkTheme={darkTheme} />}
          />
          <Route
            path="/talent"
            element={<TalentProfile darkTheme={darkTheme} />}
          />
          <Route
            path="/talent-dashboard"
            element={<TalentDashboard darkTheme={darkTheme} />}
          />
          <Route
            path="/client"
            element={<ClientProfile darkTheme={darkTheme} />}
          />
          <Route
          path="/Details/:id"
          element={<CourseDetaisPage courses={courses} darkTheme={darkTheme}/>}
          />
          <Route
          path="/Learn/:id"
          element={<CourseStart courses={courses} darkTheme={darkTheme} />}
          />
          <Route
          path="/Courses"
          element={<Courselist></Courselist>}
          />

          {/* MarketPlace----------------------x----------------- */}

          <Route path="*" element={<Construction darkTheme={darkTheme} />} />
        </Routes>
        <Footer darkTheme={darkTheme} />
      </Router>
    </div>
  );
}

export default App;
