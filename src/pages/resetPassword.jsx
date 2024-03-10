import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Login from "../components/account/resetPassword";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Lupa Password"} />
      <Login/>
    </Wrapper>
  );
};

export default index;
