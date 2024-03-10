import React, { useState, useEffect } from "react";
import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb_2";
import HeaderOne from "@/src/layout/headers/header";
import HeaderTwo from "@/src/layout/headers/header_3_user";
import PostboxArea from "./postbox-area";
import Footer from "@/src/layout/footers/footer";
import firebase from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../firebaseConfig";

const auth = getAuth(app);

const Blog = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      });
    };

    checkLoginStatus();

    return () => {
      // Tidak perlu melakukan tindakan logout di sini karena komponen ini tidak mengakses fitur logout
    };
  }, []);

  return (
    <>
      {loggedIn ? <HeaderTwo /> : <HeaderOne />}
      <main>
        <Breadcrumb title="Berita" innertitle="Pusat Berita" />
        <PostboxArea />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
