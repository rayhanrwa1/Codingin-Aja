import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import TeamDetails from "../components/team_center/team_detail/cto";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Rahmat Fadilah_CTO"} />
      <TeamDetails />
    </Wrapper>
  );
};

export default index;
