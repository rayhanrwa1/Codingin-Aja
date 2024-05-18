import React from 'react';


const portfolio_content = {

    title: "Panduan E-Learning",

    des_1: <>Ingin belajar coding dengan kecepatan Anda sendiri dan sesuai jadwal Anda? Kelas E-Learning CodinginAja adalah pilihan yang tepat untuk Anda! Dengan akses penuh ke berbagai materi pembelajaran, Anda dapat menguasai keahlian coding secara mandiri dan menyesuaikannya dengan gaya belajar Anda.</>,
    des_2: <>Materi yang tersedia di E-Learning CodinginAja bervariasi tergantung pada program yang Anda pilih. Namun, secara umum, Anda akan menemukan materi-materi berikut:</>,



    // over-veiw-list
    over_veiw_list: [
        {id: 1, li: "Atur sendiri kecepatan belajar Anda. Tidak perlu mengikuti jadwal kelas yang ketat."},
        {id: 2, li: "Akses berbagai modul pembelajaran yang komprehensif, termasuk video tutorial, slide presentasi, dan kode contoh."},
        {id: 3, li: "Biaya langganan yang lebih hemat dibandingkan kelas online privat."},
        {id: 4, li: "Belajar kapan saja dan di mana saja, selama Anda memiliki koneksi internet."},
        {id: 5, li: "Tes pemahaman Anda dengan kuis online dan kerjakan latihan coding untuk mengasah kemampuan."},
    ],
    over_veiw_list_2: [
        {id: 1, li: "Karena tidak adanya jadwal kelas dan instruktur langsung, Anda dituntut untuk memiliki kedisiplinan belajar yang tinggi."},
        {id: 2, li: "E-Learning mengharuskan Anda untuk bisa memotivasi diri sendiri dalam belajar."},
        {id: 3, li :"Anda perlu mampu memecahkan masalah yang dihadapi secara mandiri saat belajar."},
    ],
    over_veiw_list_3: [
        {id: 1, li: "Pengenalan bahasa pemrograman, variabel, operator, control flow, dan lainnya."},
        {id: 2, li: "Pelajari cara membuat program yang terstruktur dan mudah dipahami."},
        {id: 3, li :"Materi yang lebih dalam tentang bahasa pemrograman yang dipilih, seperti fungsi, class, dan object-oriented programming (OOP)."},
        {id: 4, li :"Terapkan pengetahuan yang didapat dengan mengerjakan project coding nyata."},
    ],

    bottom_info_title: "Apa saja keuntungan E-Learning CodinginAja?",
    bottom_info_title_2: "Apa yang perlu Anda perhatikan?",
    bottom_info_title_3: "Materi apa saja yang tersedia di E-Learning CodinginAja?",
    bottom_info_title_4: "Daftar sekarang dan mulailah belajar coding!",
    bottom_info_title_5: "Semoga panduan ini membantu Anda memilih kelas yang tepat untuk kebutuhan Anda!",

    product_details: [
        {id: 3, info: "Tanggal : ", details: "12 Maret 2024"},
    ],

    materials: [
        {id: 1, icon: "fas fa-file-pdf", title: "Panduan E-Learning"},
    ]

}
const { title, des_1, des_2, over_veiw_list ,over_veiw_list_2,over_veiw_list_3, bottom_info_title, bottom_info_title_2, bottom_info_title_3, product_details, materials, } = portfolio_content

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
                                    </div>
                                </div>
                                <div className="tp-overview-fea-list">
                                    <div className="tp-bottom-info pt-20">
                                    <h4>{bottom_info_title_3}</h4>
                                    <p>{des_2}</p>
                                    <ul className="disc-3 pb-20" style={{ listStyleType: 'disc' }}>
                                        {over_veiw_list_3.map(item => (
                                            <li key={item.id}><span>&#9679;</span>{item.li}</li>
                                        ))}
                                    </ul>
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