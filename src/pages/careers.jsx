import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HomeThree from "../components/careers/index";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Careers"} />
      <HomeThree />
    </Wrapper>
  );
};

export default index;
