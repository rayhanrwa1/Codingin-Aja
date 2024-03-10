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
      { link: "/team", title: "Pendiri kami" }, 
      { link: "/careers", title: "Karier" }, 
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Berita",
    link: "/news",
  }, 
  
];
export default menu_data;
