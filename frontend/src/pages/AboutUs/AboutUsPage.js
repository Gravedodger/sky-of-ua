import React from "react";
import { Helmet } from "react-helmet";
import AboutUsSection from "../../sections/AboutUs-section";
import ReportsSection from "../../sections/Reports-section";

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>Sky of UA || Про нас</title>
        <meta name="description" content="" />
        <meta name="keywords" content="Ukraine, war, charity, help" />
      </Helmet>

      <main>
        <div className="main-container">
          <AboutUsSection />
          <ReportsSection />
        </div>
      </main>
    </>
  );
};

export default AboutUsPage;
