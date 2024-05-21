import React from 'react'
import '../Styles/Header.css';
import { BsBarChartLine, BsJustify } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
    return (
        <React.Fragment>
            <header className="header">
                <div className="header-wrap">
                    <div className="logo-wrap">
                        <div className="earth-logo">
                            <div className="earth-inner">
                                <img alt="LOGO" src={require('../assets/main-logo.jpg')} className="header-earth-icon"/>
                            </div>
                        </div>
                        <div className="logo">
                            <h1>Graph Generator</h1>
                            <BsBarChartLine color='black' size="40px"/>
                        </div>
                    </div>
                    <div className='search-noti-icon-wrapper'>
                    <input class="search__input" type="text" placeholder="Search"></input>
                    <IoIosNotificationsOutline className='notification-icon' size={"40px"} color='turquoise'/>
                    <BsJustify className='hamburger-icon' size="40px"/>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
