import React from 'react'
import "./_header.scss"

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'


const Header = ({ handleToggleSidebar }) => {
  return (
    <div className='header'>

      <FaBars className='header__menu' size={26} onClick={() => { handleToggleSidebar() }} />

      <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="yt-logo" className='header__logo' />

      <form >
        <input type="text" placeholder='Search' />
        <button type='submit'>
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />

        <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="avatar" />
      </div>


    </div>
  )
}

export default Header