import React from 'react';
import Swal from 'sweetalert2';
import course from '@/src/data/course-dasar';

const CoursePage = () => {
    // Simulasi data pembayaran kursus
    const paidCourses = [1]; // Kursus dengan id 1 (C) gratis

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

    const handleTitleClick = (e, item) => {
        e.preventDefault();
        if (!paidCourses.includes(item.id)) {
            Swal.fire({
                icon: "warning",
                title: "Belum Membayar",
                text: "Anda belum membayar kursus ini. Silakan lakukan pembayaran terlebih dahulu.",
                footer: '<a href="#">Butuh Bantuan?</a>'
            });
        } else {
            window.location.href = item.link;
        }
    };

    return (
        <>
            <div className="service-area pt-120 pb-55">
                <div className="container">
                    <h1 className="title pb-20">Kelas E-Learning</h1>
                    <p className="title pb-20">Tenang, kamu datang ke tempat yang tepat! Di halaman ini, kamu akan menemukan kursus e-learning yang dirancang khusus untuk membantu kamu memulai perjalananmu di dunia pemrograman. <a href="/panduan_elearning" style={{ textDecoration: 'underline' }}> Baca Selengkapnya</a> </p>
                    <div className="row">
                    {course.map((item, i) => (
                        <div key={i} className={`col-lg-4 col-md-6 pr-10 locked`}>
                            <div className="tpservices">
                                <div className="tpservices__thumb">
                                    <div className="fix">
                                        <a href="#" onClick={(e) => handleCourseClick(e, item)} 
                                            style={{ cursor: item.id === 1 ? 'auto' : 'not-allowed' }} 
                                            aria-disabled={item.id === 1 ? 'false' : 'true'}>
                                            <img src={blurImage(item.img)} alt="theme-pure" />
                                        </a>
                                    </div>
                                </div>
                                <div className="tpservices__content"> 
                                    <h3 className="tpservices__title pt-20">
                        
                                        <a href="#" onClick={(e) => handleTitleClick(e, item)} 
                                            style={{ pointerEvents: 'auto' }}>
                                            {item.title}
                                        </a>
                                    </h3>
                                    <ul>
                                        {typeof item.description === 'string' && item.description.split('\n').map((point, index) => (
                                            point.trim() && <li key={index}>{point.trim()}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        ))}
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

export default CoursePage;
