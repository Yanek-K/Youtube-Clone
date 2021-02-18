import React, {useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'
import youtube from './API/youtube'

function Header () {
    const [inputSearch, setInputSearch] = useState('');

    const handleChange = (event) => {
        setInputSearch(event.target.value)
    }

    // e => setInputSearch(e.target.value)

    const handleSubmit = async (inputSearch) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 20,
                key: 'AIzaSyCZK1pOt1UekRJZ3tZnOLihmgXiDYfDrTA'
            }
        })
    
        console.log(response)
    }

    return (
        <div className = "header">
            <div className= 'header__left'>
                <MenuIcon />
                <Link to ='/'>
                    <img 
                        className = 'header__logo'
                        src = 'https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg'  
                        alt = 'Youtube Logo' 
                    />
                </Link>
                
            </div>

            <div className='header__input'  >
                    <input onChange={handleChange}  value={inputSearch} text='text' placeholder="Search" />
                    <Link to={`/search/${inputSearch}`}>
                        <SearchIcon className = "header__inputButton" onClick={handleSubmit}/>
                    </Link>
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