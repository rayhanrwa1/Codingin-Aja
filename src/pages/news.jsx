import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Blog from "../components/news_1";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Berita"} />
      <Blog />
    </Wrapper>
  );
};

export default index;
