import React from 'react';


const portfolio_content = {

    title: "Ketentuan Pengembang dan Proyek Siswa",

    des_1: <>Codinginaja dengan bangga mendukung para pengembang muda dalam mengembangkan proyek mereka. Kami menyediakan platform yang memungkinkan para pengembang untuk menjelajahi, belajar, dan berkontribusi pada dunia teknologi.</>,
    des_2: <>Berikut beberapa ketentuan bagi pengembang dan proyek siswa yang ingin dimasukkan ke dalam portofolio prestasi Codinginaja:</>,
    des_3: <>Proyek yang memenuhi ketentuan di atas akan ditinjau oleh tim Codinginaja.</>,
    des_4: <>Proyek yang disetujui akan ditampilkan di portofolio prestasi Codinginaja dan dapat digunakan untuk:</>,
    des_5: <>Codinginaja berkomitmen untuk mendukung para pengembang muda dalam mencapai potensi mereka.</>,



    // over-veiw-list
    over_veiw_list: [
        {id: 1, li: " Harus terdaftar sebagai anggota Pusat Pengembang Codinginaja."},
        {id: 2, li: " Memiliki akun GitHub dan/atau GitLab."},
        {id: 3, li: " Mampu mengikuti panduan gaya dan standar coding Codinginaja."},
        {id: 4, li: " Bersedia untuk berkontribusi secara aktif dalam komunitas Codinginaja."},
    ],
    over_veiw_list_2: [
        {id: 1, li: " Harus merupakan proyek original yang dibuat oleh siswa."},
        {id: 2, li: " Harus memiliki kode yang bersih dan terdokumentasi dengan baik."},
        {id: 3, li :" Harus menunjukkan kreativitas dan inovasi."},
        {id: 4, li :" Harus bermanfaat bagi komunitas Codinginaja."},
    ],
    over_veiw_list_3: [
        {id: 1, li: " Menarik perhatian calon pemberi kerja."},
        {id: 2, li: " Membangun kredibilitas sebagai pengembang."},
        {id: 3, li :" Mendapatkan kesempatan untuk berkolaborasi dengan pengembang lain."},
    ],

    bottom_info_title: "Pengembang:",
    bottom_info_title_2: "Proyek Siswa:",
    bottom_info_title_3: "Daftar sekarang dan bergabunglah dengan komunitas Codinginaja!",
    bottom_info_title_4: "Daftar Pengembang",
    
    product_details: [
        {id: 3, info: "Tanggal : ", details: "12 Maret 2024"},
    ],

    materials: [
        {id: 1, icon: "fas fa-file-pdf", title: "Panduan E-Learning"},
    ]

}
const { title, des_1, des_2, des_3, des_4, des_5, over_veiw_list ,over_veiw_list_2, over_veiw_list_3, bottom_info_title, bottom_info_title_2, bottom_info_title_3,  bottom_info_title_4, product_details, materials, } = portfolio_content

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
                                <p>{des_1}</p>
                                <p>{des_2}</p>
                                <div className="tp-overview-fea-list">
                                    <div className="tp-bottom-info pt-20" style={{ textAlign: 'justify' }}>
                                    <h4>{bottom_info_title}</h4>
                                    <ul style={{ listStyleType: 'disc' }}>
                                        {over_veiw_list.map(item => (
                                        <li key={item.id}><span>&#9679;</span>{item.li}</li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                                <div className="tp-overview-fea-list">
                                    <div className="tp-bottom-info pt-20" style={{ textAlign: 'justify' }}>
                                    <h4>{bottom_info_title_2}</h4>
                                    <ul style={{ listStyleType: 'disc' }}>
                                        {over_veiw_list_2.map(item => (
                                            <li key={item.id}><span>&#9679;</span> {item.li}</li>
                                        ))}
                                    </ul>
                                    <p><strong>{des_3}<br />
                                    {des_4} <br />
                                    </strong></p>
                                    <ul className="disc-3 pb-20" style={{ listStyleType: 'disc' }}>
                                        {over_veiw_list_3.map(item => (
                                            <li key={item.id}><span>&#9679;</span>{item.li}</li>
                                        ))}
                                    </ul>
                                    <h4>{bottom_info_title_3} <a href="" style={{ textDecoration: 'underline'}}><h4></h4>{bottom_info_title_4}</a></h4>
                                    </div>
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