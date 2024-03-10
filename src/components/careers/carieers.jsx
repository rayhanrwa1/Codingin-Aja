import CallToAction from '@/src/forms/call-to-action';
import React from 'react';


const portfolio_content = {

    title: "Pusat Karier ",
    
    des_0:<>CodinginAja berkomitmen untuk membangun talenta teknologi masa depan melalui berbagai peluang karir yang menarik. Kami percaya bahwa dengan membangun tim yang kuat dan berdedikasi, kami dapat memberikan edukasi coding yang berkualitas dan terjangkau bagi semua orang di Indonesia.</>,
    des_0_1:<></>,
    des_1: <>Pendaftaran Belum Tersedia</>,
    des_2: <>Kirimkan CV dan surat lamaran Anda ke [] dengan subjek "Lamaran Kerja - [Posisi yang Diinginkan]". Pastikan untuk menyertakan portofolio Anda dan jelaskan mengapa Anda tertarik untuk bergabung dengan CodinginAja.</>,
    des_3: <>Platform ini memungkinkan Anda untuk mengirimkan konten, termasuk komentar, posting forum, dan materi lainnya. Anda bertanggung jawab atas semua Konten Pengguna yang Anda kirimkan. Anda menjamin bahwa Anda memiliki hak untuk mengirimkan Konten Pengguna dan bahwa Konten Pengguna tersebut tidak melanggar hak pihak ketiga mana pun. Anda setuju untuk tidak mengirimkan Konten Pengguna yang melanggar hukum, tidak senonoh, mengancam, atau menyinggung.</>,
   

    // over-veiw-list
    over_veiw_list: [
        {id: 1, li: "Dampak yang Signifikan: Berkontribusi dalam meningkatkan literasi digital dan talenta teknologi di Indonesia."},
        {id: 2, li: "Lingkungan yang Dinamis dan Inovatif: Bekerja dengan tim muda yang kreatif dan bersemangat untuk menciptakan solusi pembelajaran yang inovatif."},
        {id: 3, li :"Peluang Pertumbuhan yang Berkelanjutan: Dapatkan pelatihan dan pengembangan yang komprehensif untuk mengembangkan karir Anda di bidang teknologi."},
        {id: 4, li :"Budaya yang Mendukung dan Kolaboratif: Bekerja sama dalam tim yang kompak dan saling mendukung untuk mencapai tujuan bersama."},
        {id: 5, li :"Kompensasi dan Manfaat yang Kompetitif: Dapatkan gaji yang kompetitif, tunjangan kesehatan, dan berbagai benefit lainnya."},
    ],
    over_veiw_list_2: [
        {id: 1, li: "Kunjungi situs web kami untuk informasi lebih lanjut tentang perusahaan dan platform kami"},
        {id: 2, li: "Ikuti media sosial CodinginAja untuk mendapatkan update terbaru tentang karir dan acara kami."},
    ],

    overview: <>Pusat Karier ini terakhir diperbarui pada 13 Maret 2024. <br /> Terima kasih atas minat Anda pada CodinginAja!</>,

    bottom_info_title: "Mengapa Bergabung dengan CodinginAja?",
    bottom_info_title_2: "Posisi yang Tersedia:",
    bottom_info_title_3: "Bagaimana Cara Mendaftar?",
    bottom_info_title_4: "Informasi Tambahan:",

    product_details: [
        {id: 1, info: "Tanggal : ", details: "13 Maret 2024"},
    ],

    materials: [
        {id: 1, icon: "fas fa-file-pdf", title: "Pusat Karier"},
    ],

    
    register_job: [
        {id: 1, info: "Pendaftaran Belum Tersedia ", details: "(Link Pendaftaran akan ditampilkan disini jika pendaftran dibuka)"},
    ],

}
const { title, des_0, des_1, over_veiw_list, over_veiw_list_2, overview, bottom_info_title, bottom_info_title_2, bottom_info_title_3, bottom_info_title_4, product_details, register_job, materials} = portfolio_content

const handlePrint = () => {
    window.print(); 
};
const terms_content  = () => {
    return (
        <>
           <div className="tp-service-details-area pt-115 pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                        <div className="tp-service-overveiw-area mr-20" style={{ textAlign: 'justify' }}>
                            <div className="tp-overview-details">
                                <h2 className="overview-title">{title}</h2>
                                <p>{des_0}</p>
                                <h4>{bottom_info_title}</h4>
                                <ul style={{ listStyleType: 'disc' }}>
                                        {over_veiw_list.map(item => (
                                            <li key={item.id}><span>&#9679;</span> {item.li}</li>
                                        ))}
                                </ul>
                                <div className="tp-overview-fea-list">
                                    <div className="tp-bottom-info pt-20" style={{ textAlign: 'justify' }}>
                                    <h4>{bottom_info_title_2}</h4>
                                    <p>{des_1}</p>
                                    </div>
                                </div>
                                <div className="tp-overview-fea-list">
                                    <div className="tp-bottom-info pt-20" style={{ textAlign: 'justify' }}>
                                    <h4>{bottom_info_title_3}</h4>
                                    <p>{des_1}</p>
                                    </div>
                                </div>
                                <div className="tp-overview-fea-list">
                                    <div className="tp-bottom-info pt-20" style={{ textAlign: 'justify' }}>
                                    <h4>{bottom_info_title_4}</h4>
                                    <ul style={{ listStyleType: 'disc' }}>
                                        {over_veiw_list_2.map(item => (
                                            <li key={item.id}><span>&#9679;</span> {item.li}</li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                                <p>{overview}</p>
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

                        <div className="tp-sidebar-widget pt-10">
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
                        <div className="tp-sidebar-widget mb-50">
                            <div className="tp-widget-category">
                                <h4 className="tp-widget-title">Karier</h4>
                                <ul> 
                                    {register_job.map((item, i) => 
                                        <li key={i}><a href="#"><span>{item.info}</span> {item.details}</a></li>
                                    )} 
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

export default terms_content ;