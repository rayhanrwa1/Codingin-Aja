import CallToAction from '@/src/forms/call-to-action';
import React from 'react';


const portfolio_content = {

    title: "Pusat Bantuan Platform ",

    // over-veiw-list
    over_veiw_list: [
        {id: 1, li: "Panduan: Temukan panduan langkah demi langkah untuk berbagai fitur dan fungsi platform Codingin Aja."},
        {id: 2, li: "FAQ: Temukan jawaban atas pertanyaan yang paling sering diajukan tentang platform Codingin Aja."},
        {id: 3, li :"Pemecahan Masalah: Temukan solusi untuk berbagai masalah yang mungkin Anda temui saat menggunakan platform Codingin Aja."},
        {id: 4, li :"Komunitas: Bergabunglah dengan komunitas Codingin Aja untuk mendapatkan bantuan dari pengguna lain dan tim Codingin Aja."},
    ],

    overview: <>Kebijakan Bantun ini terakhir diperbarui pada 16 Mei 2024.</>,

    bottom_info_title: "Apa yang dapat Anda temukan di sini?",
    bottom_info_title_2: "FAQ",

    product_details: [
        {id: 3, info: "Tanggal : ", details: "16 Mei 2024"},
    ],

    materials: [
        {id: 1, icon: "fas fa-file-pdf", title: "Pusat Bantuan"},
    ],
    materials1: [
        {id: 2, icon: "fas fa-headset", title: "Hubungi CS Kami"},
    ]

}
const { title, des_1, des_7, over_veiw_list, overview, bottom_info_title, bottom_info_title_7, product_details, materials, materials1} = portfolio_content

const handlePrint = () => {
    window.print(); // Fungsi print bawaan dari browser
};
const privacy_content  = () => {
    return (
        <>
           <div className="tp-service-details-area pt-115">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                        <div className="tp-service-overveiw-area mr-20" style={{ textAlign: 'justify' }}>
                            <div className="tp-overview-details">
                                <h2 className="overview-title">{title}</h2>
                                <h4>{bottom_info_title}</h4>
                                    <ul style={{ listStyleType: 'disc' }}>
                                        {over_veiw_list.map(item => (
                                            <li key={item.id}><span>&#9679;</span>{item.li}</li>
                                        ))}
                                    </ul>
                                <div className="tp-overview-fea-list">
                                    <div className="tp-bottom-info pt-20" style={{ textAlign: 'justify' }}>
                                    <h4>{bottom_info_title_7}</h4>
                                    <p>{des_7}</p>
                                    </div>
                                    <p>{overview}</p>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-xl-3">

                        <div className="tp-sidebar-widget mb-50">
                            <div className="tp-widget-category">
                                <h4 className="tp-widget-title">Terakhir diperbarui</h4>
                                <ul> 
                                    {product_details.map((item, i) => 
                                        <li key={i}><a href="#"><span>{item.info}</span> {item.details}</a></li>
                                    )} 
                                </ul>
                            </div>
                        </div>

                        <div className="tp-sidebar-widget pt-50">
                            <h4 className="tp-widget-title"></h4>
                            <div className="tp-widget-item-2">
                                <ul>
                                {materials.map((item, i) => (
                                <li key={i}>
                                    <a href="#" onClick={handlePrint}>
                                        <span><i className={item.icon}></i> {item.title}</span>
                                    </a>
                                </li>
                            ))}
                                </ul>
                                <ul>
                                {materials1.map((item, i) => (
                                <li key={i}>
                                    <a href="#">
                                        <span><i className={item.icon}></i>{item.title}</span>
                                    </a>
                                </li>
                            ))}
                                </ul>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default privacy_content ;