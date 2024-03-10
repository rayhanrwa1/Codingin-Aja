import SocialLinks from '@/src/common/social-links';
import Link from 'next/link';
import React from 'react';
import MobileMenus from './mobile-menus';

const Sidebar = ({isOpen, setIsOpen}) => {
    return (
        <>
            <div className={`tp-sidebar-menu ${isOpen && "sidebar-opened"}`}>
                <button className="sidebar-close"><i className="fal fa-times"></i></button>
                <div onClick={() => setIsOpen(false)} className="side-logo mb-20">
                    <Link href="/"><img src="/assets/img/logo/logo.svg" alt="logo" /></Link>
                </div>
                <div className="mobile-menu mean-container">
                    <MobileMenus />
                    <div className="sidebar-title">
                    </div>
                    <ul className="sidebar-list">
                        <li>Senin – Jumat: 8.00 – 20.00</li>
                        <li>Sabtu – Minggu: 9.00 – 18.00</li>
                        <li>+62 851 6172 4229</li>
                    </ul>
                    <div className="tp-sidebar-social">
                        <SocialLinks />  
                    </div>
                </div>
            </div>
            <div onClick={() => setIsOpen(false)} className={`body-overlay ${isOpen && "opened"}`}></div>
        </>
    );
};

export default Sidebar;