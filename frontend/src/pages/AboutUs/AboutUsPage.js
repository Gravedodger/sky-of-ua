import React from "react";
import { Helmet } from "react-helmet";
import { SectionTitleText } from "../../Typography";
import AboutUsBlock from "../../blocks/AboutUs-block";
import ReportsBlock from "../../blocks/Reports-block";
import AboutUsSection from "../../sections/AboutUs-section";

const AboutUsPage = () => {
  return (
      <>
          <Helmet>
              <title>Sky of UA || Про нас</title>
              <meta name="description" content="" />
              <meta name="keywords" content="Ukraine, war, charity, help"/>
          </Helmet>

          <main>
              <div className="main-container">
                  <AboutUsSection />
              </div>
          </main>
      </>
  )
}

export default AboutUsPage;
