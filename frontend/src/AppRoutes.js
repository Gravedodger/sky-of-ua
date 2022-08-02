import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import ProjectsPage from "./pages/Projects";
import ReportsPage from "./pages/Reports";
import Page404 from "./pages/NoMatch/NoMatchPage";

import RequestHelpForm from "./components/RequestHelpForm";
import Modal from "./components/Modal/Modal";
import RegionInfoSection from "./sections/RegionInfo-section";

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
        <Route exact path="/projects" element={<ProjectsPage />}>
          <Route path="region-:id" element={<RegionInfoSection />} />
        </Route>
        <Route exact path="/reports" element={<ReportsPage />} />
        <Route path="" element={<Page404 />} />
      </Routes>

      <Footer />

      <Modal active={modalActive} setActive={setModalActive}>
        <RequestHelpForm setModalActive={setModalActive} />
      </Modal>
    </BrowserRouter>
  );
};

export default AppRoutes;
