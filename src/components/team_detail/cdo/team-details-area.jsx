import Link from 'next/link';
import React from 'react';


const team_details_conten = {
    img: "/assets/img/team/Laras-CDO-Detail.svg",
    subtitle: "Co-Founder & Chief Data Officer",
    name: "Laras Suprapti",
    info : <>Dalam membangun bisnis sebaiknya didasarkan pada hal penting, yaitu data. Hal tersebut sangat diperlukan untuk meminimalisir kegagalan dalam pengambilan langkah. Pengambilan langkah yang tepat, tentunya akan memberikan dampak positif bagi pelaku bisnis dan juga pelanggan. </>,
    info_2 : <>CodinginAja akan selalu memastikan tingkat kepuasan pelanggan lebih dari 80%. Saya pastikan untuk terus memantau melalui analisis kepuasan pelanggan. Melalui data, CodinginAja akan selalu berusaha memberikan yang terbaik untuk semuanya.</>,

    phone_title: "Phone Number",
    phone_number: "(+62) 855-1181-835",

    email_title: "Email Address",
    email: "llaras919@gmail.com",

    office_location: "Virtual Office",
    address: "Karangploso, Malang, Jawa Timur",



}
const {img, subtitle, name, info, phone_title, phone_number, email_title, email, office_location, address, info_2}  = team_details_conten


const TeamDetailsArea = () => {
    return (
        <>
            <div className="team-details-area pt-120 pb-100">
                <div className="container">

                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                        <div className="team-member">
                            <img src={img} alt="theme-pure" />
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                        <div className="team-member-info pt-60">
                            <div className="tp-section-box tp-section-box-2 mb-40 p-relative">
                                <span className="tp-section-subtitle right d-inline-block">{subtitle}</span>
                                <h2 className="tp-section-title mb-20">{name}</h2>
                                <p>{info}</p>
                                <p className="mt-20">{info_2}</p>
                            </div>
                            <div className="tp-team-details-icon d-flex">
                                <div className="icon-area pr-20"><a href="#"><i className="fas fa-phone"></i></a></div>
                                <div className="team-contact-info">
                                    <label>{phone_title}</label>
                                    <a href={`tel:${phone_number}`}>{phone_number}</a>
                                </div>
                            </div>
                            <div className="tp-team-details-icon d-flex">
                                <div className="icon-area pr-20">
                                    <a href="#"><i className="fas fa-envelope"></i></a>
                                </div>
                                <div className="team-contact-info">
                                    <label>{email_title}</label>
                                    <a href={`mailto:${email}`}>{email}</a>
                                </div>
                            </div>
                            <div className="tp-team-details-icon d-flex">
                                <div className="icon-area pr-20"><a href="#"><i className="fas fa-map-marker-alt"></i></a></div>
                                <div className="team-contact-info">
                                    <label>{office_location}</label>
                                    <a href={`tel:${address}`}>{address}</a>
                                </div>
                            </div>
                            <Link className="tp-btn mt-15" href="https://www.linkedin.com/in/disyans/">
                                Hubungkan 
                                <i className="fal fa-long-arrow-right"></i>
                            </Link>
                        </div>
                        </div>
                        <hr className="mt-100 mb-100" />
                    </div>

                   
                </div>
            </div>            
        </>
    );
};

export default TeamDetailsArea;