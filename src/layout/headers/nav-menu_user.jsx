import Link from "next/link";
import React from "react";
import menu_data from "./menu-data_user";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item) => (
          <li key={item.id} className={item.has_dropdown ? "has-dropdown" : ""}>
            <Link href={item.link}>{item.title}</Link>{" "}
            {item.sub_menus && 
            <ul className="submenu">
              {item.sub_menus.map((sub, i) => (
                <li key={`${item.id}_${i}`}>
                  <Link href={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
