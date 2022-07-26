import React, { useRef } from 'react'
import "./_header.scss"

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({ handleToggleSidebar }) => {

  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${input}`);
  }


  const photoURL = useSelector(state => state.auth?.user?.photoURL);

  const imgRef = useRef();
  const onImageError = () => imgRef.current.src = 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'



  return (
    <div className='header'>

      <FaBars className='header__menu' size={26} onClick={() => { handleToggleSidebar() }} />

      <Link to='/'>
        <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="yt-logo" className='header__logo' />
      </Link>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search' value={input} onChange={e => setInput(e.target.value)} />
        <button type='submit'>
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />

        <img src={photoURL} ref={imgRef} onError={onImageError} alt="avatar" />

      </div>


    </div>
  )
}

export default Header