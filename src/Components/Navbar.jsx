import React  from 'react'
import './css/navbar.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <div className="wrapper">
                <nav>
                    <input type="checkbox" id="show-search" />
                    <input type="checkbox" id="show-menu" />
                    <label for="show-menu" className="menu-icon"><i className="fas fa-bars"></i></label>
                    <div className="content">
                        <div className="logo"><a href="#">Flicker's</a></div>
                        <ul className="links">
                            <li><a href="/"> <i className="fa fa-home"></i> Home</a></li>
                            <li><NavLink to="/create"><i className="fa fa-id-card"></i> AddNews</NavLink></li>

                            <li>
                                <a href="#" className="desktop-link"> <i className="fa fa-chevron-circle-down"></i> Category</a>
                                <input type="checkbox" id="show-features" />
                                <label for="show-features">Category</label>
                                <ul>
                                    <li><a href="#">Sports</a></li>
                                    <li><a href="#">Political</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Technical</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="desktop-link"> <i className="fa fa-link"></i>Links</a>
                                <input type="checkbox" id="show-services"/>
                                    <label for="show-services">Services</label>
                                    <ul>
                                        <li><a href="https://www.aajtak.in/">Aaj Taj</a></li>
                                        <li><a href="https://www.infoworld.com/">InFo World</a></li>
                                        <li><a href="https://www.hindustantimes.com/">HindustanTimes</a></li>
                                        <li>
                                            <a href="#" className="desktop-link">More News Links</a>
                                            <input type="checkbox" id="show-items" />
                                            <label for="show-items">More News Links</label>
                                            <ul>
                                                <li><a href="https://www.indiatvnews.com/">India TV</a></li>
                                                <li><a href="http://zeenews.india.com/">Zee News</a></li>

                                            </ul>
                                        </li>
                                    </ul>
                             </li>

                                <li><a  href='https://flicker-web.github.io/flicker/' target="_blank"><i className="fa fa-user-tie"></i> PortFolio</a></li>
                                <li><NavLink excat to="/login"> <i className="fa fa-sign-in-alt"></i> login</NavLink></li>
                                <li><NavLink excat to="/signup"> <i className="fa fa-sign-out-alt"></i> SignUp</NavLink></li>
                            </ul>
                            </div>
                                <label for="show-search" className="search-icon"><i className="fas fa-search"></i></label>
                                    <form action="#" className="search-box">
                                        <input type="text" placeholder="Type Something to Search..." required />
                                        <button type="submit" className="go-icon"><i className="fas fa-long-arrow-alt-right"></i></button>
                                    </form>
                </nav>
                    </div>

                    
        </div>
    )
}

    export default Navbar
