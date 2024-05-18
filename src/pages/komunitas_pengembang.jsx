import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import KomunitasPengembang from "../components/Komunitas/pengembang";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Pengembang"} />
      <KomunitasPengembang />
    </Wrapper>
  );
};

export default index;
