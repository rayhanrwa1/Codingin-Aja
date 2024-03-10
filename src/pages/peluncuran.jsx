import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import BlogDetails from "../components/news_detail_1";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Peluncuran"} />
      <BlogDetails />
    </Wrapper>
  );
};

export default index;
