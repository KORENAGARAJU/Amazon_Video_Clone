import React, { useState, useRef, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/NavBar/logo.png';
import { FaSearch ,FaUserCircle } from 'react-icons/fa';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import SideBar from './SideBar/SideBar';

const NavBar = () => {
    const [isHomeDropDownOpen, SetHomeDropDown] = useState(false);
    const [isStoreDropDownOpen, SetStoreDropDown] = useState(false);
    const [isCategoriesDropDownOpen, SetCategoriesDropDown] = useState(false);
    const [isMyStuffDropDownOpen, SetStuffDropDown] = useState(false);
    const [isMyInputOpen, setInputToogle] = useState(false);

   const [isMenuOpen , setMenuToggle] = useState(false) ;
   const menuFuncHandler = () => setMenuToggle(!isMenuOpen)

    const homeFuncHandler = () => SetHomeDropDown(!isHomeDropDownOpen);
    const StoreFuncHandler = () => SetStoreDropDown(!isStoreDropDownOpen);
    const myStuffFuncHandler = () => SetStuffDropDown(!isMyStuffDropDownOpen);
    const categoriesFuncHandler = () => SetCategoriesDropDown(!isCategoriesDropDownOpen);
    const InputFuncHandler = () => setInputToogle(!isMyInputOpen);

    // search Bar Toggle
    const searchRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setInputToogle(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchRef]);

    return (
        
       <>
        <nav className='Nav-bar'>
                <div className='nav-wrapper'>
                    <div className='nav-list-item menu-bar' style={{position:'relative'}} >
                        <Link style={{ textDecoration: 'none', color: 'white' }} onClick={menuFuncHandler}>
                            Menu
                        </Link>
                        <MdOutlineKeyboardArrowUp className='up-arrow' />
                        {isMenuOpen && (<SideBar/>)}
                    </div>
                    <div className='logo'>
                        <Link to='/'><img src={Logo} alt='logo' style={{ width: '100px', paddingTop: '4px' }} /></Link>
                    </div>
                    <ul className='ul-flex'>
                        <div className='home dropDownHeader' onMouseEnter={homeFuncHandler} onMouseLeave={homeFuncHandler}>
                            <li className='nav-list-item'>
                                <Link to='/' className='Nav-Link'>Home</Link>
                                <MdOutlineKeyboardArrowUp className='up-arrow' />
                            </li>
                            {isHomeDropDownOpen && (
                                <ul className='dropdown'>
                                    <li><Link className='dropDown-links' to='/all'>All</Link></li>
                                    <li><Link className='dropDown-links' to='/moives'>Moives</Link></li>
                                    <li><Link className='dropDown-links' to='/tv-shows'>TV Shows</Link></li>
                                </ul>
                            )}
                        </div>

                        <div className='store dropDownHeader' onMouseEnter={StoreFuncHandler} onMouseLeave={StoreFuncHandler}>
                            <li className='nav-list-item'>
                                <Link to='/store' className='Nav-Link'>Store</Link>
                                <MdOutlineKeyboardArrowUp className='up-arrow' />
                            </li>
                            {isStoreDropDownOpen && (
                                <ul className='dropdown'>
                                    <li><Link className='dropDown-links' to='/all'>All</Link></li>
                                    <li><Link className='dropDown-links' to='/moives'>Rent</Link></li>
                                    <li><Link className='dropDown-links' to='/tv-shows'>Channels</Link></li>
                                </ul>
                            )}
                        </div>

                        <li className=' dropDownHeader'>
                            <Link to='/Live TV ' className='Nav-Link'>Live TV</Link>
                        </li>

                        <div className='Categories dropDownHeader' onMouseEnter={categoriesFuncHandler} onMouseLeave={categoriesFuncHandler}>
                            <li className='nav-list-item'>
                                <Link to='/Categories' className='Nav-Link'>Categories</Link>
                                <MdOutlineKeyboardArrowUp className='up-arrow' />
                            </li>
                            {isCategoriesDropDownOpen && (
                                <div className='categoriesWrapper'>
                                    <div className='GenresWrapper'>
                                        <h2 style={{ fontSize: '18px' }}>Genres</h2>
                                        <div className='GenresListWrapper'>
                                            <ul className='c-1 Genres-ul'>
                                                <li className='Genres-li'><Link className='Genres-link'>Action and adventure</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Anime</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Comedy</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Documentary</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Drama</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Fantasy</Link></li>
                                            </ul>
                                            <ul className='c-1 Genres-ListItems'>
                                                <li className='Genres-li'><Link className='Genres-link'>Action and adventure</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Anime</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Comedy</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Documentary</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Drama</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Fantasy</Link></li>
                                            </ul>
                                        </div>
                                        {/* Feature collections */}
                                    </div>

                                    <div className='FeatureCollectionWrapper'>
                                        <h2 style={{ fontSize: '18px' }}>Feature collections</h2>
                                        <div className='GenresListWrapper'>
                                            <ul className='c-1 Genres-ul'>
                                                <li className='Genres-li'><Link className='Genres-link'>Hindi</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>English</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Telugu</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Tamil</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Malayalam</Link></li>
                                            </ul>
                                            <ul className='c-1 Genres-ListItems'>
                                                <li className='Genres-li'><Link className='Genres-link'>Kannada</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Marathi</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Punjabi</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Gujarati</Link></li>
                                                <li className='Genres-li'><Link className='Genres-link'>Bengali</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='MyStuff dropDownHeader' onMouseEnter={myStuffFuncHandler} onMouseLeave={myStuffFuncHandler}>
                            <li className='nav-list-item'>
                                <Link to='/My Stuff' className='Nav-Link'>My Stuff</Link>
                                <MdOutlineKeyboardArrowUp className='up-arrow' />
                            </li>
                            {isMyStuffDropDownOpen && (
                                <ul className='dropdown'>
                                    <li><Link className='dropDown-links' to='/all'>All</Link></li>
                                    <li><Link className='dropDown-links' to='/moives'>WishList</Link></li>
                                    <li><Link className='dropDown-links' to='/tv-shows'>Rentals</Link></li>
                                </ul>
                            )}
                        </div>
                    </ul>
                    <div className='search-Profile-wrapper'>
                        <div className='Search-logo' style={{ position: 'relative' }} ref={searchRef}>
                            <FaSearch className='search nav-common-icon' onClick={InputFuncHandler} style={{ fontSize: '25px', cursor: 'pointer', position: 'relative' }} />
                            {isMyInputOpen && (
                                <div className='Search_Input_wrapper'>
                                    <FaSearch style={{ color: 'black' }} />
                                    <input placeholder='Search' className='searchInput' />
                                </div>
                            )}
                        </div>

                        <FaUserCircle className='Profile nav-common-icon' style={{ fontSize: '25px' }} />
                    </div>
                </div>
            </nav>
            
        </>
            
        
    );
}

export default NavBar;
