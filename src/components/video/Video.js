import React from 'react'
import './_video.scss'

import { AiFillEye } from 'react-icons/ai';

const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="https://i.ytimg.com/vi/7iSZ4rPycS0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCmLfpEjJriTV1nLaVDytLQZesybw" alt="" />
                <span>05:43</span>

            </div>

            <div className="video__title">
                Create React app in 5 minutes by Chintu
            </div>

            <div className="video__details">
                <span>
                    <AiFillEye /> 5m Views •
                </span>

                <span>5 days ago</span>
            </div>

            <div className="video__channel">
                <img src="	https://yt3.ggpht.com/ytc/AKedOLTwYT55shR-P0OcljULUS9_2EjP90sb8wz3SQMg=s68-c-k-c0x00ffffff-no-rj" alt="" />
                <p>Rainbow Hat Jr</p>
            </div>
        </div>
    )
}

export default Video