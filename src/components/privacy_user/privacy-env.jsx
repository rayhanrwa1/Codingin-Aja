import CallToAction from '@/src/forms/call-to-action';
import React from 'react';


const portfolio_content = {

    title: "Pusat Privasi",

    des_1: <> CodinginAja adalah platform pembelajaran coding digital yang didirikan pada Februari 2023. Kami menyediakan kelas e-learning dan kelas mentoring untuk membantu individu memperkuat kemampuan coding mereka. Misi kami adalah untuk memberdayakan individu melalui teknologi dengan menyediakan akses ke pendidikan coding yang berkualitas dan terjangkau.</>,
    des_2: <>Kebijakan Privasi ini menjelaskan bagaimana CodinginAja mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda. Kebijakan ini berlaku untuk semua pengguna platform CodinginAja, termasuk situs web dan layanan lainnya.</>,
    des_3: <>Kami mengumpulkan informasi pribadi dari Anda ketika Anda mendaftar untuk akun CodinginAja, menggunakan platform kami, atau berkomunikasi dengan kami. Informasi ini dapat meliputi:</>,
    des_4: <>Kami menggunakan informasi Anda untuk:</>,
    des_5: <>Kami tidak akan membagikan informasi pribadi Anda dengan pihak ketiga tanpa persetujuan Anda. Kami hanya akan membagikan informasi Anda dengan pihak ketiga dalam keadaan berikut:</>,
    des_6: <>CodinginAja berkomitmen untuk melindungi keamanan data Anda. Kami menggunakan berbagai langkah-langkah keamanan untuk melindungi informasi Anda dari akses yang tidak sah, penggunaan, atau pengungkapan.</>,
    des_7: <>Anda memiliki hak untuk mengakses, memperbaiki, menghapus, dan membatasi pemrosesan informasi pribadi Anda. Anda juga memiliki hak untuk menolak pemrosesan informasi Anda dan untuk meminta portabilitas data Anda.</>,
    

    // over-veiw-list
    over_veiw_list: [
        {id: 1, li: "Nama"},
        {id: 2, li: "Alamat email"},
        {id: 3, li :"Nomor telepon"},
        {id: 4, li :"Kata sandi"},
        {id: 5, li :"Informasi pembayaran"},
        {id: 6, li :"Riwayat pembelajaran"},
        {id: 7, li :"Interaksi Anda dengan platform kami"},
    ],
    over_veiw_list_2: [
        {id: 1, li: "Memberikan Anda akses ke platform kami"},
        {id: 2, li: "Mengelola akun Anda"},
        {id: 3, li :"Meningkatkan pengalaman belajar Anda"},
        {id: 4, li :"Mengirimkan komunikasi yang relevan kepada Anda"},
        {id: 5, li :"Melacak kemajuan Anda"},
        {id: 6, li :"Melakukan penelitian dan pengembangan"},
        {id: 7, li :"Meningkatkan keamanan platform kami"},
    ],
    over_veiw_list_3: [
        {id: 1, li: "Ketika diwajibkan oleh hukum"},
        {id: 2, li: "Untuk melindungi hak-hak kami"},
        {id: 3, li :"Untuk menyediakan layanan kepada Anda"},
        {id: 4, li :"Untuk bekerja sama dengan mitra tepercaya"},
    ],
    overview: <>Kebijakan Privasi ini terakhir diperbarui pada 12 Maret 2024.</>,

    bottom_info_title: "Tentang Kami",
    bottom_info_title_2: "Kebijakan Privasi",
    bottom_info_title_3: "Informasi yang Kami Kumpulkan",
    bottom_info_title_4: "Bagaimana Kami Menggunakan Informasi Anda",
    bottom_info_title_5: "Bagaimana Kami Membagikan Informasi Anda",
    bottom_info_title_6: "Keamanan Data",
    bottom_info_title_7: "Hak Anda",

    product_details: [
        {id: 3, info: "Tanggal : ", details: "12 Maret 2024"},
    ],

    materials: [
        {id: 1, icon: "fas fa-file-pdf", title: "Pusat Privasi"},
    ]

}
const { title, des_1, des_2, des_3, des_4, des_5 ,des_6, des_7, over_veiw_list,over_veiw_list_2,over_veiw_list_3, overview, bottom_info_title, bottom_info_title_2, bottom_info_title_3, bottom_info_title_4, bottom_info_title_5, bottom_info_title_6, bottom_info_title_7, product_details, materials} = portfolio_content

const handlePrint = () => {
    window.print(); // Fungsi print bawaan dari browser
};
const privacy_content  = () => {
    return (
        <>
           <div className="tp-service-details-area pt-115 pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                        <div className="tp-service-overveiw-area mr-20" style={{ textAlign: 'justify' }}>
                            <div className="tp-overview-details">
                                <h2 className="overview-title">{title}</h2>
                                <h4>{bottom_info_title}</h4>
                                <p>{des_1}</p>
                                <div className="tp-overview-fea-list">
                                    <div className="tp-bottom-info pt-20" style={{ textAlign: 'justify' }}>
                                    <h4>{bottom_info_title_2}</h4>
                                    <p>{des_2}</p>
                                    </div>
                                </div>
                                <div className="tp-overview-fea-list">
                                    <div className="tp-bottom-info pt-20" style={{ textAlign: 'justify' }}>
                                    <h4>{bottom_info_title_3}</h4>
                                    <p>{des_3}</p>
                                    <ul style={{ listStyleType: 'disc' }}>
                                        {over_veiw_list.map(item => (
                                            <li key={item.id}><span>&#9679;</span> {item.li}</li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                                <div className="tp-overview-fea-list">
                                    <div className="tp-bottom-info pt-20">
                                    <h4>{bottom_info_title_4}</h4>
                                    <p>{des_4}</p>
                                    <ul style={{ listStyleType: 'disc' }}>
                                        {over_veiw_list_2.map(item => (
                                            <li key={item.id}><span>&#9679;</span> {item.li}</li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                                <div className="tp-overview-fea-list">
                                    <div className="tp-bottom-info pt-20" style={{ textAlign: 'justify' }}>
                                    <h4>{bottom_info_title_5}</h4>
                                    <p>{des_5}</p>
                                    <ul style={{ listStyleType: 'disc' }}>
                                        {over_veiw_list_3.map(item => (
                                            <li key={item.id}><span>&#9679;</span> {item.li}</li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                                <div className="tp-overview-fea-list">
                                    <div className="tp-bottom-info pt-20" style={{ textAlign: 'justify' }}>
                                    <h4>{bottom_info_title_6}</h4>
                                    <p>{des_6}</p>
                                    </div>
                                </div>
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