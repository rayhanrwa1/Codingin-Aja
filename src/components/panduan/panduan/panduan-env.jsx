import CallToAction from '@/src/forms/call-to-action';
import React from 'react';


const portfolio_content = {

    title: "Penjelasan Lengkap Reset Password",

    des_1: <>Reset Password ini hanya dapat digunakan untuk akun yang dibuat secara langsung di platform ini. Jika Anda login menggunakan akun Google atau Github, proses reset password berbeda dan harus dilakukan melalui platform masing-masing.</>,
    des_2: <>Akun Google dan Github terintegrasi dengan sistem keamanan mereka sendiri, sehingga proses reset passwordnya terpisah dari platform ini.</>,
    des_3: <>Proses reset password untuk akun Google dan Github berbeda dengan akun yang dibuat langsung di platform ini. Pastikan Anda mengikuti langkah-langkah yang tepat untuk platform yang Anda gunakan.</>,


    // over-veiw-list
    over_veiw_list: [
        {id: 1, li: "Kunjungi halaman pemulihan akun Google: https://support.google.com/accounts/answer/7682439?hl=en"},
        {id: 2, li: "Masukkan alamat email atau nomor telepon yang terkait dengan akun Google Anda."},
        {id: 3, li :"Ikuti petunjuk di layar untuk menyelesaikan proses pemulihan akun, termasuk verifikasi identitas dan pengaturan password baru."},
    ],
    over_veiw_list_2: [
        {id: 1, li: "Kunjungi halaman pemulihan password Github: https://github.com/password_reset"},
        {id: 2, li: "Masukkan alamat email yang terkait dengan akun Github Anda."},
        {id: 3, li :"Klik Reset password dan ikuti petunjuk di email yang Anda terima, termasuk tautan untuk reset password dan verifikasi identitas.a"},
    ],
    over_veiw_list_3: [
        {id: 1, li: "Pastikan Anda menggunakan alamat email yang benar saat mencoba memulihkan akun Anda."},
        {id: 2, li: "Jika Anda tidak dapat mengakses alamat email yang terdaftar, Anda mungkin perlu menghubungi tim dukungan Google atau Github untuk mendapatkan bantuan lebih lanjut."},
        {id: 3, li :"Untuk meningkatkan keamanan akun Anda di masa depan, Anda disarankan untuk mengaktifkan autentikasi dua faktor (2FA). 2FA menambahkan lapisan keamanan tambahan dengan meminta kode verifikasi dari perangkat Anda saat login."},
    ],
    overview: <>Kebijakan Privasi ini terakhir diperbarui pada 12 Maret 2024.</>,

    bottom_info_title: "Penggunaan Reset Password:",
    bottom_info_title_2: "Alasan Perbedaan:",
    bottom_info_title_3: "Langkah-langkah Reset Password untuk Akun Google:",
    bottom_info_title_4: "Langkah-langkah Reset Password untuk Akun Github:",
    bottom_info_title_5: "Informasi Tambahan:",
    bottom_info_title_6: "Keamanan Data",
    bottom_info_title_7: "Hak Anda",

    product_details: [
        {id: 3, info: "Tanggal : ", details: "12 Maret 2024"},
    ],

    materials: [
        {id: 1, icon: "fas fa-file-pdf", title: "Penggunaan Reset Password"},
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
                                    <ul style={{ listStyleType: 'disc' }}>
                                        {over_veiw_list.map(item => (
                                        <li key={item.id}><span>&#9679;</span>{item.li}</li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                                <div className="tp-overview-fea-list">
                                    <div className="tp-bottom-info pt-20">
                                    <h4>{bottom_info_title_4}</h4>
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
                                    <ul className="disc-3 pb-20" style={{ listStyleType: 'disc' }}>
                                        {over_veiw_list_3.map(item => (
                                            <li key={item.id}><span>&#9679;</span>{item.li}</li>
                                        ))}
                                    </ul>
                                    <strong>{des_3}</strong>
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