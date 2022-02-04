import React from 'react';

function BackgroundVideo() {
    const videoSource = "theme.mp4";
    return (
        <>
            <video autoPlay loop muted className='videoTag' preload>
                <source src={videoSource} type='video/mp4' />
            </video>
        </>
    );
}

export default React.memo(BackgroundVideo);