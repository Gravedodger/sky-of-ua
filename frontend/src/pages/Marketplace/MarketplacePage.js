import React from "react";
import { Helmet } from "react-helmet";
import { SectionTitleText } from "../../Typography";

const MarketplacePage = () => {
  return (
      <>
          <Helmet>
              <title>Sky of UA || Маркет</title>
              <meta name="description" content="" />
              <meta name="keywords" content="Ukraine, war, charity, marketplace" />
          </Helmet>

          <main>
              <div className="main-container">
                  <SectionTitleText>Welcome to the Marketplace Page!</SectionTitleText>
              </div>
          </main>
      </>
  )
}

export default MarketplacePage;
