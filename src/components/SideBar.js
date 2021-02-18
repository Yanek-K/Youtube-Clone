import React from 'react'
import './SideBar.css'
import SideBarRow from './SideBarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function SideBar(){
    return(
        <div className='SideBar'>
            <SideBarRow selected Icon={HomeIcon} title="Home"/>
            <SideBarRow Icon={WhatshotIcon} title="Trending"/>
            <SideBarRow Icon={SubscriptionIcon} title="Subscription"/>
            <hr />
            <SideBarRow Icon={VideoLibraryIcon} title="Library" />
            <SideBarRow Icon={HistoryIcon} title="History" />
            <SideBarRow Icon={SlideshowIcon} title="Your Videos" />
            <SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SideBarRow Icon={ThumbUpAltIcon} title="Liked Videos" />
            <SideBarRow Icon={ExpandMoreIcon} title="Show More" />
        </div>
    )
}

export default SideBar