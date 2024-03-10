import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../auth"; // Sesuaikan dengan struktur direktori Anda

import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Register from "../components/account/register";

const RegisterPage = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuth(); // Gunakan hook autentikasi untuk mendapatkan status login

  useEffect(() => {
    // Jika pengguna sudah login, alihkan mereka ke halaman lain
    if (isLoggedIn) {
      router.replace("/404"); // Ganti '/dashboard' dengan rute halaman dashboard
    }
  }, [isLoggedIn]);

  return (
    <Wrapper>
      <SEO pageTitle={"Register"} />
      <Register/>
    </Wrapper>
  );
};

export default RegisterPage;
