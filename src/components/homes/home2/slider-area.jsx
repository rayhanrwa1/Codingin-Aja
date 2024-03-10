import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

const setting = {
  fade: true,
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
      },
    },
  ],
};

const slider_data = [
  {
    id: 1,
    col: "col-xxl-6 col-xl-7 col-lg-8",
    cls: "tp-slider-overlay tp-slider-height",
    bg_img: "/assets/img/slider/banner.jpg",
    sub_title: "Inovasi dengan Codingin Aja",
    title: "Kelas E-Learning",
    info: (
      <>
      Platform kami menyediakan kelas e-learning yang memungkinkan siswa untuk belajar secara mandiri melalui video pembelajaran serta menjawab ujian dan kuis. Selain itu, setelah berhasil menyelesaikan ujian dan kuis dengan baik, siswa akan mendapatkan sertifikasi atau pengakuan atas pencapaian mereka.
      </>
    ),
    slider_service_par: "100",
    slider_service_title: (
      <>
        <b>Mentoring</b> <br /> Setiap Minggu
      </>
    ),
  },
  {
    id: 2,
    col: "col-xl-6",
    cls: "tp-slider-height tp-slider-overlay",
    bg_img: "/assets/img/slider/sl-3.jpg",
    sub_title: "Inovasi dengan Codingin Aja",
    title: "Kelas Online",
    info: (
      <>   
      Platform kami menyediakan kelas online yang memungkinkan siswa untuk belajar dengan bimbingan langsung dari mentor melalui sesi video. Siswa akan diajarkan melalui interaksi langsung dengan mentor, serta memiliki kesempatan untuk menjawab ujian dan kuis sebagai bagian dari evaluasi pembelajaran. Setelah berhasil menyelesaikan kelas dan memenuhi persyaratan, siswa akan diberikan sertifikat sebagai pengakuan atas pencapaian mereka dalam program tersebut.
      </>
    ),
    slider_service_par: "100",
    slider_service_title: (
      <>
        <b>Mentoring</b> <br /> Setiap Minggu
      </>
    ),
  },
];

const SliderArea = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <div className="tp-slider-area">
        <div className="slider-active  slider-arrow-style p-relative">
          <Slider {...setting} ref={sliderRef}>
            {slider_data.map((item, i) => (
              <div key={i}>
                <div className="tp-slider-item tp-slider-overlay tp-slider-height d-flex align-items-center" 
                  style={{ backgroundImage: `url(${item.bg_img})`}} >
                  <div className="container">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-7 col-lg-8">
                        <div className="tp-slider-content">
                          <span className="tp-slider-sub-title"> {item.sub_title} </span>
                          <h2 className="tp-slider-title"> {item.title} </h2>
                          <p> {item.info} </p>
                          <div className="tp-slide-btn-box mt-40">
                            <div className="tp-slide-service mr-30">
                              <h4>{item.slider_service_par}%</h4>
                              <span> {item.slider_service_title} </span>
                            </div>
                            <div className="slider-btn">
                              <Link href="/" className="tp-btn-white" >
                                Pelajari Selengkapnya
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderArea;
