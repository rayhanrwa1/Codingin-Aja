const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Beranda",
    link: "/",
    sub_menus: [
      { link: "/news", title: "Berita" }, 
      { link: "/about", title: "Tentang Kami" }, 
     
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Kursus",
    link: "",
    sub_menus: [
      { link: "/course", title: "E-Learning" }, 
      { link: "/course-online_2", title: "Online" }, 
      { link: "/langganan", title: "Langganan" }, 
    ],
  }, 
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Sertifikat",
    link: "",
  }, 
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Event",
    link: "",
  }, 
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Komunitas",
    link: "",
    sub_menus: [
      { link: "/komunitas_pengembang", title: "Pengembang" }, 
      { link: "", title: "Kontribusi" }, 
      { link: "", title: "Proyek" }, 
    ],
  }, 
];
export default menu_data;
