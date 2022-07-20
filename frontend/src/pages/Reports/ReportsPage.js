import React from "react";
import { SectionTitleText } from "../../Typography";
import {Helmet} from "react-helmet";

const ReportsPage = () => {
  return (
      <>
          <Helmet>
              <title>Sky of UA || Звітність</title>
              <meta name="description" content=""/>
              <meta name="keywords" content="Ukraine, war, charity, reports" />
          </Helmet>

          <main>
              <div className="main-container">
                  <SectionTitleText>Welcome to the Reports Page!</SectionTitleText>
              </div>
          </main>
      </>
  )
}

export default ReportsPage;
