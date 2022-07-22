import React, {Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import ProjectsPage from "./pages/Projects";
import ReportsPage from "./pages/Reports";
import Page404 from "./pages/NoMatch/NoMatchPage";

const AppRoutes = () => {
  return (
      <BrowserRouter>
          <Header />

          <Routes>
              <Route exact path="/" element={<AboutUsPage />} />
              <Route exact path="/projects" element={<ProjectsPage />} />
              <Route exact path="/reports" element={<ReportsPage />} />
              <Route path="" element={<Page404 />} />
          </Routes>

          <Footer />
      </BrowserRouter>
  )
}

export default AppRoutes;
