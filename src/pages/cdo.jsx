import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import TeamDetails from "../components/team_center/team_detail/cdo";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Laras Suprapti_CDO"} />
      <TeamDetails />
    </Wrapper>
  );
};

export default index;
