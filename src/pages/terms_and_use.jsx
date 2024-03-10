import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HomeThree from "../components/terms_and_use/index";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Terms and Use"} />
      <HomeThree />
    </Wrapper>
  );
};

export default index;
