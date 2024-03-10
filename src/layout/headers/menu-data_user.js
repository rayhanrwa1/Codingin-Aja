const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Beranda",
    link: "/",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Perusahaan",
    link: "",
    sub_menus: [
      { link: "/about", title: "Tentang kami" }, 
      { link: "/careers", title: "Karier" }, 
    ],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Kursus",
    link: "",
  }, 
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Sertifikat",
    link: "",
  }, 
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Komunitas",
    link: "",
  }, 
  
];
export default menu_data;
