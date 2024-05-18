import Link from 'next/link';
import React from 'react';


const team_details_conten = {
    img: "/assets/img/team/Rayhan-CEO-Detail.svg",
    subtitle: "Founder & Chief Executive Officer ",
    name: "Rayhan Rizky Widi Ananta",
    info : <>Bayangkan dunia di mana kemampuanmu untuk berkreasi tidak terbatas. Di mana kamu bisa membangun apa pun yang kamu inginkan, mulai dari website dan aplikasi hingga game dan robot. Di era digital ini, coding adalah kunci untuk membuka semua kemungkinan tersebut.</>,
    info_2 : <>CodinginAja hadir untuk membantu semua orang, dari anak-anak hingga orang dewasa, untuk menguasai keahlian coding yang esensial di era digital ini. Kami percaya bahwa setiap orang memiliki potensi untuk menjadi ahli coding, dan kami ingin membantu mereka mencapai potensi tersebut.</>,

    phone_title: "Phone Number",
    phone_number: "(+62) 851-6172-4229",

    email_title: "Email Address",
    email: "rayhanrwa1@gmail.com",

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
                            <Link className="tp-btn mt-15" href="https://www.linkedin.com/in/rayhan-rizky-widi-ananta-a30901255/">
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