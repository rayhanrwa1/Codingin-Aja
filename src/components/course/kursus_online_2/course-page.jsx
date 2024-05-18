import { faUnderline } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Swal from 'sweetalert2';
import course from '@/src/data/course-online';


const TextElement = {

    over_veiw_list: [
        {id: 1, li: "Maksimal 10 orang per kelas, jaminan interaksi optimal dengan instruktur dan sesama peserta."},
        {id: 2, li: "Dapatkan penjelasan detail dan solusipengasahan masalah langsung dari instruktur."},
        {id: 3, li: "Materi disusun secara bertahap, membawamu dari nol hingga mahir coding dengan percaya diri."},
        {id: 4, li: "Asah skill coding secara nyata dengan mengerjakan project coding seru dan menantang."},
        {id: 5, li: " Bergabunglah dengan komunitas supportif untuk saling belajar, berbagi pengalaman, dan membangun jejaring."},
    ]

}
 
const{over_veiw_list} = TextElement

const handleCourseClick = (e, item) => {
    e.preventDefault();
    if (item.id !== 1) { // Menampilkan alert hanya untuk kursus selain Pemrograman Dasar C
        Swal.fire({
            icon: "warning",
            title: "Belum Membayar",
            text: "Anda belum membayar kursus ini. Silakan lakukan pembayaran terlebih dahulu.",
            footer: '<a href="#">Butuh Bantuan?</a>'
        });
    }
};

const CourseOnlinePage = () => {

    return (
        <>
          <div className="tp-about-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="ab-wrapper-4 p-relative">
                                <div className="ab-right-img mb-10">
                                    <img src="/assets/img/course/courseOnline.svg" alt="theme-pure" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="tp-about-info-wrapper pl-50">
                                <div className="tp-section-box tp-section-box-2  p-relative">
                                    <h2 className="tp-section-title mb-10">
                                        Kelas Online
                                    </h2>
                                    <p style={{textAlign: 'justify'}}>   
                                    Dunia digital berkembang pesat, dan keahlian coding menjadi senjata ampuh untuk meraih masa depan gemilang.  CodinginAja dengan bangga mempersembahkan Kelas Online, program belajar coding interaktif bersama instruktur berpengalaman.         
                                    </p>
                                </div>
                                <hr className="mt-5 mb-10" />
                            </div>
                            <div className="tp-about-info-wrapper pl-50">
                                <div className="tp-section-box tp-section-box-2  p-relative">
                                    <h3 className="tp-element-title mb-10">
                                    Kenapa memilih Kelas Online?
                                    </h3>
                                    <ul style={{ textAlign: 'justify', listStyleType: 'disc' }}>
                                        {over_veiw_list.map(item => (
                                            <li key={item.id}><span>&#9679;</span> {item.li}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="tp-about-info-wrapper pl-50 pt-20">
                                <div className="tp-section-box tp-section-box-2  p-relative">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>                        
        </>
    );
};

// Fungsi untuk mengaburkan gambar
const blurImage = (imageUrl) => {
    // Implementasi logika untuk mengaburkan gambar
    // Anda dapat menggunakan teknik CSS atau library JavaScript untuk mengaburkan gambar
    return imageUrl; // Mengembalikan gambar yang diaburkan
};

export default CourseOnlinePage;
