import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class Navbar extends Component {
    openNav (){
            document.getElementById('mobile_menu_canvas').style.width ='30%',
            document.getElementById("mobile_menu_canvas").style.opacity = "1",
            document.getElementById("moblie_menu").style.right = "0"
    }
    closeNav(){
        document.getElementById("moblie_menu").style.right = "-70%";
        // document.getElementById("moblie_menu").style.width = "0";
        document.getElementById("mobile_menu_canvas").style.opacity = "0";
        document.getElementById("mobile_menu_canvas").style.width = "0";
    }
    render() {
        return (
            <header>
                <div className="header_nav_bar">
                    <nav className="header_menu">
                        <div className="header_logo">
                            <a href="/home"> <img src="../img/logo/web-logo.png" alt="logo"/></a>
                        </div>
                        <button className="menu_option" type="menu"  onClick={this.openNav}>
                            <span><img src="../img/Icon/menu-options.png" alt="menuIcon" /></span>
                        </button>
                        <div className="header_menu_mid">
                            <ul className="menu_items">
                                <li className="menu_item_link">
                                    <a href="#movie_schedule_tix">Lịch Chiếu</a>
                                </li>
                                <li className="menu_item_link">
                                    <a href="#cinema_block_tix">Cụm rạp</a>
                                </li>
                                <li className="menu_item_link">
                                    <a href="#news_tix">Tin Tức</a>
                                </li>
                                <li className="menu_item_link">
                                    <a href="#app_tix">Ứng dụng</a>
                                </li>
                            </ul>
                        </div>
                        <div className="header_menu_right">
                            <div className="header_login">
                                <img src="../img/Icon/avatar.png" alt="avatar" />
                                <span>Đăng Nhập</span>
                            </div>
                            <div className="dropdown dropdown_place_header">
                                <img className="place-header" src="../img/Icon/location-header.png" alt="Icon" />
                                <div className="select-menu" data-toggle="dropdown">
                                    <span>Hồ Chí Minh</span>
                                </div>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Hồ Chí Minh</a>
                                    <a className="dropdown-item" href="#">Hà Nội</a>
                                    <a className="dropdown-item" href="#">Đà Nẵng</a>
                                    <a className="dropdown-item" href="#">Hải Phòng</a>
                                    <a className="dropdown-item" href="#">Biên Hoà</a>
                                    <a className="dropdown-item" href="#">Nha Trang</a>
                                    <a className="dropdown-item" href="#">Bình Dương</a>
                                    <a className="dropdown-item" href="#">Phan Thiết</a>
                                    <a className="dropdown-item" href="#">Hạ Long</a>
                                    <a className="dropdown-item" href="#">Cần Thơ</a>
                                    <a className="dropdown-item" href="#">Vũng Tàu</a>
                                    <a className="dropdown-item" href="#">Quy Nhơn</a>
                                    <a className="dropdown-item" href="#">Huế</a>
                                    <a className="dropdown-item" href="#">Long Xuyên</a>
                                    <a className="dropdown-item" href="#">Buôn Ma Thuột</a>
                                    <a className="dropdown-item" href="#">Bắc Giang</a>
                                    <a className="dropdown-item" href="#">Bến Tre</a>
                                    <a className="dropdown-item" href="#">Việt Trì</a>
                                    <a className="dropdown-item" href="#">Ninh Bình</a>
                                    <a className="dropdown-item" href="#">Thái Bình</a>
                                    <a className="dropdown-item" href="#">Vinh</a>
                                    <a className="dropdown-item" href="#">Bảo Lộc</a>
                                    <a className="dropdown-item" href="#">Đà Lạt</a>
                                    <a className="dropdown-item" href="#">Trà Vinh</a>
                                    <a className="dropdown-item" href="#">Yên Bái</a>
                                    <a className="dropdown-item" href="#">Kiên Giang</a>
                                    <a className="dropdown-item" href="#">Vĩnh Long</a>
                                    <a className="dropdown-item" href="#">Cà Mau</a>
                                    <a className="dropdown-item" href="#">Hậu Giang</a>
                                    <a className="dropdown-item" href="#">Tây Ninh</a>
                                    <a className="dropdown-item" href="#">Tuyên Quang</a>
                                    <a className="dropdown-item" href="#">Thanh Hóa</a>
                                    <a className="dropdown-item" href="#">Nam Định</a>
                                    <a className="dropdown-item" href="#">Hải Dương</a>
                                    <a className="dropdown-item" href="#">Gia Lai</a>
                                    <a className="dropdown-item" href="#">Hà Tĩnh</a>
                                    <a className="dropdown-item" href="#">Phú Yên</a>
                                    <a className="dropdown-item" href="#">Bạc Liêu</a>
                                    <a className="dropdown-item" href="#">Long An</a>
                                    <a className="dropdown-item" href="#">Đồng Hới</a>
                                    <a className="dropdown-item" href="#">Hà Nam</a>
                                    <a className="dropdown-item" href="#">Bắc Ninh</a>
                                    <a className="dropdown-item" href="#">Quảng Trị</a>
                                    <a className="dropdown-item" href="#">Kon Tum</a>
                                    <a className="dropdown-item" href="#">Sóc Trăng</a>
                                    <a className="dropdown-item" href="#">Sơn La</a>
                                    <a className="dropdown-item" href="#">Lạng Sơn</a>
                                    <a className="dropdown-item" href="#">Quảng Ngãi</a>
                                    <a className="dropdown-item" href="#">Mỹ Tho</a>
                                    <a className="dropdown-item" href="#">Đồng Tháp</a>
                                    <a className="dropdown-item" href="#">Hưng Yên</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div id="mobile_menu_canvas" className="overlay" onClick={this.closeNav}></div>
                <div id="moblie_menu" className="sidepanel">
                    <nav>
                        <ul>
                            <li className="sidepanel_frist_item">
                                <a href="#">
                                    <div className="header_login">
                                        <img className="avata" src="../img/Icon/avatar.png" alt='avatar' />
                                        <span>Đăng Nhập</span>
                                    </div>
                                </a>
                                <img className="button_close_sidepanel" src="../img/Icon/next-session.png"  onClick={this.closeNav} />
                            </li>
                            <li>
                                <a href="#" onClick={this.closeNav}>Lịch Chiếu</a>
                            </li>
                            <li>
                                <a href="#">Cụm rạp</a>
                            </li>
                            <li>
                                <a href="#news_tix" onClick={this.closeNav}>Tin Tức</a>
                            </li>
                            <li>
                                <a href="#app_tix" onClick={this.closeNav}>Ứng dụng</a>
                            </li>
                            <li>
                                <a href="#" data-toggle="modal" data-target="#modal-locaition">Local</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="modal" id="modal-locaition">
                    <div className="modal-dialog modal-location_tix">
                        <div className="modal-content">
                            {/* Modal body */}
                            <div className="modal-body">
                                <a className="dropdown-item" href="#">Hồ Chí Minh</a>
                                <a className="dropdown-item" href="#">Hà Nội</a>
                                <a className="dropdown-item" href="#">Đà Nẵng</a>
                                <a className="dropdown-item" href="#">Hải Phòng</a>
                                <a className="dropdown-item" href="#">Biên Hoà</a>
                                <a className="dropdown-item" href="#">Nha Trang</a>
                                <a className="dropdown-item" href="#">Bình Dương</a>
                                <a className="dropdown-item" href="#">Phan Thiết</a>
                                <a className="dropdown-item" href="#">Hạ Long</a>
                                <a className="dropdown-item" href="#">Cần Thơ</a>
                                <a className="dropdown-item" href="#">Vũng Tàu</a>
                                <a className="dropdown-item" href="#">Quy Nhơn</a>
                                <a className="dropdown-item" href="#">Huế</a>
                                <a className="dropdown-item" href="#">Long Xuyên</a>
                                <a className="dropdown-item" href="#">Buôn Ma Thuột</a>
                                <a className="dropdown-item" href="#">Bắc Giang</a>
                                <a className="dropdown-item" href="#">Bến Tre</a>
                                <a className="dropdown-item" href="#">Việt Trì</a>
                                <a className="dropdown-item" href="#">Ninh Bình</a>
                                <a className="dropdown-item" href="#">Thái Bình</a>
                                <a className="dropdown-item" href="#">Vinh</a>
                                <a className="dropdown-item" href="#">Bảo Lộc</a>
                                <a className="dropdown-item" href="#">Đà Lạt</a>
                                <a className="dropdown-item" href="#">Trà Vinh</a>
                                <a className="dropdown-item" href="#">Yên Bái</a>
                                <a className="dropdown-item" href="#">Kiên Giang</a>
                                <a className="dropdown-item" href="#">Vĩnh Long</a>
                                <a className="dropdown-item" href="#">Cà Mau</a>
                                <a className="dropdown-item" href="#">Hậu Giang</a>
                                <a className="dropdown-item" href="#">Tây Ninh</a>
                                <a className="dropdown-item" href="#">Tuyên Quang</a>
                                <a className="dropdown-item" href="#">Thanh Hóa</a>
                                <a className="dropdown-item" href="#">Nam Định</a>
                                <a className="dropdown-item" href="#">Hải Dương</a>
                                <a className="dropdown-item" href="#">Gia Lai</a>
                                <a className="dropdown-item" href="#">Hà Tĩnh</a>
                                <a className="dropdown-item" href="#">Phú Yên</a>
                                <a className="dropdown-item" href="#">Bạc Liêu</a>
                                <a className="dropdown-item" href="#">Long An</a>
                                <a className="dropdown-item" href="#">Đồng Hới</a>
                                <a className="dropdown-item" href="#">Hà Nam</a>
                                <a className="dropdown-item" href="#">Bắc Ninh</a>
                                <a className="dropdown-item" href="#">Quảng Trị</a>
                                <a className="dropdown-item" href="#">Kon Tum</a>
                                <a className="dropdown-item" href="#">Sóc Trăng</a>
                                <a className="dropdown-item" href="#">Sơn La</a>
                                <a className="dropdown-item" href="#">Lạng Sơn</a>
                                <a className="dropdown-item" href="#">Quảng Ngãi</a>
                                <a className="dropdown-item" href="#">Mỹ Tho</a>
                                <a className="dropdown-item" href="#">Đồng Tháp</a>
                                <a className="dropdown-item" href="#">Hưng Yên</a>
                            </div>
                        </div>
                    </div>
                </div>



            </header>
        )
    }
}
