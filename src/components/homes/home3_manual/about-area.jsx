import Link from 'next/link';
import React from 'react';

const AboutArea = () => {
    return (
        <>
        <div className="tp-about-area pt-120 pb-80">
      <div className="container">
         <div className="row">
            <div className="col-xl-6 col-lg-5">
               <div className="tp-about-wapper p-relative">
                  <div className="tp-about-thumb p-relative pt-60 mb-40">
                     <img className="ab-lg ml-80" src="/assets/img/about/ab-large.svg" alt="theme-pure" />
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-7">
               <div className="tp-about-wrapper pt-50 pl-35 mb-40">
                  <div className="tp-section-box p-relative">
                     <h3 className="tp-big-text">Tentang</h3>
                     <span className="tp-section-subtitle d-inline-block mb-10">Tentang Kami</span>
                     <h2 className="tp-section-title mb-30">
                        
                     </h2>
                     <p>
                     Kami dengan bangga mempersembahkan startup kami, CodinginAja, sebagai mitra yang andal dalam memperkuat kemampuan coding Anda. Berawal dari visi kami untuk memberdayakan individu melalui teknologi, CodinginAja telah hadir sejak Mei 2023,
                     membuka kelas-kelas sederhana yang dirancang untuk mengajarkan keterampilan coding dengan pendekatan yang mudah dipahami dan interaktif.</p>
                  </div>
                  <hr className="mt-25 mb-30" />
                  <div className="tp-ab-meta">
                     <div className="about-meta-img d-flex">
                        <div className="ab-meta-img d-none d-md-block">
                           <img src="/assets/img/about/ab-meta.svg" alt="theme-pure" />
                        </div>
                        <div className="tp-ab-meta-text pl-30">
                           <h4>Pada Mei 2023, CodinginAja memulai perjalanannya dengan kelas sederhana. Pada Februari 2024, kami telah menjadi salah satu pilihan utama untuk pembelajaran coding di Indonesia.</h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>            
        </>
    );
};

export default AboutArea;