import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({title="Setting" , innertitle="" }) => {
    return (
        <>
            <section className="breadcrumb__area include-bg pt-150 pb-150" 
                  style={{backgroundImage: `url(/assets/img/breadcrumb/ab-slider_developer.svg)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                        <div className="breadcrumb__content p-relative z-index-1">
                            <div className="breadcrumb__list">
                                <span><Link href="/">Beranda </Link></span>
                                <span className="dvdr"><i className="flaticon-arrow-right"></i></span>
                                <span>{title}</span>
                            </div>
                            <h3 className="breadcrumb__title">{innertitle}</h3>
                        </div>
                        </div>
                    </div>
                </div>
            </section>            
        </>
    );
};

export default Breadcrumb;