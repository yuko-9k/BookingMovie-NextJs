import React, { Component } from 'react';
import Location from './dropdownItemLocation';
import {useSelector,useDispatch} from 'react-redux';

export default function Navbar() {
   const openNav = ()=>{
        document.getElementById('mobile_menu_canvas').style.width ='30%',
        document.getElementById("mobile_menu_canvas").style.opacity = "1",
        document.getElementById("moblie_menu").style.right = "0"
    }
   const closeNav=()=>{
        document.getElementById("moblie_menu").style.right = "-70%";
        document.getElementById("mobile_menu_canvas").style.opacity = "0";
        document.getElementById("mobile_menu_canvas").style.width = "0";
    }
    const location = useSelector(state=>state.LocationState.location);
    const renderListLocation = () =>{
        const listLocation = useSelector(state=>state.LocationState.listLocation);
        return listLocation.map((location)=>{
           return <Location key={location.stt} location={location}/>
        });
    }
    return (
        <header>
        <div className="header_nav_bar">
            <nav className="header_menu">
                <div className="header_logo">
                    <a href="/home"> <img src="../img/logo/web-logo.png" alt="logo"/></a>
                </div>
                <button className="menu_option" type="menu"  onClick={openNav}>
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
                            <span>{location.city}</span>
                        </div>
                        <div className="dropdown-menu">
                            {renderListLocation()}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div id="mobile_menu_canvas" className="overlay" onClick={closeNav}></div>
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
                        <img className="button_close_sidepanel" src="../img/Icon/next-session.png"  onClick={closeNav} />
                    </li>
                    <li>
                        <a href="#" onClick={closeNav}>Lịch Chiếu</a>
                    </li>
                    <li>
                        <a href="#">Cụm rạp</a>
                    </li>
                    <li>
                        <a href="#news_tix" onClick={closeNav}>Tin Tức</a>
                    </li>
                    <li>
                        <a href="#app_tix" onClick={closeNav}>Ứng dụng</a>
                    </li>
                    <li>
                        <a href="#" data-toggle="modal" data-target="#modal-locaition">{location.city}</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="modal" id="modal-locaition">
            <div className="modal-dialog modal-location_tix">
                <div className="modal-content">
                    {/* Modal body */}
                    <div className="modal-body">
                         {renderListLocation()}
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}