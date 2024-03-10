import Link from 'next/link';
import React from 'react';


const about_content = {
    img: "/assets/img/about/about-hm.svg",
    about_title: "Tentang Kami",
    post : <>Dengan bangga kami perkenalkan CodinginAja, startup yang berfokus untuk menjadi mitra tepercaya Anda dalam memperkuat kemampuan coding. Berawal dari visi kami untuk memberdayakan individu melalui teknologi, CodinginAja hadir sejak Mei 2023 dengan membuka kelas-kelas sederhana yang dirancang untuk mengajarkan keterampilan coding dengan pendekatan yang mudah dipahami dan interaktif.</>,
    post_2:<>Meskipun tergolong baru, CodinginAja telah berkembang pesat dalam waktu singkat. Dimulai dari kelas sederhana pada Mei 2023, kini di Februari 2024, CodinginAja telah menjadi salah satu pilihan utama untuk pembelajaran coding di Indonesia.</>,
    post_3:<>Misi kami adalah untuk:</>,
    de_post: <>Perjalanan Singkat yang Bermakna</>,
    de_post_2: <>Misi Kami</>,

    list: [
        {id: 1, li: "Memberdayakan individu dengan memberikan akses yang mudah dan terjangkau untuk belajar coding."},
        {id: 2, li: "Meningkatkan literasi digital di Indonesia dengan menyediakan konten edukasi coding yang berkualitas."},
        {id: 3, li :"Membangun komunitas coding yang inklusif dan kolaboratif."},
    ],

}  
const {img, about_title,  post, post_2, de_post, de_post_2, post_3, list }  = about_content


const AboutArea = () => {
    return (
        <>
           <div className="tp-about-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                        <div className="ab-wrapper-4 p-relative">
                            <div className="ab-right-img">
                                <img src={img} alt="theme-pure" />
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                        <div className="tp-about-info-wrapper pl-50">
                            <div className="tp-section-box tp-section-box-2  p-relative">
                                <h2 className="tp-section-title mb-10">
                                   {about_title}
                                </h2>
                            </div>
                            <hr className="mt-5 mb-10" />
                            <div className="tp-ab-meta">
                                <div className="about-meta-img d-flex">
                                    <div className="tp-ab-meta-text pl-10" style={{ textAlign: 'justify' }}>
                                    <p>{post}</p>
                                    </div>
                                </div>
                                <div className="about-meta-img d-flex">
                                    <div className="tp-ab-meta-text pl-10 pt-10" style={{ textAlign: 'justify' }}>
                                    <h3>{de_post}</h3>
                                    <p>{post_2}</p>
                                    </div>
                                </div>
                                <div className="about-meta-img d-flex">
                                    <div className="tp-ab-meta-text pl-10 pt-10" style={{ textAlign: 'justify' }}>
                                    <h3>{de_post_2}</h3>
                                    <p>{post_3}</p>
                                    <ul style={{ listStyleType: 'disc' }}>
                                        {list.map(item => (
                                            <li key={item.id}><span>&#9679;</span> {item.li}</li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-30 mb-35" />
                            <div className="tp-ab-4-list">
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