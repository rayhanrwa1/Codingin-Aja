import CommentForm from '@/src/forms/comment-form';
import React, { useState, useEffect } from 'react';
import SidebarSearch from '@/src/forms/sidebar-search';
import RecentPost from '../news_1/recent-post';
import Tags from '../news_1/tags';



const post_content = {
    des_1: <>Malang, 10 Juli 2024 – CodinginAja, platform digital yang berfokus pada pemberdayaan individu melalui keahlian coding, hari ini mengumumkan peluncuran resminya. Platform ini menawarkan berbagai program belajar coding yang dirancang untuk membantu semua orang, dari pemula hingga profesional, untuk memperkuat kemampuan coding mereka.</>,
    img: "/assets/img/news/blog-details-1.svg",
    title: "CodinginAja Resmi Diluncurkan",
    list_1: [
        {id: 1, li: "Kurikulum yang terstruktur dan komprehensif: CodinginAja menyediakan berbagai program belajar coding yang dirancang untuk memenuhi kebutuhan semua tingkatan. Kurikulumnya dibuat oleh para ahli coding dan diperbarui secara berkala untuk memastikan bahwa pengguna mempelajari keterampilan coding yang paling dibutuhkan di industri saat ini."},
        {id: 2, li: "Metode pembelajaran yang inovatif: CodinginAja menggunakan berbagai metode pembelajaran yang inovatif, seperti video pembelajaran interaktif, kuis, dan proyek coding, untuk membuat belajar coding menjadi mudah dan menyenangkan."},
        {id: 3, li :"Instruktur yang berpengalaman dan profesional: CodinginAja memiliki tim instruktur yang berpengalaman dan profesional yang berdedikasi untuk membantu pengguna mencapai tujuan belajar mereka."},
        {id: 4, li :"Komunitas coding yang aktif dan suportif: CodinginAja menyediakan komunitas online bagi para penggunanya untuk saling belajar, berbagi pengalaman, dan membangun jaringan profesional."},
    ],
    des_2: <>CodinginAja didirikan pada Mei 2023 dengan visi untuk membuat pembelajaran coding mudah diakses dan menyenangkan bagi semua orang. Platform ini menawarkan berbagai fitur yang menarik, seperti:</>,
    des_3: <>“Kami sangat senang meluncurkan CodinginAja dan membantu orang-orang di Indonesia untuk memperkuat kemampuan coding mereka,” kata Rayhan Rizky Widi Ananta, CEO CodinginAja. “Kami percaya bahwa coding adalah keahlian penting di era digital ini, dan kami ingin membantu semua orang untuk mendapatkan akses ke pendidikan coding yang berkualitas.”</>,    
    des_4: <>“Kami ingin membuat pembelajaran coding mudah diakses oleh semua orang,” kata Rahmat Fadilah. “Kami percaya bahwa semua orang memiliki potensi untuk menjadi ahli coding, dan kami ingin membantu mereka mencapai potensi tersebut.”</>,    
};

const PostboxArea = () => {


    return (
        <>
            <div className="postbox__area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8">
                            <div className="postbox__wrapper pr-20">
                                <article className="postbox__item format-image mb-50 transition-3">
                                    <div className="postbox__content">
                                        <div className="postbox__meta">
                                            <span><i className="far fa-calendar-check"></i> 10 Juli 2024 </span>
                                        </div>
                                        <h3 className="postbox__title">
                                            CodinginAja Resmi Diluncurkan: Platform Digital untuk Memperkuat Kemampuan Coding Anda
                                        </h3>
                                        <div className="postbox__text">
                                            <p>{post_content.des_1}</p>        
                                            <p><img src={post_content.img} alt="theme-pure" /></p>    
                                            <h3>{post_content.title}</h3>    
                                            <p>{post_content.des_2}</p> 
                                            <ul style={{ listStyleType: 'disc' }}>
                                                {post_content.list_1.map(item => (
                                                    <li key={item.id}><span>&#9679;</span> {item.li}</li>
                                                ))}
                                            </ul>  
                                        </div>
                                        <div className="postbox__text pt-30">
                                            <p>{post_content.des_3}</p>
                                        </div>
                                        <div className="postbox__text pt-30">
                                            <p>{post_content.des_4}</p>
                                        </div>
                                    </div>
                                </article>

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
            </div>
        </>
    );
};

export default PostboxArea;
