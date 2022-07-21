import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import ProjectsPage from "./pages/Projects";
import ReportsPage from "./pages/Reports";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AboutUsPage />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
        <Route exact path="/reports" element={<ReportsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;
