import React, { useState, useEffect } from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Profil from "../components/account/create-profil";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Konstanta untuk path gambar
  const imagePath = "../../public/assets/video/1.gif";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Clear timeout if component unmounts before 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle={"Create Profil"} />
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%", // Sesuaikan dengan lebar video
            height: "50%" // Sesuaikan dengan proporsi asli video
          }}
        >
          {/* Gunakan konstanta imagePath */}
          <img src={imagePath} alt="" />
        </div>
      ) : (
        <Profil />
      )}
    </Wrapper>
  );
};

export default Index;
