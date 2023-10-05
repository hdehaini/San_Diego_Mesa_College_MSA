import React from 'react'
import mesvid from '../assets/mesvid.mp4'

const main = () => {
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={mesvid} autoPlay loop muted />
        </div>
    )
}

export default main