import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import ProjectsPage from "./pages/Projects";
import ReportsPage from "./pages/Reports";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />

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
