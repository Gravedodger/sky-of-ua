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
import ProjectsPage from "./pages/Projects"
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import useToken from "./useToken";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

const AppRoutes = () => {
  const [modalActive, setModalActive] = useState(false);

  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter history={history}>
      <Header setModalActive={setModalActive} />
      <Routes>
        <Route exact path="/" element={<AboutUsPage setModalActive={setModalActive} />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path=":regionId" element={<RegionInfoSection />} />
        <Route path="/tmp-dev" element={<Project />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="*" element={<Page404 />} />+

        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>


      <Footer />

      <Modal active={modalActive} setActive={setModalActive}>
        <RequestHelpForm setModalActive={setModalActive} />
      </Modal>
    </BrowserRouter>
  )
}

export default AppRoutes;
