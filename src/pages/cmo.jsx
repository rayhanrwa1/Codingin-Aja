import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import TeamDetails from "../components/team_center/team_detail/cmo";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Verra Aprilia_CEO"} />
      <TeamDetails />
    </Wrapper>
  );
};

export default index;
