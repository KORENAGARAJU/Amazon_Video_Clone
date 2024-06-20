import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { FaStore } from 'react-icons/fa6';
import { MdLiveTv, MdOutlineKeyboardArrowUp , MdOutlineOndemandVideo } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';

import './SideBar.css';

const SideBar = () => {
    const [menuCategoriesdropDownOpen , SetMenuCategoriesDropDown] = useState(false) ;
    const SetMenuHandler = ()=>SetMenuCategoriesDropDown(!menuCategoriesdropDownOpen) ;
  return (
    <div className='menu_content-Wrapper'>
      <ul className='Menu_Content_ul'>
        <li className='home menu_listItem'>
          <Link className='Menu_link_flex' to='/home'>
            <FiHome className='menu-icons' />
            <p>Home</p>
          </Link>
        </li>
        <li className='store menu_listItem'>
          <Link className='Menu_link_flex' to='/store'>
            <FaStore className='menu-icons' />
            <p>Store</p>
          </Link>
        </li>
        <li className='liveTV menu_listItem'>
          <Link className='Menu_link_flex' to='/live-TV'>
            <MdLiveTv className='menu-icons' />
            <p>Live TV</p>
          </Link>
        </li>
        <li className='categoires menu_listItem' onMouseEnter={SetMenuHandler} onMouseLeave={SetMenuHandler}>
          <Link className='Menu_link_flex' to='/live-TV'>
            <BiCategory className='menu-icons' />
            <p>Categories</p>
            <MdOutlineKeyboardArrowUp className='categoriesIcon menu-icons' />
          </Link>
         {menuCategoriesdropDownOpen && ( <div className='Categoies_wrapper-dropDown'>
            <div className='data-1 catego_wrapper'>
            <h2 style={{ fontSize: '16px' }}>Genres</h2>
            <div className='menu_categories_dropDown'>
              <ul className='Menu_ul'>
                <li className='menu_drop-li'><Link className='menu-links'>Action and adventure</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Anime</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Comedy</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Documentary</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Drama</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Fantasy</Link></li>
              </ul>
              <ul className='Menu_Ul'>
                <li className='menu_drop-li'><Link className='menu-links'>Horror</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Kids</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Mystery and thrillers</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Romance</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Science fiction</Link></li>
              </ul>
            </div>
            </div>
            
            {/* Feature collection */}
            <div className='data_2 catego_wrapper'>
            <h2 style={{ fontSize: '16px' }}>Feature collections</h2>
            <div className='menu_categories_dropDown'>
              <ul className='Menu_ul'>
                <li className='menu_drop-li'><Link className='menu-links'>Hindi</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>English</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Telugu</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Tamil</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Malayalam</Link></li>
              </ul>
              <ul className='c-1 menu_drop-listItems'>
                <li className='menu_drop-li'><Link className='menu-links'>Kannada</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Marathi</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Punjabi</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Gujarati</Link></li>
                <li className='menu_drop-li'><Link className='menu-links'>Bengali</Link></li>
              </ul>
            </div>
          </div>
          {/* end */}
          </div>)}
        </li>
        <li className='home menu_listItem'>
          <Link className='Menu_link_flex' to='/myStuff'>
            <MdOutlineOndemandVideo  className='menu-icons' />
            <p>My Stuff</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
