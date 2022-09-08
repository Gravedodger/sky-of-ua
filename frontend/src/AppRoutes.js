import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import RegionInfoSection from "./sections/RegionInfo-section";
import Project from "./pages/Project";
import ReportsPage from "./pages/Reports";
import Page404 from "./pages/NoMatch/NoMatchPage";
import RequestHelpForm from "./components/RequestHelpForm";
import Modal from "./components/Modal/Modal";
import ProjectsPage from "./pages/Projects";
import AdminPage from "./client/pages/Admin";
import ReportManagement from "./client/components/ReporttManagement";
import ProjectManagement from "./client/components/ProjectManagement";

const AppRoutes = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <BrowserRouter history={history}>
      <Header setModalActive={setModalActive} />
      <Routes>
        <Route
          exact
          path="/"
          element={<AboutUsPage setModalActive={setModalActive} />}
        />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path=":regionId" element={<RegionInfoSection />} />
        <Route path="/tmp-dev" element={<Project />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="*" element={<Page404 />} />

        <Route path="/admin" element={<AdminPage />} />
        <Route path="/projectManagement" element={<ProjectManagement />} />
        <Route path="/reportManagement" element={<ReportManagement />} />
      </Routes>

      <Footer />

      <Modal active={modalActive} setActive={setModalActive}>
        <RequestHelpForm setModalActive={setModalActive} />
      </Modal>
    </BrowserRouter>
  );
};

export default AppRoutes;
