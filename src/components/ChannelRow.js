import React from 'react'
import './ChannelRow.css'
import {Avatar} from '@material-ui/core'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({image, channel, subs, verified, description, numberOfVideos}){
    return(
        <div className="channelRow">
            <Avatar className="channelRow__logo" src={image} alt={image} />
            <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedIcon />}</h4>
                <p>{subs} subscribers . {numberOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow