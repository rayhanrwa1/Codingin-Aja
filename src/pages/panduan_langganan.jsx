import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Blog from "../components/panduan/panduan copy";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Panduan"} />
      <Blog />
    </Wrapper>
  );
};

export default index;
