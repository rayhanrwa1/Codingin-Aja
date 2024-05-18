import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import TeamDetails from "../components/team_center/team_detail/ceo";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Rayhan Rizky_CEO"} />
      <TeamDetails />
    </Wrapper>
  );
};

export default index;
