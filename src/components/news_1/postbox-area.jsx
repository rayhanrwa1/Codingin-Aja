import SidebarSearch from '@/src/forms/sidebar-search';
import VideoPopup from '@/src/modals/video-popup';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import RecentPost from './recent-post';
import Category from './category';
import Tags from './tags';


const postbox_content = {
    post_data : [
        {
            id: 1, 
            img: "/assets/img/news/blog-details.svg",
            video: false,
            imgSlider: false,
            date: "10 Juli 2024",
            title: <>CodinginAja Resmi Diluncurkan: Platform Digital untuk Memperkuat Kemampuan Coding Anda</>,
            description: <>
            CodinginAja Resmi Diluncurkan: Platform Digital untuk Memperkuat Kemampuan Coding Anda
            Jakarta, 10 Juli 2024 – CodinginAja, platform digital yang berfokus pada pemberdayaan individu melalui keahlian coding, hari ini mengumumkan peluncuran resminya.</>,
            link: "/peluncuran"
        },
    ],
}

const setting = {
    slidesToShow: 1,
    fade:false,
    arrows: false, 
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
            }
        }
    ]
}


const PostboxArea = () => {
    const sliderRef = useRef(null);
    const [isVideoOpen,setIsVideoOpen] = useState(false);

    return (
        <>
            <section className="postbox__area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="postbox__wrapper pr-20">
                                {postbox_content.post_data.map((item, i) => 
                                    <article key={i} className="postbox__item format-image mb-50 transition-3">
                                        {item.img && 
                                            <div className="postbox__thumb w-img">
                                                <Link href={item.link}>
                                                    <img src={item.img} alt="theme-pure" />
                                                </Link>
                                            </div>
                                        }
                                        {item.imgSlider && 
                                        <div className="postbox__thumb postbox__slider w-img p-relative">
                                            <div className="swiper-wrapper blog-slider-active">
                                                <button onClick={() => sliderRef.current?.slickPrev()} type="button" className="slick-prev slick-arrow"><i className="far fa-long-arrow-left"></i></button>
                                                <button onClick={() => sliderRef.current?.slickNext()} type="button" className="slick-next slick-arrow"><i className="far fa-long-arrow-right"></i></button>
                                                <Slider {...setting} ref={sliderRef}>
                                                    {item.imgSlider?.map((img, i) => 
                                                        <div key={i} className="postbox__slider-item">
                                                            <img src={img} alt="theme-pure" />
                                                        </div>
                                                    )}
                                                </Slider> 
                                            </div>
                                        </div>
                                        }
                                        <div className="postbox__content">
                                            <div className="postbox__meta">
                                                <span><i className="far fa-calendar-check"></i>{item.date}</span>
                                            </div>
                                            <h3 className="postbox__title">
                                                <Link href={item.link}>{item.title}</Link>
                                            </h3>
                                            <div className="postbox__text">
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="post__button">
                                                <Link className="tp-btn" href={item.link}>Baca Selengkapnya</Link>
                                            </div>
                                        </div>
                                    </article>    
                                )}  
                        
                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="sidebar__wrapper"> 
                                <SidebarSearch /> 
                                <RecentPost />  
                                <Tags /> 
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default PostboxArea;
