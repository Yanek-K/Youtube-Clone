import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'

function Header () {
    return (
        <div className = "header">
            <div className= 'header__left'>
                <MenuIcon />
                <img 
                    className = 'header__logo'
                    src = 'https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg'  
                    alt = 'Youtube Logo' 
                />
            </div>

            <div className='header__input'>
                <input text='text' placeholder="Search" />
                <SearchIcon className = "header__inputButton"/>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar 
                    alt='Genie'
                    src= './img/genie.png'
                    />
            </div>
        </div>
    )
}

export default Header