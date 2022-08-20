import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import ProjectsPage from "./pages/Projects";
import RegionInfoSection from "./sections/RegionInfo-section";
import Project from "./pages/Project";

import ReportsPage from "./pages/Reports";
import Page404 from "./pages/NoMatch/NoMatchPage";

import ProjectsAdminPage from "./pages/ProjectsAdmin/ProjectsAdminPage";

import RequestHelpForm from "./components/RequestHelpForm";
import Modal from "./components/Modal/Modal";
import ProjectsListPage from "./client/ProjectList/pages/ToDoListPage";

const AppRoutes = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <BrowserRouter>
      <Header setModalActive={setModalActive} />

      <Routes>
        <Route
          exact
          path="/"
          element={<AboutUsPage setModalActive={setModalActive} />}
        />
        <Route path="/projects" element={<ProjectsPage />}>
          <Route path=":regionId" element={<RegionInfoSection />} />
        </Route>
        <Route path="/tmp-dev" element={<Project />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/admin" element={<ProjectsListPage />} />

        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />

      <Modal active={modalActive} setActive={setModalActive}>
        <RequestHelpForm setModalActive={setModalActive} />
      </Modal>
    </BrowserRouter>
  );
};

export default AppRoutes;
