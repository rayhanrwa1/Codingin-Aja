import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import SetProfil from "../components/course/setting-profile/index"; // Ubah path ke direktori yang benar

const Setting = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Setting"} />
      <SetProfil/>
    </Wrapper>
  );
};

export default Setting;
