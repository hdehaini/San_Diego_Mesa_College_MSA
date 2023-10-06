import React from 'react'
import mesvid from '../assets/mesvid.mp4'

const Main = () => {
    return (
        <div className='Main'>
            <div className="overlay"></div>
            <video src={mesvid} autoPlay loop muted />
        </div>
    )
}

export default Main