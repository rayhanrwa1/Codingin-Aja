import HeaderOne from "@/src/layout/headers/header_3_user";
import React from "react";
import Privacy from "./privacy-env";
import Footer from "@/src/layout/footers/footer";

const privacy = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Privacy />
      </main>
      <Footer />
    </>
  );
};

export default privacy;
