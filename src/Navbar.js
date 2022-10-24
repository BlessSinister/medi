import React from "react";
import logo from './img/header_logo.png'
import menu from './img/header_menu_btn.png'
import eyeIcon from './img/header_eye_icon.png'
import vkIcon from './img/header_vk_icon.png'
import youtubeIcon from './img/header_youtube_icon.png'
import fbIcon from './img/header_fb_icon.png'
import instaIcon from './img/header_instagram_icon.png'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="container">
                <div className="navbar-wrapper">
                    <div className="navbar-wrapper-block1">
                        <div className="header-elem-position">
                            <img src={logo} alt="" />
                        </div>
                        <div className="header-elem-position">
                            <p className="">+7 (123) 456 78 90</p>
                        </div>
                        <div className="header-elem-position">
                            <p>Наши салоны</p>
                            <img src={menu} alt="" />
                        </div>
                        <div className="header-elem-position weak-eyes-width">
                            <div className="header-weak-eyes-btn">
                                <div className="header-eye-decoration">
                                    <img src={eyeIcon} alt="" />
                                </div>
                                <p>ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ</p>
                            </div>
                        </div>
                        <div className="header-elem-position social-width">
                            <img src={vkIcon} alt="" />
                        </div>
                        <div className="header-elem-position social-width">
                            <img src={youtubeIcon} alt="" />
                        </div>
                        <div className="header-elem-position social-width">
                            <img src={fbIcon} alt="" />
                        </div>
                        <div className="header-elem-position social-width">
                            <img src={instaIcon} alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar