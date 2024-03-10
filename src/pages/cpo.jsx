import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import TeamDetails from "../components/team_detail/cpo";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Disya Nabila_CDO"} />
      <TeamDetails />
    </Wrapper>
  );
};

export default index;
