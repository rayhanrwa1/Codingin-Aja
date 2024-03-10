import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb_3";
import Login from "./login"
import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header_2";

const Faq = () => {
  return (
    <>
    <HeaderTwo/>
    <Breadcrumb  title="Login" innertitle="Login"  />
    <Login/>
    <Footer />
    </>
  );
};

export default Faq;
