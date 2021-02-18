import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage (){
    return(
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image='https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s900-c-k-c0x00ffffff-no-rj'
                channel="Clever Programmer"
                verified
                subs='660k'
                numberOfVideos={382}
                description="You can find awesome programming lessons here!"
            />

            <hr />

            <VideoRow
                views='1.4m'
                subs='659k'
                descrpition="Watch FREE course on making a clone NOW"
                timestamp='59 seconds ago'
                channel="Clever Programmer"
                title="Let's build a Youtube Clone"
                image="https://i.ytimg.com/vi/CNfNPDVTOlY/maxresdefault.jpg"
            />
        </div>
    )
}

export default SearchPage