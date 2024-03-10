import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb_3";
import Login from "./register";
import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header_2";

const Faq = () => {
  return (
    <>
    <HeaderTwo/>
    <Breadcrumb  title="Register" innertitle="Register"  />
    <Login/>
    <Footer />
    </>
  );
};

export default Faq;
