import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Course from "../components/course/kursus";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Kursus"} />
      <Course />
    </Wrapper>
  );
};

export default index;
