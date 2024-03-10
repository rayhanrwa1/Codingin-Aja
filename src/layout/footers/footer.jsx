import React, { useState } from 'react';
import SocialLinks, { CopyRight } from '@/src/common/social-links';

const Footer = ({ style_2 }) => {
    const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);

    const togglePrivacyPopup = () => {
        setShowPrivacyPopup(!showPrivacyPopup);
    };


    const footer_content = {
        about: "Tentang Kami",
        about_des: <> CodinginAja telah hadir sejak Mei 2023, membuka kelas-kelas sederhana yang dirancang untuk mengajarkan keterampilan coding dengan pendekatan yang mudah dipahami dan interaktif.   </>,
        get_in_touch: "Hubungi",
        // location: <>27 Division St, New York, <br /> NY 10002, USA</>,
        office_time: <>Senin – Jumat: 8.00 – 20.00 <br /> Sabtu – Minggu: 9.00 – 18.00</>,
        phone: <>+62 851 6172 4229 <br /></>,
        pages_title: "Halaman",
        pages: [
            { title: "Tentang Kami", link: "/about" },
            { title: "Pendiri", link: "/team" },
            { title: "Berita", link: "/news" },
            { title: "Karier", link: "/careers" },
        ]
    };

    const { about, about_des, get_in_touch, location, office_time, phone, pages_title, pages } = footer_content;

    return (
        <>
            <footer>
                {/* Konten footer lainnya di sini */}
                <div className={`footer-widget-area pt-90 pb-50 ${style_2 ? "footer-area-white" : "footer-bg "}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className={`${style_2 ? "footer-widget-2" : "footer-widget"} footer-col-1 mb-50`}>
                                    <h3 className="footer-widget-title">{about}</h3>
                                    <p>{about_des}</p>
                                    {style_2 && <a className="footer-link" href="#">Get Started Now <i className="far fa-long-arrow-alt-right"></i></a>}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className={`${style_2 ? "footer-widget-2" : "footer-widget"} footer-col-2 mb-50`}>
                                    <h3 className="footer-widget-title">{get_in_touch}</h3>
                                    <div className="footer-contact">
                                        <div className="footer-contact-item">
                                            <p>{location}</p>
                                        </div>
                                        <div className="footer-contact-item">
                                            <p>{office_time}</p>
                                        </div>
                                        <div className="footer-contact-item">
                                            <p>{phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className={`footer-widget ${style_2 ? "footer-widget-2" : ""} footer-col-3 mb-50`}>
                                    <h3 className="footer-widget-title">{pages_title}</h3>
                                    <ul>
                                        {pages.map((item, i) =>
                                            <li key={i}><a href={item.link}>{item.title}</a></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className={`footer-widget ${style_2 ? "footer-widget-2 footer-col-3" : "footer-col-4"} mb-50`}>
                                    <h3 className="footer-widget-title">Dapatkan Pembaruan</h3>
                                    <p>Dapatkan petunjuk, kiat & berita produk terbaru</p>
                                    <div className="footer-subscribe">
                                        <form onSubmit={e => e.preventDefault()}>
                                            <input type="email" placeholder="Surel" />
                                            <button type="submit"> <i className="far fa-envelope-open"></i></button>
                                        </form>
                                    </div>
                                    <div className="footer-social mt-20">
                                        <SocialLinks />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bagian Copyright dan Menu Footer */}
                <div className="copyright-area theme-bg pt-20 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 text-lg-start col-12 text-center">
                                <div className="copyright-text">
                                    <p><CopyRight /> </p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 text-lg-end col-12 text-center">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a  href="/privacy">Pusat Privasi</a></li>
                                        <li><a href="/terms_and_use">Syarat dan Ketentuan</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
